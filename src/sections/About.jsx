import React from 'react';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';
import { FaTerminal, FaCode, FaGithub, FaCodeBranch, FaChevronRight, FaFileContract } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const About = () => {
  return (
    <section id='about' className='px-5 sm:px-10 py-20 bg-transparent relative overflow-hidden text-[#cdd6f4]'>
      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='flex flex-col items-start mb-16 relative'>

          <div className='absolute -top-10 -right-10 opacity-10 rotate-12 scale-150 pointer-events-none hidden lg:block'>
            <h1 className='text-9xl font-black italic select-none'> ARYAN.</h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 px-6 py-2 bg-[#cba6f7] border-[3px] border-black text-[#11111b] text-xs font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_0_#000] mb-6"
          >
            Curriculum Vitae
          </motion.div>
          <div className='flex flex-wrap items-baseline gap-4'>
            <h2 className='text-4xl sm:text-5xl md:text-7xl font-black text-[#cdd6f4] mb-4 uppercase tracking-tighter break-words max-w-full'>
              Crafting <br className="sm:hidden" /><span className='text-[#cba6f7]'>Digital</span> Logic
            </h2>
          </div>
          <div className='w-40 h-[6px] bg-[#cba6f7] border-2 border-black shadow-[4px_4px_0_0_#000]' />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

          {/* Card 1: Identity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group"
          >
            <div className="h-full bg-[#181825]/40 backdrop-blur-sm border-[3px] border-black shadow-[6px_6px_0_0_#cba6f7] sm:shadow-[8px_8px_0_0_#cba6f7] p-6 sm:p-8 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#cba6f7] sm:hover:shadow-[12px_12px_0_0_#cba6f7] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4'>
                  <div className='flex items-center gap-4 sm:gap-5'>
                    <div className='w-16 h-16 bg-[#cba6f7] flex items-center justify-center text-black border-[3px] border-black shadow-[4px_4px_0_0_#000]'>
                      <FaTerminal size={28} />
                    </div>
                    <div>
                      <h3 className='text-3xl font-black text-white uppercase tracking-tight'>Identity</h3>
                      <p className="text-[#cba6f7] text-sm font-black uppercase tracking-widest">Raj Aryan // Developer</p>
                    </div>
                  </div>
                  <div className='opacity-30 group-hover:opacity-100 transition-opacity hidden sm:block'>
                    <FaFileContract size={40} className='text-[#cba6f7]' />
                  </div>
                </div>

                <div className='space-y-4 sm:space-y-6'>
                  <div className='text-[#cdd6f4] text-lg sm:text-xl md:text-2xl leading-relaxed font-bold flex flex-col sm:flex-row sm:flex-wrap gap-2'>
                    <span className="bg-[#cba6f7] text-black px-2 py-1 max-w-max">Full Stack Developer.</span>
                    <span className="bg-[#74c7ec] text-black px-2 py-1 max-w-max">Low-Level Graphics Engineer.</span>
                  </div>
                  <p className='text-[#a6adc8] text-base sm:text-lg leading-relaxed font-medium'>
                    Building a cross-platform 3D Game Engine (OpenGL + Vulkan + C++). Active in DSA and Python for AI. Honest engineering for complex problems.
                    <span className='inline-block mt-2 italic font-black text-[#a6e3a1] block'>I use Arch btw.</span>
                  </p>
                </div>
              </div>

              <div className='flex flex-wrap gap-4 mt-8'>
                {['JavaScript', 'React', 'Express', 'Node.js', 'C++', 'Typescript', 'OpenGL & Vulkan', "Nextjs", "Tailwind"].map(tag => (
                  <div key={tag} className='px-4 py-2 bg-[#1e1e2e] border-[3px] border-black shadow-[3px_3px_0_0_#cba6f7] text-[10px] text-[#cba6f7] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:shadow-[5px_5px_0_0_#cba6f7] hover:bg-[#cba6f7] hover:text-black transition-all cursor-crosshair'>
                    <FaChevronRight size={10} />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="h-full bg-[#11111b]/40 backdrop-blur-sm border-[3px] border-black shadow-[6px_6px_0_0_#a6e3a1] sm:shadow-[8px_8px_0_0_#a6e3a1] p-6 sm:p-8 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#a6e3a1] sm:hover:shadow-[12px_12px_0_0_#a6e3a1] transition-all duration-300">
              <h3 className='text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 uppercase tracking-tight bg-[#a6e3a1] text-black px-4 py-2 inline-block border-[3px] border-black shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000]'>
                Metrics
              </h3>
              <div className='flex flex-col gap-6'>
                <div className="bg-[#181825] border-[3px] border-black p-5 shadow-[4px_4px_0_0_#000] flex items-center gap-4">
                  <FaGithub className='text-[#a6adc8]' size={36} />
                  <div>
                    <p className="text-[#a6adc8] text-[10px] font-black uppercase tracking-widest mb-1">GitHub Overview</p>
                    <p className="text-3xl font-black text-white">436 <span className="text-sm text-[#a6adc8]">Contributions</span></p>
                  </div>
                </div>
                <div className="bg-[#181825] border-[3px] border-black p-5 shadow-[4px_4px_0_0_#000] flex items-center gap-4">
                  <SiLeetcode className='text-[#fab387]' size={36} />
                  <div>
                    <p className="text-[#a6adc8] text-[10px] font-black uppercase tracking-widest mb-1">LeetCode Profile</p>
                    <p className="text-3xl font-black text-[#fab387]">104 <span className="text-sm text-[#a6adc8]">Solved</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="h-full bg-[#11111b]/40 backdrop-blur-sm border-[3px] border-black shadow-[6px_6px_0_0_#74c7ec] sm:shadow-[8px_8px_0_0_#74c7ec] p-6 sm:p-8 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#74c7ec] sm:hover:shadow-[12px_12px_0_0_#74c7ec] transition-all duration-300">
              <h3 className='text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 uppercase tracking-tight bg-[#74c7ec] text-black px-4 py-2 inline-block border-[3px] border-black shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000]'>
                Stack
              </h3>
              <div className='flex flex-wrap gap-4'>
                {['React', 'Next.js', 'Vulkan', 'Node.js', 'Express', 'Tailwind', 'MongoDB', "Prisma", "PostgreSQL", "Typescript"].map((skill) => (
                  <div key={skill} className='p-3 bg-[#181825] border-[3px] border-black shadow-[3px_3px_0_0_#000] text-center text-xs text-[#a6adc8] font-black uppercase tracking-widest hover:bg-[#74c7ec] hover:text-black transition-all flex-grow'>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Global */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex h-[350px]"
          >
            <div className="w-full h-full bg-[#181825]/40 backdrop-blur-sm border-[3px] border-black shadow-[6px_6px_0_0_#fab387] sm:shadow-[8px_8px_0_0_#fab387] relative group overflow-hidden">
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                <h3 className='text-2xl sm:text-3xl font-black text-white uppercase tracking-tight bg-black px-4 py-2 border-[3px] border-[#fab387] shadow-[3px_3px_0_0_#fab387] sm:shadow-[4px_4px_0_0_#fab387]'>Global</h3>
                <div className='text-[#fab387] font-black uppercase tracking-widest text-sm mt-4 flex items-center gap-2'>
                  <div className='w-3 h-3 bg-[#fab387] animate-ping rounded-full' />
                  DELHI, INDIA
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pt-16">
                <div className='scale-[1] opacity-40 group-hover:opacity-100 transition-opacity duration-700 contrast-125'>
                  <Globe
                    width={350}
                    height={350}
                    backgroundColor='rgba(0,0,0,0)'
                    globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                    showAtmosphere={false}
                    labelsData={[{ lat: 28.6139, lng: 77.2090, text: "RAJ", color: '#fab387', size: 5 }]}
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Global Signature */}

      </div>
    </section>
  );
};

export default About;
