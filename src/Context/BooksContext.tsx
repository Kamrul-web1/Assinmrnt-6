"use client";

import React, { createContext, ReactNode, useState } from "react";
import { IType } from "@/type/type";

interface IBodyContext {
    Gimworout: IType[];
    setgemworout: React.Dispatch<React.SetStateAction<IType[]>>;
    Worklist: IType[];
    setWorklist: React.Dispatch<React.SetStateAction<IType[]>>;
}

export const BodykContext = createContext<IBodyContext | null>(null);

const BodyProvidar = ({ children }: { children: ReactNode }) => {
    const [Gimworout, setgemworout] = useState<IType[]>([]);
    const [Worklist, setWorklist] = useState<IType[]>([]);

    const shareData = {
        Gimworout,
        setgemworout,
        Worklist,
        setWorklist,
    };

    return (
        <BodykContext.Provider value={shareData}>
            {children}
        </BodykContext.Provider>
    );
};

export default BodyProvidar;