const { gql } = require("apollo-server-express");

const INPUTS = gql`
  input AddressInput {
    name: String!
    phone: String!
  }

  input GetAddressIput {
    id: String!
  }

  input DeleteAddressInput {
    id: String!
  }

  input UpdateAddressInputs {
    id: String!
    name: String
    phone: String
    updated_at: String
    created_at: String
  }
`;

const QUERIES = gql`
  type Query {
    getAddresses: [AddressData]
  }
`;

const MUTATIONS = gql`
  type Mutation {
    addAddress(input: AddressInput!): AddressData
    getAddress(input: GetAddressIput): AddressData
    deleteAddress(input: DeleteAddressInput): DeleteResponse
    updateAddress(input: UpdateAddressInputs): UpdateResponse
  }
`;

const TYPES = gql`
  type AddressData {
    id: String
    name: String
    phone: String
    updated_at: String
    created_at: String
  }

  type DeleteResponse {
    status: Boolean!
  }

  type UpdateResponse {
    status: Boolean!
  }
`;

module.exports = {
  QUERIES,
  MUTATIONS,
  INPUTS,
  TYPES,
};
