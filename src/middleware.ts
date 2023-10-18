import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  
    const userCookieValue = request.cookies.get("user")?.value;

   if(userCookieValue === undefined) {

    NextResponse.redirect(new URL('/', request.url));

   } else {

     NextResponse.redirect(new URL('/Home', request.url)); 

   }
   
}
 
export const config = {
  matcher: '/:path*',
}