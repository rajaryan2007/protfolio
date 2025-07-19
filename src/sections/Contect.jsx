import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const Contact = () => {
const socials = [
  { name: "GitHub", icon: <FaGithub />, href: "https://github.com/rajaryan2007" },
  { name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/raj-aryan-110bb8344/" },
  
 
];

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
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
      alert('Your message has been sent');
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Something went wrong');
    }
  };

  return (
    <section id="contact" className='my-20 sm:px-10 px-5'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img
          src='assets/contect1.png'
          alt='contact'
          className='rounded-2xl absolute inset-0 min-h-screen w-full object-cover opacity-50 lg:h-200'
        />
        <div className='contact-container z-10 text-center'>
          <h3 className='sm:text-4xl text-3xl font-semibold text-white'>
            Let's Talk
          </h3>
          <p className='text-lg text-gray-300 mt-3'>
            For any kind of website
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col space-y-7 z-10 w-full max-w-md'
        >
          <label className='space-y-3'>
            <span className='text-lg text-white'>Full Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              className='w-full bg-gray-800 px-5 py-3 rounded-lg placeholder-gray-400 text-white shadow-md focus:outline-none'
              placeholder='Full Name'
            />
          </label>

          <label className='space-y-3'>
            <span className='text-lg text-white'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              className='w-full bg-gray-800 px-5 py-3 rounded-lg placeholder-gray-400 text-white shadow-md focus:outline-none'
              placeholder='Email'
            />
          </label>

          <label className='space-y-3'>
            <span className='text-lg text-white'>Message</span>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className='w-full bg-gray-800 px-5 py-3 rounded-lg placeholder-gray-400 text-white shadow-md focus:outline-none resize-none'
              placeholder='Your message...'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-lg font-semibold shadow-lg transition-all'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
          <motion
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black-900 min-h-[10vh] py-10 flex flex-col items-center justify-center rounded-2xl"
    >
      <h2 className="text-white text-3xl font-bold mb-6">Connect with Me</h2>

      <div className="flex gap-6">
        {socials.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-yellow-300 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </motion>
    </section>

  );
};

export default Contact;
