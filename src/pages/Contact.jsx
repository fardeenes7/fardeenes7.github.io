import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import Navbar from '../components/Navbar';

export default function Contact() {
    useEffect(() => {
        Aos.init({duration: 1000});
        document.addEventListener('scroll', (event) => { Aos.refresh();}, {capture: true, passive: true,})
    }, [])
    return (
        <>
        <Navbar/>
    <div id='contact' className='px-10 lg:px-40 z-0 relative h-screen w-screen snap-start bg-[#060406] grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden text-white font-convergence'>
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
                
                    <div className='w-3/4' >
                        <div className='relative'>
                            <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeAD-PjtI7FtjqRusyMyrHsQmzlJQ6M-yLH3tOonOEaiXayWw/formResponse" method='POST'>
                            
                                <div className=' z-10 p-[4rem]'>
                                <div className=' group mb-8'>
                                        <input data-aos='zoom-in' id="name" type="text" name='entry.587396900' text-sm id="name" placeholder='Name'
                                        className='font-jetbrains w-full boder-0 border-b-2  bg-transparent border-gray-300 px-3 py-2 shadow-sm transition duration-400 focus:outline-none focus:border-b-3'
                                        required/>
                                    </div>
                                    <div className=' group mb-8'>
                                        <input data-aos='zoom-in' id="name"
                                        type="email"
                                        name='entry.1119803541'
                                        text-sm id="name"
                                        placeholder='Email'
                                        className='font-jetbrains w-full boder-0 border-b-2  bg-transparent border-gray-300 px-3 py-2 shadow-sm transition duration-400 focus:outline-none focus:border-b-3'
                                        required/>
                                    </div>
                                    <div className=' group mb-8'>
                                        <textarea data-aos='zoom-in' id="name"
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
</>
            );
}
