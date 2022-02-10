import React from 'react';

export default function Navbar() {
    return (
        <nav className='fixed top-0 z-[50] w-full lg:px-16 py-6 flex justify-between'>
                    <div className='w-1/5 items-center justify-center'>
                        <a href='/blog' className='text-lg font-bold'>
                            Blog
                        </a>
                    </div>

                    <div className='w-1/5 text-center items-center justify-center'>
                        <a href='#home' className='text-4xl font-convergence font-bold'>fardeen.</a>
                    </div>

                    <div className='w-1/5 z-999'>
                        <ul className='flex justify-end'>
                            <li className='mx-4'>
                                <a href='#portfolio' className='text-lg font-bold'>
                                    Portfolio
                                </a>
                            </li>
                            <li className='mx-4'>
                                <a href='#resume' className='text-lg font-bold'>
                                    Resume
                                </a>
                            </li>
                            <li className='mx-4'>
                                <a href='#contact' className='text-lg font-bold'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
);
}
