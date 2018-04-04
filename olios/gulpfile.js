'use strict';
const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    atImport = require("postcss-import"),
    csso = require('postcss-csso'),
    precss = require('precss'),
    cssnext = require('postcss-cssnext'),
    short = require('postcss-short'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    babelify = require('babelify'),
    browserify = require('gulp-browserify'),
    plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass');


gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});


gulp.task('css', function() {

    let processors = [
        precss,
        atImport,
        cssnext,
        short,
        csso
    ];

    return gulp.src('src/css/main.css')
        .pipe(plumber())
        .pipe(postcss(processors))
        .pipe(rename({
            extname: '.css',
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/style'))
        .pipe(browserSync.stream());
});

// gulp.task('html', function () {
// 	return gulp.src('src/layout/*.pug')
// 		.pipe(plumber())
// 		.pipe(pug({
// 			pretty: '\t'
// 		}))
// 		.pipe(gulp.dest('dist'))
// 		.pipe(browserSync.stream());
// });


gulp.task('js', function() {

    return gulp.src('src/js/main.js')
        .pipe(plumber())
        .pipe(browserify({
            debug: true,
            transform: [babelify.configure({
                resets: ['es2015']
            })]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', ['sass', 'css', 'js'], function() {

    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'css', 'js'], function() {

    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/**/*.css', ['css']);
    // gulp.watch('src/**/*.pug', ['html']);
    gulp.watch('dist/*.html', browserSync.reload)
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('dist/*.html', browserSync.reload);
});