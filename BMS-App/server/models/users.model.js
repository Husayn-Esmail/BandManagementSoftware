module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		name: {
			type: Sequelize.STRING
		},
		token: {
			type: Sequelize.STRING
		},
		role: {
			type: Sequelize.STRING
		}
	});

	return User
};
