"use client";
// import { Github } from 'lucide-react';
import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";


const projects = [
    {
      name: "Game-store project",
      description: "An online marketplace for video games",
      link: "https://game-store-plum.vercel.app/", // Replace with your actual links
      technologies: ["React", "ruby on rails"]
    },
    {
      name: "Job-application",
      description: "Job board and application tracking system",
      link: "https://job-application-smoky.vercel.app/",
      technologies: ["React", "ruby on rails"]
    },
    {
      name: "Classified-ad project",
      description: "Platform for posting and browsing classified advertisements",
      link: "https://classfied-ad.vercel.app/",
      technologies: ["React", "ruby on rails"]
    },
    {
      name: "Blog app",
      description: "Content management system for blogging",
      link: "https://proj-1-delta.vercel.app/",
      technologies: ["React", "ruby on rails"]
    }
  ];

const skills = [
  // Frontend Skills
  { name: "HTML", image: "/skills/html.png" },
  { name: "CSS", image: "/skills/css.png" },
  { name: "JavaScript", image: "/skills/js.jpg" },
  { name: "React.js", image: "/skills/react.png" },
  { name: "TypeScript", image: "/skills/ts.png" },
  { name: "Next.js", image: "/skills/next.png" },
  { name: "Bootstrap", image: "/skills/bootstrap.png" },
  { name: "Tailwind CSS", image: "/skills/tailwind.png" },
  { name: "Redux", image: "/skills/redux.png" },
  { name: "shadcn/ui", image: "/skills/shadcn.png" },
  { name: "aceternity/ui", image: "/skills/ace.png" } ]

  // Backend Skills
  const skills2 =[
  { name: "Django", image: "/skills2/dj.png" },
  { name: "Ruby on Rails", image: "/skills2/rails.png" },
  { name: "MySQL", image: "/skills2/mysql.png" },
  { name: "PostgreSQL", image: "/skills2/mysql.webp" },
  { name: "MongoDB", image: "/skills2/mongo.png" },
  { name: "Java", image: "/skills2/java.png" },
  { name: "Python", image: "/skills2/py.png" },
  { name: "Cpp", image: "/skills2/cpp.png" }]

  const skills3 =[
  // DevOps Skills
  { name: "Git/GitHub", image: "/skills3/github.png" },
  { name: "Vercel", image: "/skills3/vercel.png" },
];


export default function Home() {
  return (
    <>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-auto"
      >  



        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Hi Everyone this is Ahmed
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, My portofolio 
        </div>
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Enjoy 
        </div>



   <div className="flex flex-col items-center justify-center  dark:bg-gray-900 px-6">
  <h1 className="text-3xl md:text-7xl  text-gray-900 dark:text-white text-center mt-20">
    About Me
  </h1>
  <div className="max-w-3xl text-center mt-6 space-y-4">
    <p className="text-lg text-gray-700 dark:text-gray-300">
      Hi, Im <span className="font-semibold text-blue-600 dark:text-blue-400">Ahmed Ismail a 20 years old who loves building a Full-stack apps</span>
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-300">
      A Jordanian <span className="font-semibold">Full-Stack Developer</span> with expertise in 
      <span className="text-blue-600 dark:text-blue-400"> React, Python, Django, Next.js,</span> 
      and <span className="text-blue-600 dark:text-blue-400">Ruby on Rails.</span> 
      I specialize in building <span className="font-semibold">modern, scalable web applications</span> 
   <span className="italic">     with a focus on performance, user experience, and clean code.</span>
    </p>
  </div>
</div>
      </motion.div>
    </AuroraBackground>
  <div className="flex flex-col items-center min-h-screen   dark:from-gray-900 dark:to-gray-800 py-20">
  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white text-center mb-12">
    My Projects
  </h1>
    <div className="bg-amber-50 border-l-4 border-amber-500 dark:bg-amber-900/30 dark:border-amber-500 p-4 my-6 rounded-md shadow-md max-w-6xl mx-auto">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="h-6 w-6 text-amber-500" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-amber-800 dark:text-amber-200">
            Simulator Environment
          </h3>
          <div className="mt-2 text-amber-700 dark:text-amber-300">
            <p className="text-sm">
              Please note that the hosted versions of these projects are running in a simulator environment 
              for demonstration purposes only. For access to the complete, original project source code and documentation, 
              please visit my <a 
                href="https://github.com/ahmedi911" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium underline hover:text-amber-900 dark:hover:text-amber-100 transition-colors"
              >
                GitHub profile
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <a target="_blank"
              href={project.link} 
              key={index}
              className="group block "
            >
              <div className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-md shadow-xl rounded-2xl p-8 h-full transform transition-all duration-300 hover:scale-105 hover:bg-white/40 dark:hover:bg-gray-800/60 border border-transparent hover:border-blue-300 dark:hover:border-blue-500">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                  {project.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
</div>
{/* my skills */}


 <section className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          My Front-end Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl transition-transform transform hover:scale-105"
            >
              <Image 
                src={skill.image} 
                alt={skill.name} 
                width={80} 
                height={80} 
                className="rounded-lg"
              />
              <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


     <section className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          My Back-end Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills2.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl transition-transform transform hover:scale-105"
            >
              <Image 
                src={skill.image} 
                alt={skill.name} 
                width={80} 
                height={80} 
                className="rounded-lg"
              />
              <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          My Devops Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills3.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl transition-transform transform hover:scale-105"
            >
              <Image 
                src={skill.image} 
                alt={skill.name} 
                width={80} 
                height={80} 
                className="rounded-lg"
              />
              <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* contact me */}

     <section id="contact" className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Feel free to reach out to me through any of these platforms!
        </p>

        <div className="flex justify-center space-x-6">
          {/* Instagram */}
          <a href="https://www.instagram.com/itjz2/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 text-3xl transition">
            <FaInstagram />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ahmed-ali-casper-4b187b264" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 text-3xl transition">
            <FaLinkedin />
          </a>

          {/* Facebook */}
          <a href="https://web.facebook.com/profile.php?id=100014602719592" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-3xl transition">
            <FaFacebook />
          </a>

          {/* WhatsApp */}
          

          {/* Email (Gmail) */}
          <a href="mailto:ahmedalicasper@gmail.com" className="text-red-500 hover:text-red-600 text-3xl transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>

{/* <div className="flex gap-6 justify-center items-center pt-10">
  <a href="#" className="text-black text-lg font-semibold hover:text-gray-700 transition duration-300">
    About Me
  </a>
  <a href="#" className="text-black text-lg font-semibold hover:text-gray-700  transition duration-300">
    Projects
  </a>
  <a href="#" className="text-black text-lg font-semibold hover:text-gray-700  transition duration-300">
    Skills
  </a>
  <a href="#" className="text-black text-lg font-semibold hover:text-gray-700  transition duration-300">
    Contact Information
  </a>
</div> */}



    {/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center mt-12">
          About me
        </div>
    <div className="flex flex-col items-center text-center mt-6 pt-6 bg-gray-100 rounded-2xl shadow-lg max-w-xl mx-auto">
    
      <h2 className="text-2xl font-bold text-gray-800">Hi, I’m Ahmed Ismail</h2>
      <p className="text-gray-600 text-lg">
        I’m from <span className="font-semibold">Amman, Jordan</span> 🇯🇴, a passionate full-stack developer who loves turning ideas into reality  
        I enjoy solving challenges, optimizing performance, and constantly learning to improve my skills.
      </p>
      <p className="text-gray-600 text-lg mt-2">
        I believe in writing clean, efficient, and maintainable code while focusing on creating seamless user experiences. My goal is to build impactful solutions that make a difference.
      </p>
      <p className="text-gray-600 text-lg mt-2 flex items-center gap-2">
        🚀 Always open to new opportunities and collaborations—let’s connect!
      </p>
    </div> */}
    </>
  );
}
