import { Logo } from '@/components/Logo';
import { main, mainImg } from '@/public/assets/images/index.js';
import Header from '@/components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className='mx-auto flex h-[90vh] max-w-screen-xl flex-col-reverse items-center justify-center gap-3 px-4 text-center sm:gap-3 md:flex-row md:text-left'>
        <div className='md:w-1/2'>
          <h1 className='pb-3 text-4xl text-[#E3FDFD] md:text-5xl'>
            Job{' '}
            <span className='font-extrabold text-[#71C9CE]'>Application</span>{' '}
            Tracker
          </h1>
          <p className='text-[#E3FDFD]'>
            Track all your job applications effortlessly with our Job Hunt app.
            Stay organized, never miss a deadline, and streamline your job
            search process. Simplify your job hunt and take control of your
            career today.
          </p>
        </div>

        <Logo imgSrc={mainImg} style='md:w-1/2' />
      </main>
    </>
  );
};

export default Home;
