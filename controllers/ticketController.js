
import ticketModel  from "../models/ticketModel.js";



export const createTicketController = async (req, res) => {
    try {
        const {name,title,description,roomNo} = req.fields;
        //validation
        
        if (!name)
            return res.status(500).send({error:"Name is required"});
        if (!title)
            return res.status(500).send({error:"Title is required"});
        if( !description)
            return res.status(500).send({error:"Description is required"});
        if (!roomNo)
            return res.status(500).send({error:"Room No is required"});    
      
        const newTicket = await new ticketModel({
            name,
            title,
            description,
            roomNo
        });
        
        await newTicket.save();
    
      
        
        
        res.status(201).send({
            success:true,
            message:'Ticket Created',
            newTicket
        })
       
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Ticket Creation"
        });
    }

};


export const getOpenTicketController=async (req,res)=>{
    try {
       
        
        const orderA= await ticketModel.find({status:0}).limit(15);
        
        res.status(200).send({
            success:true,  
            message:"All Open Tickets",
            orderA
        });
    } catch (error) {
        console.log(error);
        res.send(500).send({
            success:false,
            message:'Error in getting Orders',
            error:error.message
        })
    }
};


export const getClosedTicketController=async (req,res)=>{
    try {
        // const oid=req.params.oid;
        
        const orderA= await ticketModel.find({status:1}).limit(15);
        
        res.status(200).send({
            success:true,  
            message:"All CLosed Tickets",
            orderA
        });
    } catch (error) {
        console.log(error);
        res.send(500).send({
            success:false,
            message:'Error in getting Orders',
            error:error.message
        })
    }
};

// export const getOneOrderController=async (req,res)=>{
//     try {
//         const {oid,uid}=req.params;
//         const orderA= await orderModel.findById(oid).populate('deliverAdd');
        
//         res.status(200).send({
//             success:true,  
//             message:"Returned Order",
//             orderA
//         });
//     } catch (error) {
//         console.log(error);
//         res.send(500).send({
//             success:false,
//             message:'Error in getting orders',
//             error:error.message
//         })
//     }
// };


export const deleteTicketController= async (req,res)=>{
    try {
        const ticketV=await ticketModel.findByIdAndDelete(req.params.pid);
        res.status(200).send({
            success:true,
            message:"Successfully Deleted",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Delete",
            error
        })
    }
};


export const updateTicketController=async(req,res)=>{
    try {
        const {name,title,description,roomNo,status} = req.fields;
        const id=req.params.pid;
        
        
        //validation
        if (!name)
        return res.status(500).send({error:"Name is required"});
    if (!title)
        return res.status(500).send({error:"Title is required"});
    if( !description)
        return res.status(500).send({error:"Description is required"});
    if (!roomNo)
        return res.status(500).send({error:"Room No is required"});    
        
        //const existingProduct = await new productModel.findOne({ name });

        // if (existingProduct) {
        //     return res.status(200).send({
        //         success: true,
        //         message: "Category Already Exists"
        //     })
        // }
        const newTicket = await ticketModel.findByIdAndUpdate(id,{
            name,title,description,roomNo,status
        },{new:true});
        
        await newTicket.save();
        res.status(201).send({
            success:true,
            message:'Ticket Updated',
            newTicket
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Updation"
        });
    }

};