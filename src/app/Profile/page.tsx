"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/header";
import AvatarComponent from "../components/avatar";
import InputComponent from "../components/input";
import { Button } from "../components/Button";
import { IoIosArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { cookiesProfile, clearCookies } from "./cookiesProfile";
import { useRouter } from "next/navigation";

export default function profile() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchcookies() {
      const userData = await cookiesProfile();

      if(!userData) {
        return;
      }
      setUser(userData.user);
      setEmail(userData.email);
    }

    fetchcookies();
  }, []);

  function handleCleatcookies() {
    toast.success("Logout efetuado com sucesso");
    clearCookies();

    setTimeout(() => {  
          router.push("/");
        }, 2000);
  }

  async function handlePutUser() {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      const id = parsedUser.user.id;

      try {
        const response = await axios.post("https://backend-blognerd.onrender.com/putUsser", {
          id,
          user,
          email,
        });

        console.log(response.data.user);

        toast.success("Dados atualizados com sucesso");
        const useratualizado = response.data.user;
        localStorage.setItem("user", JSON.stringify(useratualizado));
      } catch (error) {
        console.error(error);
      }
    }
  }

  // async function outherPhoto() {}

  return (
    <>
      <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center  bg-gradient-to-tl from-gray-700 via-gray-900 to-black ">
        <Header
          logo="Blog Nerd"
          user={user}
          avatar="http://github.com/github.png"
        />

        <ToastContainer theme="dark" autoClose={2000} />

        <Button.Root
          href="Home"
          className="absolute top-16 left-10 max-[780px]:left-2 max-[780px]:top-4 bg-[#246CD8] hover:bg-[#77adff]/40 hover:transition-all hover:duration-[0.2s]"
        >
          <IoIosArrowBack />
          <Button.Content>Voltar</Button.Content>
        </Button.Root>

        <div className="flex items-center flex-col w-[826px] h-[80%] max-[780px]:w-4/5 max-[780px]:h-4/5 bg-[#272727] transition-all duration-50 rounded-3xl mt-10 max-[780px]:mt-16">
          <div className="flex flex-col items-center mt-3">
            <AvatarComponent
              avatar="http://github.com/github.png"
              style="w-32 h-32 rounded-full max-[780px]:h-20 max-[780px]:w-20"
            />

          </div>
        
          <div className="flex flex-col items-center  w-full max-[780px]:w-44 transition-all duration-50">
            <div className="flex flex-col mb-22 gap-8 max-[780px]:gap-2 w-3/4 max-[780px]:w-72 transition-all duration-50">
              <div className="flex flex-col ">
                <p className="text-10 font-bold text-white justify-start">
                  Name:
                </p>
                <InputComponent
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  placeholder="write your name.."
                  className="p-2 rounded-lg bg-[#707070] border-black border"
                />
              </div>

              <div className="flex flex-col ">
                <p className="text-10 font-bold text-white justify-start">
                  Email:
                </p>
                <InputComponent
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="write your email.."
                  className="p-2 rounded-lg bg-[#707070] border-black border"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row  justify-between w-full px-24 mt-14 ">
            <Button.Root className="mt-6" onClick={() => handlePutUser()}>
              <Button.Content>Save profile</Button.Content>
            </Button.Root>

            <Button.Root
              className="mt-6 bg-red-600 hover:bg-red-400"
              onClick={() => handleCleatcookies()}
            >
              <Button.Content>Logout</Button.Content>
            </Button.Root>
          </div>
        </div>
      </main>
    </>
  );
}
