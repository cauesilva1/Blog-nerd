"use server"

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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

    setTimeout(() => {
        redirect("/");
      }, 2000);

}
