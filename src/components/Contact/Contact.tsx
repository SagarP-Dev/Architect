import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xpwpklog', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-24 px-6 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#C4A962] mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Details */}
          <div className="text-gray-400 space-y-6">
            <p>
              Feel free to reach out through this form for any queries, collaborations,
              or just to say hello. I'll get back to you as soon as possible!
            </p>
            <div>
            <p>
    <span className="font-semibold text-white">Email:</span>{' '}
    <a
      href="mailto:ecoscapedeveloper@gmail.com"
      className="text-[#C4A962] underline hover:text-[#d4bb7c] transition"
    >
      ecoscapedeveloper@gmail.com
    </a>
  </p>
              <p><span className="font-semibold text-white">Phone:</span> +91 94383 54999</p>
              <p><span className="font-semibold text-white">Phone:</span> +91 98610 49234</p>
              <p>
    <span className="font-semibold text-white">Location:</span>{' '}
    <a
      href="https://www.google.com/maps?q=FWQH%2BGWG+Balasore,+Odisha"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#C4A962] underline hover:text-[#d4bb7c] transition"
    >
      View on Map
    </a>
  </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-[#1a1a1a] p-6 rounded-xl shadow-md">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4A962]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4A962]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4A962]"
                placeholder="Your Message"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#C4A962] text-black px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#d4bb7c] transition duration-200"
            >
              Send Message
            </motion.button>

            {status === 'success' && (
              <p className="text-green-500 font-medium">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 font-medium">Oops! Something went wrong.</p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
