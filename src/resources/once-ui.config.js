// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://argon.aroice.in";

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light | system
  neutral: "gray", // sand | gray | slate
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 40,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "ARGON: Your Shield Against Chaos",
    description:
      "A powerful productivity Chrome extension designed to enhance your digital habits and protect you from online distractions. Take control of your browsing experience with intelligent website blocking, screen time analytics, and digital wellbeing tools.",
    image: "/images/og/home.jpg",
    canonical: "https://argon.aroice.in",
    robots: "index,follow",
    alternates: [{ href: "https://argon.aroice.in", hrefLang: "en" }],
  },
  features: {
    path: "/features",
    title: "Features - ARGON: Productivity Chrome Extension",
    description:
      "Discover ARGON's powerful features: intelligent website blocking, screen time analytics, doom scroll blocker, pomodoro timer, and digital wellbeing reminders to boost your productivity.",
    image: "/images/og/features.jpg",
    canonical: "https://argon.aroice.in/features",
    robots: "index,follow",
  },
  support: {
    path: "/support",
    title: "Support - ARGON Chrome Extension Help",
    description:
      "Get help with ARGON Chrome extension. Find documentation, report bugs, contact support, and learn how to maximize your productivity with our digital wellbeing tools.",
    image: "/images/og/home.jpg", // Using home.jpg until support-specific image is created
    canonical: "https://argon.aroice.in/support",
    robots: "index,follow",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy - ARGON Chrome Extension",
    description:
      "Learn how ARGON protects your privacy. All data stays local on your device - no tracking, no external servers, no ads. Complete privacy policy for our productivity extension.",
    image: "/images/og/privacy.jpg",
    canonical: "https://argon.aroice.in/privacy",
    robots: "index,follow",
  },
  terms: {
    path: "/terms",
    title: "Terms of Service - ARGON Chrome Extension",
    description:
      "Terms of service for ARGON productivity Chrome extension. Open source, MIT licensed digital wellbeing and website blocking tool.",
    image: "/images/og/terms.jpg",
    canonical: "https://argon.aroice.in/terms",
    robots: "index,follow",
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "/images/icons/icon.svg",
  type: "Organization",
  name: "ARGON",
  description: meta.home.description,
  email: "admin@aroice.in",
};

// social links
const social = {
  github: "https://github.com/aroice-hq/argon",
  twitter: "https://www.twitter.com/aryantechie",
  linkedin: "https://ie.linkedin.com/in/aryantechie",
  instagram: "https://instagram.com/aryantechie",
  website: "https://aroice.in",
  chromeStore: "https://chromewebstore.google.com/detail/argon-your-shield-against/nnliabhpkoclcmdmbilkgilphffcmiih",
};

export { baseURL, fonts, style, meta, schema, social, effects, dataStyle };
