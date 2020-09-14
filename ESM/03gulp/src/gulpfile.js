var gulp= require('gulp');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var sass=require('gulp-sass');
var minify=require('gulp-minify-css');
var rename= require('gulp-rename');
var connect=require('gulp-connect');
var plumber=require('gulp-plumber');

//创建gulp任务
//第一个参数为任务的名称
//第二个参数为任务所依赖的其他任务(可以省略)
//第三个参数是执行任务所要运行的代码
gulp.task('copy-index',function(){
  //取到指定的文件
  gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
})
gulp.task('copy-html',function(){
    gulp.src('./src/html/*.html')
        .pipe(gulp.dest('./dist/html'))

})
gulp.task('copy-vendor',function(){
    gulp.src('./src/vendor/**/*.*')
        .pipe(gulp.dest('./dist/vendor'))
})
gulp.task('copy-assets',function(){
    gulp.src('./assets/**/*.*')
        .pipe(gulp.dest('./dist'))
})  
gulp.task('copy',['copy-index','copy-html','copy-vendor','copy-assets'])


//连接js和压缩js
gulp.task('concat',function(){
    gulp.src('./src/script/**/*.js')
        .pipe(concat('output.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglify())
        .pipe(rename('./output.min.js'))
        .pipe(gulp.dest('./dist/js'));

})
//编译sass和最小化css
gulp.task('sass',function(){
    gulp.src('./src/style/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(minify())
        .pipe(rename(function(filename){
            filename.basename+='.min'
        }))
        .pipe(gulp.dest('./dist/css'));
})

//监听
gulp.task('watch',function(){
    gulp.watch('./src/index.html',['copy-index']);
    gulp.watch('./src/html/**/*.html',['copy-html']);
    gulp.watch('./src/script/**/*.js',['concat']);
    gulp.watch('./src/style/**/*.scss',['sass']);
    gulp.watch('./dist/**/*.*,',['reload']);
})
gulp.task('reload',function(){
    gulp.src('./dist/**/*.html')
        .pipe(connect.reload());
})
//热更新
gulp.task('server',function(){
    connect.server({
        root:'./dist',
        livereload:true
    })
})


gulp.task('default',['watch','server'],function(){

})






