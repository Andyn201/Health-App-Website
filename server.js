const express = require('express');
const path = require('path');
require('dotenv').config();



const app = express();



// Middleware
app.use(express.json({extended: false}));


// Connect to DB
const connectDB = require('./config/db');
connectDB(process.env.MONGO_URI);




// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/admin', require('./routes/api/admin'));



// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));
  
	app.get('*', (req, res) => {
	  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
  }


// Run App 

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server Started On Port ${PORT}`);
});

process.on('SIGINT', () => { console.log("Stopping Server"); process.exit(); });
