import React from "react";

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-left">

                {/* Subtitle */}
                <div className="kicker">Java Full Stack Developer</div>

                {/* Name */}
                <h1>
                    Hi, I'm <span className="neon">Surendra Reddy</span>
                </h1>

                {/* Professional Intro */}
                <p>
                    I am a Java Full Stack Developer experienced in building cloud-based solutions and
                    full-stack web applications. With a background in Electronics and Communication Engineering
                    and hands-on experience at A.V.R Technosoft Solutions, I specialize in Java, Spring Boot,
                    React.js, and Docker.
                    <br /><br />
                    I am passionate about Microservices Architecture and REST API Design, constantly working to
                    build robust, scalable software systems that solve real-world problems.
                    <br /><br />
                    <strong>Core Tech:</strong> Java, Spring Boot, React.js, MySQL, Docker, Microservices.
                </p>

                {/* Buttons */}
                <div className="hero-actions">
                    <a href="/Surendra_Reddy_Resume.pdf" download="Surendra_Reddy_Resume.pdf" className="cta">
                        Resume
                    </a>

                    <a className="btn-outline" href="#projects">View Projects</a>
                </div>
            </div>

            {/* Profile Photo */}
            <div className="hero-right">
                <div className="profile-card">
                    <img src="/profile.jpg" alt="Surendra Reddy" className="avatar" />
                </div>
            </div>
        </section>
    );
}
