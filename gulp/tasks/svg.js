var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var config = require('../config');
var svgmin = require('gulp-svgmin');
var rename = require('gulp-rename');


gulp.task('svgmin', function(){
    return gulp
        .src(config.src.svg + "*.svg")
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(config.dest.svg))
})

gulp.task('svgmin:watch', function() {
    gulp.watch(config.src.svg + '*', ['svgmin']);
})