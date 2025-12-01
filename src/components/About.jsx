import React from "react";

export default function About() {
    return (
        <section id="about" className="section-card">
            <h2>About</h2>

            <p
                style={{
                    marginTop: 10,
                    color: "#cfeeff",
                    fontSize: "16px",
                    lineHeight: "1.7",
                    whiteSpace: "pre-line"
                }}
            >
                As a Java Full Stack Developer, I specialize in building efficient, user-centric web applications
                using modern technologies. My technical journey includes designing robust architectures, such as a
                scalable E-commerce platform built on Microservices, where I implemented JWT-based authentication
                to ensure secure and reliable communication between services.

                {"\n\n"}

                I enjoy solving real-world problems through clean, maintainable code. One of my key projects is a
                Hotel Room Booking System that automated manual processes and improved booking success rates by
                15% through an enhanced user interface and streamlined workflow.

                {"\n\n"}

                My technical toolkit includes Core Java, Spring Boot, Hibernate, REST APIs, React.js, MySQL, and
                Microservices. I’m committed to continuous learning and have recently completed certifications in
                Java Full Stack Development and MySQL to stay ahead in the evolving tech landscape.
            </p>
        </section>
    );
}
