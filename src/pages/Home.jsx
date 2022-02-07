import React from 'react';
import me from  '../images/me.jpg'

export default function Home() {
    return (
        <div className='snap-y snap-mandatory snap-always h-screen w-screen overflow-y-scroll text-white'>
            
            <div className='h-screen w-full snap-start bg-gray-900'>
                <nav className='w-full lg:px-16 py-6 flex justify-between'>
                    <div className='w-1/5 items-center justify-center'>
                        <a href='#' className='text-lg font-bold'>
                            Home
                        </a>
                    </div>

                    <div className='items-center justify-center'>
                        <h1 className='text-4xl font-bold'>fardeen.</h1>
                    </div>

                    <div className='w-1/5'>
                        <ul className='flex items-center'>
                            <li className='mx-4'>
                                <a href='#' className='text-lg font-bold'>
                                    Portfolio
                                </a>
                            </li>
                            <li className='mx-4'>
                                <a href='#' className='text-lg font-bold'>
                                    About
                                </a>
                            </li>
                            <li className='mx-4'>
                                <a href='#' className='text-lg font-bold'>
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className='w-full h-full flex justify-center items-center'>
                    <div>
                    <h2 className='text-6xl text-rose-400 font-bold'>Hello, <span className='text-gray-400'>i am</span></h2>
                    <p className='text-[12em]'>Fardeen Ehsan</p>
                    </div>
                    
                </div>

            </div>

            <div className='h-screen w-full snap-start bg-slate-700 flex items-center justify-center'>
                <h2>Two</h2>
            </div>

            <div className='h-screen w-full snap-start bg-gray-800 flex items-center justify-center'>
                <h2>Three</h2>
            </div>

            <div className='h-screen w-full snap-start bg-slate-900 flex items-center justify-center'>
                <h2>Four</h2>
            </div>
        </div>
    );
}
