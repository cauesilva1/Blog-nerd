import React from "react";
import PostComponent from "../components/post";
import { ScrollArea } from "@radix-ui/themes";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center  bg-gradient-to-tl from-gray-700 via-gray-900 to-black ">

      <Header logo="Blog Nerd" user="Caue Silva" avatar="http://github.com/cauesilva1.png"/>

        <ScrollArea className="flex items-center flex-col w-[826px] h-[90%] max-[780px]:w-4/5 max-[780px]:h-4/5 bg-white transition-all duration-50 rounded-3xl mt-3">

          <PostComponent />

        </ScrollArea>
      </main>
    </>
  );
}
