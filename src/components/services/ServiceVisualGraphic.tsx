import React from "react";

interface ServiceVisualGraphicProps {
  serviceId: string;
  serviceNumber: string;
  categoryLabel: string;
}

/**
 * Purpose-built technical studio SVG/CSS diagrams for each of the 8 core services.
 * Coherent with the homepage's animated Studio Engine (#20211F charcoal, #171815 deep ink,
 * #D8FF3E neon lime, #FF6B35 restrained orange, and #F3F0E8 warm cream).
 */
export function ServiceVisualGraphic({
  serviceId,
  serviceNumber,
  categoryLabel,
}: ServiceVisualGraphicProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-studio-cream/15 bg-studio-charcoalDeep p-5 sm:p-6 shadow-editorial">
      {/* Subtle Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 studio-ink-grid opacity-80"
        aria-hidden="true"
      />

      {/* Top Technical Telemetry Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-studio-cream/10 pb-3 text-[10px] font-mono uppercase tracking-[0.18em] text-studio-muted">
        <span className="inline-flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full bg-studio-lime shadow-[0_0_8px_#D8FF3E]"
            aria-hidden="true"
          />
          <span>MODULE // {serviceNumber}</span>
        </span>
        <span className="text-studio-lime font-semibold">{categoryLabel}</span>
      </div>

      {/* Custom SVG Diagram Area */}
      <div
        className="relative z-10 my-4 flex items-center justify-center rounded-xl border border-studio-cream/10 bg-studio-charcoal/80 p-4 sm:p-5 min-h-[210px]"
        aria-hidden="true"
      >
        {serviceId === "content-production" && (
          <svg viewBox="0 0 320 180" fill="none" className="w-full h-44">
            {/* Viewfinder Corner Framing Guides */}
            <path
              d="M24 44V24H44 M296 44V24H276 M24 136V156H44 M296 136V156H276"
              stroke="#D8FF3E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Rule of Thirds Grid */}
            <line
              x1="115"
              y1="28"
              x2="115"
              y2="152"
              stroke="#F3F0E8"
              strokeOpacity="0.1"
              strokeDasharray="3 3"
            />
            <line
              x1="205"
              y1="28"
              x2="205"
              y2="152"
              stroke="#F3F0E8"
              strokeOpacity="0.1"
              strokeDasharray="3 3"
            />
            <line
              x1="32"
              y1="68"
              x2="288"
              y2="68"
              stroke="#F3F0E8"
              strokeOpacity="0.1"
              strokeDasharray="3 3"
            />
            <line
              x1="32"
              y1="112"
              x2="288"
              y2="112"
              stroke="#F3F0E8"
              strokeOpacity="0.1"
              strokeDasharray="3 3"
            />
            {/* Center Focus Reticle */}
            <circle
              cx="160"
              cy="90"
              r="32"
              stroke="#D8FF3E"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            <circle
              cx="160"
              cy="90"
              r="14"
              stroke="#F3F0E8"
              strokeOpacity="0.6"
              strokeWidth="1.2"
            />
            <line
              x1="152"
              y1="90"
              x2="168"
              y2="90"
              stroke="#D8FF3E"
              strokeWidth="1.5"
            />
            <line
              x1="160"
              y1="82"
              x2="160"
              y2="98"
              stroke="#D8FF3E"
              strokeWidth="1.5"
            />
            {/* REC Indicator & Telemetry */}
            <circle cx="44" cy="38" r="4" fill="#FF6B35" />
            <text
              x="54"
              y="41"
              fill="#F3F0E8"
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="1.5"
            >
              REC · 4K RAW
            </text>
            <text
              x="220"
              y="146"
              fill="#D8FF3E"
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="1"
            >
              ISO 400 · F/1.8
            </text>
          </svg>
        )}

        {serviceId === "reels-production" && (
          <svg viewBox="0 0 320 180" fill="none" className="w-full h-44">
            {/* 9:16 Vertical Frame on Left */}
            <rect
              x="38"
              y="14"
              width="86"
              height="152"
              rx="10"
              fill="#171815"
              stroke="#D8FF3E"
              strokeWidth="1.8"
            />
            <rect
              x="68"
              y="22"
              width="26"
              height="4"
              rx="2"
              fill="#F3F0E8"
              fillOpacity="0.3"
            />
            <circle
              cx="81"
              cy="86"
              r="16"
              fill="#D8FF3E"
              fillOpacity="0.15"
              stroke="#D8FF3E"
              strokeWidth="1.5"
            />
            <path d="M78 80L88 86L78 92V80Z" fill="#D8FF3E" />
            <rect
              x="50"
              y="132"
              width="48"
              height="6"
              rx="3"
              fill="#D8FF3E"
            />
            <rect
              x="50"
              y="144"
              width="62"
              height="4"
              rx="2"
              fill="#F3F0E8"
              fillOpacity="0.35"
            />

            {/* Right Animated Timeline Segments */}
            <text
              x="148"
              y="34"
              fill="#AAAFA5"
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="1.2"
            >
              9:16 RETENTION TIMELINE
            </text>
            {/* Track 1: Hook */}
            <rect
              x="148"
              y="46"
              width="142"
              height="22"
              rx="5"
              fill="#171815"
              stroke="#F3F0E8"
              strokeOpacity="0.15"
            />
            <rect
              x="152"
              y="50"
              width="52"
              height="14"
              rx="3"
              fill="#D8FF3E"
            />
            <text
              x="160"
              y="60"
              fill="#171815"
              fontSize="8"
              fontWeight="bold"
              fontFamily="monospace"
            >
              0-3S HOOK
            </text>
            {/* Track 2: Story Cut */}
            <rect
              x="148"
              y="78"
              width="142"
              height="22"
              rx="5"
              fill="#171815"
              stroke="#F3F0E8"
              strokeOpacity="0.15"
            />
            <rect
              x="198"
              y="82"
              width="66"
              height="14"
              rx="3"
              fill="#D8FF3E"
              fillOpacity="0.35"
              stroke="#D8FF3E"
            />
            {/* Track 3: Audio / Captions */}
            <rect
              x="148"
              y="110"
              width="142"
              height="22"
              rx="5"
              fill="#171815"
              stroke="#F3F0E8"
              strokeOpacity="0.15"
            />
            <path
              d="M158 121 H175 L182 114 L189 128 L196 116 L204 126 L212 119 H278"
              stroke="#FF6B35"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            {/* Playhead */}
            <line
              x1="218"
              y1="40"
              x2="218"
              y2="144"
              stroke="#D8FF3E"
              strokeWidth="1.5"
            />
            <circle cx="218" cy="40" r="3.5" fill="#D8FF3E" />
          </svg>
        )}

        {serviceId === "social-media-management" && (
          <svg viewBox="0 0 320 180" fill="none" className="w-full h-44">
            {/* 3x3 Cohesive Grid Architecture */}
            {[0, 1, 2].map((row) =>
              [0, 1, 2].map((col) => {
                const x = 36 + col * 38;
                const y = 26 + row * 38;
                const isHighlighted =
                  (row === 0 && col === 0) ||
                  (row === 1 && col === 1) ||
                  (row === 2 && col === 2);
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={x}
                    y={y}
                    width="32"
                    height="32"
                    rx="5"
                    fill={isHighlighted ? "rgba(216,255,62,0.18)" : "#171815"}
                    stroke={isHighlighted ? "#D8FF3E" : "rgba(243,240,232,0.2)"}
                    strokeWidth="1.4"
                  />
                );
              })
            )}
            {/* Connected Publishing Nodes on Right */}
            <path
              d="M154 52 H198 L220 36 H274 M154 84 H274 M154 116 H198 L220 132 H274"
              stroke="#D8FF3E"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <rect
              x="212"
              y="24"
              width="76"
              height="24"
              rx="6"
              fill="#171815"
              stroke="#D8FF3E"
              strokeWidth="1.4"
            />
            <text
              x="224"
              y="39"
              fill="#D8FF3E"
              fontSize="8.5"
              fontFamily="monospace"
            >
              MON · REEL
            </text>
            <rect
              x="212"
              y="72"
              width="76"
              height="24"
              rx="6"
              fill="#171815"
              stroke="#F3F0E8"
              strokeOpacity="0.3"
            />
            <text
              x="224"
              y="87"
              fill="#F3F0E8"
              fontSize="8.5"
              fontFamily="monospace"
            >
              WED · GRID
            </text>
            <rect
              x="212"
              y="120"
              width="76"
              height="24"
              rx="6"
              fill="#171815"
              stroke="#FF6B35"
              strokeWidth="1.4"
            />
            <text
              x="224"
              y="135"
              fill="#FF6B35"
              fontSize="8.5"
              fontFamily="monospace"
            >
              FRI · STORY
            </text>
          </svg>
        )}

        {serviceId === "performance-marketing" && (
          <svg viewBox="0 0 320 180" fill="none" className="w-full h-44">
            {/* Left Funnel Architecture */}
            <polygon
              points="28,34 132,34 116,66 44,66"
              fill="rgba(243,240,232,0.06)"
              stroke="#F3F0E8"
              strokeOpacity="0.3"
              strokeWidth="1.4"
            />
            <polygon
              points="48,74 112,74 98,106 62,106"
              fill="rgba(216,255,62,0.12)"
              stroke="#D8FF3E"
              strokeOpacity="0.6"
              strokeWidth="1.4"
            />
            <polygon
              points="66,114 94,114 88,146 72,146"
              fill="#D8FF3E"
              stroke="#D8FF3E"
              strokeWidth="1.4"
            />
            {/* Right Conversion Graph */}
            <rect
              x="156"
              y="26"
              width="138"
              height="124"
              rx="8"
              fill="#171815"
              stroke="#F3F0E8"
              strokeOpacity="0.15"
            />
            <path
              d="M172 126 C196 120, 212 96, 234 82 C250 72, 262 52, 276 42"
              stroke="#D8FF3E"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="204" cy="106" r="3.5" fill="#F3F0E8" />
            <circle cx="234" cy="82" r="3.5" fill="#FF6B35" />
            <circle cx="276" cy="42" r="4.5" fill="#D8FF3E" />
            <text
              x="170"
              y="46"
              fill="#D8FF3E"
              fontSize="8.5"
              fontFamily="monospace"
            >
              META ADS · ROAS
            </text>
            <text
              x="170"
              y="140"
              fill="#AAAFA5"
              fontSize="8"
              fontFamily="monospace"
            >
              TARGETED ENQUIRIES
            </text>
          </svg>
        )}

        {serviceId === "brand-strategy" && (
          <svg viewBox="0 0 320 180" fill="none" className="w-full h-44">
            {/* Strategy Positioning Node Map */}
            <line
              x1="88"
              y1="90"
              x2="160"
              y2="46"
              stroke="#D8FF3E"
              strokeWidth="1.6"
            />
            <line
              x1="88"
              y1="90"
              x2="160"
              y2="134"
              stroke="#D8FF3E"
              strokeWidth="1.6"
            />
            <line
              x1="160"
              y1="46"
              x2="246"
              y2="90"
              stroke="#F3F0E8"
              strokeOpacity="0.35"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <line
              x1="160"
              y1="134"
              x2="246"
              y2="90"
              stroke="#F3F0E8"
              strokeOpacity="0.35"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Root Node */}
            <rect
              x="26"
              y="72"
              width="68"
              height="36"
              rx="8"
              fill="#171815"
              stroke="#D8FF3E"
              strokeWidth="1.8"
            />
            <text
              x="38"
              y="93"
              fill="#D8FF3E"
              fontSize="8.5"
              fontWeight="bold"
              fontFamily="monospace"
            >
              BRAND DNA
            </text>

            {/* Middle Pillar Nodes */}
            <rect
              x="128"
              y="26"
              width="74"
              height="34"
              rx="8"
              fill="#171815"
              stroke="#F3F0E8"
              strokeOpacity="0.35"
            />
            <text
              x="140"
              y="46"
              fill="#F3F0E8"
              fontSize="8.5"
              fontFamily="monospace"
            >
              AUDIENCE
            </text>

            <rect
              x="128"
              y="120"
              width="74"
              height="34"
              rx="8"
              fill="#171815"
              stroke="#F3F0E8"
              strokeOpacity="0.35"
            />
            <text
              x="137"
              y="140"
              fill="#F3F0E8"
              fontSize="8.5"
              fontFamily="monospace"
            >
              VISUAL TONE
            </text>

            {/* Right Output Node */}
            <rect
              x="224"
              y="70"
              width="72"
              height="40"
              rx="8"
              fill="rgba(216,255,62,0.14)"
              stroke="#D8FF3E"
              strokeWidth="1.8"
            />
            <circle cx="236" cy="90" r="3" fill="#FF6B35" />
            <text
              x="244"
              y="93"
              fill="#F3F0E8"
              fontSize="8.5"
              fontWeight="bold"
              fontFamily="monospace"
            >
              AUTHORITY
            </text>
          </svg>
        )}

        {serviceId === "personal-branding" && (
          <svg viewBox="0 0 320 180" fill="none" className="w-full h-44">
            {/* Spotlight Cone Geometry */}
            <polygon
              points="160,14 96,158 224,158"
              fill="rgba(216,255,62,0.07)"
            />
            {/* Profile Frame */}
            <rect
              x="114"
              y="28"
              width="92"
              height="124"
              rx="14"
              fill="#171815"
              stroke="#D8FF3E"
              strokeWidth="1.8"
            />
            {/* Minimalist Executive Silhouette */}
            <circle
              cx="160"
              cy="68"
              r="16"
              stroke="#D8FF3E"
              strokeWidth="1.8"
              fill="rgba(216,255,62,0.12)"
            />
            <path
              d="M134 114 C134 98, 186 98, 186 114"
              stroke="#F3F0E8"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Left & Right Voice / Authority Telemetry */}
            <rect
              x="28"
              y="56"
              width="68"
              height="26"
              rx="6"
              fill="#171815"
              stroke="#F3F0E8"
              strokeOpacity="0.2"
            />
            <text
              x="38"
              y="72"
              fill="#D8FF3E"
              fontSize="8"
              fontFamily="monospace"
            >
              FOUNDER LED
            </text>
            <rect
              x="224"
              y="94"
              width="68"
              height="26"
              rx="6"
              fill="#171815"
              stroke="#FF6B35"
              strokeOpacity="0.6"
            />
            <text
              x="234"
              y="110"
              fill="#F3F0E8"
              fontSize="8"
              fontFamily="monospace"
            >
              VOICE + CUT
            </text>
          </svg>
        )}

        {serviceId === "website-development" && (
          <svg viewBox="0 0 320 180" fill="none" className="w-full h-44">
            {/* Browser Window Frame */}
            <rect
              x="28"
              y="20"
              width="264"
              height="140"
              rx="10"
              fill="#171815"
              stroke="#F3F0E8"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />
            <line
              x1="28"
              y1="42"
              x2="292"
              y2="42"
              stroke="#F3F0E8"
              strokeOpacity="0.15"
            />
            <circle cx="44" cy="31" r="3" fill="#FF6B35" />
            <circle cx="55" cy="31" r="3" fill="#D8FF3E" />
            <circle
              cx="66"
              cy="31"
              r="3"
              fill="#F3F0E8"
              fillOpacity="0.3"
            />
            {/* Responsive Layout Blocks */}
            <rect
              x="44"
              y="54"
              width="136"
              height="52"
              rx="6"
              fill="rgba(216,255,62,0.1)"
              stroke="#D8FF3E"
              strokeWidth="1.4"
            />
            <rect
              x="54"
              y="66"
              width="78"
              height="8"
              rx="3"
              fill="#F3F0E8"
            />
            <rect
              x="54"
              y="82"
              width="48"
              height="12"
              rx="6"
              fill="#D8FF3E"
            />
            <rect
              x="192"
              y="54"
              width="84"
              height="92"
              rx="6"
              fill="#20211F"
              stroke="#F3F0E8"
              strokeOpacity="0.2"
            />
            <rect
              x="44"
              y="116"
              width="64"
              height="30"
              rx="5"
              fill="#20211F"
              stroke="#F3F0E8"
              strokeOpacity="0.2"
            />
            <rect
              x="116"
              y="116"
              width="64"
              height="30"
              rx="5"
              fill="#20211F"
              stroke="#F3F0E8"
              strokeOpacity="0.2"
            />
            <text
              x="208"
              y="104"
              fill="#D8FF3E"
              fontSize="10"
              fontWeight="bold"
              fontFamily="monospace"
            >
              NEXT.JS
            </text>
          </svg>
        )}

        {serviceId === "video-production" && (
          <svg viewBox="0 0 320 180" fill="none" className="w-full h-44">
            {/* Widescreen 16:9 Cinema Frame */}
            <rect
              x="34"
              y="18"
              width="252"
              height="82"
              rx="8"
              fill="#171815"
              stroke="#D8FF3E"
              strokeWidth="1.6"
            />
            <text
              x="48"
              y="36"
              fill="#D8FF3E"
              fontSize="8.5"
              fontFamily="monospace"
            >
              16:9 MASTER GRADE
            </text>
            <circle cx="268" cy="32" r="4" fill="#FF6B35" />
            <path
              d="M152 50 L170 60 L152 70 Z"
              fill="#D8FF3E"
            />

            {/* Multi-Track NLE Timeline */}
            <rect
              x="34"
              y="112"
              width="252"
              height="14"
              rx="4"
              fill="#171815"
              stroke="#F3F0E8"
              strokeOpacity="0.15"
            />
            <rect
              x="52"
              y="115"
              width="94"
              height="8"
              rx="2"
              fill="#D8FF3E"
            />
            <rect
              x="154"
              y="115"
              width="86"
              height="8"
              rx="2"
              fill="rgba(216,255,62,0.45)"
            />

            <rect
              x="34"
              y="132"
              width="252"
              height="14"
              rx="4"
              fill="#171815"
              stroke="#F3F0E8"
              strokeOpacity="0.15"
            />
            <rect
              x="84"
              y="135"
              width="120"
              height="8"
              rx="2"
              fill="#FF6B35"
              fillOpacity="0.8"
            />

            {/* Playhead Marker */}
            <line
              x1="150"
              y1="106"
              x2="150"
              y2="154"
              stroke="#F3F0E8"
              strokeWidth="1.6"
            />
            <polygon points="146,106 154,106 150,112" fill="#D8FF3E" />
          </svg>
        )}
      </div>

      {/* Bottom Status Footer */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-studio-muted">
        <span>STUDIO ENGINE // ACTIVE</span>
        <span className="text-studio-cream/80">CUSTOM EXECUTION</span>
      </div>
    </div>
  );
}
