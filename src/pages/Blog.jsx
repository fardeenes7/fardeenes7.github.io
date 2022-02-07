import React from 'react';
import $ from 'jquery';
export default function Blog() {
    $(window).on('scroll', function() {
        $("#realcontent").css("left", -$(window).scrollTop());
      });
      
    return <div>
        <div id="realcontent" className='bg-[#333] fixed top-5 left-0 w-[2000px] text-white h-[20px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam a est maiores fugiat nesciunt, at ad. Tempore odio velit ipsam, laborum explicabo repudiandae aliquid nostrum qui dolorem obcaecati, autem expedita!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam a est maiores fugiat nesciunt, at ad. Tempore odio velit ipsam, laborum explicabo repudiandae aliquid nostrum qui dolorem obcaecati, autem expedita!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam a est maiores fugiat nesciunt, at ad. Tempore odio velit ipsam, laborum explicabo repudiandae aliquid nostrum qui dolorem obcaecati, autem expedita!</div>
        <div id="fakecontent" className='h-[2000px]'></div>
    </div>;
}
