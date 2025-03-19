// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Define Routes (authentication, tasks, todos, gemini etc.)
app.use('/api/auth', require('./routes/auth')); // Authentication routes
 // Task routes
app.use('/api/todos', require('./routes/todos')); // Todo routes
app.use('/api/gemini', require('./routes/gemini')); // Gemini routesapp.use("/api/gemini", require("./routes/gemini"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));