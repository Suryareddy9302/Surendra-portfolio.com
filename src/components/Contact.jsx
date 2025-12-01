import React from "react";

export default function Contact() {
    const contacts = [
        {
            title: "Email",
            value: "venna7586@gmail.com",
            link: "mailto:venna7586@gmail.com",
            icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png"
        },
        {
            title: "Phone",
            value: "+91 6302141977",
            link: "tel:+916302141977",
            icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png"
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/surendra-reddy-venna",
            link: "https://www.linkedin.com/in/surendra-reddy-venna",
            icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
        },
        {
            title: "GitHub",
            value: "github.com/Suryareddy9302",
            link: "https://github.com/Suryareddy9302",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png"
        }
    ];

    return (
        <section id="contact" className="section-card">
            <h2>Contact</h2>

            <div className="contact-grid">
                {contacts.map((c, i) => (
                    <a
                        href={c.link}
                        key={i}
                        className="contact-card contact-with-icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={c.icon} alt={c.title} className="contact-icon" />
                        <div>
                            <strong>{c.title}</strong>
                            <p className="contact-value">{c.value}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
