let gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync = require("browser-sync");
let autoprefixer = require('gulp-autoprefixer');
let imagemin = require("gulp-imagemin");
let uglify = require("gulp-uglify");
let htmlmin = require("gulp-htmlmin");
let rename = require("gulp-rename");
let del = require("del");
let babel = require("gulp-babel");


gulp.task("clean", async () => {
    del.sync("dist");
});

gulp.task("export", () => {
    let buildHtml = gulp.src("./app/**/*.html").pipe(htmlmin({collapseWhitespace: true, removeComments: true})).pipe(gulp.dest("./dist"));
    let buildCss = gulp.src("./app/css/**/*.css").pipe(gulp.dest("./dist/css"));
    let buildJs = gulp.src("./app/js/**/*.js").pipe(babel({presets: ['@babel/env']})).pipe(uglify()).pipe(gulp.dest("./dist/js"));
    let buildImg = gulp.src("./app/img/**/*.*").pipe(imagemin()).pipe(gulp.dest("./dist/img"));
    let buildFonts = gulp.src("./app/fonts/**/*.*").pipe(gulp.dest("./dist/fonts"));
});

gulp.task("build", gulp.series("clean", "export"));

gulp.task("sass", () => {
    return gulp.src("./app/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer({browsers: ['last 2 version', '> 2%', 'firefox 15', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./app/css"))
    .pipe(browserSync.stream());
});

gulp.task("js", () => {
    return gulp.src("./app/js/*.js").pipe(browserSync.stream());
});

gulp.task("html", () => {
    return gulp.src("./app/*.html").pipe(browserSync.stream());
});

gulp.task("watch", () => {
    gulp.parallel("sass", "html", "js");
    browserSync({
        server: {
            baseDir: "./app"
        },
        notify: false
    });
    gulp.watch("./app/scss/**/*.scss", gulp.parallel("sass"));
    gulp.watch("./app/*.html", gulp.parallel("html"));
    gulp.watch("./app/js/*.js", gulp.parallel("js"));
});