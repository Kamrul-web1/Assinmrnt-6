"use client"
import React from 'react';

const MyplanButton = () => {
    const handleBodydetlish = () => {
        console.log('button tegir');

    }
    return (
        <button className='text-[#]' onClick={() => handleBodydetlish}>My Plan</button>
    );
};

export default MyplanButton;