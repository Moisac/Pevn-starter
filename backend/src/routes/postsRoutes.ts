import express from 'express'
import { getAllPosts, getSinglePost } from '../controllers/postsController';

const router = express.Router()

router.route('/')
    .get(getAllPosts)
router.route('/:id')
    .get(getSinglePost)

export default router