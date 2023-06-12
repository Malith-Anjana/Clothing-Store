const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv');
const app = express();
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("test");
});
