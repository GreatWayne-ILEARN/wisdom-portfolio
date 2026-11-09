import { existsSync } from "node:fs";
import path from "node:path";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  const hasResume = existsSync(path.join(process.cwd(), "public", "resume.pdf"));
  return <div className="portfolio-shell"><Sidebar hasResume={hasResume} /><main id="content" tabIndex={-1}><About /><Experience /><Projects /><Contact /><Footer /></main></div>;
}
