import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname === '/') {
        request.cookies.get("user")?.value
        return NextResponse.redirect(new URL('/Home', request.url))
    }

}
 
export const config = {
  matcher: '/:path*',
}