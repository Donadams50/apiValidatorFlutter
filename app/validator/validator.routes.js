module.exports = app => {
    const validators = require("../validator/validator.controller.js");
    const validate = require('../validator/validator.model')
    const { isRuleValidated, isDataValidated } = validate;


     // isRuleValidated is a middleware that checks all rule for rule field
     // isDataValidated is also a middleware that checks all rule for data field before passing to the controller

     app.get("/",   validators.getMyProfile);
     app.post("/validate-rule", isRuleValidated, isDataValidated,  validators.validateRule);

     
  };
  