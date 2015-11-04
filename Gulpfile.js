var
		gulp           = require('gulp');
		babel          = require("gulp-babel");
    uglify         = require('gulp-uglify');
		postcss        = require('gulp-postcss');
	  vars           = require('postcss-simple-vars');
		postcss        = require('gulp-postcss');
	  concat         = require('gulp-concat');
		url            = require("postcss-url");
		sourcemaps     = require('gulp-sourcemaps');
		autoprefixer   = require('autoprefixer');
		atImport       = require("postcss-import");
		processors     = [
										 require('postcss-mixins'),
										 require('postcss-simple-vars'),
										 require('postcss-nested'),
										 require('autoprefixer')({ browsers: ['last 2 versions', '> 2%'] })
		];
// Compile tasks
gulp.task("babel", function () {
  return gulp.src("./javascripts/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("main.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./bundle/"));
});
gulp.task('css', function () {
    return gulp.src('./stylesheets/*.css')
        .pipe(sourcemaps.init())
	      .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./bundle/'));
});

// Watch task
gulp.task('watch', function(){
  gulp.watch('./stylesheets/*.css', ['css']);
	gulp.watch('./javascripts/*.js', ['babel']);
});


gulp.task('default', ["css", "watch", "babel"]);
