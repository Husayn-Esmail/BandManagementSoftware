const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;

// create and save new users
exports.create = (req, res) => {
	// validate request
	if (!req.body.name) {
		res.status(400).send({
			message: "Content cannot be empty !",
		});
		return;
	}

	// Create a User
	const user = {
		name: req.body.name,
		token: req.body.token,
		role: req.body.role
	};


	// Save User in the database
	User.create(user)
	.then((data) => {
		res.send(data);
	})
	.catch((err) => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the User.",
		});
	})
};


// Retrieve all users from the database.
exports.findAll = (req, res) => {
	User.findAll()
	.then((data) => {
		res.send(data);
	})
	.catch((err) => {
		res.status(500).send({
			message: err.message || 'Some error occurred while retrieving users.',
		});
	});
};


// Update user by the id in the request.
exports.update = (req, res) => {
	const id = req.params.id;

	User.update(req.name, req.role, {
		where: { id: id },
	})
	.then((num) => {
		if (num == 1) {
			res.send({
				message: 'User was successfully updated.',
			});
		} else {
			res.send({
				message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
				});
		}
		})
		.catch((err) => {
			res.status(500).send({
				message: `Error updating User with id=${id}`,
			});
		});	
};


// Delete a User with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	User.destroy({
		where: { id: id },
	})
	.then((num) => {
		if (num == 1) {
			res.send({
				message: 'User was deleted successfully!',
			});
	} else {
		res.send({
			message: 'Cannot delete User with id=${id}. Maybe User was not found!',
		});
	}
	})
	.catch((err) => {
		res.status(500).send({
			message: 'Could not delete User with id=' + id,
		});
	});
};
