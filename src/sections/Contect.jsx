import React from 'react';

const Contact = () => {
  return (
    
    
     
    <div className="relative flex items-center justify-center h-screen bg-gray-900 overflow-hidden">
        
      {/* Background Image */}
     <img
  src="assets/contect1.png"
  alt="contact background"
  className="absolute inset-0 w-full h-full   object-cover opacity-20"
/>

      {/* Overlay Text */}
      <div className="relative z-10 text-xl font-bold text-cyan-400 text-center px-4">

        Contact
        <div className='flex flex-col '>
          name
          <input className='bg-white text-cyan-800' type="text" placeholder='name' />
          email
          <input className='bg-white' type="hello hihh dafka" />
          WORKS
          <input className='bg-white' type="hello hihh dafka" />
        </div>
      </div>

    </div>
  );
};

export default Contact;
