import { portfolio } from "@/data/portfolio";
export default function SectionHeading({ id }: { id: string }) {
  const index = portfolio.navigation.findIndex((item) => item.id === id);
  return <h2 id={`${id}-heading`} className="section-heading"><span className="section-number">0{index + 1}</span>{portfolio.navigation[index].label}<span className="heading-rule" /></h2>;
}
