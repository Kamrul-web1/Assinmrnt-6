import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className="navbar bg-[#0C0D10] shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                    </ul>
                </div>

                <Image src={logo} alt='logopng'
                />
                <a className="btn btn-ghost text-xl">FITLOG
                </a>
            </div>
            <div className="navbar-center flex gap-4">
                <ul className="flex gap-4  ">
                    <li><Link href="/Body" className=' w-5 mx-3 py-2 px-4 rounded-3xl bg-[#2D313B] text-[#C2F800]'>Workouts</Link></li>
                    <li>


                    </li>
                    <li><Link href="/bodyoldetellish" className=' w-5 m-4 p-2 rounded-3xl  text-[#9CA3AF]'>My Plan</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-1.5">
                <a className="text-[#D1D5DB] pr-1.5">Plan</a>
                <a className="text-[#D1D5DB] pr-1.5">Saved
                    0</a>
            </div>
        </div>
    );
};

export default Navbar;