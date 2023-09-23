const passport = require('passport');
const { createUser } = require('../controllers/userControllers');
const router = require('express').Router();


router.post("/signup",  createUser);
// router.post("/login",  passport.authenticate("local"), loginUser);
// router.get("/check",  passport.authenticate("jwt"), checkUser); 

module.exports = router;