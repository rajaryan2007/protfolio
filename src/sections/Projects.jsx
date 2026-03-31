import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [

    {
      title: "Asset Manager Site",
      description: "Comprehensive digital asset management system with Google Auth, PayPal integration, and robust file handling.",
      image: "assets/Screenshot 2025-11-27 025727.png",
      link: "https://assest-manager.vercel.app/",
      tags: ["React", "PayPal API", "Firebase", "Tailwind"],
      github: "#",
      color: "#74c7ec"
    },
    {
      title: "TruthLens",
      description: "A full-stack AI-powered news analysis platform that helps users identify bias and misinformation in media content.",
      image: "assets/thruthlens.png",
      link: "https://dev-challenge-cult-coders.vercel.app/",
      tags: ["nextjs", "Google Gemini API", "inngest", "shadcn/ui"],
      github: "https://github.com/rajaryan2007/Dev-challenge-CultCoders/tree/main/TurthLens",
      color: "#a6e3a1"
    },
    {
      title: "imaginex",
      description: "A full-stack image editing platform with real-time collaboration and advanced editing tools with microservice architecture.",
      image: "assets/imagnix.png",
      link: "https://imaginex-taupe.vercel.app/",
      tags: ["nextjs", "Express", "Node.js", "MongoDB", "clerk", "shadcn/ui"],
      github: "https://github.com/rajaryan2007/imaginex",
      color: "#fab387"
    },
    {
      title: "VEGA",
      description: "Game engine made with opengl and vulkan library imgui and ecs(entt) yaml parser.",
      image: "assets/engine.png",
      link: "https://github.com/rajaryan2007/VEGA",
      tags: ["C++", "OpenGL", "entt", "vulkan", "openal", "yaml-cpp", "glm"],
      github: "https://github.com/rajaryan2007/VEGA",
      color: "#89b4fa"
    },

  ];

  return (
    <section id="work" className='py-20 px-5 sm:px-10 bg-transparent text-[#cdd6f4] relative overflow-hidden'>
      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8'>
          <div className='flex flex-col items-start'>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-[#74c7ec] border-[2px] sm:border-[3px] border-black text-[#11111b] text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] mb-4 sm:mb-6"
            >
              Selected Portfolio
            </motion.div>
            <h2 className='text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter break-words'>
              Work <br className="sm:hidden" /><span className='text-[#cba6f7]'>Showcase</span>
            </h2>
          </div>
          <p className='text-[#a6adc8] max-w-md font-bold text-lg leading-relaxed border-l-[6px] border-[#cba6f7] pl-6 py-2 uppercase tracking-tight'>
            Precision-built digital experiences optimizing performance and aesthetic impact.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div
                className="h-full bg-[#181825]/40 backdrop-blur-md border-[2px] sm:border-[3px] border-black p-5 sm:p-8 flex flex-col gap-6 sm:gap-8 transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
                style={{ boxShadow: `6px 6px 0 0 ${project.color}` }}
              >
                <div className='relative overflow-hidden border-[2px] sm:border-[3px] border-black shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] group/img aspect-video'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className='absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 z-20'>
                    <a href={project.link} target="_blank" rel="noreferrer" className='w-12 h-12 sm:w-14 sm:h-14 bg-white text-black border-[2px] sm:border-[3px] border-black shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] flex items-center justify-center hover:bg-[#cba6f7] transition-all hover:-translate-y-1 active:translate-y-0 active:shadow-none'>
                      <FaExternalLinkAlt size={20} className="sm:text-2xl" />
                    </a>
                  </div>
                </div>

                <div className='flex flex-col flex-1'>
                  <div className='flex justify-between items-start mb-4 sm:mb-6'>
                    <h3 className='text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight'>{project.title}</h3>
                    <a href={project.github} className='p-2 sm:p-3 bg-black/50 border-[2px] border-black shadow-[3px_3px_0_0_#000] hover:bg-[#cba6f7] hover:text-black transition-all'>
                      <FaGithub size={20} className="sm:text-2xl" />
                    </a>
                  </div>

                  <p className='text-[#a6adc8] text-base sm:text-lg font-bold leading-relaxed mb-6 flex-1'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2 sm:gap-3 mb-8'>
                    {project.tags.map((tag) => (
                      <span key={tag} className='px-3 py-1 sm:px-4 sm:py-1.5 bg-[#1e1e2e] border-[2px] sm:border-[3px] border-black text-[#cba6f7] text-[8px] sm:text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0_0_#000] sm:shadow-[3px_3px_0_0_#000]'>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className='group/link flex justify-center sm:justify-start items-center gap-2 sm:gap-4 text-white text-[10px] sm:text-sm font-black uppercase tracking-[0.2em] bg-black/30 border-[2px] sm:border-[3px] border-black px-4 py-3 sm:px-8 sm:py-4 shadow-[3px_3px_0_0_#000] sm:shadow-[5px_5px_0_0_#000] hover:bg-white hover:text-black hover:shadow-[5px_5px_0_0_#000] sm:hover:shadow-[8px_8px_0_0_#000] transition-all'
                  >
                    DEPLOYED PREVIEW
                    <FaChevronRight className='group-hover/link:translate-x-1 sm:group-hover/link:translate-x-2 transition-transform' />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
