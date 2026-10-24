#!/usr/bin/env node
/**
 * Mad Monkey Media — Portfolio Video Discovery & Thumbnail Generator
 *
 * Scans `public/videos/projects/` for browser-compatible video files,
 * generates real WebP thumbnails into `public/images/portfolio/thumbnails/`
 * using local FFmpeg + sharp (if available), and writes `src/data/portfolio-manifest.json`.
 *
 * Usage:
 *   npm.cmd run portfolio:sync
 */

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT_DIR = process.cwd();
const VIDEOS_DIR = path.join(ROOT_DIR, "public", "videos", "projects");
const THUMBS_DIR = path.join(ROOT_DIR, "public", "images", "portfolio", "thumbnails");
const MANIFEST_PATH = path.join(ROOT_DIR, "src", "data", "portfolio-manifest.json");

const SUPPORTED_VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov", ".m4v"]);

/**
 * Convert a filename into a stable, URL-safe kebab-case ID.
 */
function toStableId(filename) {
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  return base
    .toLowerCase()
    .replace(/\+/g, "-plus-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

/**
 * Build a safe public URL path for a filename inside public/videos/projects/.
 */
function toPublicVideoUrl(filename) {
  // Encode each segment safely while keeping standard URL characters readable
  const encoded = encodeURIComponent(filename).replace(/%2B/gi, "+");
  return `/videos/projects/${encoded}`;
}

/**
 * Extract a suggested view count label from a filename if the filename contains one
 * (e.g., "4.7Million+ Views.mp4" -> "4.7M+ VIEWS", "110k+ Views.mp4" -> "110K+ VIEWS").
 * Note: Suggested only for owner review; never treated automatically as verified proof.
 */
function extractSuggestedViewsFromFilename(filename) {
  const base = path.basename(filename, path.extname(filename));
  const match =
    base.match(
      /(?:^|[^a-zA-Z0-9])(\d+(?:\.\d+)?)\s*(million|m|k|l|lakh)(\+)?(?:\s*views?\b)/i
    ) ||
    base.match(/(?:^|[^a-zA-Z0-9])(\d+(?:\.\d+)?)\s*(million|m|k|l|lakh)\+/i);
  if (!match) return null;

  const num = match[1];
  const unitRaw = match[2].toLowerCase();
  const hasPlus = base.includes("+") || Boolean(match[3]);
  const plus = hasPlus ? "+" : "";

  let unit = "";
  if (unitRaw === "million" || unitRaw === "m") unit = "M";
  else if (unitRaw === "k") unit = "K";
  else if (unitRaw === "l" || unitRaw === "lakh") unit = "L";

  return `${num}${unit}${plus} views`;
}

/**
 * Infer a conservative initial category only when the filename explicitly states the industry.
 * Ambiguous filenames default to "Other" for manual review in src/data/projects.ts.
 */
function inferInitialCategory(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes("jewellery") || lower.includes("jewelry")) {
    return "Jewellery";
  }
  if (
    lower.includes("automotive") ||
    lower.includes("detailing") ||
    lower.includes("3m-car-care") ||
    lower.includes("tvs")
  ) {
    return "Automotive";
  }
  if (lower.includes("real-estate") || lower.includes("property")) {
    return "Real Estate";
  }
  if (lower.includes("manufacturing") || lower.includes("industrial")) {
    return "Manufacturing";
  }
  if (lower.includes("personal-branding") || lower.includes("vaibhav-jain")) {
    return "Personal Branding";
  }
  return "Other";
}

/**
 * Locate an available FFmpeg binary on the system.
 */
function findFfmpegBinary() {
  if (process.env.FFMPEG_PATH && fs.existsSync(process.env.FFMPEG_PATH)) {
    return process.env.FFMPEG_PATH;
  }

  // Check system PATH
  const checkCmd = process.platform === "win32" ? "where.exe" : "which";
  const pathCheck = spawnSync(checkCmd, ["ffmpeg"], { encoding: "utf8" });
  if (pathCheck.status === 0 && pathCheck.stdout.trim()) {
    return pathCheck.stdout.trim().split(/\r?\n/)[0].trim();
  }

  // Check common Windows locations (including CapCut / WinGet / Scoop / Chocolatey)
  if (process.platform === "win32") {
    const localAppData = process.env.LOCALAPPDATA || "C:\\Users\\HP\\AppData\\Local";
    const capCutAppsDir = path.join(localAppData, "CapCut", "Apps");
    if (fs.existsSync(capCutAppsDir)) {
      const subdirs = fs
        .readdirSync(capCutAppsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
        .sort()
        .reverse();
      for (const sub of subdirs) {
        const candidate = path.join(capCutAppsDir, sub, "ffmpeg.exe");
        if (fs.existsSync(candidate)) {
          return candidate;
        }
      }
    }

    const commonWinPaths = [
      "C:\\ffmpeg\\bin\\ffmpeg.exe",
      "C:\\Program Files\\ffmpeg\\bin\\ffmpeg.exe",
      path.join(localAppData, "Microsoft", "WinGet", "Links", "ffmpeg.exe"),
    ];
    for (const candidate of commonWinPaths) {
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }
  }

  return null;
}

/**
 * Extract a frame from a video file using FFmpeg and convert it to WebP using sharp.
 * Samples multiple timestamps (1.2s, 2.4s, 0.4s, 0.1s) and picks the frame with
 * good brightness/contrast so fade-from-black intros are avoided.
 */
async function generateThumbnailForVideo(ffmpegBin, sharpMod, videoAbsPath, outputWebpPath) {
  const candidateTimestamps = ["00:00:01.20", "00:00:02.40", "00:00:00.50", "00:00:00.10"];
  const tempJpgPath = outputWebpPath.replace(/\.webp$/i, ".tmp.jpg");

  let bestBuffer = null;
  let bestScore = -1;

  for (const ts of candidateTimestamps) {
    const res = spawnSync(
      ffmpegBin,
      [
        "-y",
        "-ss",
        ts,
        "-i",
        videoAbsPath,
        "-frames:v",
        "1",
        "-q:v",
        "2",
        "-update",
        "1",
        tempJpgPath,
      ],
      { stdio: "ignore" }
    );

    if (res.status === 0 && fs.existsSync(tempJpgPath)) {
      const stat = fs.statSync(tempJpgPath);
      if (stat.size > 1024) {
        const buf = fs.readFileSync(tempJpgPath);
        if (sharpMod) {
          try {
            const stats = await sharpMod(buf).stats();
            const meanBrightness =
              (stats.channels[0].mean +
                stats.channels[1].mean +
                stats.channels[2].mean) /
              3;
            const stdDev =
              (stats.channels[0].stdev +
                stats.channels[1].stdev +
                stats.channels[2].stdev) /
              3;
            const score = meanBrightness + stdDev * 1.5;

            if (score > bestScore) {
              bestScore = score;
              bestBuffer = buf;
            }
            // If frame is clearly non-black and detailed, use it immediately
            if (meanBrightness > 28 && stdDev > 22) {
              break;
            }
          } catch {
            if (!bestBuffer) bestBuffer = buf;
          }
        } else {
          bestBuffer = buf;
          break;
        }
      }
    }
  }

  if (fs.existsSync(tempJpgPath)) {
    try {
      fs.unlinkSync(tempJpgPath);
    } catch {
      // ignore cleanup error
    }
  }

  if (!bestBuffer) {
    return { ok: false, path: null };
  }

  if (sharpMod) {
    await sharpMod(bestBuffer)
      .resize({
        width: 720,
        height: 1280,
        fit: "cover",
        position: "attention",
      })
      .webp({ quality: 82 })
      .toFile(outputWebpPath);

    return { ok: true, path: outputWebpPath };
  } else {
    const fallbackJpgPath = outputWebpPath.replace(/\.webp$/i, ".jpg");
    fs.writeFileSync(fallbackJpgPath, bestBuffer);
    return { ok: true, path: fallbackJpgPath };
  }
}

async function main() {
  console.log("=== Mad Monkey Media: Syncing Portfolio Videos & Thumbnails ===");

  if (!fs.existsSync(VIDEOS_DIR)) {
    console.warn(`[WARN] Videos folder not found at ${VIDEOS_DIR}. Creating empty directory.`);
    fs.mkdirSync(VIDEOS_DIR, { recursive: true });
  }

  fs.mkdirSync(THUMBS_DIR, { recursive: true });

  // Load existing manifest if present to preserve any existing thumbnail paths when FFmpeg is absent
  let existingManifestItems = new Map();
  if (fs.existsSync(MANIFEST_PATH)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
      if (Array.isArray(parsed.items)) {
        for (const item of parsed.items) {
          existingManifestItems.set(item.filename, item);
        }
      }
    } catch {
      // ignore malformed manifest
    }
  }

  let sharpMod = null;
  try {
    const imported = await import("sharp");
    sharpMod = imported.default || imported;
  } catch {
    console.warn("[INFO] sharp module not available; JPEG thumbnails will be used if FFmpeg runs.");
  }

  const ffmpegBin = findFfmpegBinary();
  if (ffmpegBin) {
    console.log(`[OK] Found FFmpeg binary: ${ffmpegBin}`);
  } else {
    console.warn(
      "[WARN] FFmpeg binary not found. Existing thumbnails in public/images/portfolio/thumbnails/ will be used."
    );
  }

  const allEntries = fs.readdirSync(VIDEOS_DIR, { withFileTypes: true });
  const videoFiles = [];
  const ignoredFiles = [];

  for (const entry of allEntries) {
    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (SUPPORTED_VIDEO_EXTENSIONS.has(ext)) {
      videoFiles.push(entry.name);
    } else {
      ignoredFiles.push(entry.name);
    }
  }

  // Sort alphabetically in a natural, deterministic order
  videoFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  if (ignoredFiles.length > 0) {
    console.warn(`[WARN] Ignored ${ignoredFiles.length} unsupported file(s): ${ignoredFiles.join(", ")}`);
  }

  console.log(`[OK] Discovered ${videoFiles.length} supported video file(s) in public/videos/projects/`);

  const usedIds = new Set();
  const manifestItems = [];
  let generatedCount = 0;
  let existingThumbCount = 0;
  let missingThumbCount = 0;

  for (const filename of videoFiles) {
    let id = toStableId(filename);
    if (usedIds.has(id)) {
      let counter = 2;
      while (usedIds.has(`${id}-${counter}`)) counter++;
      id = `${id}-${counter}`;
    }
    usedIds.add(id);

    const videoAbsPath = path.join(VIDEOS_DIR, filename);
    const stat = fs.statSync(videoAbsPath);
    const publicVideoUrl = toPublicVideoUrl(filename);

    const expectedWebpAbs = path.join(THUMBS_DIR, `${id}.webp`);
    const expectedJpgAbs = path.join(THUMBS_DIR, `${id}.jpg`);
    const expectedPngAbs = path.join(THUMBS_DIR, `${id}.png`);

    let publicThumbnailUrl = "";

    if (fs.existsSync(expectedWebpAbs) && fs.statSync(expectedWebpAbs).size > 512) {
      publicThumbnailUrl = `/images/portfolio/thumbnails/${id}.webp`;
      existingThumbCount++;
    } else if (fs.existsSync(expectedJpgAbs) && fs.statSync(expectedJpgAbs).size > 512) {
      publicThumbnailUrl = `/images/portfolio/thumbnails/${id}.jpg`;
      existingThumbCount++;
    } else if (fs.existsSync(expectedPngAbs) && fs.statSync(expectedPngAbs).size > 512) {
      publicThumbnailUrl = `/images/portfolio/thumbnails/${id}.png`;
      existingThumbCount++;
    } else if (ffmpegBin) {
      const result = await generateThumbnailForVideo(
        ffmpegBin,
        sharpMod,
        videoAbsPath,
        expectedWebpAbs
      );
      if (result.ok && result.path) {
        const thumbFile = path.basename(result.path);
        publicThumbnailUrl = `/images/portfolio/thumbnails/${thumbFile}`;
        generatedCount++;
        console.log(`  + Generated thumbnail: ${publicThumbnailUrl} (from "${filename}")`);
      } else {
        missingThumbCount++;
        console.warn(`  ! Failed to extract thumbnail for "${filename}"`);
      }
    } else {
      const prev = existingManifestItems.get(filename);
      if (prev && prev.thumbnail) {
        publicThumbnailUrl = prev.thumbnail;
      } else {
        missingThumbCount++;
      }
    }

    const suggestedViews = extractSuggestedViewsFromFilename(filename);
    const inferredCategory = inferInitialCategory(filename);

    manifestItems.push({
      id,
      filename,
      video: publicVideoUrl,
      thumbnail: publicThumbnailUrl,
      fileSizeBytes: stat.size,
      inferredCategory,
      suggestedViews,
      suggestedViewsFromFilename: suggestedViews,
      viewsConfirmed: false,
    });
  }

  const manifestPayload = {
    generatedAt: new Date().toISOString(),
    totalVideos: manifestItems.length,
    ignoredFiles,
    items: manifestItems,
  };

  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifestPayload, null, 2) + "\n", "utf8");

  console.log("---------------------------------------------------------------");
  console.log(`[SUMMARY] Manifest written to: src/data/portfolio-manifest.json`);
  console.log(
    `[SUMMARY] Videos: ${manifestItems.length} | Thumbnails existing: ${existingThumbCount} | Generated now: ${generatedCount} | Missing: ${missingThumbCount}`
  );
}

main().catch((err) => {
  console.error("[ERROR] Portfolio sync failed:", err);
  process.exit(1);
});
