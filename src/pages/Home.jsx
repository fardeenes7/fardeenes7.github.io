import React, {useState, useRef, useEffect} from 'react';
import Navbar from '../components/Navbar';
import loader from '../assets/loader.svg';
import Contact from '../components/Contact';
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home(){
    useEffect(() => {
        Aos.init({duration: 2000});
        document.addEventListener('scroll', (event) => { Aos.refresh();}, {capture: true, passive: true,})
    }, [])
    return (
        <>
            
            <div id='loader' className='hidden fixed z-50 right-[100%] bg-gray-800 h-screen w-screen flex flex-col items-center justify-center'>
                <img src={loader} alt="loader" className='h-20 lg:h-24' />
                <h1 className='text-6xl font-bold text-white'>welcome.</h1>
            </div>
  
        <div className='font-convergence relative scroll-smooth snap-y snap-mandatory snap-always h-screen overflow-y-scroll overflow-x-hidden text-white'>
            <div id='home' className='z-10 relative h-screen w-full snap-start bg-gray-900 overflow-hidden'>
                <Navbar />

                <p className='w-full absolute rotate-[-90deg] md:rotate-0 top-[50%] left-20 md:left-0 md:bottom-0 z-0 opacity-5 text-sign-md lg:text-sign-lg xl:text-sign-xl text-center font-conforter'>
                    fardeen
                </p>

                <div className='w-full h-full flex justify-center items-center'>
                    <div className=''>
                    <h2 id='helloText' className='text-2xl md:3xl lg:4xl xl:text-6xl text-orange-600 font-bold overflow-hidden'>Hello, <span className='text-gray-400'>i am</span></h2>
                    <p id='nameText' className='text-5xl md:text-8xl lg:text-[8em] xl:text-[12em]'>Fardeen Ehsan</p>
                    </div>
                </div>

            </div>
            <div id='portfolio' className='z-0 relative h-screen w-100 snap-start bg-slate-700 flex items-center justify-center'>
                <p className='md:w-full absolute rotate-[-90deg] md:rotate-0 top-[10%] md:top-1/3 left-[30%] md:left-0 bottom-0 z-0 opacity-5 text-sign-md xl:text-sign-xl text-center  font-conforter'>
                    portfolio
                </p>
                <h2>Portfolio</h2>
                
            </div>
            <div id='resume' className='z-0 relative flex m-auto h-screen w-full snap-start bg-gray-800 items-center justify-center'>
                <p className='md:w-full absolute rotate-[-90deg] md:rotate-0 top-[10%] md:top-1/2 left-[70%] md:left-0 bottom-0 z-0 opacity-5 text-sign-md xl:text-sign-xl text-center  font-conforter'>
                    resume
                </p>
                <h2>Resume</h2>
            </div>

            <div id='contact' className='px-10 lg:px-40 z-0 relative h-screen w-full snap-start bg-[#060406] grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden'>
                <div data-aos='fade-down' className='absolute my-[10%] top-0 h-[0.1em] w-screen bg-gray-400'></div>
                <div data-aos='fade-up' className='absolute my-[10%] bottom-0 h-[0.1em] w-screen bg-gray-400'></div>
                   
                <p className='-z-10 md:w-full absolute rotate-[-90deg] md:rotate-0 top-[10%] md:top-1/2 left-[50%] md:left-0 bottom-0 opacity-10 text-sign-md xl:text-sign-xl text-center  font-conforter'>
                    contact
                </p>
                <div data-aos='fade-up-right' className='w-ful z-10'>
                    <h2 className='text-3xl lg:text-7xl font-bold text-center'>Contact Me</h2>
                    <div className='flex justify-center mt-4 pt-4 text-center'>
                        <a target="_blank" href="https://www.facebook.com/fardeen.es7"><FaFacebook className='text-2xl mx-2'/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/fardeenes7/"><FaLinkedin className='text-2xl mx-2'/></a>
                        <a target="_blank" href="https://github.com/fardeenes7"><FaGithub className='text-2xl mx-2'/></a>        
                        <a href="mailto:fardeen.es7@gmail.com"><SiGmail className='text-2xl mx-2'/></a>
                    </div>
                </div>
                <div className='h-screen p-10 pt-[10%] flex items-center justify-center'>
                    <div data-aos='fade-right' className='absolute mx-[55%] left-0 w-[0.1em] h-full bg-gray-400'></div>
                    <div data-aos='fade-left' className='absolute mx-[15%] right-0 w-[0.1em] h-full bg-gray-400'></div>
                
                    <Contact/>
                </div>
            </div>
        </div>
        </>
    );
}
