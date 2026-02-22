import React from "react";
import Navbar from "./components/navbar";
import Home from "./home";
import About from "./About";
import Project from "./Project";
import Resume from "./components/Resume";
import Contact from "./Contact";
import Footer from "./footer";
import { Routes, Route } from "react-router-dom";
const tools = [
  {
    name: "n8n",
    img: "https://hdrobots.com/wp-content/uploads/2024/01/n8n-logo-1.png",
    description:
      "Automate your workflows with AI-powered solutions using n8n. Streamline tasks, enhance productivity, and integrate various services seamlessly.",
  },
  {
    name: "Shopify",
    img: "https://tse3.mm.bing.net/th/id/OIP.q1Cr9RBjJP2f49hwp53YTgHaFG?rs=1",
    description:
      "Build and manage your online store with Shopify. Create a seamless shopping experience for your customers.",
  },
  {
    name: "WordPress",
    img: "https://th.bing.com/th/id/OIP.0BPhKLRK4Q_I88FyYBt7dAHaEo?rs=1",
    description:
      "Create stunning websites and blogs with WordPress. Customize your site with themes and plugins to suit your needs.",
  },
  {
    name: "Figma",
    img: "https://tse3.mm.bing.net/th/id/OIP.EELRTA8uIS_1wVnRelrBGAHaHa?rs=1",
    description:
      "Design user interfaces and prototypes collaboratively with Figma. Bring your ideas to life with powerful design tools.",
  },
  {
    name: "Web Development",
    img: "https://cdn.dribbble.com/users/2592071/screenshots/7327591/logo-artboard_2_4x.png",
    description:
      "Develop modern and responsive websites using the latest web development technologies and frameworks.",
  },
  {
    name: "Canva",
    img: "https://tse3.mm.bing.net/th/id/OIP.-hD7PkGmcxOotO4qUHZCQAHaHa?rs=1",
    description:
      "Create stunning graphics and visual content easily with Canva's intuitive design platform.",
  },
];


const projects = [
{
  title: "N8N VOICE CALLING AGENT",
  img: "https://th.bing.com/th/id/OIP.4kSdUTzdUzPhQvRT-eW7VgHaEf?rs=1",
  description: "Builted an n8n-based voice calling agent to automate customer interactions efficiently. It integrates multiple channels, handling inbound and outbound calls with dynamic workflows. Designed to streamline communication, reduce manual effort, and enhance user engagement.",
  github: "#",
  live: "#",
},
  {
    title: "SHOPIFY WEBSITE",
    img: "https://www.wedowebapps.com/wp-content/uploads/2021/01/Shopify_Website_Design.jpg",
    description: "Developed a Shopify e-commerce website with a seamless shopping experience and responsive designIntegrated payment gateways, inventory management, and user-friendly navigation.Optimized for conversions, speed, and mobile-first performance to drive online sales.",
    github: "#",
    live: "#",
  },
  {
    title: "N8N SOCIAL MEDIA AUTOMATION",
    img: "https://tse2.mm.bing.net/th/id/OIP.PKjOuIL9AVjvoKRhAKaTxgHaE7?rs=1",
    description: "Built an n8n automation system to fetch and post reels and images for restaurants.\nAutomates content updates across social media, saving time and ensuring consistent engagement.\nIntegrated dynamic workflows for scheduling, formatting, and real-time posting. Automates content updates across social media, saving time and ensuring consistent engagement.",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    img: "https://marketplace.canva.com/EAFwckKNjDE/2/0/1600w/canva-black-white-grayscale-portfolio-presentation-vzScEqAI__M.jpg",
    description: "Developed a personal portfolio website showcasing projects, skills, and professional experience Built with modern web technologies and responsive design for seamless user experience.Integrated dynamic navigation, interactive components, and visually appealing UI to engage visitors",
    github: "#",
    live: "#",
  },
  {
    title: "ASTRO WEB APP",
    img: "https://cdn.dribbble.com/users/9186591/screenshots/19185123/media/e52cf16b4ba9101befe7cabb2379dedc.png",
    description: "Astrology web app using a prompt-based input (probably like ChatGPT style) where users can enter their birth date and get features like Rashi (zodiac), age, and other details. Here’s a concise plan and example implementation for your portfolio:",
    github: "#",
    live: "#",
  },
  {
    title: "CANVAS LOGO DESIGN",
    img: "https://tse2.mm.bing.net/th/id/OIP.By2PzgMZ-6AdKPnirKGe8wHaHa?rs=1",
    description: "Designed an interactive logo and resume using HTML5 Canvas for dynamic visuals and animations.Showcases creativity and technical skills, with an engaging and modern user experience.    Built to highlight personal branding while maintaining professional presentation for portfolio visitors.",
    github: "#",
    live: "#",
  },
];


function App() {
  return (
    <div>
  
      <Navbar />

      <Routes>

        {/* HOME PAGE WITH ALL SECTIONS */}
        <Route
          path="/"
          element={
            <>
              <Home />

              <section className="mom">
                <h2>What I Do</h2>

                <div className="skills">
                  {tools.map((tool, index) => (
                    <About
                      key={index}
                      name={tool.name}
                      img={tool.img}
                      description={tool.description}
                    />
                  ))}
                </div>
              </section>

              <section className="projects-section">
                <p>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                <h2>My Projects</h2>

                <div className="projects">
                  {projects.map((project, index) => (
                    <Project key={index} {...project} />
                  ))}
                </div>
              </section>
            </>
          }
        />

        {/* RESUME PAGE */}
        <Route path="/resume" element={<Resume />} />
        
        {/* CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />

      </Routes>
        <Resume />
        <Contact />

      <Footer />
    </div>
  );
}

export default App;

