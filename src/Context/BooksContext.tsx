"use client"
import React, { createContext, ReactNode, useState } from 'react';
const BodykContext = createContext(null)
const BodyProvidar = ({ children }: { children: ReactNode }) => {
    const [Gimworout, setgemworout] = useState([]);
    const [Worklist, setWorklist] = useState([]);
    const shareData = {
        Gimworout,
        setgemworout,
        Worklist,
        setWorklist
    };
    return (
        <BodykContext.Provider value={shareData}>{children}</BodykContext.Provider>
    );
};

export default BodyProvidar;