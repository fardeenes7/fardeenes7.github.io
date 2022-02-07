import React from 'react';
import me from  '../images/me.jpg'
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div className='scroll-smooth snap-y snap-mandatory snap-always h-screen w-screen overflow-y-scroll text-white'>
            <div id='home' className='relative h-screen w-full snap-start bg-gray-900 overflow-hidden'>
                <Navbar />

                <p className='w-full absolute bottom-0 z-0 opacity-5 text-sign md:text-sign-md lg:text-sign-lg xl:text-sign-xl text-center font-conforter overflow-hidden'>
                    fardeen
                </p>

                <div className='w-full h-full flex justify-center items-center'>
                    <div>
                    <h2 className='animate-[bounce_2s] text-2xl md:3xl lg:4xl xl:text-6xl text-orange-600 font-bold'>Hello, <span className='text-gray-400'>i am</span></h2>
                    <p className='text-5xl md:text-8xl xl:text-[12em]'>Fardeen Ehsan</p>
                    </div>
                </div>

            </div>

            <div id='portfolio' className='relative h-screen w-full snap-start bg-slate-700 flex items-center justify-center overflow-hidden'>
                <p className=' absolute bottom-0 z-0 opacity-5  text-sign md:text-sign-md xl:text-sign-xl text-center  font-conforter'>
                    portfolio
                </p>
                <h2>Portfolio</h2>
            </div>

            <div id='resume' className='relative h-screen w-full snap-start bg-gray-800 flex items-center justify-center overflow-hidden'>
            <p className=' absolute bottom-0 z-0 opacity-5  text-sign md:text-sign-md lg:text-sign-lg xl:text-sign-xl text-center  font-conforter'>
                    resume
                </p>
                <h2>Resume</h2>
            </div>

            <div id='contact' className='relative h-screen w-full snap-start bg-slate-900 flex items-center justify-center overflow-hidden'>
                <p className=' absolute bottom-0 z-0 opacity-5  text-sign md:text-sign-md lg:text-sign-lg xl:text-sign-xl text-center  font-conforter'>
                    contact
                </p>
                <h2>Contact</h2>
            </div>
        </div>
    );
}
