import { Request, Response } from 'express'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPosts = async (req: Request, res: Response) => {
    const posts = await prisma.post.findMany()
    res.json(posts)
}

export const getSinglePost = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const post = await prisma.post.findFirst({
        where: { id },
    })
    res.json(post)
}