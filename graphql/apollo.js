const merge = require('lodash/merge')

/**
 * Load the typedefs
 */
const typeDefs = [...Object.values(require("./typeDefs/address"))];

/**
 * Load resolvers
 */
const addresses = (require("./resolvers/address"));

const resolvers = {}

merge(resolvers, addresses)

module.exports = {
  typeDefs,
  resolvers,
};
