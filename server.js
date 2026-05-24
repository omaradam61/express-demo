const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Logging middleware to show activity during your demo
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Main endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: "success",
    message: "Hello from inside your Docker container!",
    timestamp: new Date()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.listen(PORT, () => {
  console.log(`🚀 Demo server is successfully running on port ${PORT}`);
});
