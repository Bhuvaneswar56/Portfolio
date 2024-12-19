import React from 'react';

function About() {
  return (
    <div id="about" className="bg-slate-900 text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            About Me
          </span>
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
          <p className="text-lg text-gray-300 leading-relaxed">
          Professional with 2+ years of AWS Datacenter Operations experience, combining infrastructure expertise with advanced full-stack development skills. Proficient in MERN stack (MongoDB, Express.js, React.js, Node.js), DCIM tools, and modern web technologies. Creating scalable applications and monitoring solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;