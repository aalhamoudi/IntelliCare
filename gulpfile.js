var gulp = require('gulp')
var jade = require('gulp-jade')
var coffee = require('gulp-coffee')
var sass = require('gulp-sass')
var spawn = require('child_process').spawn

gulp.task('jade', function() {
	gulp.src('Source/**/*.jade').
	pipe(jade({pretty: true})).
	pipe(gulp.dest('Build/'))
})

gulp.task('coffee', function() {
	gulp.src('Source/**/*.coffee').
	pipe(coffee({bare: true})).
	pipe(gulp.dest('Build/'))
})

gulp.task('sass', function() {
	gulp.src('Source/**/*.scss').
	pipe(sass()).
	pipe(gulp.dest('Build/'))
})

//var watcher = gulp.watch('Source/**/*.*', ['jade', 'coffee', 'sass']);

gulp.task('default', ['jade', 'coffee', 'sass'], function() {
	//watcher.on('change', function(event){});
	spawn('C:/Program Files (x86)/Opera/30.0.1835.125/opera.exe', [__dirname + '/Build/index.html'], { detached: true });
})





gulp.start('default');

