var gulp =          require('gulp'),
    concat =        require('gulp-concat'),
    sourcemaps =    require('gulp-sourcemaps')
    uglify =        require('gulp-uglify'),
    ngAnnotate =    require('gulp-ng-annotate'),
    nodemon =       require('gulp-nodemon')

gulp.task('js', function() {
    gulp.src('client/js/**/*.js')
        .pipe(sourcemaps.init())
            .pipe(concat('controllers.js'))
            .pipe(concat('services.js'))
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('client/assets'))
})

gulp.task('watch:js', ['js'], function() {
    gulp.watch('client/js/*.js', ['js']) 
})

gulp.task('dev', ['watch:js', 'dev:server'])

gulp.task('dev:server', function() {
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: ['client*']
    })
})