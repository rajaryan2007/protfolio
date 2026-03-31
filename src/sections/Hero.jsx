import React from 'react';
import SplitText from '../components/SplitText';
import TextType from '../components/TextType';

const Hero = () => {
  return (
    <section className="min-h-[85vh] w-full flex flex-col relative bg-transparent overflow-hidden" id="home">

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-10"
        style={{ backgroundImage: 'radial-gradient(#cba6f7 2px, transparent 2px)', backgroundSize: '60px 60px' }} />


      <div className="flex-1 w-full mx-auto flex flex-col justify-center sm:px-10 px-6 gap-8 relative z-20 items-center text-center">
        {/* <div className="px-8 py-3 bg-[#cba6f7] border-[3px] border-black text-black text-xs font-black uppercase tracking-[0.4em] mb-4 shadow-[6px_6px_0_0_#000]">
          Engineering Excellence
        </div> */}

        <div className="sm:text-4xl text-3xl font-black text-[#cdd6f4] font-generalsans uppercase tracking-tight">
          <TextType
            text="Raj Aryan"
            speed={120}
            className="inline-block"
            cursorChar="|"
          />
        </div>

        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <SplitText
            text="ARCHITECTING DIGITAL"
            className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter"
            threshold={0.1}
          />
          <SplitText
            text="LOGIC & MOTION"
            className="text-4xl sm:text-6xl md:text-8xl font-black text-[#cba6f7] uppercase tracking-tighter"
            threshold={0.1}
          />
        </div>

        <p className="max-w-2xl text-sm sm:text-lg font-black text-[#a6adc8] leading-relaxed font-generalsans uppercase tracking-tight">
          Systems and immersive visual experiences through <span className="bg-[#a6e3a1] text-black px-1.5 py-0.5 sm:px-2 sm:py-0.5 border-[2px] border-black shadow-[2px_2px_0_0_#000] sm:shadow-[3px_3px_0_0_#000]">graphics</span> and <span className="bg-[#89b4fa] text-black px-1.5 py-0.5 sm:px-2 sm:py-0.5 border-[2px] border-black shadow-[2px_2px_0_0_#000] sm:shadow-[3px_3px_0_0_#000]">web engineering</span>.
        </p>

        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 w-full sm:w-auto">
          <a
            href="#work"
            className="group px-8 py-4 sm:px-14 sm:py-5 bg-[#cba6f7] text-[#1e1e2e] font-black border-[3px] sm:border-[4px] border-black hover:bg-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] sm:hover:shadow-[10px_10px_0_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200 flex justify-center items-center gap-3 uppercase text-xs sm:text-sm tracking-widest shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000]"
          >
            Explore Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 sm:px-14 sm:py-5 bg-[#181825] border-[3px] sm:border-[4px] border-black text-white font-black hover:bg-[#cba6f7] hover:text-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] sm:hover:shadow-[10px_10px_0_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200 flex justify-center items-center gap-3 uppercase text-xs sm:text-sm tracking-widest shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000]"
          >
            Let's Talk
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[20px] sm:h-[20px]">
              <path d="m5 19 14-14M7 5h12v12" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1e1e2e] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
