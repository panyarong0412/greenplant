var gulp=require("gulp");
var sass = require("gulp-sass");
gulp.task("copyHtml",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\plant"));
});
gulp.task("copyCss",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\plant\\css"));
});
gulp.task("copyImgs",function(){
	gulp.src("imgs/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\plant\\imgs"));
});
gulp.task("copyJs",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\plant\\js"));
});
gulp.task("copyIcon",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\plant\\icon"));
});
gulp.task("copySass",function(){
	gulp.src("sass/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\plant\\sass"));
});

gulp.task("build",["copyHtml","copyCss","copyImgs","copyJs","copyIcon","copySass"],function(){
	console.log("ok");
});
gulp.task("watchall",function(){
	gulp.watch("*.html",["copyHtml"]);
	gulp.watch("css/**/*",["copyCss"]);
	gulp.watch("imgs/**/*",["copyImgs"]);
	gulp.watch("js/**/*",["copyJs"]);
	gulp.watch("icon/**/*",["copyIcon"]);
	// gulp.watch("sass/**/*",["copySass"]);

});
