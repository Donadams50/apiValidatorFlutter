module.exports = app => {
    const validators = require("../validator/validator.controller.js");
    const validate = require('../validator/validator.model')
    const { isRuleValidated, isDataValidated } = validate;



     app.get("/",   validators.getMyProfile);
     app.post("/validate-rule", isRuleValidated, isDataValidated,  validators.validateRule);
  };
  