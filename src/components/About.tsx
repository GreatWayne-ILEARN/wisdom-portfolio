import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
export default function About() {
  return <section id="about" aria-labelledby="about-heading"><SectionHeading id="about" /><div className="about-copy">{portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="skills"><h3 className="eyebrow">MY TOOLKIT</h3>{portfolio.skills.map(({ label, items }) => <div className="skill-row" key={label}><h4>{label}</h4><p>{items.join(" · ")}</p></div>)}</div></section>;
}
