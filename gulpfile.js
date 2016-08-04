"use strict";

const gulp = require('gulp');
const open = require('open');
const http = require('http');
const nodemon = require('nodemon');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');
const gulpLoadPlugins = require('gulp-load-plugins');

let plugins = gulpLoadPlugins();

/**
 * Make an http call to see if the server is running
 */
function checkAppReady(cb) {
    var options = {
        host: 'localhost',
        port: 3000
    };
    http
        .get(options, () => cb(true))
        .on('error', () => cb(false));
}

/**
 * Every 100ms ping the server to see if it is ready
 */
function whenServerReady(cb) {
    var serverReady = false;
    var appReadyInterval = setInterval(() =>
        checkAppReady((ready) => {
            if (!ready || serverReady) {
                return;
            }
            clearInterval(appReadyInterval);
            serverReady = true;
            cb();
        }),
        100);
}

/**
 *  Minify/prefix css  to dist
 */
gulp.task('minify:css', function() {
  return gulp.src('./ngApp/css/*.css')
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(plugins.concat('stylesBundle.css'))
    .pipe(plugins.cleanCss({ compatability: 'ie8'}))
    .pipe(plugins.rename('stylesBundle.min.css'))
    .pipe(gulp.dest('./dist/css'));
});
/**
 * Concat all js files and minifiy(uglify) to dist
 */
gulp.task('minify:js', function() {
  return gulp.src('./ngApp/js/**/*.js')
    .pipe(plugins.concat('jsBundle.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(plugins.ngAnnotate())
    .pipe(plugins.uglify())
    .pipe(plugins.rename('jsBundle.min.js'))
    .pipe(gulp.dest('./dist/js'))
});

/**
 * Inject needed js files to index.html
 */
gulp.task('inject:js:dev', function() {
  return gulp.src('./views/index.html')
    .pipe(plugins.inject(
      gulp.src('./ngApp/**/*.js'), {
        starttag: '<!-- injector:js -->',
        endtag: '<!-- endinjector -->',
        transform: (filepath) => `<script src="${filepath.replace(/ngApp/g, 'lib')}"></script>`
      }
    ))
    .pipe(gulp.dest('./views'));
});


/**
 *  Inject needed js files to index.html in dist
 */
gulp.task('inject:js:prod', function() {
  return gulp.src('./dist/views/index.html')
    .pipe(plugins.inject(
      gulp.src('./dist/js/jsBundle.min.js'), {
        starttag: '<!-- injector:js -->',
        endtag: '<!-- endinjector -->',
        transform: (filepath) => `<script src="${filepath.replace(/dist/g, 'lib')}"></script>`
      }
    ))
    .pipe(gulp.dest('./dist/views'));
});

/**
 * Copy the index file to the dist folder
 */
gulp.task('copy:views', function() {
  return gulp.src('./views/**/*.html')
    .pipe(plugins.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/views'));
});

/**
 * Build all of the files needed to run the server
 */
gulp.task('build', function(cb) {
  runSequence(
    ['copy:views'],
    ['minify:css'],
    'minify:js',
    ['inject:js:dev', 'inject:js:prod']
    , cb);
});

/**
 * Build all files necessary for production, start the server, and open browser
 */
gulp.task('serve', function(cb) {
  runSequence(
    ['copy:views', 'minify:css', 'minify:js'],
    'inject:js:prod',
    ['start:server', 'start:client'], cb);
});

/**
 * When the server has started, open the browser to localhost:3000
 */
gulp.task('start:client', function(cb) {
  whenServerReady(() => {
      open('http://localhost:' + 3000);
      cb();
  });
});

/**
 * Start the server using Nodemon
 * Hit ctrl+c twice to stop the server
 */
gulp.task('start:server', function() {
  nodemon('./bin/www');
});
