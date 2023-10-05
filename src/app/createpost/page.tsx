import React from "react";
import Header from "../components/header";

import InputComponent from "../components/input";
import ButtonComponent from "../components/button";

export default function createPost() {
  return (
    <>
      <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center  bg-gradient-to-tl from-gray-700 via-gray-900 to-black ">

      <Header logo="Blog Nerd" user="Caue Silva" avatar="http://github.com/cauesilva1.png"/>

      <ButtonComponent ContentButton='Voltar' Link='/Home' style="bg-[#656565] hover:bg-[#3a3a3a] transition-colors duration-250 py-2 px-10 rounded-lg absolute top-16 left-4" />

        <div className="flex items-center justify-between flex-col w-[826px] h-[80%] max-[780px]:w-4/5 max-[780px]:h-[79%] bg-[#272727] transition-all duration-50 rounded-3xl mt-10 max-[780px]:mt-16 max-[780px]:justify-center max-[780px]:gap-20">

        <div className="flex flex-col items-center mt-3">
            <h1 className="text-4xl font-bold text-white">
                Create post
            </h1>
        </div>

        <div className="flex flex-col items-center  w-full max-[780px]:w-44 transition-all duration-50 ">

        <div className="flex flex-col mb-22 gap-8 max-[780px]:gap-10 w-3/4 max-[780px]:w-72 transition-all duration-50 ">

        <div className="flex flex-col ">
        <p className="text-10 font-bold text-white justify-start">Title:</p>
        <InputComponent type="text" placeholder="write the tile.." className="p-2 rounded-lg bg-[#707070] border-black border"/>
        </div>

        <div className="flex flex-col ">
        <p className="text-10 font-bold text-white justify-start">Content:</p>
        <textarea placeholder="write your subname.." className="h-44 p-2 rounded-lg bg-[#707070] border-black border"/>
        </div>


        </div>

        </div>

       
        <ButtonComponent ContentButton='Save profile' Link='#' style="bg-[#656565] hover:bg-[#3a3a3a] transition-colors duration-250 py-2 px-10 rounded-lg mb-4"/>

        </div>
      </main>
    </>
  );
}
