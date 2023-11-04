import express, { json } from "express";
import { config } from "dotenv";
import morgan from 'morgan';
import cors from 'cors';
import ticketRoutes from './routes/ticketRoutes.js';
import announceRoutes from './routes/announceRoutes.js';
import connectDB  from "./config/db.js";
//routes

config();


connectDB();

const app=express();


app.use(json());
app.use(morgan('dev'));
app.use(express.json());






app.use('/api/v1/ticket/',ticketRoutes);
app.use('/api/v1/announce/',announceRoutes);


app.get("/",(req,res)=>
{
    console.log("Get Request handled");
    res.send("<h1>HELLLOOO FROM THE OTHER SIDE</h1>");
});




const PORT=process.env.PORT || 8080;



app.listen(PORT,()=>{
    console.log("IN LISTEN");
});