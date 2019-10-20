var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var autoprefixer = require('gulp-autoprefixer');
var beautify = require("gulp-beautify");

gulp.task("sass", function () {
    return gulp.src("./scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer({browsers: ['last 2 version', '> 2%', 'firefox 15', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}))
    .pipe(gulp.dest("./css")).pipe(browserSync.stream());
});

gulp.task("js", function () {
    return gulp.src("./js/*.js").pipe(browserSync.stream());
});

gulp.task("html", function () {
    return gulp.src("./*.html").pipe(browserSync.stream());
});

gulp.task("watch", function () {
    browserSync({
        server: {
            baseDir: "."
        },
        notify: false
    });
    gulp.watch("./scss/*.scss", gulp.series("sass"));
    gulp.watch("./*.html", gulp.series("html"));
    gulp.watch("./js/*.js", gulp.series("js"));
});