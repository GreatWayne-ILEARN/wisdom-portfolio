"use client";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

export default function Navigation() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const visible = new Set<string>();
    let footerVisible = false;
    const updateActive = () => {
      if (footerVisible) {
        setActive("contact");
        return;
      }
      const first = portfolio.navigation.find((item) => visible.has(item.id));
      if (first) setActive(first.id);
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      }
      updateActive();
    }, { rootMargin: "-12% 0px -35% 0px", threshold: 0 });
    portfolio.navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    // The final section cannot always reach the activation band on tall screens.
    const footerObserver = new IntersectionObserver((entries) => {
      footerVisible = entries.some((entry) => entry.isIntersecting);
      updateActive();
    });
    const footer = document.querySelector("footer");
    if (footer) footerObserver.observe(footer);
    return () => { observer.disconnect(); footerObserver.disconnect(); };
  }, []);
  return <nav className="section-nav" aria-label="Portfolio sections">{portfolio.navigation.map(({ id, label }, i) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setActive(id)}><span className="nav-line" aria-hidden="true" /><span className="nav-index" aria-hidden="true">0{i + 1}</span>{label}</a>)}</nav>;
}
