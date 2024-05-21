const db = require('../models');
const Chord = db.chords;
const Op = db.Sequelize.Op;

// Create and Save a new Chords
exports.create = (req, res) => {
  // Validate request
  if (!req.body.note) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Chord
  const chord = {
    note: req.body.note,
    interval: req.body.interval,
  };

  // Save Chord in the database
  Chord.create(chord)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Chord.',
      });
    });
};

// Retrieve all Chords from the database.
exports.findAll = (req, res) => {
  Chord.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving chords.',
      });
    });
};

// Update a Chords by the id in the request.
exports.update = (req, res) => {
  const id = req.params.id;

  Chord.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Chord was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Chord with id=${id}. Maybe Chord was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Chord with id=${id}`,
      });
    });
};

// Delete a Chords with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Chord.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'chord was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Chord with id=${id}. Maybe Chord was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Chord with id=' + id,
      });
    });
};
