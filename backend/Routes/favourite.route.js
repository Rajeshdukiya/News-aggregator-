import express from 'express'
import { createfavourite } from '../controllers/favourite.controller.js';
// import {verifyToken} from '../utils/verifyUser.js'

const router = express.Router();

router.post('/create',createfavourite)

export default router;