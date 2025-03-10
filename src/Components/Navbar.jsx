import React from 'react';
import logo from './Images/Bookstore.png';
import fail from './Images/Failed Exam.jpeg';
import book from './Images/Book3.jpg';

const Navbar = () => {
  return (
    <>
      <nav className='w-full h-20 bg-amber-400 flex justify-between px-4 md:px-10 items-center'>
        <div className='w-16 h-16 md:w-20 md:h-20'>
          <img src={logo} alt='Bookstore Logo' className='w-full h-full object-contain' />
        </div>
        <div className='hidden md:flex justify-between gap-8 md:gap-16'>
          <ul className='flex gap-4 md:gap-10'>
            <li><a href='Home'>Home</a></li>
            <li><a href='About'>About</a></li>
            <li><a href='Store'>Store</a></li>
          </ul>
          <ul className='flex gap-4 md:gap-10'>
            <li><a href='SignIn'>SignIn</a></li>
            <li><a href='SignUp'>SignUp</a></li>
          </ul>
          <button className='bg-red-500 px-4 py-2 rounded-md text-white'>
            <a href='Logout'>Logout</a>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row bg-orange-200 p-6 md:p-10'>
        <div className='w-full md:w-1/2'>
          <h1 className='mt-4 md:mt-10 font-bold text-4xl md:text-7xl text-red-700'>About the Books</h1>
          <p className='mt-4 md:mt-10 text-lg md:text-2xl text-green-800'>
            Books can change you if you read them with clarity. A formal approach leads to success,
            but a careless one leads to failure.
          </p>
          <img className='w-full md:w-3/4 h-auto mt-6 md:mt-10 rounded-2xl' src={fail} alt='Failed Exam' />
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <img className='w-40 md:w-96 h-auto mt-6 md:mt-10 rounded-full' src={book} alt='Books' />
        </div>
      </div>

      {/* Footer */}
      <footer className='flex flex-col md:flex-row bg-zinc-800 text-white p-6 md:p-10'>
        <div className='w-full md:w-1/4 mb-6 md:mb-0'>
          <h1 className='text-xl md:text-2xl font-bold'>BOOKPLACE</h1>
          <p>All book contents available here.</p>
        </div>
        <div className='w-full md:w-1/4 mb-6 md:mb-0'>
          <h1 className='text-xl md:text-2xl font-bold'>QUICK LINKS</h1>
          <ul>
            <li><a href='Home'>Home</a></li>
            <li><a href='About'>About</a></li>
            <li><a href='Store'>Store</a></li>
          </ul>
        </div>
        <div className='w-full md:w-1/4 mb-6 md:mb-0'>
          <h1 className='text-xl md:text-2xl font-bold'>Support</h1>
          <ul>
            <li><a href='Order Track'>Order Track</a></li>
            <li><a href='Contact Us'>Contact Us</a></li>
            <li><a href='Guide'>Guide</a></li>
            <li><a href='FAQ'>FAQ</a></li>
          </ul>
        </div>
        <div className='w-full md:w-1/4'>
          <h1 className='text-xl md:text-2xl font-bold'>Policies</h1>
          <ul>
            <li><a href='Terms of Use'>Terms of Use</a></li>
            <li><a href='Privacy Policy'>Privacy Policy</a></li>
            <li><a href='Refund Policy'>Refund Policy</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
