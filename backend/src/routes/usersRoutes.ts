import express from 'express'
import { getAllUsers, getSingleUser } from '../controllers/usersController'

const router = express.Router()

router.route('/')
    .get(getAllUsers)
router.route('/:id')
    .get(getSingleUser)

export default router