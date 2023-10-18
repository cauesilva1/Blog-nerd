"use client"

import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Button } from "../components/Button";

export default function TopBarPost() {
    const [activeTab, setActiveTab] = useState("feed"); // Inicialmente, definimos a guia "Feed" como ativa

    return (
        <div className="flex items-center justify-between w-[50%] mt-6 mb-3 max-[780px]:w-full max-[780px]:px-4">
            <div className="flex items-center gap-9 text-[#6C757D] max-[780px]:gap-3">
                <button
                    className={activeTab === "feed" ? "text-[#246CD8]" : ""}
                    onClick={() => setActiveTab("feed")}
                >
                    Feed
                </button>

                <button
                    className={activeTab === "myposts" ? "text-[#246CD8]" : ""}
                    onClick={() => setActiveTab("myposts")}
                >
                    My Post&apos;s
                </button>
            </div>

            <Button.Root href="createpost" className="  bg-[#246CD8]">
                <Button.Content>Criar post</Button.Content>
                <IoMdAdd className="text-white"/>
            </Button.Root> 
        </div>
    );
}



