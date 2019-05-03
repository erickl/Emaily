const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: 'https://8080-dot-7163073-dot-devshell.appspot.com/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        //console.log('accessToken', accessToken);
        //console.log('refreshToken', refreshToken);
        console.log('profile', profile);
    })
);