const mongoose = require('mongoose');

const intervalSchema = new mongoose.Schema({
	duration: {
		type: Number,
		required: true,
	},
	rest_duration: {
		type: Number,
		required: true,
	},
	type: {
		type: Number,
		required: true,
	},
});

const buttonPressSchema = new mongoose.Schema({
	pm5: {
		type: String,
		required: true,
	},
	pm3: {
		type: String,
		required: true,
	},
});

const workoutSchema = new mongoose.Schema({
	workout_type: {
		type: Number,
		required: true,
	},
	intervals: [intervalSchema],
	target_rate: Number,
	target_hr: Number,
	output: {
		type: String,
		required: true,
	},
	button_presses: buttonPressSchema,
});

const workoutDataSchema = new mongoose.Schema({
	title: {
		en: {
			type: String,
			required: true,
		},
	},
	description: {
		en: {
			type: String,
			required: true,
		},
	},
	type: {
		type: Number,
		required: true,
	},
	display_units: {
		type: Number,
		required: true,
	},
	workout: {
		rowerg: workoutSchema,
		skierg: workoutSchema,
		bikeerg: workoutSchema,
	},
	recent_wods: [String],
	wod_id: {
		type: Number,
		required: true,
	},
});

const WorkoutData = mongoose.model(
	'WorkoutData',
	workoutDataSchema,
	'concept_daily_workout'
);

module.exports = WorkoutData;
