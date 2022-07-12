const { validate } = require("express-validation");

const customValidate = (validationSchema) => {
  const options = {
    context: false,
    statusCode: 200,
    keyByField: true,
  };
  return validate(validationSchema, options);
};


module.exports = {
  customValidate
}