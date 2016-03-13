const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', ['build']);

gulp.task('build', ['sass']);
gulp.task('watch', () => {
  gulp.watch('src/styles/**/*.scss', ['sass']);
});
gulp.task('sass', () => {
  gulp.src('src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});
