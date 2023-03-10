const GoogleStrategy = require('passport-google-oauth20').Strategy
// const FacebookStrategy = require('passport-facebook').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')


module.exports = function (passport) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: '/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
          const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
          }
  
          try {
            let user = await User.findOne({ googleId: profile.id })
  
            if (user) {
              done(null, user)
            } else {
              user = await User.create(newUser)
              done(null, user)
            }
          } catch (err) {
            console.error(err)
          }
        }
      )
    )

  //   passport.use(new FacebookStrategy({
  //     clientID: process.env.CLIENT_ID_FB,
  //     clientSecret: process.env.CLIENT_SECRET_FB,
  //     callbackURL: "http://localhost:3000/auth/facebook/callback"
  //   },
  //   function(accessToken, refreshToken, profile, cb) {
  //     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
  //       return cb(err, user);
  //     });
  //   }
  // ));
  
    passport.serializeUser((user, done) => {
      done(null, user.id)
    })
  
    passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => done(err, user))
    })
  }