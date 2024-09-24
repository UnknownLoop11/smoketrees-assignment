const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const User = require("./models/user");
const Address = require("./models/address");

app.post("/register", async (req, res) => {
  try {
    const { name, addresses } = req.body;

    // Creating a new user
    const user = new User({ name });
    await user.save();

    // Storing each address and linking it to the user
    const savedAddresses = [];
    for (let address of addresses) {
      const newAddress = new Address({ ...address, userId: user._id });
      await newAddress.save();
      savedAddresses.push(newAddress._id);
    }

    // Linking the addresses to the user
    user.address = savedAddresses;
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users with their addresses
app.get("/users", async (req, res) => {
  try {
    const users = await User.find().populate("address");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
