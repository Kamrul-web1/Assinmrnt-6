import Image from 'next/image';

import Bannarimg from '@/assets/banner.png'

import React from 'react';

const BannerPage = () => {

    return (

        <section className='container mx-auto my-[50px] py-9 bg-[#15171D] rounded-2xl'>

            <div className='grid grid-cols-[60%_40%] items-center gap-3'>

                <div className='pl-10'>

                    <p className='text-[#C2F800] pt-4'>
                        WORKOUT LIBRARY
                    </p>

                    <h1 className='text-5xl font-bold py-5'>
                        TRAIN WITH INTENT.LOG <br />
                        EVERY SET.
                    </h1>

                    <p className='text-[#9CA3AF]'>
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today's plan, and watch the week's work add up.
                    </p>

                    <button className='text-[#000000] bg-[#C2F800] mx-4 m-4 px-4 py-2 font-bold rounded-b-sm'>
                        BROWSE WORKOUTS
                    </button>

                </div>

                <div className='ml-[80px]'>

                    <Image
                        src={Bannarimg}
                        alt='Banarimg'
                    />

                </div>

            </div>

        </section>
    );
};

export default BannerPage;