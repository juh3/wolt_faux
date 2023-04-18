import { NextResponse } from 'next/server'
import prisma from '@/app/libs/prismadb'
import bcrypt from 'bcrypt'
export async function POST(request: Request) {
  const body = await request.json()
  const { email, password, dob, firstname, lastname } = body

  const hashed_password = await bcrypt.hash(password, 12)
  const user = await prisma.user.create({
    data: {
      email,
      firstname,
      lastname,
      hashed_password,
      dob,
    },
  })
  return NextResponse.json(user)
}
