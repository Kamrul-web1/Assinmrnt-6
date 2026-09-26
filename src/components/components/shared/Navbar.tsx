"use client";

import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { BodykContext } from "@/Context/BooksContext";

const Navbar = () => {
    const context = useContext(BodykContext);

    if (!context) return null;

    const { Gimworout, Worklist } = context;

    return (
        <div className="navbar bg-[#0C0D10] shadow-sm">

            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                    </ul>
                </div>

                <Image src={logo} alt="logopng" />

                <a className="btn btn-ghost text-xl">
                    FITLOG
                </a>
            </div>

            <div className="navbar-center flex gap-4">
                <ul className="flex gap-4">
                    <li>
                        <Link
                            href="/Body"
                            className="w-5 mx-3 py-2 px-4 rounded-3xl bg-[#2D313B] text-[#C2F800]"
                        >
                            Workouts
                        </Link>
                    </li>

                    <li></li>

                    <li>
                        <Link
                            href="/bodyoldetellish"
                            className="w-5 m-4 p-2 rounded-3xl text-[#9CA3AF]"
                        >
                            My Plan
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end flex gap-1.5">

                <Link
                    href="/bodyoldetellish"
                    className="text-[#D1D5DB] pr-1.5 flex items-center"
                >
                    Plan
                    <span
                        className={`ml-1 inline-flex min-w-[24px] h-[24px] items-center justify-center rounded-full px-1 text-[11px] font-bold ${Gimworout.length > 0
                                ? "bg-[#C2F800] text-black"
                                : "bg-[#0F1115] text-[#9CA3AF]"
                            }`}
                    >
                        {Gimworout.length}
                    </span>
                </Link>

                <Link
                    href="/bodyoldetellish"
                    className="text-[#D1D5DB] pr-1.5 flex items-center"
                >
                    Saved
                    <span
                        className={`ml-1 inline-flex min-w-[24px] h-[24px] items-center justify-center rounded-full px-1 text-[11px] font-bold ${Worklist.length > 0
                                ? "bg-[#C2F800] text-black"
                                : "bg-[#0F1115] text-[#9CA3AF]"
                            }`}
                    >
                        {Worklist.length}
                    </span>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;