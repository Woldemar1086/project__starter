module.exports = {
	pug: {
		options: {
			data: {
				debug: false
			}
		},
		files: {
			'templates/index.html': ['templates/sources/index.pug']
		}
	}
};
