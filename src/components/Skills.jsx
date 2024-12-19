import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaAws, FaGitAlt, FaDocker, FaJira, FaGithub, FaLinux, FaBootstrap } from 'react-icons/fa';
import { SiNginx } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiJenkins } from "react-icons/si";
import { FaAngular } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiVercelFill } from "react-icons/ri";

function Skills() {
  const frontend = [
    { name: 'HTML', icon: <FaHtml5 className="text-[#E44D26] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'React.js', icon: <FaReact className="text-[#61DAFB] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Angular', icon: <FaAngular className="text-[#DD0031] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Redux', icon: <FaReact className="text-[#764ABC] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-[#06B6D4] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-[#7952B3] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
  ];

  const backend = [
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Express.js', icon: <FaNodeJs className="text-[#ffffff] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'MongoDB', icon: <FaDatabase className="text-[#47A248] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
  ];

  const devOps = [
    { name: 'AWS', icon: <FaAws className="text-[#FF9900] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Docker', icon: <FaDocker className="text-[#2496ED] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Linux', icon: <FaLinux className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Nginx', icon: <SiNginx className="text-[#009639] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Jenkins', icon: <SiJenkins className="text-[#D24939] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Vercel', icon: <RiVercelFill className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" /> },
  ];

  const tools = [
    { name: 'Jira', icon: <FaJira className="text-[#0052CC] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'VSCode', icon: <VscVscode className="text-[#007ACC] text-5xl group-hover:scale-110 transition-transform duration-300" /> },
  ];

  return (
    <div id="skills" className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Technical Skills
          </span>
        </h2>
        
        <div className="grid gap-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 inline-block pb-2 border-b-2 border-emerald-400/50">
              Frontend Development
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
              {frontend.map((skill, index) => (
                <div key={index} className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  {skill.icon}
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 inline-block pb-2 border-b-2 border-emerald-400/50">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {backend.map((skill, index) => (
                <div key={index} className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  {skill.icon}
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 inline-block pb-2 border-b-2 border-emerald-400/50">
              DevOps
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
              {devOps.map((skill, index) => (
                <div key={index} className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  {skill.icon}
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 inline-block pb-2 border-b-2 border-emerald-400/50">
              Tools
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
              {tools.map((skill, index) => (
                <div key={index} className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  {skill.icon}
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;