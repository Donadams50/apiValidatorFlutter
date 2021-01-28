// Find my profile
const myprofilemodel =require('../validator/validator.model');
exports.getMyProfile = async (req, res) => {
    try{
           const findmyprofile = await myprofilemodel.myProfile() 

           res.status(200).send(findmyprofile)
              
       }catch(err){
           console.log(err)
           res.status(500).send({message:"Error while getting offices"})
       }
};