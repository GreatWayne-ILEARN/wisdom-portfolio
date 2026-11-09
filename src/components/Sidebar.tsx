import { ArrowDownToLine, CodeXml as Github, BriefcaseBusiness as Linkedin, Mail, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Navigation from "./Navigation";
export default function Sidebar({ hasResume }: { hasResume: boolean }) {
  return <header className="sidebar"><div><a href="#about" className="monogram" aria-label="Wisdom Adegboyega — home">w<span>.</span></a><p className="eyebrow introduction-label">ENGINEERING WITH INTENTION</p><h1>{portfolio.name.split(" ").map((name) => <span key={name}>{name}{" "}</span>)}</h1><p className="role">{portfolio.role}<span className="role-period">.</span></p><p className="tagline">{portfolio.tagline}</p><p className="supporting">{portfolio.supporting}</p><p className="location"><MapPin size={14} aria-hidden="true" />{portfolio.location}<span className="location-divider" aria-hidden="true">/</span><span className="remote-note">{portfolio.remoteNote}</span></p><Navigation />{hasResume && <a className="resume-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">View résumé<ArrowDownToLine size={15} aria-hidden="true" /></a>}</div><div className="sidebar-bottom"><div className="social-links"><a href={portfolio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={21} /></a><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={21} /></a><a href={portfolio.email} aria-label="Email Wisdom"><Mail size={21} /></a><span className="social-rule" /></div></div></header>;
}



