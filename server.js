// Add this line at the top just to confirm server.js is running
console.log("✅ Starting server.js...");

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // Load variables from .env
const dashboardRoutes = require('./routes/dashboard');

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/college-tracking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB Connected");
}).catch((err) => {
  console.error("❌ MongoDB connection failed:", err.message);
});

// API Routes
app.use('/api', dashboardRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
