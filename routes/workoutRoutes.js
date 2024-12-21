const express = require('express');
const router = express.Router();
const WorkoutData = require('../models/WorkoutData');

//get ALL workouts
// router.get('/workouts', async (req, res) => {
// 	try {
// 		const workouts = await WorkoutData.find();
// 		res.json(workouts);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });

router.get('/workouts', async (req, res) => {
	try {
		const workouts = await WorkoutData.find();
		res.json(workouts);
	} catch (error) {
		req.status(500).json({ message: error.message });
	}
});

module.exports = router;
