"use strict";

const images = $(".back div");
const length = images.length;
const h1     = $("h1");

let i = 3;
setInterval (function() {
	let next = i === length ? 1 : i + 1;
	images.each(function () {
		$(this).css("z-index", 0);
	});
	// images.eq(i - 1)
	// 	.css({
	// 		zIndex: 1
	// 	}).animate({
	// 		left: "-100%"
	// 	});
	// images.eq(next - 1)
	// 	.css({
	// 		left: "100%",
	// 		zIndex: 1
	// 	}).animate({
	// 		left: 0
	// 	});

	images.eq(i - 1)
		.css("z-index", 1)
		.fadeOut(600);
	images.eq(next - 1)
		.css("z-index", 2)
		.css("display", "none")
		.fadeIn(600);


	i = i === length ? 1 : i + 1;
}, 5000);

setInterval(function(){
	h1.fadeToggle(600)
}
, 600);
