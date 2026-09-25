import { IType } from '@/type/type';
import Image from 'next/image';
import React from 'react';
import { CalendarPlus, Bookmark } from "lucide-react";
interface IBookDetailspageProps {
    params: promise<{
        slug: string
    }>;
}

const getBoycore = async () => {
    const respons = await fetch('http://localhost:3000/data.json');
    const data = await respons.json();
    return data
}

const BodyditelsPage = async ({ params }: IBookDetailspageProps) => {
    const { slug } = await params;
    console.log(slug, 'slug');
    const Bodydata = await getBoycore();
    const Body = Bodydata.find((Body: IType) => (Body.id) === Number(slug)) as IType
    console.log(Body);


    return (
        <main className="min-h-screen bg-[#0d0f13] px-4 py-8 text-white md:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">

                {/* IMAGE  */}
                <div className="overflow-hidden rounded-[12px]">
                    <Image
                        src={Body.image}
                        alt={Body.name}
                        height={500}
                        width={500}
                        className="h-full min-h-[500px] w-full object-cover"
                    />
                </div>

                {/* DETAILS  */}
                <div className="flex flex-col">

                    {/* Title */}
                    <h1 className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
                        {Body.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-6 text-gray-400">
                        {Body.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {Body.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-[#b7ff00] px-3 py-1 text-xs font-bold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* INFO BOx */}
                    <div className="mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#151820]">

                        {/* Equipment */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                                Equipment
                            </span>

                            <span className="text-xs text-gray-200">
                                {Body.equipment}
                            </span>
                        </div>

                        {/* Difficulty */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                                Difficulty
                            </span>

                            <span className="text-xs text-gray-200">
                                {Body.difficulty}
                            </span>
                        </div>


                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                                Sets
                            </span>

                            <span className="text-xs text-gray-200">
                                {Body.sets}
                            </span>
                        </div>

                        {/* Reps */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                                Reps
                            </span>

                            <span className="text-xs text-gray-200">
                                {Body.reps}
                            </span>
                        </div>

                        {/* Duration */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                                Duration
                            </span>

                            <span className="text-xs text-gray-200">
                                {Body.duration} min
                            </span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                                Calories
                            </span>

                            <span className="text-xs text-gray-200">
                                {Body.caloriesBurned} kcal
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                                Rating
                            </span>

                            <span className="text-xs text-gray-200">
                                {Body.rating}
                            </span>
                        </div>

                    </div>

                    {/*  INSTRUCTION */}
                    <div className="mt-6">

                        <h2 className="mb-4 text-sm font-bold uppercase tracking-wide">
                            Instructions
                        </h2>

                        <ol className="space-y-3">
                            {Body.instructions.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex gap-3 text-sm leading-6 text-gray-400"
                                >
                                    <span className="min-w-[15px] text-gray-500">
                                        {index + 1}.
                                    </span>

                                    <span>{item}</span>
                                </li>
                            ))}
                        </ol>

                    </div>

                    {/* BUTTONS  */}
                    <div className="mt-7 flex gap-3">

                        <div className="mt-7 flex gap-3">
                            {/* Add to today's plan */}
                            <button className="flex items-center gap-2 rounded-lg bg-[#b7ff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#a5e600]">
                                <CalendarPlus size={15} strokeWidth={2.5} />
                                <span>Add to today&apos;s plan</span>
                            </button>

                            {/* Save for later */}
                            <button className="flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-300 transition hover:bg-gray-800">
                                <Bookmark size={15} strokeWidth={2} />
                                <span>Save for later</span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default BodyditelsPage;