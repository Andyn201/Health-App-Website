const mongoose = require('mongoose');


const connectDB = async (Mongo_URI) => {
	try{
		await mongoose.connect(Mongo_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
		console.log('DB Connected');
	}

	catch(err) {
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;