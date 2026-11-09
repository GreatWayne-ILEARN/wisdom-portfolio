import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
export default function Contact() {
  return <section id="contact" aria-labelledby="contact-heading"><SectionHeading id="contact" /><div className="contact-panel"><span className="eyebrow"><span className="status-dot" />OPEN TO WHAT’S NEXT</span><h3>{portfolio.contact.heading}</h3><p>{portfolio.contact.text}</p><a className="contact-cta" href={portfolio.email}>{portfolio.contact.cta}<ArrowUpRight size={18} aria-hidden="true" /></a></div></section>;
}
