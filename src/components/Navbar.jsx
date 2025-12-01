import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "about", "skills", "projects", "contact"];
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActive(id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="navbar">
            <div className="brand">
                <div className="logo-dot"></div>
                <h1>Surendra Reddy</h1>
            </div>

            <ul className="nav-links">
                {["hero", "about", "skills", "projects", "contact"].map((item) => (
                    <li key={item}>
                        <button
                            className={active === item ? "nav-active" : ""}
                            onClick={() => scrollToSection(item)}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    </li>
                ))}

                <li>
                    <a href="/Surendra_Reddy_Resume.pdf" download="Surendra_Reddy_Resume.pdf" className="cta">
                        Resume
                    </a>

                </li>
            </ul>
        </header>
    );
}
