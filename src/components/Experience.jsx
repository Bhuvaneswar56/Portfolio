import React from 'react';
import { Building2, Calendar, CircleDot } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      title: 'Data Center Engineering Operations',
      company: 'Amazon Web Services (AWS)',
      duration: 'Aug 2022 - Apr 2024',
      keyContributions: [
        'Developed and maintained frontend components for datacenter infrastructure monitoring dashboard using React.js and Redux, improving operational visibility by 40%',
        'Implemented interactive rack visualization interface using JavaScript and CSS, enabling real-time monitoring of server status and resource utilization',
        'Created responsive maintenance scheduling interface with React.js, streamlining the change management process',
        'Built real-time alert notification system frontend, reducing response time to critical events by 30%',
        'Led cross-functional teams in implementing infrastructure improvements, ensuring zero-downtime deployments',
        'Managed critical facility operations with focus on high availability and security standards',
        'Developed and maintained technical documentation for operational procedures'
      ],
      technologies: [
        'React.js', 'Redux', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'AWS', 'Linux'
      ]
    },
    {
      title: 'Data Center Engineering Operations Intern',
      company: 'Amazon Web Services (AWS)',
      duration: 'Feb 2022 - Jul 2022',
      keyContributions: [
        'Assisted in developing user interfaces for internal tools using JavaScript',
        'Contributed to documentation and standard operating procedures',
        'Participated in infrastructure monitoring and maintenance activities'
      ],
      technologies: [
        'JavaScript', 'HTML', 'CSS', 'Documentation', 'Infrastructure Monitoring'
      ]
    }
  ];

  return (
    <section id="experience" className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Professional Experience
          </span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Key Contributions */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Contributions</h4>
                  <ul className="space-y-3">
                    {exp.keyContributions.map((contribution, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <CircleDot className="w-4 h-4 mt-1 flex-shrink-0 text-blue-400" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300 hover:border-blue-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;