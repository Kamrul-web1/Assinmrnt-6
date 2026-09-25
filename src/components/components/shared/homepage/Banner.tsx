import Image from 'next/image';
import Bannarimg from '@/assets/banner.png'
import React from 'react';

const BannerPage = () => {
    return (
        <div>
            <div>
                <p>WORKOUT LIBRARY</p>
                <h1>TRAIN WITH INTENT. LOG
                    EVERY SET.</h1>
                <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.</p>

            </div>
            <div>
                <Image src={Bannarimg} alt='Banarimg' />
            </div>
        </div>
    );
};

export default BannerPage;