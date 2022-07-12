const { UserInputError } = require("apollo-server-express")

module.exports.phoneNumberIsAlreadyTaken = () => {
    return new UserInputError('Phone number has already been taken!')
  }
  
  