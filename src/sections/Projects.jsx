
import {useState} from 'react';
const Projects= () => {
const projects = [

     {
    title: "wallpaper site",
    description: "wallpaper site uplaod delete and dowload and other feature auth",
    image: "assets/Screenshot 2025-10-02 234542.png",
    link: "https://wallpaper-website-1nqz.vercel.app/all-image",
  },
   {
    title: "asset manager site",
    description: "asset manager  site uplaod delete dowload sell pruchase with paypal and other feature with google auth",
    image: "assets/Screenshot 2025-11-27 025727.png",
    link: "https://assest-manager.vercel.app/",
  }

  
];

    
          

            
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
                setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
                setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  const project = projects[currentIndex];
return (
        <section id="work" className=' my-20 sm:px-10 px-5 '>
            <div className="px-4 py-10">
                <p className="text-cyan-300 text-center font-bold text-4xl mb-10">MY WORKS</p>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 bg-gray-900 p-6 rounded-xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full lg:w-[50%] h-auto max-h-[60vh] object-cover rounded-xl"
                    />

                    <div className="text-amber-100 text-center lg:text-left space-y-4">
                        <p className="text-3xl font-bold">{project.title}</p>
                        <p className="text-xl">{project.description}</p>
                        <a className='text-xl font-bold bg-gray-400 rounded-2xl p-2' href={project.link} target="_blank" rel="noreferrer">
                            click me
                        </a>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-6 gap-4">
                    <button onClick={handlePrev} className="px-4 py-2 bg-blue-500 rounded-xl text-white">Prev</button>
                    <button onClick={handleNext} className="px-4 py-2 bg-blue-500 rounded-xl text-white">Next</button>
                </div>
            </div>
            





        </section>
    )
}

export default Projects
