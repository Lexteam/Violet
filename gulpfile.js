var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/scss/**/*.scss', ['build:scss']);
    gulp.watch('./src/js/**/*.js', ['build:js']);
});

gulp.task('scss', function () {
    return gulp.src('./src/scss/violet.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
    return gulp.src('./src/js/violet.js')
        .pipe(gulp.dest('./dist'));
});

gulp.task('build:scss', ['scss'], function () {
    return gulp.src('./dist/violet.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build:js', ['js'], function () {
    return gulp.src('./dist/violet.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['build:js', 'build:scss']);

gulp.task('default', ['build']);
