import ButtonComponent from "../components/button";
import RegisterForm from "../tools/RegisterForm";

export default function Register() {



  return (
    <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center justify-center bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
      
      <ButtonComponent 
      
      ContentButton='Voltar' Link='/' style="bg-[#656565] hover:bg-[#3a3a3a] transition-colors duration-250 py-2 px-10 rounded-lg absolute top-14 left-10 max-[780px]:left-2 max-[780px]:top-4" />
      
      <RegisterForm />

    </main>
  );
}
