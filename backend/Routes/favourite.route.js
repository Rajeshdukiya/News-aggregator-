import express from 'express'
import { createfavourite } from '../Controller/favourite.Controller.js';
import {verifyToken} from '../utils/verify.js'

const router = express.Router();

router.post('/create',createfavourite)

export default router;