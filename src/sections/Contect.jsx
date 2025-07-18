import { useRef, useState } from 'react';

const Contect = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Add email sending logic or API call here
  };

  return (
    <section className='my-20 sm:px-10 px-5'>
      <div className='relative min-h-screen flex items-center justify-center flex-col '>
        <img
          src='assets/contect1.png'
          alt='contact'
          className=' rounded-2xl absolute inset-0 min-h-screen w-full object-cover opacity-50 lg:h-200'
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
            className='bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-lg font-semibold shadow-lg transition-all'
            >
          
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contect;

