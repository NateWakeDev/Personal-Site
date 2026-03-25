// src/app/contact/page.js
import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Contact Me</h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          If you&apos;d like to get in touch, please email me at{' '}
          <a 
            href="mailto:nathanjwakefield@gmail.com" 
            className="text-blue-400 hover:text-blue-300 underline decoration-2 underline-offset-4 transition-colors duration-300"
          >
            nathanjwakefield@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
