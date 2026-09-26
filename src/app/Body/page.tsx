import BodyCard from '@/components/components/shared/BodyCard';
import BannerPage from '@/components/components/shared/homepage/Banner';
import { IType } from '@/type/type';

import Link from 'next/link';
import React from 'react';


const getBoycore = async () => {
    const respons = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await respons.json();
    return data;
};

const WorkouPage = async () => {
    const Bodydata = await getBoycore();
    return (
        <section className="container mx-auto pt-7">
            <div className="w-full max-w-7xl overflow-hidden    bg-[#000000] shadow-lg">

                {/* Banner */}
                <div className="  container mx-auto">
                    <BannerPage />
                </div>

                {/* Library */}
                <div className="relative z-10 px-6 pt-8 pb-4 bg-[#000000]">
                    <h2 className="font-bold text-3xl">
                        THE LIBRARY
                    </h2>

                    <p className="text-[#9CA3AF]">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                {/* Cards */}
                <div className="relative z-10 grid grid-cols-3 gap-4 px-6 pb-9 bg-[#000000]">
                    {Bodydata.map((workout: IType) => {
                        return (
                            <Link
                                key={workout.id}
                                href={`/Body/${workout.id}`}
                            >
                                <BodyCard workout={workout} />
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default WorkouPage;