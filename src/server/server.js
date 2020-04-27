const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const SwearDatabase = require('./db');
const dbName = process.env.DB_NAME || 'swear-jar';
const db = new SwearDatabase(dbName);
const dotenv = require('dotenv');
//!!!!!
//!!!!! AUTH0 REQS
//!!!!!
const session = require('express-session');

// Load Passport
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const userInViews = require('../middleware/userInViews');
const authRouter = require('./routes/auth');
// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
//!!!!!
//!!!!! END AUTH0 REQS
//!!!!!

dotenv.config();
app.use(express.json());

//!!!!!
//!!!!! AUTH0 CONFIG
//!!!!!
// REFACTOR this file is terrible to look at
// session config
const sess = {
    secret: 'CHANGE THIS TO A RANDOM SECRET',
    cookie: {},
    resave: false,
    saveUninitialized: true
  };
  
  if (app.get('env') === 'production') {
    // Use secure cookies in production (requires SSL/TLS)
    sess.cookie.secure = true;
  
    // Uncomment the line below if your application is behind a proxy (like on Heroku)
    // or if you're encountering the error message:
    // "Unable to verify authorization request state"
    // app.set('trust proxy', 1);
  }
  app.use(session(sess));

// passport config
const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL:
        process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
      // accessToken is the token to call Auth0 API (not needed in the most cases)
      // extraParams.id_token has the JSON Web Token
      // profile has all the information from the user
      return done(null, profile);
    }
  );
  
  passport.use(strategy);
  
  app.use(passport.initialize());
  app.use(passport.session());

//   To support login sessions, Passport serializes and deserializes user instances to and from the session. Optionally, you may want to serialize only a subset to reduce the footprint, i.e., user.id.
  // You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  app.use(userInViews());
app.use('/', authRouter);
// app.use('/', indexRouter);
app.use('/', usersRouter);

//!!!!!
//!!!!! END AUTH0 CONFIG
//!!!!!

    // index.js here
app.get('/', function (req, res) {
res.send('Hello World!');
});


app.get('/api/users', (_unused, res, next) =>
db
    .getAllUsers()
    .then((users) => res.send(users))
    .catch(next)
);
// REFACTOR probably don't need this
app.get('/api/teams', (_unused, res, next) =>
db
    .getAllTeams()
    .then((teams) => res.send(teams))
    .catch(next)
);

// TODO set up user login  here
app.get('/api/login', (_unused, res, next) =>
db.getAllUsers()
);

app.get('/api/users/:user', (req, res, next) =>
    db
        .getUser(req.params.id)
        .then(user=>res.send(user))
        .catch(next)
);
app.get('/api/users/:userTeams', (req, res, next) =>
    db
        .getUserTeams(req.params.id)
        .then(teams=>res.send(teams))
        .catch(next)
);

app.get('/api/teams/:team', (req, res, next) =>
    db
        .getTeam(req.params.team)
        .then(team=>res.send(team))
        // .then(console.log('req.params', req.params))
        .catch(next)
);




app.listen(PORT, function () {
console.log(`find me on port ${PORT}!`);
});