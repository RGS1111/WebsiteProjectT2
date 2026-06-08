/**
 * ──────────────────────────────────────────────────────────────
 *  ROOFING COMPANY — SINGLE SOURCE OF TRUTH (CONFIG-DRIVEN UI)
 * ──────────────────────────────────────────────────────────────
 *  Every text string, asset path, link, and metadata value used
 *  throughout the site is defined here. To update copy or swap
 *  images, edit this file and redeploy on Vercel.
 *
 *  Images live in /public/images/ and follow a standardized
 *  naming convention: hero-bg.jpg, service-flat-roof.jpg, etc.
 * ──────────────────────────────────────────────────────────────
 */

/* ------------------------------------------------------------------ */
/*  HELPERS                                                           */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.eliteroofingnottingham.co.uk";
const PHONE_RAW = "+441159876543";
const PHONE_DISPLAY = "0115 987 6543";
const EMAIL = "info@eliteroofingnottingham.co.uk";

const REGIONS_COVERED = [
  "Nottingham",
  "West Bridgford",
  "Beeston",
  "Carlton",
  "Arnold",
  "Hucknall",
  "Mansfield",
  "Newark-on-Trent",
  "Derby",
  "Loughborough",
];

const POSTCODES_COVERED = [
  "NG1", "NG2", "NG3", "NG4", "NG5", "NG6", "NG7", "NG8", "NG9",
  "NG10", "NG11", "NG12", "NG13", "NG14", "NG15", "NG16", "NG17",
  "NG18", "NG19", "NG20", "NG21", "NG22", "NG23", "NG24", "NG25",
  "DE1", "DE3", "DE21", "DE24", "DE72", "DE74", "DE75",
  "LE11", "LE12",
];

/* ------------------------------------------------------------------ */
/*  1. COMPANY DETAILS                                                */
/* ------------------------------------------------------------------ */

export const companyDetails = {
  name: "Elite Roofing Nottingham",
  legalName: "Elite Roofing Nottingham Ltd",
  phone: {
    raw: PHONE_RAW,
    display: PHONE_DISPLAY,
  },
  email: EMAIL,
  whatsapp: `https://wa.me/${PHONE_RAW.replace(/\+/g, "")}`,
  address: {
    street: "47 Builder Street",
    locality: "Nottingham",
    region: "Nottinghamshire",
    postcode: "NG7 3AA",
    country: "GB",
  },
  workingHours: {
    mondayToFriday: "7:00 AM – 6:00 PM",
    saturday: "8:00 AM – 2:00 PM",
    emergency: "24/7 Emergency Call-Out",
  },
  regionsCovered: REGIONS_COVERED,
  postcodesCovered: POSTCODES_COVERED,
  social: {
    facebook: "https://facebook.com/eliteroofingnottingham",
    instagram: "https://instagram.com/eliteroofingnottingham",
    nextdoor: "https://nextdoor.co.uk/pages/elite-roofing-nottingham",
  },
  yearEstablished: 2012,
  teamSize: 14,
  reviews: {
    googleCount: 127,
    checkatradeCount: 98,
    averageRating: 5.0,
  },
  insurance: {
    publicLiability: "£5,000,000",
    employersLiability: "£10,000,000",
  },
  companyNumber: "08123456",
  vatNumber: "GB 123 4567 89",
};

/* ------------------------------------------------------------------ */
/*  2. METADATA                                                       */
/* ------------------------------------------------------------------ */

export const metadata = {
  default: {
    title: "Elite Roofing Nottingham | Trusted Roofers — Free Quote",
    description:
      "5★ rated roofing company covering Nottingham & surrounding areas. Roof repairs, new roofs, flat roofing, guttering & 24/7 emergency call-outs. Free quote today.",
    keywords:
      "roofers nottingham, roof repairs nottingham, roofing company, flat roof, new roof, emergency roofer, guttering, fascias soffits, chimney repair nottingham",
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: "Elite Roofing Nottingham",
      images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
    },
  },
  pages: {
    home: {
      title: "Elite Roofing Nottingham | 5★ Roofers — Free Quote",
      description:
        "Nottingham's trusted roofing company. 10+ years experience, fully insured. Roof repairs, new roofs, flat roofs & 24/7 emergencies. Call now for a free quote.",
    },
    services: {
      title: "Roofing Services Nottingham | Repairs, New Roofs & More",
      description:
        "Comprehensive roofing services across Nottingham: roof repairs, new roof installations, flat roofs, guttering, fascias, emergency roofing & chimney repairs.",
    },
    about: {
      title: "About Elite Roofing | Trusted Nottingham Roofers Since 2012",
      description:
        "Family-run roofing company based in Nottingham. Fully licensed & insured with 10+ years of craftsmanship. Meet our team and see our credentials.",
    },
    reviews: {
      title: "Customer Reviews | See Why Nottingham Chooses Elite Roofing",
      description:
        "120+ five-star reviews from homeowners across Nottingham, West Bridgford, Beeston, and beyond. See what our customers say about our roofing work.",
    },
    gallery: {
      title: "Roofing Projects Gallery | Before & After Photos Nottingham",
      description:
        "Browse our portfolio of roofing projects across Nottinghamshire. Roof repairs, new roofs, flat roofs, guttering — see the Elite difference.",
    },
    contact: {
      title: "Get a Free Quote | Elite Roofing Nottingham",
      description:
        "Contact Elite Roofing for a free no-obligation quote. Roof repairs, new roofs, flat roofs & more across Nottingham. We'll respond within 2 hours.",
    },
  },
};

/* ------------------------------------------------------------------ */
/*  3. GLOBAL UI                                                      */
/* ------------------------------------------------------------------ */

export const globalUI = {
  header: {
    ctaButton: {
      text: "Get a Free Quote",
      href: "/contact",
    },
    navigation: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  footer: {
    tagline: "Nottingham's trusted roofing company — family-run since 2012.",
    columns: [
      {
        heading: "Services",
        links: [
          { label: "Roof Repairs", href: "/services#roof-repairs" },
          { label: "New Roof Installation", href: "/services#new-roof-installation" },
          { label: "Flat Roofs", href: "/services#flat-roofs" },
          { label: "Guttering & Drainage", href: "/services#guttering-drainage" },
          { label: "Fascias & Soffits", href: "/services#fascias-soffits" },
          { label: "Emergency Roofing", href: "/services#emergency-roofing" },
          { label: "Chimney Repairs", href: "/services#chimney-repairs" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Reviews", href: "/reviews" },
          { label: "Gallery", href: "/gallery" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Coverage",
        links: [
          { label: "Nottingham", href: "/about#coverage" },
          { label: "West Bridgford", href: "/about#coverage" },
          { label: "Beeston", href: "/about#coverage" },
          { label: "Mansfield", href: "/about#coverage" },
          { label: "Derby", href: "/about#coverage" },
          { label: "All Areas →", href: "/about#coverage" },
        ],
      },
    ],
    bottomBar: `© ${new Date().getFullYear()} Elite Roofing Nottingham Ltd. Company No: 08123456. VAT: GB 123 4567 89.`,
  },
  bottomCTA: {
    heading: "Ready to Fix Your Roof?",
    subheading: "Get a free, no-obligation quote. We'll be in touch within 2 hours.",
    form: {
      fields: [
        { name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Smith" },
        { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "07123 456789" },
        { name: "postcode", label: "Postcode", type: "text", required: true, placeholder: "NG7 3AA" },
      ],
      jobTypes: [
        "Roof Repair",
        "New Roof Installation",
        "Flat Roof",
        "Guttering & Drainage",
        "Fascias & Soffits",
        "Emergency Roofing",
        "Chimney Repairs",
        "Other / Not Sure",
      ],
      submitText: "Get My Free Quote",
    },
  },
  trustBar: {
    items: [
      { icon: "shield", text: "Fully Insured" },
      { icon: "clipboard", text: "Free Quotes" },
      { icon: "star", text: "10+ Years Experience" },
      { icon: "mapPin", text: "Covering Nottingham & Surrounding Areas" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  4. HOMEPAGE                                                       */
/* ------------------------------------------------------------------ */

export const homePage = {
  hero: {
    backgroundImage: "/images/hero-bg.jpg",
    backgroundImageMobile: "/images/hero-bg-mobile.jpg",
    headline: "Nottingham's Trusted Roofing Company",
    subheadline:
      "Family-run roofing experts with 10+ years of craftsmanship. Fully insured, 5★ rated, and covering all NG postcodes — from emergency repairs to full roof replacements.",
    ctaPrimary: { text: "Get a Free Quote", href: "/contact" },
    ctaSecondary: { text: PHONE_DISPLAY, href: `tel:${PHONE_RAW}` },
  },
  servicesOverview: {
    heading: "Our Roofing Services",
    subheading: "Everything your roof needs — delivered by certified professionals",
    tiles: [
      {
        id: "roof-repairs",
        icon: "wrench",
        title: "Roof Repairs",
        description: "Leaks, broken tiles, felt damage — fast, lasting fixes.",
        image: "/images/service-roof-repairs.jpg",
        anchor: "/services#roof-repairs",
      },
      {
        id: "new-roof-installation",
        icon: "home",
        title: "New Roof Installation",
        description: "Full roof replacements with premium materials & guarantees.",
        image: "/images/service-new-roof.jpg",
        anchor: "/services#new-roof-installation",
      },
      {
        id: "flat-roofs",
        icon: "layers",
        title: "Flat Roofs",
        description: "GRP fibreglass, EPDM rubber & felt systems for extensions & garages.",
        image: "/images/service-flat-roof.jpg",
        anchor: "/services#flat-roofs",
      },
      {
        id: "guttering-drainage",
        icon: "droplets",
        title: "Guttering & Drainage",
        description: "Installation, repair & cleaning of guttering, downpipes & drainage.",
        image: "/images/service-guttering.jpg",
        anchor: "/services#guttering-drainage",
      },
      {
        id: "fascias-soffits",
        icon: "layoutPanel",
        title: "Fascias & Soffits",
        description: "uPVC fascias, soffits & cladding — protect your roofline.",
        image: "/images/service-fascias.jpg",
        anchor: "/services#fascias-soffits",
      },
      {
        id: "emergency-roofing",
        icon: "alertTriangle",
        title: "Emergency Roofing",
        description: "24/7 emergency call-outs for storm damage, leaks & urgent repairs.",
        image: "/images/service-emergency.jpg",
        anchor: "/services#emergency-roofing",
      },
    ],
  },
  googleReviewsStrip: {
    heading: "What Our Customers Say",
    subheading: "Rated 5.0 ★ on Google — 120+ reviews and counting",
    featuredReviews: [
      {
        name: "Sarah T.",
        location: "West Bridgford",
        jobType: "Full Roof Replacement",
        rating: 5,
        text: "Elite Roofing replaced our entire roof in just 4 days. The team was professional, tidy, and the new roof looks fantastic. Couldn't recommend them enough!",
      },
      {
        name: "Mark J.",
        location: "Beeston",
        jobType: "Flat Roof Repair",
        rating: 5,
        text: "Had a persistent leak on our kitchen extension flat roof. Elite diagnosed the issue fast, gave a fair quote, and fixed it the same week. No more leaks!",
      },
      {
        name: "David & Lisa P.",
        location: "Mapperley, Nottingham",
        jobType: "Emergency Storm Repair",
        rating: 5,
        text: "Called at 8pm after a storm ripped off tiles. They were here within the hour, made the roof safe, and came back the next day for a permanent repair. Lifesavers!",
      },
    ],
  },
  beforeAfterGallery: {
    heading: "Before & After — See the Difference",
    subheading: "Real transformations from real Nottingham homes",
    pairs: [
      {
        id: "project-1",
        jobType: "Full Roof Replacement — Nottingham",
        before: { src: "/images/before-project-1.jpg", alt: "Worn roof before replacement" },
        after: { src: "/images/after-project-1.jpg", alt: "New roof after replacement" },
      },
      {
        id: "project-2",
        jobType: "Flat Roof Installation — West Bridgford",
        before: { src: "/images/before-project-2.jpg", alt: "Old flat roof before work" },
        after: { src: "/images/after-project-2.jpg", alt: "New GRP flat roof" },
      },
      {
        id: "project-3",
        jobType: "Chimney Repair — Carlton",
        before: { src: "/images/before-project-3.jpg", alt: "Damaged chimney stack" },
        after: { src: "/images/after-project-3.jpg", alt: "Repaired and repointed chimney" },
      },
      {
        id: "project-4",
        jobType: "Guttering Replacement — Beeston",
        before: { src: "/images/before-project-4.jpg", alt: "Rusted old guttering" },
        after: { src: "/images/after-project-4.jpg", alt: "New seamless guttering" },
      },
    ],
  },
  whyChooseUs: {
    heading: "Why Nottingham Chooses Elite Roofing",
    features: [
      {
        icon: "badgeCheck",
        title: "Licensed & Fully Insured",
        description: "£5M public liability cover. All work meets UK building regulations — your home is in safe hands.",
      },
      {
        icon: "clock",
        title: "10+ Years of Experience",
        description: "Family-run since 2012. Hundreds of roofs repaired and replaced across Nottinghamshire.",
      },
      {
        icon: "thumbsUp",
        title: "5★ Rated on Google",
        description: "120+ genuine reviews. We're proud of our reputation — read what your neighbours say.",
      },
      {
        icon: "truck",
        title: "Fast Response & 24/7 Emergencies",
        description: "Same-day call-outs for urgent repairs. We cover all NG postcodes and beyond.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  5. SERVICES PAGE                                                  */
/* ------------------------------------------------------------------ */

export const servicesPage = {
  intro: {
    heading: "Professional Roofing Services in Nottingham & Surrounding Areas",
    subheading:
      "From minor tile repairs to complete roof replacements, we deliver dependable roofing solutions across Nottingham, West Bridgford, Beeston, Mansfield, Derby, and all surrounding NG postcode areas. Every job comes with a workmanship guarantee and a no-nonsense quote.",
  },
  services: [
    {
      id: "roof-repairs",
      title: "Roof Repairs",
      icon: "wrench",
      image: "/images/service-roof-repairs.jpg",
      description:
        "Leaking roof? Cracked or slipped tiles? Damaged flashing or felt? Our roof repair team in Nottingham quickly diagnoses and permanently fixes problems before they worsen. We repair all roof types: pitched, flat, tile, slate, and metal.",
      bullets: [
        "Tile & slate replacement",
        "Lead flashing repairs",
        "Felt & membrane repairs",
        "Leak detection & sealing",
        "Roof valley repairs",
      ],
      ctaText: "Book a Roof Repair",
    },
    {
      id: "new-roof-installation",
      title: "New Roof Installation",
      icon: "home",
      image: "/images/service-new-roof.jpg",
      description:
        "When repairs aren't enough, we provide full roof replacements using industry-leading materials: Marley tiles, Redland slates, and premium breathable membranes. Every new roof comes with a manufacturer-backed guarantee and our own workmanship warranty.",
      bullets: [
        "Complete strip & re-roof",
        "Breathable membrane installation",
        "Tile, slate & metal roofing options",
        "Velux window integration",
        "Building regulation compliance",
      ],
      ctaText: "Get a Roof Replacement Quote",
    },
    {
      id: "flat-roofs",
      title: "Flat Roofs",
      icon: "layers",
      image: "/images/service-flat-roof.jpg",
      description:
        "Specialists in modern flat roofing systems for extensions, garages, dormers, and commercial properties. We install GRP fibreglass, EPDM rubber, and high-performance felt systems — all with long guarantees and minimal maintenance requirements.",
      bullets: [
        "GRP fibreglass roofing (25-year lifespan)",
        "EPDM rubber roofing",
        "Torch-on felt systems",
        "Flat roof repairs & maintenance",
        "Warm & cold roof construction",
      ],
      ctaText: "Discuss Your Flat Roof",
    },
    {
      id: "guttering-drainage",
      title: "Guttering & Drainage",
      icon: "droplets",
      image: "/images/service-guttering.jpg",
      description:
        "Faulty guttering causes damp, rot, and structural damage. We supply and install seamless aluminium and uPVC guttering systems across Nottingham. From single downpipe repairs to full replacement runs — every job gets the same care and attention.",
      bullets: [
        "Seamless aluminium guttering",
        "uPVC gutter replacement",
        "Downpipe repairs & installation",
        "Gutter cleaning & unblocking",
        "Drainage assessments",
      ],
      ctaText: "Fix My Guttering",
    },
    {
      id: "fascias-soffits",
      title: "Fascias & Soffits",
      icon: "layoutPanel",
      image: "/images/service-fascias.jpg",
      description:
        "Protect your roofline and improve kerb appeal with new uPVC fascias, soffits, and cladding. Our precision installations prevent water ingress, bird nesting, and rot — while giving your home a crisp, modern finish that lasts for decades.",
      bullets: [
        "uPVC fascia board installation",
        "Soffit replacement & ventilation",
        "Bargeboards & cladding",
        "Rot removal & timber replacement",
        "Full roofline refurbishment",
      ],
      ctaText: "Upgrade My Fascias",
    },
    {
      id: "emergency-roofing",
      title: "Emergency Roofing",
      icon: "alertTriangle",
      image: "/images/service-emergency.jpg",
      description:
        "Storm damage, fallen trees, sudden leaks — roofing emergencies don't wait for business hours. Our 24/7 emergency call-out team is ready across Nottingham with temporary weatherproofing and same-day permanent repairs where possible.",
      bullets: [
        "24/7 emergency call-out",
        "Storm damage response",
        "Temporary weatherproofing",
        "Same-day permanent fixes (where possible)",
        "Insurance report assistance",
      ],
      ctaText: "Call Now — 24/7 Emergency",
    },
    {
      id: "chimney-repairs",
      title: "Chimney Repairs",
      icon: "factory",
      image: "/images/service-chimney.jpg",
      description:
        "Crumbling chimney stacks and leaking flashings are safety hazards and common causes of damp. We offer chimney repointing, crown repair, lead flashing replacement, and full chimney rebuilds where needed — all with safe scaffolding and expert masonry work.",
      bullets: [
        "Chimney repointing & rendering",
        "Flashing repair & replacement",
        "Chimney crown repair",
        "Pot & cowl installation",
        "Full or partial chimney rebuilds",
      ],
      ctaText: "Inspect My Chimney",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  6. ABOUT PAGE                                                     */
/* ------------------------------------------------------------------ */

export const aboutPage = {
  story: {
    heading: "A Family-Run Roofing Business Built on Trust",
    paragraphs: [
      "Elite Roofing Nottingham was founded in 2012 by James Mitchell, a third-generation roofer who grew up on scaffolding and rooftops across Nottinghamshire. After years of working for national contractors and seeing corners cut, James set out to build a roofing company that did things differently — one where quality of workmanship, honest pricing, and customer care came first.",
      "Over the past 10+ years, we've grown from a single van and a handful of tools into Nottingham's most recommended roofing company — with a team of 14 skilled roofers, scaffolders, and guttering specialists. Despite our growth, we remain a family-run business at heart. Every job, from a small tile repair to a full roof replacement, is personally overseen by a senior team member to ensure our standards never slip.",
      "We're fully insured (£5M public liability), accredited by Checkatrade and the National Federation of Roofing Contractors (NFRC), and proud holders of over 120 five-star Google reviews. When you choose Elite Roofing, you're choosing a local, trusted team that treats your home like their own.",
    ],
  },
  team: {
    heading: "Meet Our Leadership Team",
    members: [
      {
        name: "James Mitchell",
        role: "Founder & Managing Director",
        image: "/images/team-james.jpg",
        bio: "3rd-generation roofer with 20+ years in the trade. James personally quotes every major project and oversees quality control across all work.",
      },
      {
        name: "Sarah Mitchell",
        role: "Operations Manager",
        image: "/images/team-sarah.jpg",
        bio: "The organisational backbone of Elite Roofing. Sarah handles scheduling, customer liaison, and ensures every job runs on time and on budget.",
      },
      {
        name: "Tom Harrison",
        role: "Lead Roofer & Site Supervisor",
        image: "/images/team-tom.jpg",
        bio: "NVQ Level 3 qualified with 12 years of hands-on roofing experience. Tom leads our installation crews and mentors our apprentices.",
      },
    ],
  },
  accreditations: {
    heading: "Accreditations & Insurance",
    items: [
      {
        name: "Checkatrade Approved",
        image: "/images/badge-checkatrade.png",
        description: "Vetted, monitored, and trusted — consistently scoring 9.9/10.",
      },
      {
        name: "NFRC Member",
        image: "/images/badge-nfrc.png",
        description: "National Federation of Roofing Contractors — the UK roofing industry's gold standard.",
      },
      {
        name: "CITB Registered",
        image: "/images/badge-citb.png",
        description: "All our roofers are CSCS card holders with CITB-recognised training.",
      },
      {
        name: "Fully Insured",
        image: "/images/badge-insured.png",
        description: "£5M public liability + £10M employer's liability insurance.",
      },
      {
        name: "TrustMark Registered",
        image: "/images/badge-trustmark.png",
        description: "Government-endorsed quality scheme for tradespeople.",
      },
    ],
  },
  coverage: {
    heading: "Areas We Cover Across Nottinghamshire & Beyond",
    intro:
      "Our roofers are strategically based in Nottingham and cover all the locations listed below. No job is too far — if you're within 30 miles of NG7, we're available for your roofing project.",
    areas: [
      { name: "Nottingham", postcodes: "NG1 – NG12" },
      { name: "West Bridgford", postcodes: "NG2" },
      { name: "Beeston", postcodes: "NG9" },
      { name: "Carlton", postcodes: "NG4" },
      { name: "Arnold", postcodes: "NG5" },
      { name: "Hucknall", postcodes: "NG15" },
      { name: "Mansfield", postcodes: "NG18 – NG20" },
      { name: "Newark-on-Trent", postcodes: "NG24" },
      { name: "Derby", postcodes: "DE1, DE3, DE21, DE24" },
      { name: "Loughborough", postcodes: "LE11, LE12" },
      { name: "Mapperley", postcodes: "NG3" },
      { name: "Sherwood", postcodes: "NG5" },
      { name: "Clifton", postcodes: "NG11" },
      { name: "Bulwell", postcodes: "NG6" },
      { name: "Stapleford", postcodes: "NG9" },
      { name: "Long Eaton", postcodes: "NG10" },
      { name: "Eastwood", postcodes: "NG16" },
      { name: "Ilkeston", postcodes: "DE7" },
      { name: "Heanor", postcodes: "DE75" },
      { name: "Southwell", postcodes: "NG25" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  7. REVIEWS PAGE                                                   */
/* ------------------------------------------------------------------ */

export const reviewsPage = {
  hero: {
    heading: "120+ Five-Star Reviews from Nottingham Homeowners",
    subheading:
      "We're proud of our reputation. Read what your neighbours across Nottingham, West Bridgford, Beeston, and beyond have to say about our roofing work.",
  },
  platforms: [
    { name: "Google", count: 127, rating: 5.0, logo: "google" },
    { name: "Checkatrade", count: 98, rating: 4.9, logo: "checkatrade" },
  ],
  testimonials: [
    {
      id: "review-1",
      name: "Sarah T.",
      location: "West Bridgford, NG2",
      jobType: "Full Roof Replacement",
      rating: 5,
      date: "2026-01-15",
      text: "Elite Roofing replaced our entire roof in just 4 days. The team was professional, tidy, and the new roof looks fantastic. James talked us through every option and there was zero pressure. The scaffold came down on day 5 and you'd never know they'd been here — site was immaculate. Couldn't recommend them enough!",
      image: "/images/review-project-1.jpg",
    },
    {
      id: "review-2",
      name: "Mark J.",
      location: "Beeston, NG9",
      jobType: "Flat Roof Repair",
      rating: 5,
      date: "2026-02-28",
      text: "Had a persistent leak on our kitchen extension flat roof that two other companies failed to fix. Elite diagnosed the issue within 10 minutes — it was a failed seam in the old felt. They replaced the whole roof with a new EPDM rubber system. Fair price, excellent workmanship, and not a single leak since. These guys know their trade.",
      image: "/images/review-project-2.jpg",
    },
    {
      id: "review-3",
      name: "David & Lisa P.",
      location: "Mapperley, NG3",
      jobType: "Emergency Storm Repair",
      rating: 5,
      date: "2026-03-10",
      text: "Called at 8pm on a Saturday after Storm Kathleen ripped half a dozen tiles off our roof. Elite's emergency line was answered immediately, and Tom was on our driveway within 45 minutes. He made the roof watertight that night and came back Monday with a full repair. Absolute lifesavers — we'd have had water pouring through the ceiling by morning.",
      image: "/images/review-project-3.jpg",
    },
    {
      id: "review-4",
      name: "Angela R.",
      location: "Carlton, NG4",
      jobType: "Guttering & Fascia Replacement",
      rating: 5,
      date: "2025-11-20",
      text: "The old cast-iron guttering on our Victorian terrace was rotting and pulling away from the wall. Elite replaced the full run with seamless aluminium guttering and new uPVC fascias. The difference is night and day — both in looks and performance. The team were polite, punctual, and left everything spotless. So pleased we chose a local company.",
      image: "/images/review-project-4.jpg",
    },
    {
      id: "review-5",
      name: "Kevin M.",
      location: "Arnold, NG5",
      jobType: "New Roof Installation",
      rating: 5,
      date: "2025-09-05",
      text: "Our 1930s semi needed a complete re-roof — original tiles were crumbling and the loft was getting damp. Elite gave us a detailed quote with no hidden extras, walked us through the materials (we went with Marley tiles), and had the job done in 5 days. The new roof has transformed the house — warmer, drier, and looks brilliant. The 15-year guarantee gives real peace of mind.",
      image: "/images/review-project-5.jpg",
    },
    {
      id: "review-6",
      name: "Rachel & Simon H.",
      location: "Hucknall, NG15",
      jobType: "Chimney Rebuild",
      rating: 5,
      date: "2025-07-18",
      text: "Our chimney was in a dangerous state — bricks were loose and the flashing had completely failed. Elite took it down to the roofline and rebuilt it with new brickwork, lead flashing, and a chimney cowl. The scaffolding was up for a week but the team kept us informed throughout. Professional job from start to finish — and a very reasonable price for the amount of work involved.",
      image: "/images/review-project-6.jpg",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  8. GALLERY PAGE                                                   */
/* ------------------------------------------------------------------ */

export const galleryPage = {
  heading: "Our Recent Roofing Projects",
  subheading:
    "Browse real before-and-after transformations from homes and businesses across Nottinghamshire. Tap a category to filter.",
  filters: [
    { id: "all", label: "All Projects" },
    { id: "roof-repairs", label: "Roof Repairs" },
    { id: "new-roofs", label: "New Roofs" },
    { id: "flat-roofs", label: "Flat Roofs" },
    { id: "guttering", label: "Guttering" },
    { id: "emergency", label: "Emergency" },
  ],
  projects: [
    {
      id: "gallery-1",
      category: "new-roofs",
      jobType: "Full Roof Replacement",
      location: "West Bridgford, NG2",
      description: "Complete strip and re-roof on a 1960s detached house. Marley Modern tiles with breathable membrane.",
      before: { src: "/images/before-project-1.jpg", alt: "Original 1960s roof with worn concrete tiles" },
      after: { src: "/images/after-project-1.jpg", alt: "New Marley Modern tile roof installation" },
    },
    {
      id: "gallery-2",
      category: "flat-roofs",
      jobType: "GRP Flat Roof Installation",
      location: "Beeston, NG9",
      description: "Kitchen extension flat roof replacement with GRP fibreglass system. 25-year guarantee.",
      before: { src: "/images/before-project-2.jpg", alt: "Failed felt flat roof with pooling water" },
      after: { src: "/images/after-project-2.jpg", alt: "New GRP fibreglass flat roof" },
    },
    {
      id: "gallery-3",
      category: "roof-repairs",
      jobType: "Chimney Repointing & Flashing",
      location: "Carlton, NG4",
      description: "Chimney stack repointing, new lead flashing, and crown repair on a Victorian terrace.",
      before: { src: "/images/before-project-3.jpg", alt: "Crumbling chimney with failed pointing" },
      after: { src: "/images/after-project-3.jpg", alt: "Fully restored chimney with new leadwork" },
    },
    {
      id: "gallery-4",
      category: "guttering",
      jobType: "Full Guttering Replacement",
      location: "Mapperley, NG3",
      description: "Cast-iron to seamless aluminium guttering conversion on a semi-detached home.",
      before: { src: "/images/before-project-4.jpg", alt: "Rusted cast-iron guttering pulling away from fascia" },
      after: { src: "/images/after-project-4.jpg", alt: "New seamless aluminium guttering installation" },
    },
    {
      id: "gallery-5",
      category: "emergency",
      jobType: "Emergency Storm Repair",
      location: "Arnold, NG5",
      description: "Emergency response to storm damage — 12 tiles replaced and ridge repointed within 24 hours.",
      before: { src: "/images/before-project-5.jpg", alt: "Storm-damaged roof with missing tiles" },
      after: { src: "/images/after-project-5.jpg", alt: "Fully repaired roof with matching tiles" },
    },
    {
      id: "gallery-6",
      category: "new-roofs",
      jobType: "New Slate Roof Installation",
      location: "Nottingham, NG7",
      description: "Full slate roof replacement on a period property using Welsh slate and new lead valleys.",
      before: { src: "/images/before-project-6.jpg", alt: "Worn mixed tile roof on period property" },
      after: { src: "/images/after-project-6.jpg", alt: "New Welsh slate roof installation" },
    },
    {
      id: "gallery-7",
      category: "roof-repairs",
      jobType: "Valley & Ridge Repair",
      location: "Derby, DE24",
      description: "Failed valley gutter replacement and complete ridge re-bedding on a 1970s detached house.",
      before: { src: "/images/before-project-7.jpg", alt: "Failed valley gutter with water staining" },
      after: { src: "/images/after-project-7.jpg", alt: "New valley gutter and repointed ridge" },
    },
    {
      id: "gallery-8",
      category: "flat-roofs",
      jobType: "EDPM Rubber Roof",
      location: "Loughborough, LE11",
      description: "Garage flat roof replacement with Firestone EPDM rubber system. 30+ year lifespan.",
      before: { src: "/images/before-project-8.jpg", alt: "Old damaged felt garage roof" },
      after: { src: "/images/after-project-8.jpg", alt: "New EPDM rubber flat roof on garage" },
    },
    {
      id: "gallery-9",
      category: "guttering",
      jobType: "Guttering & Downpipe Repair",
      location: "Hucknall, NG15",
      description: "Replacement of leaking uPVC guttering with new deep-flow system and extra downpipe.",
      before: { src: "/images/before-project-9.jpg", alt: "Leaking uPVC guttering with overflowing joints" },
      after: { src: "/images/after-project-9.jpg", alt: "New deep-flow guttering installation" },
    },
    {
      id: "gallery-10",
      category: "emergency",
      jobType: "Emergency Flat Roof Repair",
      location: "Mansfield, NG18",
      description: "Same-day emergency repair of a flat roof puncture caused by fallen debris during high winds.",
      before: { src: "/images/before-project-10.jpg", alt: "Punctured flat roof with visible hole" },
      after: { src: "/images/after-project-10.jpg", alt: "Professionally repaired flat roof" },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  9. CONTACT PAGE                                                   */
/* ------------------------------------------------------------------ */

export const contactPage = {
  heading: "Get Your Free Roofing Quote",
  subheading:
    "Fill in the form below or call us directly. We'll get back to you within 2 hours — often sooner.",
  form: {
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Smith" },
      { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "07123 456789" },
      { name: "email", label: "Email Address", type: "email", required: false, placeholder: "john@example.com" },
      { name: "jobType", label: "Job Type", type: "select", required: true },
      { name: "postcode", label: "Postcode", type: "text", required: true, placeholder: "NG7 3AA" },
      { name: "description", label: "Tell us about your project", type: "textarea", required: false, placeholder: "Please describe what you need — e.g. leaking roof, new flat roof, guttering replacement..." },
    ],
    jobTypes: [
      "Roof Repair",
      "New Roof Installation",
      "Flat Roof",
      "Guttering & Drainage",
      "Fascias & Soffits",
      "Emergency Roofing",
      "Chimney Repairs",
      "Other / Not Sure",
    ],
    submitText: "Send My Free Quote Request",
    successMessage: "Thank you! We'll be in touch within 2 hours.",
    successSubtext: "One of our roofing experts will call you back shortly to discuss your project and arrange a free, no-obligation site visit.",
  },
  directContact: {
    heading: "Prefer to Speak Directly?",
    phoneLabel: "Call Us Now",
    whatsappLabel: "Chat on WhatsApp",
    emailLabel: "Send an Email",
    workingHoursLabel: "Working Hours",
  },
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9607.404075801657!2d-1.1742597!3d52.9547832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3d4c8f4a5e3%3A0x3d4b5b6c7d8e9f0a!2sNottingham!5e0!3m2!1sen!2suk!4v1680000000000",
    altText: "Map showing Elite Roofing service coverage area across Nottingham and surrounding regions",
  },
};

/* ------------------------------------------------------------------ */
/*  EXPORT AGGREGATED CONFIG                                           */
/* ------------------------------------------------------------------ */

const siteConfig = {
  companyDetails,
  metadata,
  globalUI,
  homePage,
  servicesPage,
  aboutPage,
  reviewsPage,
  galleryPage,
  contactPage,
};

export default siteConfig;
