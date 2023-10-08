"use client"

import React, { useEffect, useState } from "react";
import { Dialog , Flex, ScrollArea, Separator } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Post } from "./post";


export default function SeePost({seeMore}) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Renderize nada no servidor
  }

  return (

    <Dialog.Root >

      <Dialog.Trigger>

        { seeMore && <button className="text-[#246CD8] ml-2" >Ler mais..</button>}

      </Dialog.Trigger>


      <Dialog.Content style={{backgroundColor: "#1B1E21", color: "white", scrollbarWidth: "none"}}>
        <Post.infoUser>
          <Post.avatar avatar="http://github.com/cauesilva1.png"/>
          <Post.user name="Caue Silva" time="12:00" />
          </Post.infoUser>

        <Dialog.Description size="2" mb="4"  className="w-[12%] max-[780px]:w-[70px] text-center">
          <Post.tag title="Games" />
        </Dialog.Description>

        <Flex direction="column" gap="2">

          <Post.content />

        </Flex>

        <ScrollArea direction="column" gap="2">

          <Post.createComent />

        </ScrollArea>

        <Separator color="orange" size="4" mt="4" mb="3" className="opacity-70"/>

        <ScrollArea direction="column"
          size="1"
          type="always"
          scrollbars="vertical"
          style={{ width: "100%", height: 250 }}>

          <Post.Comment />
          <Post.Comment />
          <Post.Comment />
          <Post.Comment />
          <Post.Comment />
          <Post.Comment />
          <Post.Comment />
          <Post.Comment />

        </ScrollArea>

      </Dialog.Content>

    </Dialog.Root>

  );
}
