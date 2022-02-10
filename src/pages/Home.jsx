import React, {useState, useRef, useEffect} from 'react';
import Navbar from '../components/Navbar';
import loader from '../assets/loader.svg';
import PortfolioSlider from '../components/PortfolioSlider';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HomeNav from '../components/HomeNav';
import me from '../assets/me.jpg';
const project = {
        id: 1,
        title: 'Nasheedcity',
        tagline: 'This is a tagline',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        image: 'https://source.unsplash.com/random/1280x720',

    }

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
            
  
        <div className='font-convergence relative scroll-smooth snap-y snap-mandatory snap-always h-screen w-screen overflow-y-scroll overflow-x-hidden text-white'>
            <div className='fixed z-40 right-0 top-[40%]'>
                <div className='h-full w-full flex items-center justify-end pr-16 text-gray-300 font-jetbrains'>
                    <ul className=''>
                        <li className='hover:text-orange-500 hover:underline underline-offset-2 transform duration-300'><a href='/#home'>Home</a></li>
                        <li className='mt-4 hover:text-orange-500 hover:underline underline-offset-2 transform duration-300'><a href='/#about'>About Me</a></li>
                        <li className='mt-4 hover:text-orange-500 hover:underline underline-offset-2 transform duration-300'><a href='/#featured'>Featured</a></li>
                        <li className='mt-4 hover:text-orange-500 hover:underline underline-offset-2 transform duration-300'><a href='/#blog'>Blog Posts</a></li>   
                    </ul>
                </div>
            </div>
            <div id='home' className='z-10 relative h-screen w-screen snap-start bg-gray-900 overflow-hidden'>
                <Navbar />
                
                <p className='w-full absolute rotate-[-90deg] md:rotate-0 top-[50%] left-20 md:left-0 md:bottom-0 z-0 opacity-5 text-sign-md lg:text-sign-lg xl:text-sign-xl text-center font-conforter'>
                    fardeen
                </p>

                <div className='w-full h-full flex justify-center items-center'>
                    <div className=''>
                    <h2 data-aos="zoom-in" id='helloText' className='text-2xl md:3xl lg:4xl xl:text-6xl text-orange-600 font-bold overflow-hidden'>Hello, <span className='text-gray-400'>i am</span></h2>
                    <p data-aos='fade-up' data-aos-duration="3000" id='nameText' className='font-josefin mt-10 text-5xl md:text-8xl lg:text-[8em] xl:text-[12em]'>Fardeen <span id='ehsan' className='text-outline text-transparent'>Ehsan</span></p>
                    </div>
                </div>

            </div>

            <div id='about' className='z-0 relative flex m-auto h-screen w-full snap-start bg-gray-800 items-center justify-center'>
                <p className='md:w-full absolute rotate-[-90deg] md:rotate-0 top-[10%] md:top-1/2 left-[70%] md:left-0 bottom-0 z-0 opacity-5 text-sign-md xl:text-sign-xl text-center  font-conforter'>
                    about
                </p>
                <div className='w-screen h-screen p-40 pt-52 grid grid-cols-2'>
                    <div className='flex flex-col justify-between'>
                        <h1 data-aos="fade-right" className='text-6xl font-jetbrains'>About<br/>Myself</h1>
                        <img data-aos="zoom-in" src={me} alt="myself" className='w-[21rem] rounded-xl shadow-lg shadow-gray-900' />
                    </div>
                    <div data-aos="fade-left" className='p-16 pt-0 text-justify'>
                        <p className='mb-8'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <p className='mb-8'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <p className='mb-8'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            
                    </div>

                </div>
            </div>


            <div id='featured' className='z-0 relative h-screen w-100 snap-start bg-slate-700 flex items-center justify-center'>
                <p className='-z-10 md:w-full absolute rotate-[-90deg] md:rotate-0 top-[10%] md:top-1/3 left-[30%] md:left-0 bottom-0 opacity-5 text-sign-md xl:text-sign-xl text-center  font-conforter'>
                    featured
                </p>
                
                {/* Featured Project */}
            
                <div className='h-screen w-screen p-40 pt-52'>
                    <div className='col-span-2 relative'>
                        <div className='absolute'>
                            <h1 data-aos="fade-right" className='text-6xl font-jetbrains'>Featured<br/>project</h1>
                        </div>
                        <div className='flex justify-end'>
                            <img data-aos="zoom-in" src={project.image}
                            className='w-4/6 rounded-xl shadow-lg' alt="" />
                        </div>
                        <div data-aos="fade-up" className='absolute mt-[-12%] '>
                            <h1 className='text-9xl font-josefin text-transparent text-outline'>{project.title}</h1>
                            <p className=' mb-4'>{project.tagline}</p>
                            <a href='/portfolio' className='p-2 px-4 rounded-lg shadow-lg cursor-pointer bg-gray-400 text-black hover:bg-slate-500'>View More</a>
                        </div>
                    </div>
                </div>                    
                {/* Featured Project */}
                    
                
            </div>
            

            <div id='blog' className='h-screen z-0 relative flex w-full snap-start bg-gray-700 items-center justify-center overflow-hidden'>
                <p className='md:w-full absolute rotate-[-90deg] md:rotate-0 top-[10%] md:top-1/2 left-[70%] md:left-0 bottom-0 z-0 opacity-5 text-sign-md xl:text-sign-xl text-center  font-conforter'>
                    blog
                </p>
                <div className='w-screen h-screen p-40 pt-52 grid grid-cols-4'>
                    <div className=''>
                        <h1 data-aos="fade-right" className='text-6xl font-jetbrains'>Blog<br/>Posts</h1>
                        <img src="" alt="" />
                    </div>
                    

                </div>
            </div>
        </div>
        </>
    );
}
