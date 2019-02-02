// Gulp: Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var size = require('gulp-size');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var eslint = require('gulp-eslint');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var browserSync = require('browser-sync');
var critical = require('critical');
var reload = browserSync.reload;

// Header information
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' * @copyright <%= new Date().getFullYear() %> <themihel> Mischa Helfenstein | all rights reserved',
  ' */',
  ''].join('\n');

// Gulp-Task: styles
gulp.task('styles', function() {
  return gulp.src([
		'app/styles/app.scss'
	])
  .pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(concat('app.css'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('.tmp/styles/'))
	.pipe(uglifycss())
  .pipe(header(banner, {pkg: pkg}))
	.pipe(gulp.dest('dist/styles/'))
  .pipe(size({title: 'styles'}));
});

gulp.task('lint', function() {
    return gulp.src([
        'app/scripts/**/*.js'
    ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());;
});

// Gulp-Task: scripts
gulp.task('scripts', gulp.series('lint'), function() {
  return gulp.src([
		'app/scripts/**/*.js'
	])
  .pipe(sourcemaps.init())
	.pipe(concat('app.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('.tmp/scripts/'))
  .pipe(uglify({mangle: false}))
	.pipe(header(banner, {pkg: pkg}))
	.pipe(gulp.dest('dist/scripts/'))
  .pipe(size({title: 'scripts'}));
});

// Gulp-Task: images
gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('dist/images/'))
    .pipe(size({title: 'images'}));
});

// Gulp-Task: html
gulp.task('html', function() {
  return gulp.src('app/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'))
    .pipe(size({title: 'html'}));
});

// Gulp-Task: json
gulp.task('json', function() {
  return gulp.src('app/**/*.json')
    .pipe(gulp.dest('dist/'))
    .pipe(size({title: 'json'}));
});

// Gulp-Task: bower_components
gulp.task('bower', function() {
    return gulp.src('bower_components/**/*')
        .pipe(gulp.dest('dist/bower_components/'))
        .pipe(size({title: 'bower'}));
});

// Gulp-Task: critical
gulp.task('critical', function() {
    return critical.generate({
        inline: true,
        base: 'dist/',
        src: 'index.html',
        dest: 'index.html',
        width: 2560,
        height: 1600,
        minify: true,
        extract: true,
        ignore: ['@font-face'],
        css: ['dist/styles/app.css']
    });
});

// Gulp-Task: clean
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// Gulp-Task: watch
gulp.task('watch', function() {
  gulp.watch('app/styles/**/*.scss', gulp.series('styles'));
  gulp.watch('app/scripts/**/*.js', gulp.series('lint', 'scripts'));
});

// Gulp-Task: default
gulp.task('default', gulp.series('styles', 'lint', 'scripts'));

// Gulp-Task: preserve
gulp.task('dist', gulp.series('html', 'json', 'styles', 'lint', 'scripts', 'images', 'bower'));

// Gulp-Task: build
gulp.task('build', gulp.series('dist', 'critical'));

// Gulp-Task: serve
gulp.task('serve', gulp.series('styles', 'lint', 'scripts'), function() {
    browserSync({
        server: {
            baseDir: ['.tmp', 'app'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch(['app/styles/**/*.scss'], ['styles', reload]);
    gulp.watch(['app/scripts/**/*.js'], ['lint', 'scripts', reload]);
    gulp.watch(['app/images/**/*'], reload);
    gulp.watch(['app/**/*.html'], reload);
});

// Gulp-Task: serve:dist
gulp.task('serve:build', gulp.series('build'), function() {
    browserSync({
        server: 'dist'
    });

    gulp.watch(['app/styles/**/*.scss'], gulp.series('styles', reload));
    gulp.watch(['app/scripts/**/*.js'], gulp.series('lint', 'scripts', reload));
    gulp.watch(['app/images/**/*'], gulp.series('images', reload));
    gulp.watch(['app/**/*.html'], gulp.series('html', reload));
});
