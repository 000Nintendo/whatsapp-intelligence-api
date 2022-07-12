const { Router } = require("express");
const { UsersController } = require("../controllers/users.controller");
const { UserSchema } = require("../mongo/users");
const { UserValidationSchema } = require("../validations/users");
const { customValidate } = require("../validations/validation.config");

const router = Router();

router.post('/create', customValidate(UserValidationSchema.addUser), UsersController.addUser)
router.post('/delete', customValidate(UserValidationSchema.deleteUser), UsersController.deleteUser)
router.get('/get-users', UsersController.getUsers)


const usersRoutes = router;


module.exports = {
    usersRoutes
}


