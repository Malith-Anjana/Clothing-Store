const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv');
const app = express();
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');

dotenv.config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGO_URL, connectionParams)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("test");
});
