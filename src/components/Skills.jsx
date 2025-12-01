import React from "react";

export default function Skills() {
    const skillGroups = [
        {
            title: "Programming Languages",
            items: [
                { name: "Core Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            ]
        },

        {
            title: "Core Concepts",
            items: [
                { name: "Microservices", icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-microservice-cloud-computing-flaticons-lineal-color-flat-icons.png" },
                { name: "REST API Design", icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png" },
                { name: "Collections", icon: "https://cdn-icons-png.flaticon.com/512/2866/2866576.png" },
                { name: "MVC Architecture", icon: "https://cdn-icons-png.flaticon.com/512/906/906343.png" },
            ]
        },

        {
            title: "Frameworks",
            items: [
                { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                { name: "Spring Web", icon: "https://cdn-icons-png.flaticon.com/512/875/875209.png" },
                { name: "Spring Data JPA", icon: "https://cdn-icons-png.flaticon.com/512/2798/2798007.png" },
                { name: "Spring JDBC", icon: "https://cdn-icons-png.flaticon.com/512/2769/2769109.png" },
                { name: "Spring Data REST", icon: "https://cdn-icons-png.flaticon.com/512/3011/3011119.png" },
            ]
        },

        {
            title: "Web Technologies",
            items: [
                { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            ]
        },

        {
            title: "Databases",
            items: [
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            ]
        },

        {
            title: "Developer Tools",
            items: [
                { name: "IntelliJ IDEA", icon: "https://resources.jetbrains.com/storage/products/company/brand/logos/IntelliJ_IDEA_icon.svg" },
                { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
                { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
            ]
        },

        {
            title: "Productivity Tools",
            items: [
                { name: "MS Word", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/word/word-original.svg" },
                { name: "MS PowerPoint", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerpoint/powerpoint-original.svg" },
            ]
        },

        {
            title: "Version Control",
            items: [
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            ]
        },
    ];

    return (
        <section id="skills" className="section-card">
            <h2>Skills</h2>

            <div className="skill-category-wrapper">
                {skillGroups.map((group, index) => (
                    <div className="skill-category" key={index}>
                        <h3 className="skill-category-title">{group.title}</h3>

                        <div className="skills-grid">
                            {group.items.map((s, i) => (
                                <div key={i} className="skill-pill skill-with-icon">
                                    <img src={s.icon} alt={s.name} className="skill-icon" />
                                    <span>{s.name}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
