"use client";

import InputComponent from "../components/input";
import { Text } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Link from "next/link";
import { Button } from "../components/Button";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    if (user === "" || password === "") {
      toast.error("Preencha todos os campos");
      return;
    } else {
      try {
        const response = await axios.post("http://localhost:3333/login", {
          user: user,
          password: password,
        });
  
        console.log(response.data);
  
        toast.success("Login efetuado com sucesso");
        
      } catch (error) {

        toast.error("Usuário ou senha incorretos");
      }
    }
  }

  return (
    <>
      <div className="flex flex-col w-[826px] h-3/4 max-[780px]:w-[350px] max-[780px]:h-4/5 justify-between items-center bg-[#272727] rounded-xl transition-all duration-50">
        <Text
          style={{
            marginTop: "2rem",
            fontSize: "40px",
            color: "white",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          Login
        </Text>

        <div className="flex flex-col mb-22 gap-12 w-3/4 max-[780px]:w-80 transition-all duration-50">
          <div className="flex flex-col ">
            <p className="text-10 font-bold text-white justify-start">User:</p>
            <InputComponent
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              placeholder="write your user.."
              className="p-2 rounded-lg bg-[#707070] border-black border"
            />
          </div>

          <div className="flex flex-col ">
            <p className="text-10 font-bold text-white justify-start">
              Password:
            </p>
            <InputComponent
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="write your Password.."
              className="p-2 rounded-lg bg-[#707070] border-black border"
            />
            <Link
              rel="stylesheet"
              href="/Register"
              className="text-sm font-bold text-blue-700 justify-start mt-2 max-[780px]:text-center"
            >
              I don't have an account? click here
            </Link>
          </div>
        </div>

        <div className="flex mb-10">
          <Button.Root onClick={() => handleSubmit()}>
            <Button.Content>Login</Button.Content>
          </Button.Root>
        </div>

        <ToastContainer
            theme="dark"
            autoClose={2000}
        />
      </div>
      
    </>
  );
}
