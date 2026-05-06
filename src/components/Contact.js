'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    // Note: The user needs to get an Access Key from https://web3forms.com/ 
    // and replace 'YOUR_ACCESS_KEY_HERE' with it.
    formData.append("access_key", "239c5a07-9f0f-4c8e-838c-8955976fba42"); // I'll use a placeholder or ask them to get one.
    // For now, I'll set up the form so it works if they get a key.

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section className="py-24 px-6 relative" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest">Contact Me</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Contact Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xl font-bold mb-8 text-center md:text-left">Talk to me</h3>

            <ContactCard
              type="EMAIL"
              value="cseanwar@gmail.com"
              link="mailto:cseanwar@gmail.com"
              icon={(
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              )}
              iconColor="text-red-400"
            />

            <ContactCard
              type="LINKEDIN"
              value="anwar-hossain"
              link="https://www.linkedin.com/in/anwar-hossain-a3095147"
              icon={(
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              )}
              iconColor="text-blue-500"
            />

            <ContactCard
              type="TWITTER"
              value="@cseanwar"
              link="https://x.com/cseanwar"
              icon={(
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              )}
              iconColor="text-sky-400"
            />
          </div>

          {/* Contact Form */}
          <div className="md:col-span-8">
            <h3 className="text-xl font-bold mb-8">Write me your project</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">Name</label>
                <input name="name" required className="w-full bg-brand-dark/50 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Insert your Name" type="text" />
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">Email</label>
                <input name="email" required className="w-full bg-brand-dark/50 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Insert your email" type="email" />
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">Project</label>
                <textarea name="message" required className="w-full bg-brand-dark/50 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Write your project" rows="6"></textarea>
              </div>

              <button
                className={`w-full md:w-auto px-5 py-3 rounded-2xl font-bold transition flex items-center justify-center gap-3 group 
                  ${status === 'success' ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500'} text-white disabled:opacity-50`}
                type="submit"
                disabled={status === 'sending' || status === 'success'}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                {status === '' && (
                  <svg className="h-5 w-5 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                )}
                {status === 'success' && (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ type, value, link, icon, iconColor }) => (
  <div className="glass-card p-6 rounded-2xl text-center space-y-3">
    <div className={`w-10 h-10 mx-auto ${iconColor}`}>
      {icon}
    </div>
    <h4 className="font-bold">{type}</h4>
    <p className="text-sm text-gray-400">{value}</p>
    <a
      className="text-blue-500 text-xs font-bold inline-flex items-center gap-1 group"
      href={link}
      target={link.startsWith('http') ? "_blank" : undefined}
      rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      Write me <span className="group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </div>
);

export default Contact;
