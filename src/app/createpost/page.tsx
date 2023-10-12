"use client";

import React, { useState } from "react";
import Header from "../components/header";

import InputComponent from "../components/input";
import { Button } from "../components/Button";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";



export default function createPost() {
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")
  const router = useRouter();


  async function createPost() {
    

     const user = localStorage.getItem('user')


     if (user) {
      const parsedUser = JSON.parse(user)
      const id = parsedUser.id

      if (title === "" || content === "") {
        toast.error("Preencha todos os campos")
      }else{
        const response = await axios.post("http://localhost:3333/coments", {
          id,
          title,
        content
        })
        console.log(response.data)
        setTimeout(() => {
          router.push("/Home");
        }, 3000);
      }
    }

 

    
  }


  return (
    <>
      <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center  bg-gradient-to-tl from-gray-700 via-gray-900 to-black ">
        <Header
          logo="Blog Nerd"
          user="Caue Silva"
          avatar="http://github.com/cauesilva1.png"
        />

        <Button.Root
          href="Home"
          className="absolute top-20 left-10 max-[780px]:left-2 max-[780px]:top-4 bg-[#246CD8] hover:bg-[#77adff]/40 hover:transition-all hover:duration-[0.2s]"
        >
          <IoIosArrowBack />

          <Button.Content>Voltar</Button.Content>
        </Button.Root>

        <div className="flex items-center justify-between flex-col w-[826px] h-[80%] max-[780px]:w-4/5 max-[780px]:h-[79%] bg-[#272727] transition-all duration-50 rounded-3xl mt-10 max-[780px]:mt-16 max-[780px]:justify-center max-[780px]:gap-20">
          <div className="flex flex-col items-center mt-3">
            <h1 className="text-4xl font-bold text-white">Create post</h1>
          </div>

          <div className="flex flex-col items-center  w-full max-[780px]:w-44 transition-all duration-50 ">
              <div className="flex flex-col mb-22 gap-8 max-[780px]:gap-10 w-3/4 max-[780px]:w-72 transition-all duration-50 ">
              
              
              
              <div className="flex flex-col ">
                <p className="text-10 font-bold text-white justify-start">
                  Title:
                </p>
                <InputComponent
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="write the tile.."
                  className="p-2 rounded-lg bg-[#707070] border-black border"
                />
              </div>

              <div className="flex flex-col ">
                <p className="text-10 font-bold text-white justify-start">
                  Content:
                </p>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="write post.."
                  className="h-44 p-2 rounded-lg bg-[#707070] border-black border"
                />
              </div>
            </div>
          </div>

          <Button.Root className="mb-2" onClick={() => createPost()}>
            <Button.Content>Create Post</Button.Content>
          </Button.Root>
        </div>
      </main>
    </>
  );
}
