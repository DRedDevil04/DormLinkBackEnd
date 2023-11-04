export const requireSignIn = async (req, res, next) => {
    try {
       const {admin}=req.fields;
       if(admin=="vsd") next(); 
    }

    catch (error) {
        console.log(error);
    }
};