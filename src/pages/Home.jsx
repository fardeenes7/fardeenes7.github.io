import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import loader from '../assets/loader.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import me from '../assets/me.jpg';
import portfolio1 from '../assets/portfolio2.jpg'
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';

const project = {
        id: 1,
        title: 'Nasheedcity',
        tagline: 'This is a tagline',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        image: portfolio1,

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
            
            <div id='home' className='z-10 relative h-screen w-screen snap-start bg-gray-900 overflow-hidden'>
                <Navbar />
                
                <p className='w-full absolute rotate-[-90deg] md:rotate-0 top-[50%] left-20 md:left-0 md:bottom-0 z-0 opacity-5 text-sign-md lg:text-sign-lg xl:text-sign-xl text-center font-conforter'>
                    fardeen
                </p>

                <div className='w-full h-full flex justify-center items-center'>
                    <div className=''>
                    <h2 data-aos="zoom-in" id='helloText' className='text-2xl md:3xl lg:4xl xl:text-6xl text-orange-600 font-bold overflow-hidden'>Hello, <span className='text-gray-400'>i am</span></h2>
                    <p data-aos='fade-up' data-aos-duration="3000" id='nameText' className='font-josefin mt-10 text-5xl md:text-7xl lg:text-[7em] xl:text-[11em]'>Fardeen <span id='ehsan' className='text-outline text-transparent'>Ehsan</span></p>
                    </div>
                </div>

            </div>

            <div id='about' className='z-0 relative m-auto h-screen w-full snap-start bg-black items-center justify-center'>
                <p className='md:w-full absolute rotate-[-90deg] md:rotate-0 top-[10%] md:top-1/2 left-[70%] md:left-0 bottom-0 z-0 opacity-5 text-sign-md xl:text-sign-xl text-center  font-conforter'>
                    about
                </p>
                <img data-aos="zoom-in" src={me} alt="myself" className='z-0 absolute bottom-0 right-3 w-[100%] max-w-4xl rounded-xl' />

                <div className='z-10 relative w-screen h-screen grid sm:grid-cols-1 xl:grid-cols-2 p-8 lg:p-40 pt-24 lg:pt-52'>
                    <div className='flex flex-col lg:justify-between'>
                        <h1 data-aos="fade-right" className='text-6xl font-jetbrains'>About<br/>Myself</h1>
                        <div  data-aos="fade-up" className='pt-10 font-jetbrains max-w-lg flex flex-col justify-center'>
                            <p className='mb-8'>"Hello, I am Fardeen Ehsan"</p>
                            <p className='mb-8'>"I'm a computer science student graduating in 2022. "</p>
                            <p className='mb-8'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='p-16 pt-0 text-justify'>
                    </div>


                </div>
            </div>


            <div id='featured' className='z-0 relative m-auto h-screen w-full snap-start bg-slate-700 items-center justify-center'>
                <p className='md:w-full absolute rotate-[-90deg] md:rotate-0 top-[10%] md:top-1/2 left-[70%] md:left-0 bottom-0 z-0 opacity-5 text-sign-md xl:text-sign-xl text-center  font-conforter'>
                    featured
                </p>
                <img data-aos="zoom-in" src={project.image} alt="myself" className='z-0 absolute bottom-[20%] lg:bottom-[5%] lg:right-[5%] w-[100%] lg:w-[70%] max-w-6xl rounded-xl' />

                <div className='z-10 relative w-screen h-screen grid grid-cols-1 xl:grid-cols-3 p-8 lg:p-40 pt-24 lg:pt-52'>
                    <div className='flex flex-col xl:justify-between'>
                        <h1 data-aos="fade-right" className='text-6xl font-jetbrains'>Featured<br/>Project</h1>
                        <div data-aos="fade-left" className='pt-10 font-jetbrains max-w-lg flex flex-col justify-center'>
                            <p className='mb-8'>{project.description}</p>
                        </div>
                    </div>
                    <div  data-aos="fade-down"  className='z-10 absolute p-8 lg:pt-12 lg:relative bottom-12 text-justify'>
                        <h1 className='text-6xl lg:text-9xl font-josefin lg:text-transparent text-outline'>{project.title}</h1>
                    </div>



                </div>
            </div>

            

            <div id='blog' className='h-screen z-0 relative flex w-full snap-start bg-gray-800 items-center justify-center overflow-hidden'>
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

            <div id='contact' className='h-screen z-0 relative flex w-full snap-start bg-gray-800 items-center justify-center overflow-hidden'>
                <div className='px-10 xl:px-40 z-0 relative h-screen w-screen snap-start bg-[#060406] grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden text-white font-convergence'>
                    <div data-aos='fade-down' className='absolute hidden lg:block top-[40%] lg:my-[15%] xl:my-[10%] lg:top-0 h-[0.1em] w-screen bg-gray-400'></div>
                    <div data-aos='fade-up' className='absolute hidden lg:block top-[60%] lg:my-[10%] xl: h-[0.1em] w-screen bg-gray-400'></div>
                    
                    <p className='-z-10 md:w-full absolute rotate-[-90deg] md:rotate-0 top-[10%] md:top-1/2 left-[50%] md:left-0 bottom-0 opacity-10 text-sign-md xl:text-sign-xl text-center  font-conforter'>
                        contact
                    </p>
                    <div className='z-10 relative w-screen p-8 lg:p-40 pt-24 lg:pt-52'>
                        <h1 data-aos="fade-right" className='text-6xl font-jetbrains'>Contact</h1>

                        <div  data-aos="zoom-in" className='flex justify-left mt-4 pt-4 text-center'>
                            <a target="_blank" href="https://www.facebook.com/fardeen.es7"><FaFacebook className='text-2xl mx-2'/></a>
                            <a target="_blank" href="https://www.linkedin.com/in/fardeenes7/"><FaLinkedin className='text-2xl mx-2'/></a>
                            <a target="_blank" href="https://github.com/fardeenes7"><FaGithub className='text-2xl mx-2'/></a>        
                            <a href="mailto:fardeen.es7@gmail.com"><SiGmail className='text-2xl mx-2'/></a>
                        </div>
                    </div>
                    <div className='z-20 h-screen p-0 lg:p-10 pt-[10%] flex items-center justify-center'>
                        <div data-aos='fade-right' className='absolute hidden lg:block mx-[55%] left-0 w-[0.1em] h-full bg-gray-400'></div>
                        <div data-aos='fade-left' className='absolute hidden lg:block mx-[10%] xl:mx-[15%] right-0 w-[0.1em] h-full bg-gray-400'></div>
                    
                        <div className='h-full w-full md:w-3/4 lg:w-full xl:w-3/4 lg:pt-[40%]' >
                            <div className='relative'>
                                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeAD-PjtI7FtjqRusyMyrHsQmzlJQ6M-yLH3tOonOEaiXayWw/formResponse" method='POST'>
                                
                                    <div data-aos='zoom-in' className='z-20 pt-[5rem] lg:p-[4rem]'>
                                        <div className=' group mb-8'>
                                            <input type="text" name='entry.587396900' text-sm id="name" placeholder='Name'
                                            className='font-jetbrains w-full boder-0 border-b-2  bg-transparent border-gray-300 px-3 py-2 shadow-sm transition duration-400 focus:outline-none focus:border-b-3'
                                            required/>
                                        </div>
                                        <div className=' group mb-8'>
                                            <input
                                            type="email"
                                            name='entry.1119803541'
                                            text-sm id="name"
                                            placeholder='Email'
                                            className='font-jetbrains w-full boder-0 border-b-2  bg-transparent border-gray-300 px-3 py-2 shadow-sm transition duration-400 focus:outline-none focus:border-b-3'
                                            required/>
                                        </div>
                                        <div className=' group mb-8'>
                                            <textarea
                                            type="text"
                                            name='entry.933951563'
                                            text-sm id="name"
                                            placeholder='Message'
                                            className='font-jetbrains w-full boder-0 border-b-2  bg-transparent border-gray-300 px-3 py-2 shadow-sm transition duration-400 focus:outline-none focus:border-b-3'
                                            required/>
                                        </div>
                                        
                                        <button data-aos='zoom-in' className='font-jetbrains bg-gray-600 w-full p-3 hover:bg-slate-500 transition duration-400'>Submit</button>    
                                        
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        </>
    );
}
