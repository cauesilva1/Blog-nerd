"use client"

import React, { useEffect, useState } from "react";
import { Dialog , Flex, TextField, Text, ScrollArea} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Post } from "./post";


export default function SeePost({seeMore}) {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null; // Renderize nada no servidor
//   }

  return (

    <Dialog.Root >

      <Dialog.Trigger>

        { seeMore && <button className="text-[#246CD8] ml-2" >Ler mais..</button>}

      </Dialog.Trigger>


      <Dialog.Content style={{backgroundColor: "#121517", color: "white" }}>
        <Post.infoUser>
          <Post.avatar avatar="http://github.com/cauesilva1.png"/>
          <Post.user name="Caue Silva" time="12:00" />
          </Post.infoUser>

        <Dialog.Description size="2" mb="4" >
          <Post.tag title="Games" />
        </Dialog.Description>

        <Flex direction="column" gap="2">

          <Post.content />

        </Flex>

        <ScrollArea direction="column" gap="2">

          <Post.Comment />

        </ScrollArea>

      </Dialog.Content>

    </Dialog.Root>

  );
}
