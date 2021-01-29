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

  exports.isRuleValidated= (req, res, next)=> { 
    const {  rule } = req.body;
  
        if ( rule) {
            if (  typeof rule === 'object' && rule !== null    ){
                if (  rule.field && rule.condtion && rule.condition_value   ){
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

                next();
                
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

  
  exports.isDataValidated= (req, res, next)=> { 
    const {  data , rule} = req.body;
           const fieldName = rule.field;
        if ( data) {
            
                if ( typeof data.fieldName === 'undefined'  ){
                   

                        res.status(400).send({          
                            message: "field "+fieldName+" is missing from data..",
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