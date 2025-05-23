const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const phoneRoutes = require('./routes/phoneRoutes')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Serve uploaded images from /uploads (for local image uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Routes
app.use('/api/phones', phoneRoutes)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected')
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err)
})
