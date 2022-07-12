const { Joi } = require("express-validation");

class UserValidationSchema {
  static addUser = {
    body: Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().allow(""),
    })
  }

  static deleteUser = {
    body: Joi.object({
      id: Joi.string().required(),
    })
  }


}

module.exports = {
  UserValidationSchema,
};
