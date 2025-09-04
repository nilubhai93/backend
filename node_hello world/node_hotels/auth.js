// Import required modules
const Person = require("./models/Person");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Configure Local Strategy for authentication
passport.use(new LocalStrategy(async (USERNAME, password, done) => {
   try {
       // Debug: Log received credentials
       // console.log("Received credentials : ", USERNAME, password);
       
       // Find user by username in database
       const user = await Person.findOne({ username: USERNAME });
       if (!user) {
           return done(null, false, { message: "Incorrect username." });
       }

       // Compare provided password with stored hash
       const isPasswordMatch = await user.comparePassword(password);
       if (isPasswordMatch) {
           // Authentication successful
           return done(null, user);
       }
       else {
           // Password doesn't match
           return done(null, false, { message: "Incorrect Password" });
       }

   } catch (err) {
       // Handle any errors during authentication
       return done(err);
   }
}));

// Export configured passport
module.exports = passport;