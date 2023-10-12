"use server"

import { cookies } from "next/headers";

export async function createPostUser() {

    const auth = cookies().get('user')?.value

    if (auth) {
        const parsedUser = JSON.parse(auth.split(" ")[0]);
        console.log(parsedUser);
        return parsedUser
    }
    
   return


}