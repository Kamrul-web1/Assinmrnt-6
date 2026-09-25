import Image from 'next/image';
import React from 'react';
import logopng from '@/assets/Brand Logo Left.png'

const Footar = () => {
    return (
        <footer className=" footer bg-[#090A0D]  w-full h-[80px] pt-8 mt-5 ">
            <div className=' container mx-auto flex items-center justify-between'>
                <div className=' flex gap-1'><Image src={logopng} alt='Footar img' className='' />
                </div>


                <p className='text-[#8A92A0]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>

        </footer>
    );
};

export default Footar;