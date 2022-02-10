import React, {useEffect} from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    useEffect(() => {
        Aos.init({duration: 1000});
        document.addEventListener('scroll', (event) => { Aos.refresh();}, {capture: true, passive: true,})
    }, [])
    return <div className='w-3/4' >
        <div className='relative'>
            <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeAD-PjtI7FtjqRusyMyrHsQmzlJQ6M-yLH3tOonOEaiXayWw/formResponse" method='POST'>
               
                <div className=' z-10 p-[4rem]'>
                <div className=' group mb-8'>
                        <input data-aos='zoom-in' id="name" type="text" name='entry.587396900' text-sm id="name" placeholder='Name'
                        className='w-full boder-0 border-b-2  bg-transparent border-gray-300 px-3 py-2 shadow-sm transition duration-400 focus:outline-none focus:border-b-3'
                        required/>
                    </div>
                    <div className=' group mb-8'>
                        <input data-aos='zoom-in' id="name"
                        type="email"
                        name='entry.1119803541'
                        text-sm id="name"
                        placeholder='Email'
                        className='w-full boder-0 border-b-2  bg-transparent border-gray-300 px-3 py-2 shadow-sm transition duration-400 focus:outline-none focus:border-b-3'
                        required/>
                    </div>
                    <div className=' group mb-8'>
                        <textarea data-aos='zoom-in' id="name"
                        type="text"
                        name='entry.933951563'
                        text-sm id="name"
                        placeholder='Message'
                        className='w-full boder-0 border-b-2  bg-transparent border-gray-300 px-3 py-2 shadow-sm transition duration-400 focus:outline-none focus:border-b-3'
                        required/>
                    </div>
                    
                    <button data-aos='zoom-in' className='bg-gray-600 w-full p-3 hover:bg-slate-500 transition duration-400'>Submit</button>    
                    
                </div>

            </form>

        </div>
    </div>;
}
