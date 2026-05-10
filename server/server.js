const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth');
const contactRoutes = require("./routes/contact");
const crypto = require("crypto");
globalThis.crypto = crypto.webcrypto || crypto;
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin:[ "https://outputmern.netlify.app/",
  "http://localhost:5173"
  ],
  credentials: true
}));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use("/api/contact", contactRoutes);

async function startServer() {
    try{
        await mongoose.connect(process.env.mongoURI)
        console.log("MongoDB connected successfully")
        
        app.listen(PORT,()=>{
             console.log(`Server is running on port ${PORT}`)
        })
        
    }catch(error){
 console.error('MongoDB connection failed:',error)
 process.exit(1);
    }
}
startServer()