import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";
export default function Footer() {
  return <footer><p>{portfolio.footer}</p><a href="#about" aria-label="Back to top"><ArrowUp size={17} aria-hidden="true" /></a></footer>;
}
