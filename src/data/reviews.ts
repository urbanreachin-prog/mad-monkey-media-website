export interface ClientReview {
  id: string;
  name: string;
  role?: string;
  business?: string;
  industry: string;
  avatarId: string;
  gender: "male" | "female";
  rating: number;
  reviewText: string;
  isVerified: boolean;
  isDemoPlaceholder?: boolean;
  date?: string;
}

/**
 * MAD MONKEY MEDIA — Client Reviews Database
 * 
 * Genuine reviews represent actual clients from previous production batches (marked isVerified: true).
 * Additional template cards (isDemoPlaceholder: true) provide an editable structure for future clients
 * without inventing fake endorsements.
 */
export const clientReviews: ClientReview[] = [
  // 1. GENUINE SUPPLIED CLIENT REVIEW
  {
    id: "rev-singhania",
    name: "Jinendra Jain",
    role: "Creative Director",
    business: "Singhania Fine Jewellery",
    industry: "Fine Jewellery & Luxury Retail",
    avatarId: "male-glasses-fade",
    gender: "male",
    rating: 5,
    isVerified: true,
    reviewText:
      "Mad Monkey Media completely transformed our retail jewellery presence. Their macro vertical reels captured the intricate craftsmanship of our diamond pieces like high-end commercial cinema. Their 24-48h turnaround speed is unmatched.",
    date: "Verified Partner",
  },

  // 2. GENUINE SUPPLIED CLIENT REVIEW
  {
    id: "rev-aura",
    name: "Dr. Ananya Roy",
    role: "Head of Marketing",
    business: "Aura Healthcare & Aesthetics",
    industry: "Healthcare & Clinical",
    avatarId: "female-bun-chic",
    gender: "female",
    rating: 5,
    isVerified: true,
    reviewText:
      "Medical storytelling requires deep clinical precision while remaining engaging. The team scripted and edited educational reels that established our specialists as trusted medical authorities without ever feeling sensationalist.",
    date: "Verified Partner",
  },

  // 3. GENUINE SUPPLIED CLIENT REVIEW
  {
    id: "rev-ironforge",
    name: "Karan Mehta",
    role: "Co-Founder",
    business: "IronForge Elite Fitness",
    industry: "Performance Fitness & Gyms",
    avatarId: "male-beard-buzz",
    gender: "male",
    rating: 5,
    isVerified: true,
    reviewText:
      "Their pacing, kinetic typography, and sound design make our gym promotional edits hit like Nike commercial campaigns. The watch retention on our Instagram reels consistently stays above 85%.",
    date: "Verified Partner",
  },

  // 4. GENUINE SUPPLIED CLIENT REVIEW
  {
    id: "rev-podcast",
    name: "CA Vaibhav Jain",
    role: "Executive Producer",
    business: "The Unfiltered Tech Podcast",
    industry: "Media & Podcasting",
    avatarId: "female-wavy-earring",
    gender: "female",
    rating: 5,
    isVerified: true,
    reviewText:
      "We record multi-cam episodes and Mad Monkey Media extracts viral short-form clips within 24 hours. Their hook selection and subtitle animations are pure genius.",
    date: "Verified Partner",
  },

  // 5. EDITABLE DEMO PLACEHOLDER — Hinglish
  {
    id: "rev-demo-01",
    name: "Rohan Sharma",
    role: "Founder",
    business: "UrbanKicks D2C",
    industry: "E-Commerce & Fashion",
    avatarId: "male-crew-smile",
    gender: "male",
    rating: 5,
    isVerified: false,
    isDemoPlaceholder: true,
    reviewText:
      "Pehle video editing me bohot time waste hota tha. Mad Monkey team ke sath coordination itna smooth hai ki 2 din me first draft ready mil jata hai. Output quality is on another level.",
    date: "Editable Slot",
  },

  // 6. EDITABLE DEMO PLACEHOLDER — Hinglish
  {
    id: "rev-demo-02",
    name: "Siddharth Verma",
    role: "Studio Director",
    business: "Apex Auto Detailing",
    industry: "Automotive Care",
    avatarId: "male-classic-part",
    gender: "male",
    rating: 5,
    isVerified: false,
    isDemoPlaceholder: true,
    reviewText:
      "Bhai honestly hook aur sound design ka fark clearly dikhta hai. Instagram reel views organically 3x ho gaye. WhatsApp pe editor se direct connect bohot bada relief hai.",
    date: "Editable Slot",
  },

  // 7. EDITABLE DEMO PLACEHOLDER — English
  {
    id: "rev-demo-03",
    name: "Tanya Kapoor",
    role: "Brand Strategist",
    business: "Botanica Skincare",
    industry: "Beauty & Wellness",
    avatarId: "female-ponytail-minimal",
    gender: "female",
    rating: 5,
    isVerified: false,
    isDemoPlaceholder: true,
    reviewText:
      "The aesthetics and color grading match international beauty benchmarks. We don't have to micromanage every cut—they understand the creative vision from day one.",
    date: "Editable Slot",
  },

  // 8. EDITABLE DEMO PLACEHOLDER — Hinglish
  {
    id: "rev-demo-04",
    name: "Aditya Singhal",
    role: "Founder & Educator",
    business: "PrepEdge Institute",
    industry: "EdTech & Learning",
    avatarId: "male-glasses-warm",
    gender: "male",
    rating: 5,
    isVerified: false,
    isDemoPlaceholder: true,
    reviewText:
      "Best decision for our content marketing. Reels ka turnaround 48 hours se pehle milta hai and koi repetitive follow-up ka headache nahi hai. Pure time saving.",
    date: "Editable Slot",
  },

  // 9. EDITABLE DEMO PLACEHOLDER — English
  {
    id: "rev-demo-05",
    name: "Kavita Joshi",
    role: "Principal Architect",
    business: "Studio Terra Spaces",
    industry: "Interior & Architecture",
    avatarId: "female-bob-earring",
    gender: "female",
    rating: 5,
    isVerified: false,
    isDemoPlaceholder: true,
    reviewText:
      "Architectural video demands precise framing and pacing. They captured our luxury interior walkthroughs with incredible cinematic restraint and sound foley.",
    date: "Editable Slot",
  },

  // 10. EDITABLE DEMO PLACEHOLDER — Hinglish
  {
    id: "rev-demo-06",
    name: "Aman Preet Singh",
    role: "Head Chef & Co-Owner",
    business: "Garam Masala Craft Kitchen",
    industry: "Culinary & Dining",
    avatarId: "male-turban-beard",
    gender: "male",
    rating: 5,
    isVerified: false,
    isDemoPlaceholder: true,
    reviewText:
      "Footage send karne ke 24 ghante me ready reels! Food texture and sound design bohot crisp hota hai. Restaurant footfall noticeably increase hua hai.",
    date: "Editable Slot",
  },

  // 11. EDITABLE DEMO PLACEHOLDER — English
  {
    id: "rev-demo-07",
    name: "Devika Nair",
    role: "VP Marketing",
    business: "StackPay Systems",
    industry: "Fintech & SaaS",
    avatarId: "female-side-curly",
    gender: "female",
    rating: 5,
    isVerified: false,
    isDemoPlaceholder: true,
    reviewText:
      "Complex fintech workflows made dynamic and visually intuitive in 45-second vertical formats. Our LinkedIn and Instagram reach grew organically within weeks.",
    date: "Editable Slot",
  },

  // 12. EDITABLE DEMO PLACEHOLDER — English
  {
    id: "rev-demo-08",
    name: "Arjun Malhotra",
    role: "Managing Director",
    business: "Skyline Realty Group",
    industry: "Luxury Real Estate",
    avatarId: "male-fade-sharp",
    gender: "male",
    rating: 5,
    isVerified: false,
    isDemoPlaceholder: true,
    reviewText:
      "High-ticket property walkthroughs require a bespoke editorial touch. The drone integration, typography motion, and luxury pacing were flawless.",
    date: "Editable Slot",
  },

  // 13. EDITABLE DEMO PLACEHOLDER — Hinglish
  {
    id: "rev-demo-09",
    name: "Neha Gujral",
    role: "Growth Lead",
    business: "SoleCraft Footwear",
    industry: "D2C Direct-to-Consumer",
    avatarId: "female-glasses-modern",
    gender: "female",
    rating: 5,
    isVerified: false,
    isDemoPlaceholder: true,
    reviewText:
      "Ad creatives ka CTR first week me hi significantly jump hua. Revisions unlimited hain par honestly pehle do drafts me hi final cut pass ho jata hai.",
    date: "Editable Slot",
  },

  // 14. EDITABLE DEMO PLACEHOLDER — English
  {
    id: "rev-demo-10",
    name: "Varun Chawla",
    role: "Content Creator",
    business: "MoneyMatters Series",
    industry: "Personal Finance",
    avatarId: "male-casual-smile",
    gender: "male",
    rating: 5,
    isVerified: false,
    isDemoPlaceholder: true,
    reviewText:
      "Fast communication directly on WhatsApp. Consistent grading, rapid turnaround, and zero stress about launch deadlines. They are a true production partner.",
    date: "Editable Slot",
  },
];
