"use server"

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

 export async function cookiesProfile() {
    const auth = cookies().get('user')?.value

    if (auth) {
        const decodedUser = decodeURIComponent(auth); // Decodifica o valor do cookie
        const parsedUser = JSON.parse(decodedUser.split(" ")[0]);
        return parsedUser
    }

    return 
}

export async function putUserCookie() {

    cookies().delete('user');

  }


  export async function setCookies(useratualizado: any) {
    const useratualizadoJSON = JSON.stringify(useratualizado);
  
    cookies().set('user', useratualizadoJSON, {
      path: '/', // Especifique o caminho apropriado, se necessário
      maxAge: 60 * 60 * 24 * 30, // Defina a duração apropriada, por exemplo, 30 dias
    });
  }
  
  
  


export async function clearCookies() {

    cookies().delete('user')
    console.log("Logout efetuado com sucesso");


}
