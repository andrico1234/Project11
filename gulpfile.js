/**
 * Created by Home on 17/07/2016.
 */
"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    uglifycss = require('gulp-uglifycss');

gulp.task("concatScripts", function() {
   return gulp.src([
       "js/jquery.js", "js/fastclick.js", "js/foundation.js",
   "js/foundation.equalizer.js", "js/foundation.reveal.js", "js/scripts.js"])
       .pipe(concat("app.js"))
       .pipe(gulp.dest("js"))
});

gulp.task("concatStyles", function() {
    return gulp.src([
        "css/normalize.css", "css/foundation.css", "css/basics.css", "css/menu.css",
        "css/hero.css", "css/photo-grid.css", "css/modals.css", "css/footer.css"])
        .pipe(concat("final.css"))
        .pipe(gulp.dest("css"))
});

gulp.task("minifyScripts",["concatScripts"], function() {
    return gulp.src("js/app.js")
        .pipe(uglify())
        .pipe(rename("app.min.js"))
        .pipe(gulp.dest("js"))
});

gulp.task("minifyStyles", ["concatStyles"], function() {
    return gulp.src("css/final.css")
        .pipe(uglifycss())
        .pipe(rename("final.min.css"))
        .pipe(gulp.dest("css"))
});



// i want to concatenate JS and CSS
// I want to minify JS and CSS
// I want to clean files
// create a build task that does all of those things.