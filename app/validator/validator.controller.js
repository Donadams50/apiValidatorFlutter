
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
console.log(req.body)

    const {  officeTitle , officeTitleBranch} = req.body;
  
    if (  officeTitle  ){
        if ( officeTitle===""    ){
            res.status(400).send({
                message:"Incorrect entry format"
            });
    }else{  
              const combinedOfficeBranch = ''+officeTitle+' '+officeTitleBranch+''
            const office = new Offices({
            
                officeTitleBranch: officeTitleBranch,
                officeTitle: officeTitle,
                isAssigned: false,
                userInOffice: "" ,
                userNameInOffice: "",
                combinedOfficeBranch: combinedOfficeBranch         

                
              });
        
            try{   
                const isOfficeExist = await Offices.findOne({combinedOfficeBranch: combinedOfficeBranch} )

                 if(isOfficeExist){
                    res.status(400).send({
                        message:"Office already exist"
                    });
                 }else{

                            const saveOffice = await  office.save()
                            console.log(saveOffice)                
                            res.status(201).send({message:"Office created"})
                        }
            }catch(err){
                console.log(err)
                res.status(500).send({message:"Error while creating office "})
            }
        }
    }else{
        res.status(400).send({
            message:"Incorrect entry format"
        });
    }
};