const { Router } = require("express");
const { MessagesController } = require("../controllers/messages.controller");
const { UsersController } = require("../controllers/users.controller");
const { MessagesValidationSchema } = require("../validations/messages");
const { UserValidationSchema } = require("../validations/users");
const { customValidate } = require("../validations/validation.config");

const router = Router();

router.use('/create', customValidate(MessagesValidationSchema.crateMessage), MessagesController.createMessage)

router.use('/get-user-messages', customValidate(MessagesValidationSchema.getUserMessages), MessagesController.getUserMessages)

const messagesRoutes = router;


module.exports = {
    messagesRoutes
}


