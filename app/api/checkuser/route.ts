import { NextResponse } from 'next/server'
import prisma from '@/app/libs/prismadb'
export async function POST(request: Request) {
  const body = await request.json()
  const { email } = body
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  // Found a user in the database with the given mail ==> redirected to sign-in screen
  console.log(user)
  if (user) {
    return NextResponse.json({ user_exists: 'true', email: user.email })
  }
  // If there's no user by that email ==> redirected to register screen
  else {
    return NextResponse.json({ user_exists: 'false', email: email })
  }
}
