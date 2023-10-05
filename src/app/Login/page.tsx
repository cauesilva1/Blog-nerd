import InputComponent from "../components/input";
import { Text } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import ButtonComponent from "../components/button";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center justify-center bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
      <div className="flex flex-col w-[826px] h-3/4 max-[780px]:w-64 max-[780px]:h-4/5 justify-between items-center bg-[#272727] rounded-xl">

        <Text style={{marginTop: '2rem', fontSize: '40px', color: 'white', width: '100%', display: 'flex', justifyContent: 'center' }}> Login</Text>    

        <div className="flex flex-col mb-22 gap-12 w-3/4 max-[780px]:w-44">
        <div className="flex flex-col ">
        <p className="text-10 font-bold text-white justify-start">User:</p>
        <InputComponent type="text" placeholder="write your user.." className="p-2 rounded-lg bg-[#707070] border-black border"/>
        </div>

        <div className="flex flex-col ">
        <p className="text-10 font-bold text-white justify-start">Password:</p>
        <InputComponent type="password" placeholder="write your Password.." className="p-2 rounded-lg bg-[#707070] border-black border"/>
        <Link rel="stylesheet" href="/Register" className="text-sm font-bold text-blue-700 justify-start mt-2 max-[780px]:text-center" >
        I don't have an account? click here
        </Link>
        </div>



        </div>

        <div className="flex mb-10">
        <ButtonComponent ContentButton='Login' Link='/Home' />
        </div>
      </div>
    </main>
  );
}
