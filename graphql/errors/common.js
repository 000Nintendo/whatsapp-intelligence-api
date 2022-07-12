const { ApolloError, UserInputError, ForbiddenError, AuthenticationError  } = require('apollo-server-express')
const { VALIDATION_ERR_MSG } = require('../../constants/errorMessages')

module.exports.fieldValidationError = (field, errorMessage) => {
  return new UserInputError(errorMessage, { field: field })
}

module.exports.resourceNotFound = (resourceType) => {
  return new UserInputError(resourceType ? ` ${resourceType} not found.` : 'Resource not found.')
}
