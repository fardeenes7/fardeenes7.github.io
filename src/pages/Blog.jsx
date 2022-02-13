import React, {useEffect, useRef} from 'react';


export default function Blog() {
    const portfolioWidth = useRef(null);
      
    return <div className=''>
                <div className='z-10 h-screen bg-gray-800 w-screen flex items-center justify-center shrink-0'><p>This is Project Main</p></div>
        
        <div ref={portfolioWidth} className='portfolio z-0 relative h-screen snap-start bg-slate-700 flex items-center justify-center overflow-hidden'>
                <p className=' absolute bottom-0 z-0 opacity-5  text-sign md:text-sign-md xl:text-sign-xl text-center  font-conforter'>
                    portfolio
                </p>
                
                <div id='portfolio' className=' w-100 flex flex-row overflow-hidden'>
                <div className='panel h-screen bg-orange-800 w-screen flex items-center justify-center shrink-0'><p>This is Project One</p></div>
                <div className='panel h-screen bg-slate-500 w-screen flex items-center justify-center shrink-0'><p>This is Project Two</p></div>
                <div className='panel h-screen bg-red-500 w-screen flex items-center justify-center shrink-0'><p>This is Project Three</p></div>
                <div className='panel h-screen bg-yellow-500 w-screen flex items-center justify-center shrink-0'><p>This is Project Four</p></div>
                    
                </div>
            </div>
    </div>;
}
