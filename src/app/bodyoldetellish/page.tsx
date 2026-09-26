
"use client";

import { BodykContext } from "@/Context/BooksContext";

import Image from "next/image";

import Link from "next/link";

import React, { useContext, useState } from "react";

import {
    Check,
    Clock3,
    Flame,
    Star,
    X,
    Bookmark,
} from "lucide-react";

import { toast } from "react-toastify";

const BodyolldetelsAncount = () => {
    const context = useContext(BodykContext);

    if (!context) return null;

    const {
        Gimworout,
        setgemworout,
        Worklist,
        setWorklist,
    } = context;

    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
    const [completed, setCompleted] = useState<number[]>([]);

    const [sortBy, setSortBy] = useState<
        "duration" | "calories" | "rating"
    >("duration");

    // Today's plan statistics
    const totalExercises = Gimworout.length;

    const totalMinutes = Gimworout.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = Gimworout.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    // Sort today's workouts
    const sortedWorkouts = [...Gimworout].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        return a.rating - b.rating;
    });

    // Mark as done
    const handleDone = (id: number) => {
        const alreadyCompleted = completed.includes(id);

        if (alreadyCompleted) {
            setCompleted((prev) =>
                prev.filter((item) => item !== id)
            );

            toast.info("Workout marked as incomplete");
        } else {
            setCompleted((prev) => [...prev, id]);

            toast.success("Workout completed");
        }
    };

    // Remove today's workout
    const handleRemoveToday = (id: number) => {
        setgemworout((prev) =>
            prev.filter((workout) => workout.id !== id)
        );

        setCompleted((prev) =>
            prev.filter((item) => item !== id)
        );

        toast.success("Workout removed from today's plan");
    };

    // Remove saved workout
    const handleRemoveSaved = (id: number) => {
        setWorklist((prev) =>
            prev.filter((workout) => workout.id !== id)
        );

        toast.success("Workout removed from saved list");
    };

    // Saved -> Today's Plan
    const handleAddToToday = (workout: (typeof Worklist)[number]) => {
        const alreadyAdded = Gimworout.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            toast.warning("Already added to today's plan");
            return;
        }

        setgemworout((prev) => [...prev, workout]);

        toast.success("Added to today's plan");
    };

    return (
        <main className="min-h-screen bg-[#0d0f12] px-5 py-8 text-white md:px-8">
            <div className="mx-auto max-w-[900px]">

                {/* ================= HEADER ================= */}
                <div className="mb-5">
                    <h1 className="text-[24px] font-extrabold tracking-tight">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-[11px] text-[#7b8089]">
                        Cap off five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* ================= STATS ================= */}
                <div className="mb-6 grid grid-cols-3 overflow-hidden rounded-xl border border-[#242830] bg-[#12151b]">

                    {/* Exercises */}
                    <div className="border-r border-[#242830] px-5 py-5">
                        <p className="text-[10px] text-[#777d86]">
                            Exercises
                        </p>

                        <h2 className="mt-1 text-[28px] font-extrabold text-[#b7ff00]">
                            {totalExercises}
                        </h2>
                    </div>

                    {/* Minutes */}
                    <div className="border-r border-[#242830] px-5 py-5">
                        <p className="text-[10px] text-[#777d86]">
                            Minutes
                        </p>

                        <h2 className="mt-1 text-[28px] font-extrabold">
                            {totalMinutes}
                        </h2>
                    </div>

                    {/* Calories */}
                    <div className="px-5 py-5">
                        <p className="text-[10px] text-[#777d86]">
                            Calories
                        </p>

                        <h2 className="mt-1 text-[28px] font-extrabold">
                            {totalCalories}
                        </h2>
                    </div>
                </div>

                {/* ================= TAB ================= */}
                <div className="mb-4 flex items-center justify-between">

                    <div className="flex rounded-lg border border-[#242830] bg-[#12151b] p-1">

                        <button
                            onClick={() => setActiveTab("today")}
                            className={`rounded-md px-4 py-2 text-[10px] font-medium ${activeTab === "today"
                                ? "bg-[#1d222b] text-white"
                                : "text-[#747a84]"
                                }`}
                        >
                            Today's Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-md px-4 py-2 text-[10px] font-medium ${activeTab === "saved"
                                ? "bg-[#1d222b] text-white"
                                : "text-[#747a84]"
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    <div className="hidden items-center gap-2 sm:flex">
                        <span className="text-[9px] text-[#737983]">
                            Sort By
                        </span>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(
                                    e.target.value as
                                    | "duration"
                                    | "calories"
                                    | "rating"
                                )
                            }
                            className="rounded-md border border-[#292e36] bg-[#15181e] px-3 py-2 text-[9px] text-[#c5c8ce] outline-none"
                        >
                            <option value="duration">
                                Duration
                            </option>

                            <option value="calories">
                                Calories
                            </option>

                            <option value="rating">
                                Rating
                            </option>
                        </select>
                    </div>
                </div>

                {/* ================================================= */}
                {/*                  TODAY'S PLAN                     */}
                {/* ================================================= */}

                {activeTab === "today" && (
                    <>
                        {Gimworout.length === 0 ? (
                            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252a31] bg-[#0f1115]">

                                <h2 className="text-[16px] font-extrabold">
                                    NOTHING HERE YET
                                </h2>

                                <p className="mt-2 text-center text-[10px] text-[#777d86]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link
                                    href="/"
                                    className="mt-5 rounded-full bg-[#b7ff00] px-5 py-2.5 text-[10px] font-bold text-black transition hover:bg-[#a7ed00]"
                                >
                                    Go to workouts
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-3">

                                {sortedWorkouts.map((workout) => {

                                    const isDone = completed.includes(workout.id);

                                    return (
                                        <div
                                            key={workout.id}
                                            className={`flex items-center gap-3 rounded-xl border border-[#242830] bg-[#12151b] p-3 transition ${isDone ? "opacity-60" : ""
                                                }`}
                                        >

                                            {/* IMAGE */}
                                            <div className="relative h-[65px] w-[110px] shrink-0 overflow-hidden rounded-lg">

                                                <Image
                                                    src={workout.image}
                                                    alt={workout.name}
                                                    fill
                                                    sizes="110px"
                                                    className="object-cover"
                                                />

                                            </div>

                                            {/* CONTENT */}
                                            <div className="min-w-0 flex-1">

                                                <h2
                                                    className={`text-[12px] font-extrabold uppercase ${isDone ? "line-through" : ""
                                                        }`}
                                                >
                                                    {workout.name}
                                                </h2>

                                                <p className="mt-1 text-[9px] text-[#777d86]">
                                                    {workout.equipment}
                                                </p>

                                                <div className="mt-2 flex flex-wrap items-center gap-3">

                                                    <span className="flex items-center gap-1 text-[9px] text-[#c2c5ca]">

                                                        <Clock3
                                                            size={10}
                                                            className="text-[#b7ff00]"
                                                        />

                                                        {workout.duration} min

                                                    </span>

                                                    <span className="flex items-center gap-1 text-[9px] text-[#c2c5ca]">

                                                        <Flame
                                                            size={10}
                                                            className="text-[#b7ff00]"
                                                        />

                                                        {workout.caloriesBurned} kcal

                                                    </span>

                                                    <span className="flex items-center gap-1 text-[9px] text-[#c2c5ca]">

                                                        <Star
                                                            size={10}
                                                            className="fill-[#b7ff00] text-[#b7ff00]"
                                                        />

                                                        {workout.rating}

                                                    </span>

                                                </div>
                                            </div>

                                            {/* BUTTONS */}
                                            <div className="hidden shrink-0 items-center gap-2 md:flex">

                                                <Link
                                                    href={`/Body/${workout.id}`}
                                                    className="rounded-full border border-[#303640] px-4 py-2 text-[9px] text-[#c4c7cc] transition hover:border-[#b7ff00] hover:text-white"
                                                >
                                                    View Details
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        handleDone(workout.id)
                                                    }
                                                    className="flex items-center gap-1.5 rounded-full bg-[#b7ff00] px-4 py-2 text-[9px] font-bold text-black transition hover:bg-[#a7ed00]"
                                                >
                                                    <Check
                                                        size={11}
                                                        strokeWidth={3}
                                                    />

                                                    {isDone
                                                        ? "Completed"
                                                        : "Mark as Done"}
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        handleRemoveToday(workout.id)
                                                    }
                                                    className="p-1 text-[#636973] hover:text-white"
                                                >
                                                    <X size={15} />
                                                </button>

                                            </div>

                                            {/* MOBILE REMOVE */}
                                            <button
                                                onClick={() =>
                                                    handleRemoveToday(workout.id)
                                                }
                                                className="text-[#636973] hover:text-white md:hidden"
                                            >
                                                <X size={15} />
                                            </button>

                                        </div>
                                    );
                                })}

                            </div>
                        )}
                    </>
                )}

                {/* ================================================= */}
                {/*                       SAVED                       */}
                {/* ================================================= */}

                {activeTab === "saved" && (
                    <>
                        {Worklist.length === 0 ? (
                            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252a31] bg-[#0f1115]">

                                <Bookmark
                                    size={25}
                                    className="mb-3 text-[#555b64]"
                                />

                                <h2 className="text-[16px] font-extrabold">
                                    NOTHING SAVED YET
                                </h2>

                                <p className="mt-2 text-center text-[10px] text-[#777d86]">
                                    Save workouts for later from the workout details.
                                </p>

                            </div>
                        ) : (
                            <div className="space-y-3">

                                {Worklist.map((workout) => (

                                    <div
                                        key={workout.id}
                                        className="flex items-center gap-3 rounded-xl border border-[#242830] bg-[#12151b] p-3"
                                    >

                                        {/* IMAGE */}
                                        <div className="relative h-[65px] w-[110px] shrink-0 overflow-hidden rounded-lg">

                                            <Image
                                                src={workout.image}
                                                alt={workout.name}
                                                fill
                                                sizes="110px"
                                                className="object-cover"
                                            />

                                        </div>

                                        {/* CONTENT */}
                                        <div className="min-w-0 flex-1">

                                            <h2 className="text-[12px] font-extrabold uppercase">
                                                {workout.name}
                                            </h2>

                                            <p className="mt-1 text-[9px] text-[#777d86]">
                                                {workout.equipment}
                                            </p>

                                            <div className="mt-2 flex flex-wrap items-center gap-3">

                                                <span className="flex items-center gap-1 text-[9px] text-[#c2c5ca]">

                                                    <Clock3
                                                        size={10}
                                                        className="text-[#b7ff00]"
                                                    />

                                                    {workout.duration} min

                                                </span>

                                                <span className="flex items-center gap-1 text-[9px] text-[#c2c5ca]">

                                                    <Flame
                                                        size={10}
                                                        className="text-[#b7ff00]"
                                                    />

                                                    {workout.caloriesBurned} kcal

                                                </span>

                                                <span className="flex items-center gap-1 text-[9px] text-[#c2c5ca]">

                                                    <Star
                                                        size={10}
                                                        className="fill-[#b7ff00] text-[#b7ff00]"
                                                    />

                                                    {workout.rating}

                                                </span>

                                            </div>
                                        </div>

                                        {/* SAVED BUTTONS */}
                                        <div className="hidden shrink-0 items-center gap-2 md:flex">

                                            <button
                                                onClick={() =>
                                                    handleAddToToday(workout)
                                                }
                                                className="rounded-full bg-[#b7ff00] px-4 py-2 text-[9px] font-bold text-black transition hover:bg-[#a7ed00]"
                                            >
                                                Add to Today's Plan
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleRemoveSaved(workout.id)
                                                }
                                                className="p-1 text-[#636973] hover:text-white"
                                            >
                                                <X size={15} />
                                            </button>

                                        </div>

                                    </div>
                                ))}

                            </div>
                        )}
                    </>
                )}

            </div>
        </main>
    );
};

export default BodyolldetelsAncount;

