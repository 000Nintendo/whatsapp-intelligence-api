const { RESOURCES } = require("../../constants/address");
const { Address } = require("../../mongo/addresses");
const { inputValidator } = require("../../utils/inputValidator");
const { AddressValicationSchema } = require("../../validations/address");
const { phoneNumberIsAlreadyTaken } = require("../errors/address");
const { resourceNotFound } = require("../errors/common");

module.exports = {
    Query: {
        getAddresses: async (parent, { input }, context, info) => {
            try {
                const addresses = await Address.find({});

                return addresses;
            } catch (err) {
                console.log(
                    "Something went wrong while gettting addresses from database!"
                );
                console.log(err);
            }
        },
    },

    Mutation: {
        addAddress: async (parent, { input }, context, info) => {
            const values = inputValidator(input, AddressValicationSchema.create);
            const existingAddress = await Address.findOne({ phone: values.phone });

            if (existingAddress) throw phoneNumberIsAlreadyTaken();

            const address = await Address.create(values);

            return address;
        },

        updateAddress: async (parent, { input }, context, info) => {
            const values = inputValidator(input, AddressValicationSchema.update);
            const address = await Address.findById({ _id: values.id });

            if (!address) throw resourceNotFound(RESOURCES.ADDRESS_TITLE);

            const id = values.id;
            delete values.id;

            await Address.updateOne({ _id: id }, values, {
                upsert: true,
                new: true,
            });

            return {
                status: true
            };
        },

        deleteAddress: async (parent, { input }, context, info) => {
            const values = inputValidator(input, AddressValicationSchema.delete);
            const address = await Address.findById({ _id: values.id });

            if (!address) throw resourceNotFound(RESOURCES.ADDRESS_TITLE);

            const deleted = await Address.findByIdAndDelete({ _id: values.id });

            return {
                status: Boolean(deleted),
            };
        },

        getAddress: async (parent, { input }, context, info) => {
            const values = inputValidator(input, AddressValicationSchema.getAddress);

            const address = await Address.findById({ _id: values.id });

            if (!address) throw resourceNotFound(RESOURCES.ADDRESS_TITLE);

            return address
        }
    },
};
