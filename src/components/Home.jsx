import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className='relative min-h-screen flex items-center pt-2 bg-gradient-to-br from-blue-50 to-indigo-50 mt-10 px-10'>
      <div className='container-custom grid md:grid-cols-2 gap-8 items-center'>
        <div className='space-y-6 '>
          <span className='inline-block text-blue-600 font-semibold text-lg'>
            Welcome to my portfolio
          </span>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
            I'm <span className='text-blue-600'>Gopi Varaprasad Koduri</span>,{' '}
            <br />
            Full Stack Web & Mobile Developer
          </h1>
          <p className='text-xl text-gray-600 max-w-lg'>
            I build exceptional and accessible digital experiences for the web.
            Focused on creating beautiful and functional websites.
          </p>
          <div className='flex flex-wrap gap-4 pt-2'>
            <a href='#projects' className='btn-primary'>
              View My Work
              <ArrowRight className='ml-2 h-5 w-5' />
            </a>
            <a href='#contact' className='btn-secondary'>
              Contact Me
            </a>
          </div>
        </div>

        <div className='relative reveal'>
          <div className='bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform rotate-3 transition-transform hover:rotate-0 duration-300'>
            <div className='aspect-w-1 aspect-h-1 rounded-md bg-blue-600 mb-4'>
              <div className='w-full h-64 md:h-80 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-semibold'>
                Professional Headshot
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
