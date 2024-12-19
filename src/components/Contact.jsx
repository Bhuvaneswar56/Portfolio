import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { ArrowUpRight, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const emailAddress = 'bhuvaneshwarnaidu26@gmail.com';
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/Bhuvaneswar56',
      color: 'group-hover:text-white',
      username: '@Bhuvaneswar56',
      bgColor: 'hover:bg-white/10'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/bhuvaneswar-naidu-gorijala-8127b41aa/',
      color: 'group-hover:text-blue-400',
      username: 'Bhuvaneswar Naidu Gorijala',
      bgColor: 'hover:bg-blue-400/10'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-6 h-6" />,
      url: mailtoLink,
      color: 'group-hover:text-emerald-400',
      username: emailAddress,
      bgColor: 'hover:bg-emerald-400/10'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-6 h-6" />,
      url: 'https://x.com/bhuvaneswar_56',
      color: 'group-hover:text-blue-400',
      username: '@bhuvaneswar_56',
      bgColor: 'hover:bg-blue-400/10'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      emailjs.init({
        publicKey: "ZCt-50kfp7JhvKD89",
      });

      const response = await emailjs.send(
        "service_tnl6gcr",
        "template_pzpxvqn",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: emailAddress
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-2 justify-center">
            <div className="h-px bg-blue-400 w-8"></div>
            <span className="text-blue-400 font-medium">Get in Touch</span>
            <div className="h-px bg-blue-400 w-8"></div>
          </div>
          <h2 className="text-4xl font-bold text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Let's Connect
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-white/20"
            >
              <div className={`absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${link.bgColor}`}></div>
              <div className="relative flex flex-col items-start gap-4">
                <div className="flex items-center justify-between w-full">
                  <div className={`p-2 rounded-lg bg-white/5 ${link.color}`}>
                    {link.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{link.name}</h3>
                  <p className="text-sm text-gray-400">{link.username}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Form Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-slate-900 rounded-xl p-8 w-full max-w-md relative border border-white/10">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-400 to-emerald-400 text-white py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-emerald-400 mt-4 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 mt-4 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-block w-full max-w-2xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">Open for Opportunities</h3>
              <p className="text-gray-300 mb-4">
                Looking for new opportunities and interesting projects to work on.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-emerald-400 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <FaEnvelope className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;