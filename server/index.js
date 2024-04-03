require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const mongoose = require("mongoose");
const db = process.env.DATABASE_URI;
const secret = process.env.SECRET;
const PORT = process.env.PORT || 3000;
const app = express();
const signupRoute = require("./routes/api/register");
const loginRoute = require("./routes/api/login");
const checkAuthRoute = require("./routes/api/checkAuth");
const logoutRoute = require("./routes/api/logout");
const usersRoute = require("./routes/api/users");
const UpdateUser = require("./routes/api/UpdateUser");
require("./passport/index");
app.use(express.json());
// Enable CORS
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://jazzy-valkyrie-468427.netlify.app",
    methods: ["GET", "POST", "PUT"], // Allow the client app to access the server
    credentials: true, // Allow cookies/session to be sent from the client
  })
);

const store = new MongoDBSession({
  uri: db,
  collection: "sessions",
});

app.use(
  session({
    key: "sessionId",
    secret: secret,
    resave: false,
    saveUninitialized: false,
    store: store, // Don't create session until something stored
    cookie: {
      secure: false, // Requires https
      httpOnly: false, // Prevents client side JS from reading the cookie7
      maxAge: 24 * 60 * 60 * 1000,
      // Cookie will live for 24H
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.post("/register", signupRoute);
app.post("/login", loginRoute);
app.get("/login", checkAuthRoute);
app.get("/logout", logoutRoute);
app.get("/users", usersRoute);
app.put("/users/:userId", UpdateUser);
// Database + Server Connection Validation
mongoose
  .connect(db)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database Connected!");
      console.log(`server is running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });
