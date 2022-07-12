const { Joi } = require("express-validation");

class MessagesValidationSchema {
    static crateMessage = {
        body: Joi.object({
            user_id: Joi.string().required(),
            message_type: Joi.string().allow(""),
            message_text: Joi.string().allow(""),
            audio_url: Joi.string().allow(""),
            image_url: Joi.string().allow(""),
        }),
    };

    static getUserMessages = {
        body: Joi.object({
            user_id: Joi.string().required(),
        }),
    }
}

module.exports = {
    MessagesValidationSchema,
};
