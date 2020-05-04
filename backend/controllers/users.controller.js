const usersController = {};

const UserModel = require('../models/User');

usersController.getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
}

usersController.getUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
}

usersController.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new UserModel({
        username
    });
    await newUser.save();
    res.json({message: 'User created'});
}

usersController.updateUser = async (req, res) => {
    const { username } = req.body;
    await UserModel.findOneAndUpdate({_id: req.params.id}, {
        username
    });
    res.json({message: 'User updated'});
}

usersController.deleteUser = async (req, res) => {
    await UserModel.findByIdAndRemove(req.params.id);
    res.json({message: 'User deleted'});
}

module.exports = usersController;