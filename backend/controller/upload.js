const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        fs.mkdir("./uploads/", (err) => {
            cb(null, "./uploads/");
        });
    },
    filename: function(req, file, callback) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        callback(null, file.fieldname + "-" + Date.now() + "." + extension);
    },
});
exports.upload = multer({ dest: "uploads/", storage: storage });

exports.uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send({
            success: false,
        });
    } else {
        return res.status(200).send({
            success: true,
            file: res.req.file.path,
            location: "http://127.0.0.1:5000/" + res.req.file.path,
        });
    }
};