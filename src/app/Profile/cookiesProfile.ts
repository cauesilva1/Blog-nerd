"use server"

import { cookies } from "next/headers";
import { log } from "console";

 export async function cookiesProfile() {
    const auth = cookies().get('user')?.value

    if (auth) {
        const parsedUser = JSON.parse(auth.split(" ")[0]);
        console.log(parsedUser);
        return parsedUser
    }

    return 
}


export async function clearCookies() {

    cookies().delete('user')
    console.log("Logout efetuado com sucesso");


}
