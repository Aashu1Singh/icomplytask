const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')

const GOOGLE_CLIENT_ID = "225118784941-gkpmg79el2ilhlrhc0260nlgc6d1kicf.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "auth/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    
    done(null, profile)
  }
));

passport.serializeUser((user, done)=>{
    done(null, user)
});

passport.deserializeUser((user, done)=>{
    done(null, user)
})
