const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@example.com',
        },
    });

    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });