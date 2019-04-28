// Gulp: Dependencies
var gulp = require('gulp');
var size = require('gulp-size');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var critical = require('critical');

// Gulp-Task: images
gulp.task('images', function() {
  return gulp.src('public/images/**/*', {base: "./"})
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('./'))
    .pipe(size({title: 'images'}));
});

// Gulp-Task: html
gulp.task('html', function() {
  return gulp.src('public/**/*.html', {base: "./"})
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
    .pipe(size({title: 'html'}));
});

// Gulp-Task: critical
gulp.task('critical', function() {
  return critical.generate({
    inline: true,
    base: 'public/',
    src: 'index.html',
    dest: 'index.html',
    width: 2560,
    height: 1600,
    minify: true,
    extract: true,
    ignore: ['@font-face'],
    css: ['public/styles/style.min.css']
  });
});

// Gulp-Task: build
gulp.task('minimize-build', gulp.series('critical', 'html', 'images'));
