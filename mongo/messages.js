var mongoose = require('mongoose')
var Schema = mongoose.Schema

const MessagesSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    message_type: {
        type: String,
        required: false,
    },
    message_text: {
        type: String,
        required: false,
    },
    audio_url: {
        type: String,
    },
    image_url: {
        type: String,
    }
}, {
    collection: "messages",
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
})


module.exports.MessagesSchema = MessagesSchema
module.exports.Messages = mongoose.model('messages', MessagesSchema)
