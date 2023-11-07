import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath =  path === '/' || path === '/Login' || path === '/Register'

  const token = request.cookies.get('auth_token')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/Homepage', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

}


// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/Homepage',
    '/Login',
    '/Register',
    '/createpost',
    '/Profile'
  ]
}