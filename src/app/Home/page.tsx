import React from "react";
import { Post } from "../components/post";
import { ScrollArea } from "@radix-ui/themes";
import Header from "../components/header";
import TopBarPost from "../components/topBarPost";
import Separator from "../components/separetor";
import axios from "axios";
import { cookies } from 'next/headers'

interface Post {
  id: number;
  user: {
    user: string;
  };
  title: string;
  content: string;
}

export  default async function Home() {

   async function fetchData() {

    try { 
      const response = await axios.get("http://localhost:3333/posts");
      const data = response.data;

      return data as Post[];

    } catch (error) {
      console.error("Erro na solicitação:", error);
      return [];
    }

  };

  const posts = await fetchData();

  function getUserName() {
  const auth = cookies().get('user')?.value
    if (auth) {
      const parsedUser = JSON.parse(auth.split(" ")[0])
       return parsedUser.user
    } 
  }
  const Username = getUserName()


  return (
    <>
      <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center bg-[#121517] ">
        <Header
          logo="Blog Nerd"
          user={Username}
          avatar="http://github.com/cauesilva1.png"
        />

        <TopBarPost />

        <Separator />

        <div className=" h-[70%] flex  items-center justify-center w-full ">
          <ScrollArea className="flex items-center justify-center max-[780px]:w-4/5 max-[780px]:h-4/5 mt-4 ">


            {posts.map((post: Post) => (
              <Post.root key={post.id}>
                <Post.infoUser>
                  <Post.avatar avatar="http://github.com/cauesilva1.png" />
                  <Post.user name={post.user.user} time="12:00" />
                </Post.infoUser>
                <Post.tag title={post.title} />
                <Post.content openSeePost content={post.content} contentSeeMore={post.content} title={post.title} name={post.user.user} />
              </Post.root>
            ))}
          </ScrollArea>


        </div>
      </main>
    </>
  );
}
