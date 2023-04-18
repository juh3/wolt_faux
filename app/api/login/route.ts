import { NextResponse } from 'next/server'
import prisma from '@/app/libs/prismadb'
import bcrypt from 'bcrypt'
export async function POST(request: Request) {
  const body = await request.json()
  const { email, password } = body

  const user = await prisma.user.findUnique({
    where: email,
  })
  const password_correct =
    user === null ? false : await bcrypt.compare(password, user.password)

  if (!user || !password_correct) {
    return NextResponse.json({ error: 'invalid username or password' })
  }

  return NextResponse.json({ email: email, name: user.name })
}
