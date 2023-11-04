
import announceModel  from "../models/announceModel.js";



export const createAnnounceController = async (req, res) => {
    try {
        const {title,description} = req.fields;
        //validation
        
       
        if (!title)
            return res.status(500).send({error:"Title is required"});
        if( !description)
            return res.status(500).send({error:"Description is required"});
          
      
        const newAnn = await new announceModel({
            
            title,
            description
            
        });
        
        await newAnn.save();
    
      
        
        
        res.status(201).send({
            success:true,
            message:'Announcement Created',
            newTicket
        })
       
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Announcement Creation"
        });
    }

};


export const getAnnounceController=async (req,res)=>{
    try {
       
        
        const orderA= await announceModel.find().limit(15);
        
        res.status(200).send({
            success:true,  
            message:"All Announcement",
            orderA
        });
    } catch (error) {
        console.log(error);
        res.send(500).send({
            success:false,
            message:'Error in getting Announcement',
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


export const deleteAnnounceController= async (req,res)=>{
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


export const updateAnnounceController=async(req,res)=>{
    try {
        const {title,description} = req.fields;
        const id=req.params.pid;
        
        
        //validation
       
    if (!title)
        return res.status(500).send({error:"Title is required"});
    if( !description)
        return res.status(500).send({error:"Description is required"});
       
        
        //const existingProduct = await new productModel.findOne({ name });

        // if (existingProduct) {
        //     return res.status(200).send({
        //         success: true,
        //         message: "Category Already Exists"
        //     })
        // }
        const newAnn = await announceModel.findByIdAndUpdate(id,{
            title,description
        },{new:true});
        
        await newAnn.save();
        res.status(201).send({
            success:true,
            message:'Ticket Updated',
            newAnn
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
