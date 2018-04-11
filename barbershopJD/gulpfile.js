const gulp = require('gulp'),
    sass = require('gulp-sass'),
    // postCSS = require('gulp-postcss'),
    atImport = require('postcss-import'),
    //  cssnext = require('postcss-cssnext'),
    //  short = require('postcss-short'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-csso'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    browserify = require('gulp-browserify'),
    babel = require('babelify'),
    minifyJS = require('gulp-uglify');
// nunjucks = require('gulp-nunjucks-render');

gulp.task('styles', function() {
    return gulp.src('src/scss/main.scss')
        .pipe(plumber())
        .pipe(sass(atImport))
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.stream())
});


gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(browserify({
            debug: true,
            transform: [babel.configure({
                presets: ['es2015'],
            })]
        }))
        .pipe(minifyJS())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
});

//gulp.task('html', function() {
//    return gulp.src('src/views/*.html')
//        .pipe(nunjucks({
//            path: 'src/'
//        }))
//        .pipe(gulp.dest('dist/'))
//        .pipe(browserSync.stream())
//})

//gulp.task('njkTemplates', function() {
//    return gulp.src('src/js/templates/*.njk')
//        .pipe(gulp.dest('dist/js/templates/'))
//})

gulp.task('reload', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false,
    })
});
gulp.task('watch', ['reload', 'styles', 'js'], function() {
    gulp.watch('src/scss/**/*.scss', ['styles'])
    gulp.watch('src/js/**/*.js', ['js'])
        // gulp.watch('src/**/*.njk', ['html'])
        // gulp.watch('src/js/templates/*.njk', ['njkTemplates'], browserSync.reload)
    gulp.watch('dist/*.html', browserSync.reload)
});