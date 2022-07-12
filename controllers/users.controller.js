const { User } = require("../mongo/users");

class UsersController {
    static addUser = async (req, res) => {
        try {
            const values = req.body;

            const user = await User.create(values);

            return res.status(201).json({
                success: true,
                message: "User created successfully",
                data: user,
            });
        } catch (err) {
            console.log(
                "Error occurred while creating user record, error caused in createUser function: ",
                err
            );
            return res.status(500).json({
                success: false,
                data: null,
                errors: err,
                message: "Failed to create user!",
            });
        }
    };

    static deleteUser = async (req, res) => {
        try {
            const { id } = req?.body;

            const user = await User.findById({ _id: id });

            if (!user) {
                return res.status(200).json({
                    success: false,
                    message: "User not found",
                    data: null,
                });
            }

            await user.delete();

            return res.status(200).json({
                success: true,
                message: "User deleted successfully",
                data: null,
            });
        } catch (err) {
            console.log(
                "Error occurred while creating user record, error caused in deleteUser function: ",
                err
            );
            return res.status(500).json({
                success: false,
                data: null,
                errors: err,
                message: "Failed to delete user!",
            });
        }
    };

    static getUsers = async (req, res) => {
        try {

            const users = await User.find({}).sort({updated_at: 1})

            return res.status(200).json({
                success: true,
                message: "Users fetched successfully",
                data: users,
            });
        } catch (err) {
            console.log(
                "Error occurred while creating user record, error caused in getUsers function: ",
                err
            );
            return res.status(200).json({
                success: false,
                data: null,
                errors: err,
                message: "Failed to complete request!",
            });
        }
    };

}

module.exports = {
    UsersController,
};
