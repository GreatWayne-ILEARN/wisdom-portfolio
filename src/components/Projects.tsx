import Image from "next/image";
import { ArrowUpRight, CodeXml as Github, Globe, MoveUpRight, Newspaper, Package, Wallet } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Badges } from "./Experience";
import SectionHeading from "./SectionHeading";
function ProjectPreview({ type }: { type: string }) {
  return <div className={`project-preview preview-${type}`} aria-hidden="true"><div className="preview-grid" />{type === "logistics" ? <><div className="route-line route-one" /><div className="route-line route-two" /><span className="route-point point-one" /><span className="route-point point-two" /><span className="preview-icon"><Package size={32} strokeWidth={1.2} /></span><span className="preview-caption">CONNECTED. DELIVERED.</span></> : type === "finance" ? <><span className="preview-icon"><Wallet size={30} strokeWidth={1.2} /></span><div className="finance-bars">{[24, 40, 32, 56, 47, 72, 90].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div></> : <><span className="preview-icon"><Newspaper size={30} strokeWidth={1.2} /></span><div className="news-lines"><i /><i /><i /><i /></div></>}<span className="preview-corner"><MoveUpRight size={16} /></span></div>;
}
export default function Projects() {
  return <section id="projects" aria-labelledby="projects-heading"><SectionHeading id="projects" /><p className="section-intro">A selection of things I’ve helped bring to life.</p><div className="project-list">{portfolio.projects.map((project, i) => <article className={`project-card${project.featured ? " project-featured" : ""}${project.screenshot ? " project-with-screenshot" : ""}`} key={project.name}>{project.screenshot ? <div className={`project-screenshot screenshot-${project.preview}`}><Image src={project.screenshot.src} alt={project.screenshot.alt} fill loading="eager" sizes="(max-width: 767px) 90vw, (max-width: 1100px) 52vw, 624px" className="project-image" /></div> : <ProjectPreview type={project.preview} />}<div className="project-body"><div className="project-meta"><span className="eyebrow">0{i + 1} / {project.category}</span>{project.wip && <span className="wip">Work in Progress</span>}</div><h3><a className="project-primary" href={project.live ?? project.repository!} target="_blank" rel="noopener noreferrer">{project.name}<ArrowUpRight size={19} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></h3><p>{project.description}</p>{project.contribution && <p className="project-contribution">{project.contribution}</p>}<Badges items={project.tech} /><div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer"><Globe size={14} aria-hidden="true" />Live site<ArrowUpRight size={13} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}{project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer"><Github size={14} aria-hidden="true" />Source<ArrowUpRight size={13} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}</div></div></article>)}</div></section>;
}





