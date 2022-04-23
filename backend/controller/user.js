const { dirname } = require("path");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { isString, createToken } = require("./utils");

const db = require(dirname(require.main.filename) + "/models");
const User = db.users;

// get all users
exports.getUsers = async(req, res) => {
    try {
        let users = await User.findAll({ attributes: { exclude: ["password"] } });
        if (!users)
            return res
                .status(404)
                .json({ success: false, data: "could not get data." });

        res.status(200).json({ success: true, data: users });
    } catch (err) {
        res
            .status(500)
            .json({ success: false, data: { success: false, data: err } });
    }
};

exports.getUserPublicData = async(req, res) => {
    try {
        let user = await User.findOne({
            attributes: ["firstName", "lastName", "avatar"],
        });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "could not get data." });

        res.status(200).json({ success: true, data: user });
    } catch (err) {
        res
            .status(500)
            .json({ success: false, data: { success: false, data: err } });
    }
};

// get user by id (GET)
exports.getUser = async(req, res) => {
    try {
        let user = await User.findOne({
            where: { id: parseInt(req.params.id) },
            attributes: { exclude: ["password"] },
        });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist." });
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        res.status(500).json({ success: false, data: err });
    }
};

// create new user (POST)
exports.createUser = async(req, res) => {
    try {
        let userData = {};
        userData.email = req.body.email;
        // checking email typos.
        if (!userData.email)
            return res
                .status(400)
                .json({ success: false, data: "missing email address." });
        let exist = await User.count({ where: { email: userData.email } });
        //checking for conflict emails.
        if (exist != 0)
            return res
                .status(409)
                .json({ success: false, data: "email already exist." });
        if (!validator.isEmail(userData.email))
            return res
                .status(400)
                .json({ success: false, data: "wrong email address." });

        //checking name
        userData.firstName = req.body.firstName;
        if (!userData.firstName)
            return res.status(400).json({ success: false, data: "missing Name!" });

        userData.lastName = req.body.lastName;

        userData.password = req.body.password;
        if (!userData.password)
            return res
                .status(400)
                .json({ success: false, data: "password does not exist!" });
        userData.password = userData.password.toString();

        // check password
        if (userData.password.length < 8)
            return res
                .status(400)
                .json({ success: false, data: "password too short!" });

        // hashing password
        const salt = await bcrypt.genSalt(10);

        // now we set user password to hashed password
        userData.password = await bcrypt.hash(userData.password, salt);

        // get country by id
        userData.country = req.body.country;
        userData.currentPosition = req.body.currentPosition;

        let user = await User.create(userData);
        if (!user)
            return res
                .status(500)
                .json({ success: false, data: "could not create user" });

        const token = createToken(user.id);

        res.status(200).json({ success: true, data: { token: token } });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

// update user data (PATCH :id)
exports.updateUser = async(req, res) => {
    try {
        // check if user exist
        let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist." });

        // checking email typos.
        if (req.body.email) {
            let exist = await User.count({ where: { email: req.body.email } });
            //checking for conflict emails.
            if (exist != 0)
                return res
                    .status(409)
                    .json({ success: false, data: "email already exist." });
            if (!validator.isEmail(req.body.email))
                return res
                    .status(400)
                    .json({ success: false, data: "wrong email address." });
        }

        if (req.body.password) {
            req.body.password = req.body.password.toString();
            // check password
            if (req.body.password.length < 8)
                return res
                    .status(400)
                    .json({ success: false, data: "password too short!" });
            // hashing password
            const salt = await bcrypt.genSalt(10);
            // now we set user password to hashed password
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        // validating birthdate
        if (req.body.BOD) {
            if (validator.isAfter(req.body.BOD))
                return res
                    .status(400)
                    .json({ success: false, data: "wrong birth date." });
            return (req.body.DOB = validator.toDate(req.body.DOB));
        }

        // other data
        if (req.body.country && !isString(req.body.country))
            return res
                .status(400)
                .json({ success: false, data: "country can only be a string!" });

        if (req.body.gender) {
            if (!["m", "f"].includes(req.body.gender))
                return res
                    .status(400)
                    .json({ success: false, data: "gender can only be male or female!" });
        }
        if (req.body.currentPosition && !isString(req.body.currentPosition))
            return res
                .status(400)
                .json({ success: false, data: "job can only be a string!" });

        let result = await User.update(req.body, {
            where: { id: parseInt(req.params.id) },
        });

        if (!result[0])
            return res
                .status(400)
                .json({ success: false, data: "could not update user data" });
        res.status(200).json({ success: true, data: "user updated!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

// set user online status (SET by id)
exports.setOnline = async(req, res) => {
    try {
        let now = Date.now();
        let status = await User.update({ lastOnline: now }, { where: { id: req.params.id } });
        if (!status[0])
            return res
                .status(404)
                .json({ success: false, data: "user does not exist." });
        res.status(200).json({ success: true, data: now });
    } catch (err) {
        res.status(500).json({ success: false, data: err });
    }
};

// get user online status (GET by id)
exports.isOnline = async(req, res) => {
    try {
        let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist." });
        res.status(200).json({
            success: true,
            data: (Date.now() - user.lastOnline) / 1000 < 40,
        });
    } catch (err) {
        res.status(500).json({ success: false, data: err });
    }
};

// login user by email (POST)
exports.login = async(req, res) => {
    try {
        if (!req.body.email)
            return res
                .status(401)
                .json({ success: false, data: "Please enter your email!" });

        if (!req.body.password)
            return res
                .status(401)
                .json({ success: false, data: "Please enter password!" });

        let user = await User.findOne({ where: { email: req.body.email } });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "User does not exist." });

        let passMatches = await bcrypt.compare(req.body.password, user.password);

        if (!passMatches)
            return res.status(401).json({ success: false, data: "Worng password!" });
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        res.status(500).json({ success: false, data: err });
    }
};

// set user activated (SET by id)
exports.activate = async(req, res) => {
    try {
        let status = await User.update({ activated: true }, { where: { id: req.params.id } });
        if (!status[0]) {
            let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
            if (!user)
                return res
                    .status(404)
                    .json({ success: false, data: "user does not exist." });
            return res
                .status(409)
                .json({ success: false, data: "Already activated." });
        }
        res.status(200).json({ success: false, data: "activated" });
    } catch (err) {
        res.status(500).json({ success: false, data: err });
    }
};

// get user activated status (GET by id)
exports.isActivated = async(req, res) => {
    try {
        let user = await User.findOne({ where: { id: parseInt(req.params.id) } });
        if (!user)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist." });
        res.status(200).json({ success: true, data: user.activated });
    } catch (err) {
        res.status(500).json({ success: false, data: err });
    }
};