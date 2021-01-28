module.exports = app => {
    const validators = require("../validator/validator.controller.js");
   
  
     app.get("/", verifyToken,  validators.getProfile);
    

  };
  