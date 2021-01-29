
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
  
      const fieldName = rule.field;
      const keys = Object.entries(data);
      const h = keys.find(e => e[0] === fieldName);  
        console.log(h[1]);

            try{   
                if (rule.condition === "gte"  ){
                    if (h[1] >= rule.condition_value  ){
                        res.status(200).send({          
                            message: "field "+fieldName+" successfully validated.",
                            status: "success",
                            data:  {
                                validation: {
                                  error: false,
                                  field: fieldName,
                                  field_value: h[1],
                                  condition: rule.condition,
                                  condition_value: rule.condition_value,
                                }
                              }
                          
                    });

                    }else{
                        res.status(400).send({          
                            message: "field "+fieldName+" failed validation.",
                            status: "error",
                            data:  {
                                validation: {
                                  error: true,
                                  field: fieldName,
                                  field_value: h[1],
                                  condition: rule.condition,
                                  condition_value: rule.condition_value,
                                }
                              }
                          
                    });
                    }

                }else if(rule.condition === "eq"  ){
                    if (h[1] === rule.condition_value  ){
                        res.status(200).send({          
                            message: "field "+fieldName+" successfully validated.",
                            status: "success",
                            data:  {
                                validation: {
                                  error: false,
                                  field: fieldName,
                                  field_value: h[1],
                                  condition: rule.condition,
                                  condition_value: rule.condition_value,
                                }
                              }
                          
                    });

                    }else{
                        res.status(400).send({          
                            message: "field "+fieldName+" failed validation.",
                            status: "error",
                            data:  {
                                validation: {
                                  error: true,
                                  field: fieldName,
                                  field_value: h[1],
                                  condition: rule.condition,
                                  condition_value: rule.condition_value,
                                }
                              }
                          
                    });
                    }

                }else if(rule.condition === "neq"  ){
                    if (h[1] !== rule.condition_value  ){
                        res.status(200).send({          
                            message: "field "+fieldName+" successfully validated.",
                            status: "success",
                            data:  {
                                validation: {
                                  error: false,
                                  field: fieldName,
                                  field_value: h[1],
                                  condition: rule.condition,
                                  condition_value: rule.condition_value,
                                }
                              }
                          
                    });

                    }else{
                        res.status(400).send({          
                            message: "field "+fieldName+" failed validation.",
                            status: "error",
                            data:  {
                                validation: {
                                  error: true,
                                  field: fieldName,
                                  field_value: h[1],
                                  condition: rule.condition,
                                  condition_value: rule.condition_value,
                                }
                              }
                          
                    });
                    }

                }else if(rule.condition === "gt"  ){
                    if (h[1] > rule.condition_value  ){
                        res.status(200).send({          
                            message: "field "+fieldName+" successfully validated.",
                            status: "success",
                            data:  {
                                validation: {
                                  error: false,
                                  field: fieldName,
                                  field_value: h[1],
                                  condition: rule.condition,
                                  condition_value: rule.condition_value,
                                }
                              }
                          
                    });

                    }else{
                        res.status(400).send({          
                            message: "field "+fieldName+" failed validation.",
                            status: "error",
                            data:  {
                                validation: {
                                  error: true,
                                  field: fieldName,
                                  field_value: h[1],
                                  condition: rule.condition,
                                  condition_value: rule.condition_value,
                                }
                              }
                          
                    });
                    }

                }if (rule.condition === "contains"  ){
                    console.log(h[1].toString().includes(rule.condition_value.toString()))
                    if (h[1].toString().includes(rule.condition_value.toString()) === true  ){                        
                       res.status(200).send({          
                            message: "field "+fieldName+" successfully validated.",
                            status: "success",
                            data:  {
                                validation: {
                                  error: false,
                                  field: fieldName,
                                  field_value: h[1],
                                  condition: rule.condition,
                                  condition_value: rule.condition_value,
                                }
                              }
                          
                    });

                    }else{
                        res.status(400).send({          
                            message: "field "+fieldName+" failed validation.",
                            status: "error",
                            data:  {
                                validation: {
                                  error: true,
                                  field: fieldName,
                                  field_value: h[1],
                                  condition: rule.condition,
                                  condition_value: rule.condition_value,
                                }
                              }
                          
                    });
                    }

                }else{
                    res.status(400).send({          
                        message: "Invalid JSON payload passed.",
                        status: "error",
                        data: null
                      
                });
                }

                     
             }catch(err){
                console.log(err)
                res.status(400).send({          
                    message: "Invalid JSON payload passed.",
                    status: "error",
                    data: null
                  
            });
            }
        
    
};