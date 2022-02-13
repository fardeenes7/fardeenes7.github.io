import React, {useState} from 'react';
import { Switch } from '@headlessui/react'
import {BsSunFill} from 'react-icons/bs'
import {BsMoonFill} from 'react-icons/bs'

export default function Navbar() {
    const [dark, setDark] = useState(true)
    const icon = dark ? <BsMoonFill className='text-black'/> : <BsSunFill/>
    return (
        <nav className='fixed top-0 z-[50] w-full lg:px-16 py-6 flex justify-between text-white font-convergence'>
                    <div className='w-1/5 items-center justify-center'>
                    <Switch
                        checked={dark}
                        onChange={setDark}
                        className={`${
                            dark ? 'bg-gray-200' : 'bg-gray-700'
                        } relative inline-flex items-center h-7 rounded-full w-12`}
                        >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${
                            dark ? 'translate-x-6' : 'translate-x-1'
                            } inline-block w-4 h-4 transform  rounded-full`}
                        >{icon}</span>
                    </Switch>
                    </div>

                    <div className='w-1/5 text-center items-center justify-center'>
                        <a href='/#home' className='text-4xl font-google font-bold'>fardeen.</a>
                    </div>

                    <div className='w-1/5 z-999'>
                        <ul className='flex justify-end'>
                        <li className='mx-4'>
                                <a href='/' className='text-lg font-bold'>
                                    Home
                                </a>
                            </li>
                            <li className='mx-4'>
                                <a href='/portfolio' className='text-lg font-bold'>
                                    Portfolio
                                </a>
                            </li>
                            <li className='mx-4'>
                                <a href='/resume' className='text-lg font-bold'>
                                    Resume
                                </a>
                            </li>
                            <li className='mx-4'>
                                <a href='/contact' className='text-lg font-bold'>
                                    Contact
                                </a>
                            </li>
                            <li className='mx-4'>
                                <a href='/blog' className='text-lg font-bold'>
                                    Blog
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
);
}
