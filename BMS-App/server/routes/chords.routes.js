module.exports = app => {
	const chords = require("../controllers/chords.controller.js");

	var router = require("express").Router();

	// create new Chord
	router.post("/", chords.create);

	// retrieve all Chords
	router.get("/", chords.findAll);

	// Update Chord with id
	router.put("/:id", chords.update);

	// delete a chord with id
	router.delete("/:id", chords.delete);
	
	app.use('/api/chords', router);

};
