import express from "express";
import formidable from "express-formidable";
import { createAnnounceController, deleteAnnounceController, getAnnounceController, updateAnnounceController } from "../controllers/announceController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";



//router object
const router = express.Router();


//router

router.post('/create-announce', formidable(),requireSignIn, createAnnounceController);
router.post('/update-announce/:pid',formidable(),requireSignIn, updateAnnounceController);
router.get('/get-announce',getAnnounceController);

router.get('/delete-announce/:pid',deleteAnnounceController);

export default router;