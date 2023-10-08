import React from "react";
import  { Post } from "../components/post";
import { ScrollArea } from "@radix-ui/themes";
import Header from "../components/header";
import TopBarPost from "../components/topBarPost";
import Separator from "../components/separetor";

export default function Home() {
  return (
    <>
      <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center bg-[#121517] ">

      <Header logo="Blog Nerd" user="Caue Silva" avatar="http://github.com/cauesilva1.png" />

        <TopBarPost />

        <Separator />

        <div className=" h-[80%] flex  items-center justify-center w-full ">
        
        <ScrollArea className="flex items-center justify-center max-[780px]:w-4/5 max-[780px]:h-4/5 mt-4 ">

        <Post.root>
          <Post.infoUser>
          <Post.avatar avatar="http://github.com/cauesilva1.png"/>
          <Post.user name="Caue Silva" time="12:00"/>
          </Post.infoUser>
          <Post.tag title="Games"/>
          <Post.content />
        </Post.root>

        
        </ScrollArea>

        </div>
      </main>
    </>
  );
}
