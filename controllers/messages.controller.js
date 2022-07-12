const { Messages } = require("../mongo/messages");

class MessagesController {

    static createMessage = async (req, res) => {
        try {
            const values = req.body;

            const message = await Messages.create(values);

            return res.status(201).json({
                success: true,
                message: "Message created successfully",
                data: message,
            });
        } catch (err) {
            console.log(
                "Error occurred while creating user record, error caused in createMessage function: ",
                err
            );
            return res.status(500).json({
                success: false,
                data: null,
                errors: err,
                message: "Failed to create message!",
            });
        }
    };

    static getUserMessages = async (req, res) => {
        try {
            const { user_id } = req.body;

            const messages = await Messages.find({ user_id }).sort({ updated_at: 1 })

            // debugger

            return res.status(201).json({
                success: true,
                message: "Messages got successfully",
                data: messages,
            });
        } catch (err) {
            console.log(
                "Error occurred while creating user record, error caused in createMessage function: ",
                err
            );
            return res.status(500).json({
                success: false,
                data: null,
                errors: err,
                message: "Failed to complete request!",
            });
        }
    };

}


module.exports = {
    MessagesController,
};
