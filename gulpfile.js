// ///////////////////////////////////////////////////
// Required
// ///////////////////////////////////////////////////
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    compass = require('gulp-compass'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');

// ///////////////////////////////////////////////////
// Scripts task
// ///////////////////////////////////////////////////
gulp.task('scripts', function() {
    gulp.src(['app/private/js/**/*.js', '!app/private/js/**/*.min.js'])
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/public'));
});

// ///////////////////////////////////////////////////
// Compass / Sass task
// ///////////////////////////////////////////////////
gulp.task('compass', function () {
    gulp.src('app/private/scss/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('app/public/css'));
});

// ///////////////////////////////////////////////////
// Watch task
// ///////////////////////////////////////////////////
gulp.task('watch', function() {
    gulp.watch('app/private/js/**/*.js', ['scripts']);
    gulp.watch('app/private/scss/*.scss', ['compass']);
});

// ///////////////////////////////////////////////////
// Default task
// ///////////////////////////////////////////////////
gulp.task('default', ['scripts', 'compass', 'watch']);