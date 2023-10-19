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
    photo: string;
    user: string;
  };
  title: string;
  content: string;
  timestamp: string;
}

export  default async function Home() {

   async function fetchData() {

    try { 
      const response = await axios.get("https://backend-blognerd.onrender.com/posts");
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

  function getPhotoFromCookie() {
    const auth = cookies().get('user')?.value;
    if (auth) {
      const parsedUser = JSON.parse(auth.split(" ")[0]);
      return parsedUser.photo; 
    }
  
    return "github"; // Valor padrão se o cookie não existir
  }

  const photo = getPhotoFromCookie();

  

  function formatTime(timestamp: string): string {
    const date = new Date(timestamp);
    return `${date.getHours()}:${padZero(date.getMinutes())}`;
  }
  
  function padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
  


  return (
    <>
      <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center bg-[#121517] ">
        <Header
          logo="Blog Nerd"
          user={Username}
          avatar={`http://github.com/${photo}.png`}
        />

        <TopBarPost />

        <Separator />

        <div className=" h-[70%] flex  items-center justify-center w-full ">
          <ScrollArea className="flex items-center justify-center max-[780px]:w-4/5 max-[780px]:h-4/5 mt-4 ">


            {posts.map((post: Post) => (
              <Post.root key={post.id}>
                <Post.infoUser>
                  <Post.avatar avatar={photo ? `http://github.com/${post.user.photo}.png` : 'http://github.com/github.png'} />
                  <Post.user name={post.user.user} time={formatTime(post.timestamp)}  />
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
