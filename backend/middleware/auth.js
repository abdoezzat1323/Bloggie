const JWT = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const TOKEN = req.cookies.token;
  const jwtsecret = "When you're bored, go to the bathroom and the trtr water";

  // check exists (verified)
  if (TOKEN) {
    JWT.verify(TOKEN, jwtsecret, (err, decodedTOken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/auth/login");
      } else {
        console.log(decodedTOken);
        next();
      }
    });
  } else {
    res.redirect("/auth/login");
  }
};
module.exports = { requireAuth };
