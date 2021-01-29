const myProfile = {
    "name": "Alaka Adam Olasumbo",
    "github": "@Donadams50",
    "email": "sumbomatic@gmail.com",
    "mobile": "08144964388",
    "twitter": "@AdamOlasumbo"
  }

exports.myProfile=()=> {
    return myProfile;
  }

  

  exports.isRuleValidated= async (req, res, next)=> { 
    const {  rule } = req.body;
     try{  

        if ( rule) {
            if (  typeof rule === 'object' && rule !== null    ){
                if (  rule.field && rule.condition && rule.condition_value  ){
                    if (  rule.field === " " || rule.condtion === " " || rule.condition_value === ""   ){
                        res.status(400).send({          
                            message: "The required fields cannot be empty.",
                            status: "error",
                            data: null
                          
                    });
                        
                        
                 }else{

                    next();
                 
                  }
                                   
                    
             }else{ 
                
                res.status(400).send({          
                    message: "One of the required field in the rule object is not available.",
                    status: "error",
                    data: null
                  
            });
    
             } 

                
         }else{ 
            
            res.status(400).send({          
                message: "rule should be an object.",
                status: "error",
                data: null
              
        });

         }        
          
        }else{
            res.status(400).send({          
                message: "rule field is required.",
                status: "error",
                data: null
              
        });
          
        }
    }
    catch(err){
        console.log(err)
        res.status(400).send({          
            message: "Invalid JSON payload passed.",
            status: "error",
            data: null
          
    });
    }
  }

  
  exports.isDataValidated= async (req, res, next)=> { 
    const {  data , rule} = req.body;
           const fieldName = rule.field;
           console.log(fieldName)
           console.log( data.hasOwnProperty(fieldName ))
         //  console.log(typeof data.fieldName)
     try{
        if ( data) {
            
                if ( data.hasOwnProperty(fieldName ) === false  ){
                   

                        res.status(400).send({          
                            message: "field "+fieldName+" is missing from data.",
                            status: "error",
                            data: null
                          
                    });                
                    
             }else{ 
                    
                next();
            
             } 

                
                
          
        }else{
            res.status(400).send({          
                message: "data field is required.",
                status: "error",
                data: null
              
        });
          
        }
       }
        catch(err){
            console.log(err)
            res.status(400).send({          
                message: "Invalid JSON payload passed.",
                status: "error",
                data: null
              
        });
        }
  }