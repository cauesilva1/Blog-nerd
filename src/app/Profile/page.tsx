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
import { cookiesProfile, clearCookies, setCookies } from "./cookiesProfile";
import { useRouter } from "next/navigation";
import { Flex, TextField, Text } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";

export default function Profile() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchcookies() {
      const userData = await cookiesProfile();



      if (!userData) {
        return;
      }
      setUser(userData.user);
      setEmail(userData.email);
      const userPhoto = userData.photo;

      setPhoto(userPhoto);
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
    const userData = await cookiesProfile();

    try {
      const response = await axios.post(
        "https://backend-blog-nerd.vercel.app/putUsser",
        {
          id: userData.id,
          user,
          email,
          photo: username,
        }
      );


      toast.success("Dados atualizados com sucesso");
      const useratualizado = response.data.user;

      setCookies(useratualizado)

      setTimeout(() => {
        window.location.reload();
      } , 2000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center  bg-gradient-to-tl from-gray-700 via-gray-900 to-black ">
        <Header
          logo="Blog Nerd"
          user={user}
          avatar={photo ? `http://github.com/${photo}.png` : 'http://github.com/github.png'}
        />

        <ToastContainer theme="dark" autoClose={2000} />

        <Button.Root
          href="Home"
          className="absolute top-16 left-10 max-[780px]:left-2 max-[780px]:top-16 bg-[#246CD8] hover:bg-[#77adff]/40 hover:transition-all hover:duration-[0.2s]"
        >
          <IoIosArrowBack />
          <Button.Content>Voltar</Button.Content>
        </Button.Root>

        <div className="flex items-center flex-col w-[826px] h-[80%] max-[780px]:w-4/5 max-[780px]:h-4/5 bg-[#272727] transition-all duration-50 rounded-3xl mt-10 max-[780px]:mt-16">
          <div className="flex flex-col items-center mt-3">
            <AvatarComponent
              avatar={photo ? `http://github.com/${photo}.png` : 'http://github.com/github.png'}
              style="w-32 h-32 rounded-full max-[780px]:h-20 max-[780px]:w-20 mb-2"
              height={128}
              width={128}
            />

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-[#272727] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                  Edit photo
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#272727] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                  <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                    Digite Seu Username do github.
                  </Dialog.Description>
                  <fieldset className="mb-[15px] flex items-center gap-5">
                    <label
                      className="text-violet11 w-[90px] text-right text-[15px]"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] bg-[#272727]"
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </fieldset>
                  <div className="mt-[25px] flex justify-end">
                    <button
                      className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none border border-white/30 hover:bg-green-600/50 transition duration-300"
                      onClick={() => handlePutUser()}
                    >
                      salvar foto
                    </button>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px]  h-[25px] w-[25px] appearance-none flex items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none "
                      aria-label="Close"
                    >
                      X
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
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

          <div className="flex flex-row justify-between w-full px-24 mt-14 max-[780px]:flex-col max-[780px]:justify-center max-[780px]:items-center">
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
