import '@radix-ui/themes/styles.css';
import { Button } from "../components/Button";
import { IoIosArrowBack } from "react-icons/io";
import LoginForm from "../tools/loginForm";

export default function Login() {


  return (
    <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center justify-center bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
      
      <Button.Root href="/" className="absolute top-14 left-10 max-[780px]:left-2 max-[780px]:top-4 bg-[#246CD8] hover:bg-[#77adff]/40 hover:transition-all hover:duration-[0.2s]">
        <IoIosArrowBack />
          
          <Button.Content>Voltar</Button.Content>
        </Button.Root>

      <LoginForm />

    </main>
  );
}
