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
            Professional with 2+ years of experience in AWS Datacenter Operations with exposure to DCIM (Data Center
            Infrastructure Management) tools and web interfaces. Experience in maintaining and contributing to
            datacenter monitoring dashboards, combined with strong full-stack development skills gained through
            intensive MERN stack training. Leveraging infrastructure knowledge and newly acquired development
            expertise to transition into a software development role.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;