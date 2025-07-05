require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRoute = require("./routes/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrderModel } = require("./model/OrderModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// CRITICAL: All middleware MUST come BEFORE routes
// CORS configuration (single setup)
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


// Body parsing middleware (choose one approach)
app.use(express.json({ limit: '10mb' })); // Modern Express built-in parser
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
// OR use bodyParser (but not both)
// app.use(bodyParser.json());

// Cookie parser
app.use(cookieParser());

// // Debug middleware to check if body parsing works
// app.use((req, res, next) => {
//   console.log('=== Request Debug Info ===');
//   console.log('Method:', req.method);
//   console.log('URL:', req.url);
//   console.log('Content-Type:', req.get('Content-Type'));
//   console.log('Headers:', req.headers);
//   console.log('Raw Body:', req.body);
//   console.log('========================');
//   next();
// });

// Test endpoint to verify body parsing
// app.post('/test', (req, res) => {
//   console.log('Test endpoint - Body:', req.body);
//   res.json({ 
//     message: 'Body parsing is working!',
//     receivedBody: req.body,
//     contentType: req.headers['content-type']
//   });
// });

// API endpoints for holdings and positions data sets 
app.get('/allHoldings', async(req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error('Error fetching holdings:', error);
    res.status(500).json({ error: 'Failed to fetch holdings' });
  }
});

app.get('/allPositions', async(req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error('Error fetching positions:', error);
    res.status(500).json({ error: 'Failed to fetch positions' });
  }
});
 
app.post('/neworder', async(req, res) => {
  try {
    console.log('New order request body:', req.body); // Debug log
    
    let newOrder = new OrderModel({
      name: req.body.name, 
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    
    await newOrder.save();
    res.json({ message: "Order saved successfully", order: newOrder });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ error: 'Failed to save order' });
  }
});

app.get('/getAllOrder', async(req, res) => {
  try {
    let orders = await OrderModel.find({});
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// Auth routes MUST come AFTER all middleware
// app.use(cookieParser());
// app.use(express.json());
app.use("/", authRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Start server and connect to database
app.listen(PORT, async () => {
  try {
    await mongoose.connect(uri);
    console.log("App started on port", PORT);
    console.log("DB connected successfully");
    console.log(`Test your setup at: http://localhost:${PORT}/test`);
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
});