import React from 'react';
import maintenance from './maintenance.svg';

export default function Maintenance() {
    return(
        <div className='w-[100hw] h-[100vh] bg-slate-800 flex flex-col justify-center'>
            <div className='flex justify-center'>
                <img src={maintenance} alt='logo' className='w-80 h-80 outline-white outline-2'/>
            </div>
            <div className='flex justify-center'>
                <h1 className='text-center text-white text-4xl font-bold mb-2'>This website is under maintenance.</h1>
            </div>
            <div className='flex justify-center'>
                <h1 className='text-center text-white text-2xl'>Please come back later.</h1>
            </div>

        </div>
    );
}
