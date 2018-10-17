var gulp=require("gulp");
var sass = require("gulp-sass");
gulp.task("copyHtml",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("C:\\WWW\\plant"));
});
gulp.task("copyCss",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("C:\\WWW\\plant\\css"));
});
gulp.task("copyImgs",function(){
	gulp.src("imgs/**/*")
	.pipe(gulp.dest("C:\\WWW\\plant\\imgs"));
});
gulp.task("copyJs",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("C:\\WWW\\plant\\js"));
});
gulp.task("copyFont",function(){
	gulp.src("font/**/*")
	.pipe(gulp.dest("C:\\WWW\\plant\\font"));
});
gulp.task("copySass",function(){
	gulp.src("sass/**/*")
	.pipe(sass())
	.pipe(gulp.dest("C:\\WWW\\plant\\css"));
});

gulp.task("build",["copyHtml","copyCss","copyImgs","copyJs","copyFont","copySass"],function(){
	console.log("ok");
});
gulp.task("watchall",function(){
	gulp.watch("*.html",["copyHtml"]);
	gulp.watch("css/**/*",["copyCss"]);
	gulp.watch("imgs/**/*",["copyImgs"]);
	gulp.watch("js/**/*",["copyJs"]);
	gulp.watch("Font/**/*",["copyFont"]);
	gulp.watch("sass/**/*",["copySass"]);

});
