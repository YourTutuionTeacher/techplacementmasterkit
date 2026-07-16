// ============================================================
// Central content source for the Tech Placement Master Kit 2026
// landing page. Edit copy here — components read from this file.
// ============================================================

export const companies: string[] = [
  "Google",
  "Amazon",
  "Microsoft",
  "Adobe",
  "Oracle",
  "IBM",
  "TCS",
  "Infosys",
  "Wipro",
  "Accenture",
  "Cognizant",
  "Capgemini",
  "Flipkart",
  "PhonePe",
  "Samsung",
  "NVIDIA",
  "Zoho",
  "Qualcomm",
  "Cisco",
  "Intel",
];

export const stats = [
  { value: 30, suffix: "+", label: "Top Companies Covered" },
  { value: 5000, suffix: "+", label: "Practice Questions" },
  { value: 300, suffix: "+", label: "Coding Problems" },
  { value: 150, suffix: "+", label: "HR Questions" },
  { value: 100, suffix: "+", label: "SQL Questions" },
  { value: 50, suffix: "+", label: "Resume Templates" },
];

export type Feature = {
  title: string;
  description: string;
  icon:
    | "building"
    | "trending"
    | "code"
    | "map"
    | "file"
    | "check"
    | "linkedin"
    | "clipboard"
    | "wallet"
    | "mic"
    | "folder"
    | "route"
    | "calculator"
    | "brain"
    | "message"
    | "database"
    | "server"
    | "cpu"
    | "network"
    | "layers"
    | "users";
};

export const features: Feature[] = [
  {
    title: "Company-Wise Preparation",
    description:
      "Dedicated prep tracks for 30+ companies, structured around what each one actually asks.",
    icon: "building",
  },
  {
    title: "Latest Hiring Process",
    description:
      "Updated 2026 hiring rounds and timelines so you know exactly what's ahead.",
    icon: "trending",
  },
  {
    title: "Coding Questions",
    description:
      "300+ hand-picked coding problems with clean explanations, not just answers.",
    icon: "code",
  },
  {
    title: "DSA Roadmap",
    description:
      "A structured path through arrays to graphs, ordered the way interviewers expect.",
    icon: "map",
  },
  {
    title: "Resume Templates",
    description:
      "50+ ATS-friendly templates for freshers, switchers, and experienced roles.",
    icon: "file",
  },
  {
    title: "ATS Resume Guide",
    description: "Learn exactly how applicant tracking systems parse and rank your resume.",
    icon: "check",
  },
  {
    title: "LinkedIn Guide",
    description: "Turn your profile into a recruiter magnet with a step-by-step playbook.",
    icon: "linkedin",
  },
  {
    title: "OA Preparation",
    description: "Practice sets modeled on real online assessment formats and time limits.",
    icon: "clipboard",
  },
  {
    title: "Salary Information",
    description: "Realistic 2026 salary bands by role, level, and company tier.",
    icon: "wallet",
  },
  {
    title: "Mock Interview Questions",
    description: "500+ real interview questions collected from recent candidate experiences.",
    icon: "mic",
  },
  {
    title: "Projects",
    description: "Resume-ready project ideas with scope, tech stack, and talking points.",
    icon: "folder",
  },
  {
    title: "Placement Roadmap",
    description: "A day-by-day plan that tells you exactly what to study and when.",
    icon: "route",
  },
  {
    title: "Aptitude",
    description: "Quant and logical aptitude drills matching real OA difficulty.",
    icon: "calculator",
  },
  {
    title: "Reasoning",
    description: "Verbal and non-verbal reasoning sets with timed practice.",
    icon: "brain",
  },
  {
    title: "Verbal Ability",
    description: "Grammar, vocabulary, and comprehension built for placement tests.",
    icon: "message",
  },
  {
    title: "SQL",
    description: "100+ SQL questions from basic joins to window functions.",
    icon: "database",
  },
  {
    title: "DBMS",
    description: "Core database concepts explained the way interviewers probe them.",
    icon: "server",
  },
  {
    title: "Operating Systems",
    description: "Processes, threads, memory, and scheduling — interview-ready notes.",
    icon: "cpu",
  },
  {
    title: "Computer Networks",
    description: "OSI, TCP/IP, and networking fundamentals condensed for interviews.",
    icon: "network",
  },
  {
    title: "System Design",
    description: "Beginner-friendly system design primer for entry to mid-level rounds.",
    icon: "layers",
  },
  {
    title: "Behavioral Interviews",
    description: "STAR-method frameworks and sample answers for HR and behavioral rounds.",
    icon: "users",
  },
];

export type CompanyPrepEntry = {
  company: string;
  rounds: string;
  focus: string;
  roadmap: string;
};

export const companyPrepDetails: CompanyPrepEntry[] = [
  {
    company: "Google",
    rounds: "OA → 2 Technical Rounds → Googleyness & Leadership",
    focus: "DSA depth, clean code, and structured problem-solving communication.",
    roadmap: "6-week DSA sprint + 2 mock interviews per week.",
  },
  {
    company: "Amazon",
    rounds: "OA → 2 Technical Rounds → Bar Raiser",
    focus: "DSA plus the 16 Leadership Principles woven into every answer.",
    roadmap: "4-week DSA + dedicated Leadership Principles story bank.",
  },
  {
    company: "Microsoft",
    rounds: "OA → 2-3 Technical Rounds → HR",
    focus: "Core CS fundamentals, DSA, and system design basics for SDE-2+.",
    roadmap: "5-week plan covering DSA, OS, and one system design refresher.",
  },
  {
    company: "TCS",
    rounds: "TCS NQT → Technical Interview → HR",
    focus: "Aptitude, verbal ability, and basic coding fundamentals.",
    roadmap: "2-week aptitude sprint + fundamentals brush-up.",
  },
  {
    company: "Infosys",
    rounds: "InfyTQ / OA → Technical → HR",
    focus: "Programming fundamentals, logical reasoning, and communication.",
    roadmap: "3-week plan blending aptitude with basic DSA.",
  },
  {
    company: "Flipkart",
    rounds: "OA → 2 Technical Rounds → Hiring Manager",
    focus: "DSA, product thinking for SDE roles, and system design basics.",
    roadmap: "5-week DSA-heavy plan with 2 system design sessions.",
  },
];

export const timeline = [
  {
    range: "Week 1",
    title: "Foundation",
    points: [
      "DSA fundamentals: arrays, strings, linked lists, stacks, queues",
      "Aptitude and reasoning daily drills",
      "Resume draft using ATS-friendly templates",
    ],
  },
  {
    range: "Week 2",
    title: "Core Build-Up",
    points: [
      "Trees, graphs, and recursion patterns",
      "SQL and DBMS fundamentals",
      "LinkedIn profile setup and optimization",
    ],
  },
  {
    range: "Week 3",
    title: "Interview Practice",
    points: [
      "Dynamic programming and problem-solving patterns",
      "Company-specific mock interviews begin",
      "OS and Computer Networks revision",
    ],
  },
  {
    range: "Week 4",
    title: "Interview-Ready",
    points: [
      "Company-specific OA simulations and final mocks",
      "System design basics and behavioral story bank",
      "Final resume polish and salary negotiation prep",
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  rating: number;
  quote: string;
};

// NOTE: These are written as illustrative placeholders. Before launch, swap
// the `quote` text for each person's actual words — displaying invented
// quotes under real names as reviews can be misleading/non-compliant if
// they aren't genuine. Update freely once you have their real feedback.
export const testimonials: Testimonial[] = [
  {
    name: "Rahul",
    role: "LNCT, Bhopal",
    rating: 5,
    quote:
      "The company-wise breakdown made my prep so much more focused — I finally knew what to study and when.",
  },
  {
    name: "Sonali",
    role: "IIT Kanpur",
    rating: 5,
    quote:
      "Having DSA, aptitude, and resume templates in one structured kit saved me weeks of searching for scattered resources.",
  },
  {
    name: "Deepti",
    role: "Final-year student",
    rating: 5,
    quote:
      "The mock interview questions and HR round prep gave me real confidence walking into interviews.",
  },
];

export const comparisonRows = [
  { feature: "Structured 90-day roadmap", others: false, kit: true },
  { feature: "Company-wise preparation (30+ companies)", others: false, kit: true },
  { feature: "5000+ curated practice questions", others: false, kit: true },
  { feature: "ATS-optimized resume templates", others: false, kit: true },
  { feature: "Regularly updated for 2026 hiring trends", others: false, kit: true },
  { feature: "Random, unverified PDF notes", others: true, kit: false },
  { feature: "Scattered topics with no roadmap", others: true, kit: false },
  { feature: "One-time static content, rarely updated", others: true, kit: false },
];

export type PricingTier = {
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  highlight: boolean;
  available: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: 99,
    originalPrice: 299,
    description: "Core prep essentials to get started.",
    features: [
      "300+ Coding Problems",
      "DSA Roadmap",
      "Aptitude & Reasoning Set",
      "10 Resume Templates",
      "Lifetime Access",
    ],
    highlight: false,
    available: false,
  },
  {
    name: "Pro",
    price: 199,
    originalPrice: 599,
    description: "The complete placement prep toolkit.",
    features: [
      "Everything in Starter",
      "Company-Wise Preparation (30+ companies)",
      "5000+ Practice Questions",
      "50 Resume Templates",
      "SQL, DBMS, OS & CN Notes",
      "Lifetime Access + Free Updates",
    ],
    highlight: false,
    available: false,
  },
  {
    name: "Ultimate",
    price: 299,
    originalPrice: 999,
    description: "Everything you need, zero gaps.",
    features: [
      "Everything in Pro",
      "System Design Primer",
      "Mock Interview Question Bank",
      "LinkedIn + ATS Resume Guide",
      "Salary Negotiation Guide",
      "Priority Email Support",
      "Lifetime Access + Free Updates",
    ],
    highlight: true,
    available: true,
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "What exactly is the Tech Placement Master Kit 2026?",
    answer:
      "It's a complete digital study kit covering coding interviews, DSA, aptitude, resume building, HR interviews, and company-specific preparation — everything you need for campus and off-campus placements in one download.",
  },
  {
    question: "Is this a physical product or a digital download?",
    answer:
      "It's 100% digital. After purchase, you get instant access to download the complete kit — no shipping, no waiting.",
  },
  {
    question: "Which companies does the kit cover?",
    answer:
      "The kit includes preparation material for 30+ companies including Google, Amazon, Microsoft, TCS, Infosys, Wipro, and more — see the full list in the Trusted Companies section above.",
  },
  {
    question: "Is this kit endorsed by the companies listed?",
    answer:
      "No. The companies listed are shown only to indicate which companies this guide helps you prepare for. This kit is an independent preparation resource and is not affiliated with, endorsed by, or sponsored by any of the companies mentioned.",
  },
  {
    question: "Is this suitable for beginners with no coding background?",
    answer:
      "Yes. The DSA roadmap starts from fundamentals and builds up progressively, so it works whether you're just starting out or brushing up before interviews.",
  },
  {
    question: "How is this different from random PDFs available online?",
    answer:
      "The kit is structured around a clear 90-day roadmap, organized by company and topic, and kept updated for current hiring trends — instead of scattered, outdated notes.",
  },
  {
    question: "Do I get lifetime access?",
    answer:
      "Yes, all plans include lifetime access to your purchased kit along with future content updates at no extra cost.",
  },
  {
    question: "How do I receive the kit after payment?",
    answer:
      "You'll get an instant download link on the success page, plus a confirmation email with your download link for backup access.",
  },
  {
    question: "What if I face an issue with my download?",
    answer:
      "Reach out through the contact email in the footer and our team will resolve it or resend your access link promptly.",
  },
  {
    question: "Can I use this kit for off-campus placements too?",
    answer:
      "Yes. While it covers campus hiring processes in detail, the DSA, aptitude, resume, and interview content applies directly to off-campus and referral-based applications as well.",
  },
  {
    question: "Is the content updated regularly?",
    answer:
      "Yes, the kit is periodically refreshed to reflect current hiring rounds, question trends, and salary data.",
  },
  {
    question: "Does it include resume templates?",
    answer:
      "Yes, depending on your plan you get 10 to 50 ATS-friendly resume templates along with a guide on tailoring them for tech roles.",
  },
  {
    question: "Is there a mock interview question bank?",
    answer:
      "Yes, the Ultimate plan includes a dedicated mock interview question bank covering technical and behavioral rounds.",
  },
  {
    question: "Does the kit cover HR and behavioral interviews?",
    answer:
      "Yes, it includes 150+ HR questions along with STAR-method frameworks for structuring strong behavioral answers.",
  },
  {
    question: "Is SQL and DBMS preparation included?",
    answer:
      "Yes, the Pro and Ultimate plans include 100+ SQL questions and structured DBMS notes commonly asked in technical rounds.",
  },
  {
    question: "What is the difference between the three plans?",
    answer:
      "Starter covers core DSA and aptitude essentials, Pro adds company-wise prep and full question banks, and Ultimate adds system design, mock interviews, and priority support.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, contact support with your original purchase details and you can upgrade by paying the price difference.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes, all payments are processed through a secure, encrypted payment gateway. Card and UPI details are never stored on our servers.",
  },
  {
    question: "Will this guarantee me a job?",
    answer:
      "No preparation kit can guarantee a job offer. This kit is designed to structure and strengthen your preparation so you walk into interviews more confident and better prepared.",
  },
  {
    question: "How do I get support if I have more questions?",
    answer:
      "You can reach out anytime via the contact email listed in the footer, and our team will get back to you as soon as possible.",
  },
];

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "What's Inside", href: "#whats-inside" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
