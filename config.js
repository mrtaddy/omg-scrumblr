/*exports.database = {
	type: 'mongodb',
	hostname: 'localhost',
	port: 27017,
	database: 'scrumblr'
};
*/

exports.database = {
	url: process.env.REDIS_URL,
	type: 'redis',
	prefix: '#scrumblr#'
};

exports.server = {
  port: process.env.PORT,
  username: process.env.BASIC_AUTH_USERNAME,
  password: process.env.BASIC_AUTH_PASSWORD
};
