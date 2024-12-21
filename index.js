const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const WorkoutData = require('./models/WorkoutData');
const workoutRoutes = require('./routes/workoutRoutes');

dotenv.config();

const fetchDataAndSave = async () => {
	try {
		//connect to mongo db
		await mongoose.connect(process.env.MONGO_URI);
		console.log('MongoDB connected');

		//fetch the data
		const response = await axios.get(process.env.API_URL);
		console.log(response);
		const apiData = response.data;

		//save the data
		const workoutData = new WorkoutData(apiData);

		await workoutData.save();

		console.log('Data has been saved');

		//close the connection
		mongoose.connection.close();
	} catch (error) {
		console.log('Error with fetching the data', error);

		if (error) {
			console.log('API response error', error.response);
		} else if (error.request) {
			console.log('API requre error', error.request);
		} else;
		console.log('General error', error.message);
	}
};

fetchDataAndSave();

// const app = express();
// const port = process.env.PORT || 6000;

// app.use(express.json());

// mongoose
// 	.connect(process.env.MONGO_URI)
// 	.then(() => console.log('MONGO DB Connected'))
// 	.catch((err) => console.log('MONGO DB Connection error', err.message));

// app.use('/api', workoutRoutes);

// app.listen(port, () => {
// 	console.log(`Server is running on ${port}`);
// });
