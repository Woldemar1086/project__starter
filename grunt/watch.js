module.exports = {
    options: {
        livereload: true
    },
    css: {
        files: [
            '<%= project.app %>/blocks/**/{,*/}*.{scss,sass}',
            '<%= project.app %>/libs/sass/{,*/}*.{scss,sass}',
            '<%= project.app %>/<%= project.name %>*.{scss,sass}'
        ],
        tasks: ['sass', 'autoprefixer'],
        options: {
            spawn: false
        }
    },
    image: {
        files: [
            '<%= project.images %>/**/{,*/}*.{png,gif,svg,jpg,jpeg,bmp}'
        ],
        tasks: ['copy']
    },
    fonts: {
        files: [
            '<%= project.fonts %>/**/{,*/}*.{woff,truetype,opentype,svg,otf,ttf}'
        ],
        tasks: ['copy']
    },
    scripts: {
        files: [
            '<%= project.libs %>/js/{,*/}*.js',
            '<%= project.blocks %>/**/js/{,*/}*.js',
            '<%= project.blocks %>/**/{,*/}*.js',
            '<%= project.blocks %>/**/{,*/}*.js',
            '<%= project.app %>/{,*/}*.js'
        ],
        tasks: ['concat', 'browserify'],
        options: {
            spawn: false
        }
    },
	pug: {
		files: [
			'<%= project.blocks %>/**/*.pug',
			'templates/sources/*.pug',
			'<%= project.blocks %>/**/**/*.pug'
		],
		tasks: ['pug']
	}
};
