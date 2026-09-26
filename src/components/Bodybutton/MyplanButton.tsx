"use client";

import { BodykContext } from "@/Context/BooksContext";
import { IType } from "@/type/type";
import { CalendarPlus, Bookmark } from "lucide-react";
import React, { useContext } from "react";

const MyplanButton = ({ Body }: { Body: IType }) => {
    const context = useContext(BodykContext);

    if (!context) return null;

    const {
        Gimworout,
        setgemworout,
        Worklist,
        setWorklist,
    } = context;

    // Add to Today's Plan
    const handleAddPlan = () => {
        const alreadyAdded = Gimworout.some(
            (item) => item.id === Body.id
        );

        if (alreadyAdded) {
            alert("Already added to today's plan");
            return;
        }

        setgemworout((prev) => [...prev, Body]);

        alert("Added to today's plan");
    };

    // Save for later
    const handleSave = () => {
        const alreadySaved = Worklist.some(
            (item) => item.id === Body.id
        );

        if (alreadySaved) {
            alert("Already saved");
            return;
        }

        setWorklist((prev) => [...prev, Body]);

        alert("Saved for later");
    };

    return (
        <div className="flex items-center gap-3">

            {/* Add to today's plan */}
            <button
                onClick={handleAddPlan}
                className="flex items-center gap-2 rounded-lg bg-[#b7ff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#a5e600]"
            >
                <CalendarPlus size={15} strokeWidth={2.5} />

                <span>Add to today's plan</span>
            </button>

            {/* Save for later */}
            <button
                onClick={handleSave}
                className="flex items-center gap-2 rounded-lg border border-[#303640] px-5 py-3 text-sm font-medium text-[#d1d5db] transition hover:border-[#b7ff00] hover:text-white"
            >
                <Bookmark size={15} strokeWidth={2} />

                <span>Save for later</span>
            </button>

        </div>
    );
};

export default MyplanButton;