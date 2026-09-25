import React from 'react';
import BodyCard from '../BodyCard';
import { IType } from '@/type/type';


const getBoycore = async () => {
    const respons = await fetch('http://localhost:3000/data.json');
    const data = await respons.json();
    return data
}
const BodyCore = async () => {
    const Bodydata = await getBoycore();
    console.log(Bodydata);

    return (

        <section className=' container mx-auto'>
            {/*Font */}
            <div className='pb-4'>
                <h2 className=' font-bold text-3xl'>THE LIBRARY
                </h2>
                <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>

            </div>
            {/* Body card grid */}
            <div className=' grid grid-cols-3 gap-4 pb-9'>
                {
                    Bodydata.map((workout: IType, id: number) => {
                        return <BodyCard key={id} workout={workout} />
                    })
                }
            </div>
        </section>
    );
};

export default BodyCore;