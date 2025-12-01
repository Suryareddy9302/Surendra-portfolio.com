import React, { useState } from "react";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Hotel Room Booking System",
            desc: "A full-stack hotel reservation system that automates room booking, availability checks, and admin management.",
            full: `
        • Developed a complete end-to-end Hotel Room Booking System using Java, Spring Boot, MySQL, and React.js.
        • Implemented real-time room availability tracking with optimized database queries.
        • Eliminated manual entry by around 80% through automated booking flows.
        • Improved successful booking completion rate by 15% after redesigning UI/UX.
        • Admin panel built for managing rooms, users, and booking status.
        • Added robust error handling and form validations.
        • Integrated REST APIs with pagination, sorting, and filtering for better performance.
        • Role-based authentication & encrypted user passwords.
        • Frontend developed with React.js for fast and interactive booking experience.
      `,
            tech: "Java, Spring Boot, MySQL, React.js, REST API, Hibernate"
        },

        {
            title: "E-Commerce Microservices Application",
            desc: "A scalable e-commerce platform built with microservices and secure JWT-based authentication.",
            full: `
        • Designed and developed a scalable E-commerce system using Microservices Architecture.
        • Built Product, Order, and User services using Spring Boot and REST APIs.
        • Implemented JWT-based authentication ensuring secure API communication.
        • Configured API Gateway and Service Registry (Eureka/Nginx).
        • Dockerized all services and orchestrated them using Docker Compose for environment consistency.
        • Implemented async communication using Feign Client and Load Balancing with Spring Cloud.
        • Designed MySQL schema supporting multiple product categories, orders, and user roles.
        • Built responsive React.js UI for browsing products, cart management, and order processing.
        • Applied Circuit Breaker using Resilience4j for fault tolerance.
      `,
            tech: "Java, Spring Boot Microservices, React.js, JWT, Docker, MySQL, Spring Cloud"
        },

        {
            title: "Real-Time Chat Messaging Application",
            desc: "A WebSocket-based chat application with instant messaging and user authentication.",
            full: `
        • Built a real-time chat application supporting instant messaging using Spring Boot WebSockets.
        • Enabled live chat updates with <100ms message delivery latency.
        • Implemented secure user authentication and session management.
        • Messages stored in MySQL for history retrieval and persistence.
        • Added online/offline status visibility with presence tracking.
        • React.js frontend featuring an auto-scrolling message container.
        • Designed scalable architecture supporting 100+ concurrent users.
        • Built typing indicators and message read confirmation system.
        • Included admin dashboard for monitoring active chats and message logs.
      `,
            tech: "Java, Spring Boot WebSockets, React.js, MySQL, STOMP, SockJS"
        },

        {
            title: "Portfolio Website (This Website)",
            desc: "A modern personal portfolio with animations, neon UI, modals, and reusable React components.",
            full: `
        • Designed a responsive and animated portfolio using React.js and CSS3.
        • Built custom components for Hero, About, Skills, Projects, and Contact.
        • Created neon-dark theme with glowing effects, hover animations, and modals.
        • Integrated downloadable resume button and interactive project pop-up explanations.
        • Fully mobile responsive and optimized for performance.
        • Implemented smooth scrolling and active-navbar highlighting.
      `,
            tech: "React.js, CSS3, JavaScript, UI/UX Design"
        }
    ];

    return (
        <section id="projects" className="section-card">
            <h2>Projects</h2>

            <div className="project-grid">
                {projects.map((p, index) => (
                    <div
                        key={index}
                        className="project"
                        onClick={() => setSelectedProject(p)}
                    >
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <p style={{ fontSize: "13px", marginTop: "6px", opacity: 0.7 }}>
                            <strong>Tech Used:</strong> {p.tech}
                        </p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedProject.title}</h2>

                        <p className="modal-text">
                            {selectedProject.full.split("•").map(
                                (line, i) =>
                                    line.trim() !== "" && (
                                        <li key={i} style={{ marginBottom: "8px" }}>
                                            {line}
                                        </li>
                                    )
                            )}
                        </p>

                        <button className="modal-close" onClick={() => setSelectedProject(null)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
