const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtsecret = process.env.SECRET;
// const maxAge = 7 * 24 * 60 * 60;

exports.createToken = (id) => {
    // return jwt.sign({ id }, jwtsecret, { expiresIn: maxAge });
    return jwt.sign({ id }, jwtsecret);
};

//

exports.isString = (data) => {
    if (typeof data === "string" || data instanceof String) return true;
    return false;
};

exports.isInt = (n) => {
    return Number(n) === n && n % 1 === 0;
};

exports.isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
};