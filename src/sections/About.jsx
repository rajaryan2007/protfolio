import React from 'react';
import Globe from 'react-globe.gl';

const About = () => {
  return (
    <section id='about' className='px-5 sm:px-10 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>

        {/* Card 1 */}
        <div className='w-full h-full border border-gray-700 bg-black-200 rounded-lg p-4 sm:p-7 flex flex-col gap-5'>
          <img src="assets/grid1.png" alt="Grid 1" className='rounded-lg object-cover w-full ' />
          <p className='text-xl font-semibold text-white font-generalsans'>Hello</p>
          <p className='text-[#afb0b6] text-base font-generalsans'>
            my name is rajaryan from class 12th </p>
        </div>

        {/* Card 2 */}
        <div className='w-full h-full border border-gray-700 bg-black-200 rounded-lg p-4 sm:p-7 flex flex-col gap-5'>
          <img src="assets/skill.png" alt="skill" className='rounded-lg object-cover   w-full opacity-50' />
           <p className='text-xl font-semibold text-white py-3 font-generalsans'>SKILL</p>
          <p className='text-[#afb0b6] text-base font-generalsans'> KNOW ABOUT REACT, THREE.JS and tailwindcss </p>
        </div>

        {/* Globe Card */}
        <div className='w-full h-full border border-gray-700 bg-black-200 rounded-lg p-4 sm:p-7 flex flex-col gap-5'>
          <div className='w-full h-[300px] sm:h-[350px] flex justify-center items-center'>
            <Globe width={450} height={450}
              backgroundColor='rgba(0,0,0,0)'
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="	//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="/unpkg.com/three-globe/example/img/earth-topology.png" />
          </div>
          <p className='text-xl font-semibold mb-2 text-white font-generalsans'>FROM</p>
          <p className='text-[#afb0b6] text-base font-generalsans'>INDIA,DELHI</p>
          <button name='contact me' isBeam containerClass="w-full mt-10" />

        </div>

      </div>
    </section>
  );
};

export default About;
