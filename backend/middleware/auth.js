const JWT = require("jsonwebtoken");
require("dotenv").config();

const requireAuth = (req, res, next) => {
    req.body.userId = null;
    const TOKEN = req.headers["x-auth-token"];
    if (TOKEN) {
        JWT.verify(TOKEN, process.env.SECRET, (err, decodedToken) => {
            if (err) {
                return res
                    .status(401)
                    .json({ success: false, data: "Please login first" });
            }
            req.body.userId = decodedToken.id;
            next();
        });
    } else {
        return res.status(401).json({ success: false, data: "Please login first" });
    }
};
module.exports = requireAuth;