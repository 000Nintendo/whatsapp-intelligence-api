
const { usersRoutes } = require('./users')

const { Router } = require("express");
const { messagesRoutes } = require('./messages');

const router = Router();

router.use('/users', usersRoutes)
router.use('/messages', messagesRoutes)

const apiRoutes = router;

module.exports = {
    apiRoutes
}
