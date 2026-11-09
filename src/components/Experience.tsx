import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
export function Badges({ items }: { items: string[] }) {
  if (!items.length) return null;
  return <ul className="badges" aria-label="Technologies">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
function ExperienceCard({ item }: { item: typeof portfolio.experience[number] }) {
  return <li className="experience-card"><span className={`timeline-dot${item.current ? " current" : ""}`} aria-hidden="true" /><div className="experience-date">{item.start} — {item.end}{item.current && <span className="current-label">CURRENT</span>}</div><h3>{item.company}</h3><p className="experience-role">{item.role}</p><ul className="experience-points">{item.points.map((point) => <li key={point}>{point}</li>)}</ul><Badges items={item.tech} /></li>;
}
export default function Experience() {
  return <section id="experience" aria-labelledby="experience-heading"><SectionHeading id="experience" /><ol className="timeline">{portfolio.experience.map((item) => <ExperienceCard key={item.company} item={item} />)}</ol></section>;
}
