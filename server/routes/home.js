import express from 'express';
import {home,contact} from '../controllers/home.js'

const router = express.Router();

router.get('/',home);
router.get('/contact',contact);


export default router;