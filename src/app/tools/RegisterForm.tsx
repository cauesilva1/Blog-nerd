"use client";

import InputComponent from "../components/input";
import { Text } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Link from "next/link";
import { Button } from "../components/Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function RegisterForm() {
  const [user, setuser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function createRegister() { 

    if (user === "" || password === "" || confirmPassword === "" || email === "") {
      toast.error("Preencha todos os campos");
      return;
    } else if (password !== confirmPassword) {
      toast.error("As senhas precisam ser iguais");
      return;
    } else {
      try {
        setLoading(true);
        

        const response = await axios.post("https://backend-blog-nerd.vercel.app/user", {
          user: user,
          password: password,
          email: email,
        });


        router.push("/Login");

        setuser("");
        setPassword("");
        setConfirmPassword("");


      } catch (error) {
        console.error(error);
      }
    }
  }

    if(loading){
        return <span className="loader"></span>
    }

  return (

    <div className="flex flex-col w-[826px] h-3/4 max-[780px]:w-[350px] max-[780px]:h-4/5 justify-between items-center bg-[#272727] rounded-xl transition-all duration-50">
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
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
        Register
      </Text>

      <div className="flex flex-col mb-22 gap-4 w-3/4 max-[780px]:w-[300px] transition-all duration-50">
       
        <div className="flex flex-col ">
          <p className="text-10 font-bold text-white justify-start">User:</p>
          <InputComponent
            value={user}
            onChange={(e) => setuser(e.target.value)}
            type="text"
            placeholder="write your user.."
            className="p-2 rounded-lg bg-[#707070] border-black border"
          />
        </div>

        <div className="flex flex-col ">
          <p className="text-10 font-bold text-white justify-start">Email:</p>
          <InputComponent
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="write your Email.."
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
        </div>

        <div className="flex flex-col ">
          <p className="text-10 font-bold text-white justify-start">
            {" "}
            Confirm Password:
          </p>
          <InputComponent
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="write your Password.."
            className="p-2 rounded-lg bg-[#707070] border-black border"
          />
          <Link
            rel="stylesheet"
            href="/Login"
            className="text-sm font-bold text-blue-700 justify-start mt-2 max-[780px]:text-center mb-4"
          >
            I have an account! click here
          </Link>
        </div>
      </div>

      <div className="flex mb-10">
        <Button.Root onClick={() => createRegister()}>
          <Button.Content>Register</Button.Content>
        </Button.Root>
      </div>

    </div>
  );
}
