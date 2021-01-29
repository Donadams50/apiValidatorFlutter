
const myprofilemodel =require('../validator/validator.model');


// Find my profile
exports.getMyProfile = async (req, res) => {
    try{
           const findmyprofile = await myprofilemodel.myProfile() 
            res.status(200).send(
                {
                    message: "My Rule-Validation API",
                    status: "success",
                    data: findmyprofile
                })
              
       }catch(err){
             console.log(err)
            res.status(500).send(
             {
                message: "My Rule-Validation API",
                status: "error",
                data: null
            })
       }
};

//validate rule 
exports.validateRule = async (req, res) => {
if (!req.body){
        res.status(400).send({message:"Content cannot be empty"});
    }


    const {  rule , data} = req.body;
  
   
        
            try{   
                
                     
             }catch(err){
                console.log(err)
                res.status(400).send({          
                    message: "Invalid JSON payload passed.",
                    status: "error",
                    data: null
                  
            });
            }
        
    
};