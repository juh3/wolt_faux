import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
async function main() {
  const hashed_password = await bcrypt.hash('test', 12)
  const bob = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
      email: 'test@test.com',
      hashed_password: hashed_password,
      firstname: 'Test',
      lastname: 'Tester',
      dob: '12 / 12 / 2022',
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
