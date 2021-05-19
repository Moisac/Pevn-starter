import { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany({
        include: {
            posts: true,
        },
    });
	res.json(users);
}

export const getSingleUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const singleUser = await prisma.user.findFirst({
		where: { id },
        include: {
            posts: true,
        },
	});
	res.json(singleUser);
}