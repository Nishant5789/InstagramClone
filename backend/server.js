const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const cors = require('cors');

// authentication library
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');


const app = express();
const port = process.env.PORT || 5000;

// import routes
const authRoute = require('./routes/auth');
const { sanitizeUser, isAuth, cookieExtractor } = require('./services/common');


const SECRET_KEY = 'SECRET_KEY';
// jwt options 
var opts = {}
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = SECRET_KEY;


connectDb();
app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
}));
app.use(passport.authenticate('session'));
app.use(cors({
    exposedHeaders: ['X-Total-Count']
}));

app.get('/', (req, res) => {
    res.send("connected");
});


// handle routes 
app.use("/api/user",require("./routes/userRoutes"));
app.use('/auth', authRoute);

app.use(errorHandler);

passport.use(new LocalStrategy(
    { usernameField: 'email' },
    async function (email, password, done) {
        try {
            const user = await User.findOne({ email: email });
            if (user == null) {
                // done(iserror, isautorised, error message)
                return done(null, false, { message: 'invalid credentials' });
            }
            crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', async function (err, hashedPassword) {
                if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
                    return done(null, false, { message: 'invalid credentials' });
                }
                const token = jwt.sign(sanitizeUser(user), SECRET_KEY);
                return done(null, { token }); // this line send to serliser 
            });
        } catch (error) {
            console.log(error);
            done(error)
            // return res.status(400).json(error);
        }
    }
));

passport.use('jwt', new JwtStrategy(opts, async function (jwt_payload, done) {
    console.log(jwt_payload);
    try {
        const user = await User.findById(jwt_payload.id);
        if (user) {
            return done(null, sanitizeUser(user));
        } else {
            return done(null, false);
        }
    } catch (error) {
        if (err) {
            return done(err, false);
        }
    }
}));

// this creates session variable req.user on being called from callbacks
passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        // console.log("serialize", user);
        return cb(null, user);
    });
});

// this changes session variable req.user when called from authorized request
passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        // console.log("deserialize", user);
        return cb(null, user);
    });
});





app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});