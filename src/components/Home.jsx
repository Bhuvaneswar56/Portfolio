import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/images/Profile.jpg';

function Home() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 sm:pt-32 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="space-y-8 lg:max-w-xl">
            {/* Available for opportunities tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-sm font-medium">Available for opportunities</span>
            </div>

            {/* Heading Section */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Hi, I'm Bhuvaneswar
                </span>
                <span className="block mt-2">Full Stack Developer</span>
              </h1>

              <p className="text-base lg:text-lg text-gray-300">
              Full-stack developer leveraging 2+ years of AWS experience with comprehensive MERN stack proficiency. Building scalable web applications and monitoring solutions using React.js, Node.js, Express.js, MongoDB, and cloud technologies.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors group"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="public/assets/Bhuvaneswar_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Tech Stack */}
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'AWS', 'MongoDB','Express', 'TypeScript'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Profile Image Column */}
          <div className="lg:flex justify-center items-center animate-fadeIn">
            <div className="relative w-[250px] md:w-[350px]">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-emerald-500/30 rounded-full blur-xl" />

              {/* Main Image Container */}
              <div className="relative aspect-square rounded-full overflow-hidden border-2 border-white/10">
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-slate-900/30 mix-blend-overlay z-10" />
                
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover filter brightness-90"
                />
              </div>

              {/* Background Glow */}
              <div className="absolute -z-10 inset-0 bg-slate-900/80 rounded-full blur-2xl scale-110" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;