import React from "react";
import  { Post } from "../components/post";
import { ScrollArea } from "@radix-ui/themes";
import Header from "../components/header";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <>
      <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center  bg-gradient-to-tl from-gray-700 via-gray-900 to-black ">

      <Header logo="Blog Nerd" user="Caue Silva" avatar="http://github.com/cauesilva1.png" />

      <Button.Root href="createpost" className="absolute top-16 left-10 max-[780px]:left-2 max-[780px]:top-4">
          <Button.Content>Criar post</Button.Content>
        </Button.Root>

        <ScrollArea className="flex items-center flex-col w-[826px] h-[90%] max-[780px]:w-4/5 max-[780px]:h-4/5 bg-[#272727] transition-all duration-50 rounded-md mt-2 ">

        <Post.root>
          <Post.infoUser>
          <Post.avatar avatar="http://github.com/cauesilva1.png"/>
          <Post.user name="Caue " subname="Silva"/>
          </Post.infoUser>
          <Post.content title="Sobre games"/>
          <Post.button />
        </Post.root>

        <Post.root>
          <Post.infoUser>
          <Post.avatar avatar="http://github.com/cauesilva1.png"/>
          <Post.user name="Caue " subname="Silva"/>
          </Post.infoUser>
          <Post.content title="Sobre games"/>
          <Post.button />
        </Post.root>

        <Post.root>
          <Post.infoUser>
          <Post.avatar avatar="http://github.com/cauesilva1.png"/>
          <Post.user name="Caue " subname="Silva"/>
          </Post.infoUser>
          <Post.content title="Sobre games"/>
          <Post.button />
        </Post.root>

        <Post.root>
          <Post.infoUser>
          <Post.avatar avatar="http://github.com/cauesilva1.png"/>
          <Post.user name="Caue " subname="Silva"/>
          </Post.infoUser>
          <Post.content title="Sobre games"/>
          <Post.button />
        </Post.root>

        <Post.root>
          <Post.infoUser>
          <Post.avatar avatar="http://github.com/cauesilva1.png"/>
          <Post.user name="Caue " subname="Silva"/>
          </Post.infoUser>
          <Post.content title="Sobre games"/>
          <Post.button />
        </Post.root>

        <Post.root>
          <Post.infoUser>
          <Post.avatar avatar="http://github.com/cauesilva1.png"/>
          <Post.user name="Caue " subname="Silva"/>
          </Post.infoUser>
          <Post.content title="Sobre games"/>
          <Post.button />
        </Post.root>

        

        </ScrollArea>
      </main>
    </>
  );
}
