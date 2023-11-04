import express from "express";
import formidable from "express-formidable";
import { createTicketController, deleteTicketController, getClosedTicketController, getOpenTicketController, updateTicketController } from "../controllers/ticketController.js";


//router object
const router = express.Router();


//router

router.post('/create-ticket', formidable(), createTicketController);
router.post('/update-ticket/:pid',formidable(), updateTicketController);
router.get('/get-op-ticket',getOpenTicketController);
router.get('/get-cl-ticket',getClosedTicketController);
router.get('/delete-ticket/:pid',deleteTicketController);

export default router;