import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
  const socials = [
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com/rajaryan2007", color: "#cba6f7" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/raj-aryan-110bb8344/", color: "#74c7ec" },
    { name: "Twitter", icon: <FaTwitter />, href: "#", color: "#fab387" },
    { name: "Email", icon: <FaEnvelope />, href: "mailto:rajaryan1492007@gmail.com", color: "#a6e3a1" },
  ];

  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_20b08b4',
        'template_glhr0zn',
        {
          form_name: form.name,
          to_name: 'Rajaryan',
          form_email: form.email,
          to_email: 'rajaryan1492007@gmail.com',
          message: form.message
        },
        'VKatitZYN0M20RYZC'
      );
      setLoading(false);
      alert('MESSAGE SUCCESSFULLY TRANSMITTED.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setLoading(false);
      alert('TRANSMISSION FAILED. RETRY.');
    }
  };

  return (
    <section id="contact" className='py-20 px-5 sm:px-10 bg-transparent text-[#cdd6f4] relative overflow-hidden'>
      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='flex flex-col items-center mb-12 sm:mb-16 text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 sm:px-8 sm:py-3 bg-[#a6e3a1] border-[2px] sm:border-[3px] border-black text-black text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] mb-6 sm:mb-8"
          >
            Digital Transmission
          </motion.div>
          <h2 className='text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4'>
            Establish <br className="sm:hidden" /><span className='text-[#cba6f7]'>Contact</span>
          </h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12'>
          {/* Left: Info Grid */}
          <div className='lg:col-span-2 space-y-8 sm:space-y-12'>
            <div className='bg-[#181825]/40 backdrop-blur-md border-[2px] sm:border-[3px] border-black p-6 sm:p-10 shadow-[6px_6px_0_0_#cba6f7] sm:shadow-[10px_10px_0_0_#cba6f7] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#cba6f7] sm:hover:shadow-[14px_14px_0_0_#cba6f7] transition-all'>
              <h3 className='text-3xl sm:text-4xl font-black text-white mb-8 sm:mb-10 uppercase tracking-tighter bg-[#cba6f7] text-black px-4 py-1.5 border-[2px] sm:border-[3px] border-black shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] inline-block'>Info</h3>
              <div className='space-y-8 sm:space-y-10'>
                <div className='flex items-center gap-4 sm:gap-6 group'>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 bg-[#1e1e2e] border-[2px] sm:border-[3px] border-black flex items-center justify-center text-[#cba6f7] shadow-[3px_3px_0_0_#cba6f7] sm:shadow-[4px_4px_0_0_#cba6f7] group-hover:bg-[#cba6f7] group-hover:text-black hover:-translate-y-1 transition-all'>
                    <FaEnvelope size={24} className="sm:text-3xl" />
                  </div>
                  <div>
                    <p className='text-[8px] sm:text-[10px] text-[#cba6f7] uppercase tracking-[0.3em] font-black mb-1'>Direct Line</p>
                    <p className='text-white font-black text-sm sm:text-lg select-all break-all'>rajaryan1492007@gmail.com</p>
                  </div>
                </div>

                <div>
                  <p className='text-[8px] sm:text-[10px] text-[#a6adc8] uppercase tracking-[0.3em] font-black mb-6 sm:mb-8 border-b-[2px] border-black/20 pb-2 inline-block w-full'>Social Network Nodes</p>
                  <div className='grid grid-cols-2 gap-4 sm:gap-6'>
                    {socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className='p-3 sm:p-5 bg-black/40 border-[2px] sm:border-[3px] border-black flex items-center justify-center sm:justify-start gap-2 sm:gap-4 text-[#a6adc8] font-black uppercase tracking-widest text-[8px] sm:text-[10px] transition-all hover:bg-white hover:text-black hover:-translate-x-0.5 hover:-translate-y-0.5'
                        style={{ boxShadow: `4px 4px 0 0 ${social.color}` }}
                      >
                        <span style={{ color: social.color }}>{social.icon}</span>
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Branding Card */}
            <div className='bg-black border-[2px] sm:border-[3px] border-black shadow-[6px_6px_0_0_#74c7ec] sm:shadow-[10px_10px_0_0_#74c7ec] p-6 sm:p-8 flex flex-col justify-end relative overflow-hidden group min-h-[250px] sm:aspect-square'>
              <div className='absolute -top-10 -right-10 opacity-10 rotate-45 scale-150 pointer-events-none'>
                <FaPaperPlane size={240} className='text-[#74c7ec]' />
              </div>
              <h4 className='text-5xl sm:text-6xl font-black text-[#74c7ec]/20 uppercase tracking-tighter select-none'>ARYAN</h4>
              <p className='text-white font-black text-lg sm:text-2xl uppercase tracking-tighter leading-tight relative z-10'>
                ENGINEERING <br />CROSS-PLATFORM <br /><span className='text-[#74c7ec]'>REALITY</span>
              </p>
            </div>
          </div>

          {/* Right: Brutalist Form */}
          <div className='lg:col-span-3 h-full'>
            <div className='bg-[#11111b]/40 backdrop-blur-md border-[2px] sm:border-[3px] border-black shadow-[6px_6px_0_0_#a6e3a1] sm:shadow-[10px_10px_0_0_#a6e3a1] p-6 sm:p-10 h-full flex flex-col hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#a6e3a1] sm:hover:shadow-[14px_14px_0_0_#a6e3a1] transition-all'>
              <h3 className='text-3xl sm:text-4xl font-black text-white mb-8 sm:mb-10 uppercase tracking-tighter bg-[#a6e3a1] text-black px-4 py-1.5 border-[2px] sm:border-[3px] border-black shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] inline-block self-start'>Transmission</h3>
              <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col h-full gap-8 sm:gap-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
                  <div className='space-y-3 sm:space-y-4'>
                    <label className='text-[8px] sm:text-[10px] font-black text-[#a6e3a1] uppercase tracking-[0.3em] ml-2'>Nomenclature</label>
                    <input
                      type='text' name='name' value={form.name} onChange={handleChange} required
                      className='w-full bg-black/60 border-[2px] sm:border-[3px] border-black p-4 sm:p-5 text-sm sm:text-base text-[#cdd6f4] font-bold focus:outline-none focus:border-[#a6e3a1] focus:shadow-[3px_3px_0_0_#a6e3a1] sm:focus:shadow-[4px_4px_0_0_#a6e3a1] transition-all'
                      placeholder='RAJ ARYAN'
                    />
                  </div>
                  <div className='space-y-3 sm:space-y-4'>
                    <label className='text-[8px] sm:text-[10px] font-black text-[#a6e3a1] uppercase tracking-[0.3em] ml-2'>Electronic Mail</label>
                    <input
                      type='email' name='email' value={form.email} onChange={handleChange} required
                      className='w-full bg-black/60 border-[2px] sm:border-[3px] border-black p-4 sm:p-5 text-sm sm:text-base text-[#cdd6f4] font-bold focus:outline-none focus:border-[#a6e3a1] focus:shadow-[3px_3px_0_0_#a6e3a1] sm:focus:shadow-[4px_4px_0_0_#a6e3a1] transition-all'
                      placeholder='RAJ@BINARY.LOGIC'
                    />
                  </div>
                </div>

                <div className='space-y-3 sm:space-y-4 flex-1 flex flex-col'>
                  <label className='text-[8px] sm:text-[10px] font-black text-[#a6e3a1] uppercase tracking-[0.3em] ml-2'>Data Load</label>
                  <textarea
                    name='message' value={form.message} onChange={handleChange} required rows={8}
                    className='w-full flex-1 bg-black/60 border-[2px] sm:border-[3px] border-black p-4 sm:p-6 text-sm sm:text-base text-[#cdd6f4] font-bold focus:outline-none focus:border-[#a6e3a1] focus:shadow-[3px_3px_0_0_#a6e3a1] sm:focus:shadow-[4px_4px_0_0_#a6e3a1] transition-all resize-none'
                    placeholder="DESCRIBE PROJECT PARAMETERS..."
                  />
                </div>

                <button
                  type='submit' disabled={loading}
                  className='w-full py-4 sm:py-6 bg-[#a6e3a1] text-black font-black text-sm sm:text-xl border-[3px] sm:border-[4px] border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] hover:bg-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] sm:hover:shadow-[12px_12px_0_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all uppercase tracking-[0.1em]'
                >
                  {loading ? 'TRANSMITTING...' : 'INITIATE TRANSMISSION'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
