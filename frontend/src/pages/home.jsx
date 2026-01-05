import { useEffect, useRef, useState } from "react";
import "../Styles/home.css";

const sections = [
  {
    title: "Welcome 👋",
    text: "Your trusted Doorstep Mechanic service",
  },
  {
    title: "Fast & Reliable",
    text: "Vehicle services right at your doorstep",
  },
  {
    title: "Anytime, Anywhere",
    text: "Book mechanics with just a few clicks",
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = containerRef.current.scrollTop;
      const index = Math.round(scrollY / window.innerHeight);
      setActive(Math.min(index, sections.length - 1));
    };

    const el = containerRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-wrapper" ref={containerRef}>
      
      {/* KEY IS THE MAGIC */}
      <div className="content" key={active}>
        <h1 className="fade">{sections[active].title}</h1>
        <p className="fade delay">{sections[active].text}</p>
      </div>

      {/* Creates scroll space */}
      <div style={{ height: `${sections.length * 100}vh` }} />
    </div>
  );
}