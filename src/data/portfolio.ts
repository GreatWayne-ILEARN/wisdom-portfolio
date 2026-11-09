export const portfolio = {
  name: "Wisdom Adegboyega", role: "Frontend Engineer", location: "Lagos, Nigeria", remoteNote: "Open to international remote roles",
  tagline: "I build reliable, intuitive web applications with React, Next.js, and TypeScript.",
  supporting: "I also bring frontend engineering expertise to cross-platform mobile applications with React Native.",
  email: "mailto:ubani.hub@gmail.com", github: "https://github.com/GreatWayne-ILEARN", linkedin: "https://www.linkedin.com/in/adegboyega-wisdom",
  navigation: [{ id: "about", label: "About" }, { id: "experience", label: "Experience" }, { id: "projects", label: "Projects" }, { id: "contact", label: "Contact" }],
  about: ["I'm a frontend engineer who enjoys turning complex product requirements into intuitive, reliable web experiences. My work spans fintech, real estate and logistics, where I've built interactive dashboards, integrated backend APIs and developed multi-step user workflows.", "I primarily work with React, Next.js, JavaScript and TypeScript. I also develop cross-platform mobile applications using React Native and Expo.", "I care about accessibility, maintainability, thoughtful UI details and making applications easier for people to use."],
  skills: [{ label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"] }, { label: "Mobile", items: ["React Native", "Expo"] }, { label: "Testing & Tools", items: ["Jest", "Playwright", "Git", "GitHub"] }],
  experience: [
    { company: "Imovelle", role: "Frontend Engineer", start: "March 2026", end: "Present", current: true, points: ["Built frontend interfaces for property workflows.", "Integrated property and vendor APIs into frontend workflows.", "Implemented multi-step forms for property-related workflows.", "Contributed to testing and browser caching."], tech: [] },
    { company: "WorkplacePay", role: "Frontend Engineer", start: "April 2026", end: "August 2026", current: false, points: ["Developed frontend interfaces for employee dashboards and billing.", "Contributed to transaction analytics and Paystack integrations.", "Investigated wallet integration issues."], tech: [] },
    { company: "UEI Couriers", role: "Frontend Engineer", start: "September 2024", end: "October 2025", current: false, points: ["Led frontend development for a freight and logistics platform.", "Connected the shipping-cost calculator to freight-pricing APIs.", "Refined core platform screens for usability and visual consistency.", "Delivered the website within the agreed timeline."], tech: ["React", "Next.js", "JavaScript", "Tailwind CSS"] },
  ],
  projects: [
    { name: "UEI Couriers", category: "LOGISTICS · WEB PLATFORM", description: "Freight and logistics platform with shipping-cost estimation.", contribution: "Led frontend development, integrated freight-pricing APIs, revamped platform screens.", tech: ["React", "Next.js", "JavaScript", "Tailwind CSS"], live: "https://ueicouriers.com/", repository: null, preview: "logistics", featured: true, screenshot: { src: "/images/projects/uei-couriers.png", alt: "UEI Couriers website showing ocean, road and airplane freight services." }, wip: false },
    { name: "Personal Finance Hub", category: "PERSONAL PROJECT · WEB APP", description: "A personal finance dashboard designed to help users track expenses and understand their spending through a clear, organized interface.", contribution: null, tech: ["React", "Vite", "Supabase"], live: "https://wanefinance.netlify.app", repository: "https://github.com/GreatWayne-ILEARN/personal-finance-hub", preview: "finance", featured: true, screenshot: { src: "/images/projects/personal-finance-hub.png", alt: "Personal Finance Hub dashboard showing spending categories and recent expenses." }, wip: false },
    { name: "The New Pulse", category: "NEWS · WEB FRONTEND", description: "Work-in-progress news frontend with API-driven stories and reusable UI components.", contribution: null, tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Query", "Redux Toolkit"], live: null, repository: "https://github.com/GreatWayne-ILEARN/The-New-Pulse", preview: "news", featured: false, screenshot: null as { src: string; alt: string } | null, wip: true },
  ],
  contact: { heading: "Let's build something meaningful.", text: "I'm open to remote frontend engineering opportunities and conversations about building useful digital products.", cta: "Say Hello" },
  availability: "Open to remote opportunities", footer: "Designed and built by Wisdom Adegboyega.",
  seo: { title: "Wisdom Adegboyega | Frontend Engineer", description: "Frontend engineer based in Lagos, Nigeria, specializing in React, Next.js and TypeScript. Explore work across fintech, real estate and logistics." },
};





