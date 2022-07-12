var mongoose = require('mongoose')
var Schema = mongoose.Schema

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    collection: "users",
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
})


module.exports.UserSchema = UserSchema
module.exports.User = mongoose.model('users', UserSchema)
