"use strict";

const images = $(".back div");
const length = images.length;
const h1     = $("h1");

let i = 3;
let interval = 0;
let h1Interval = 0;

function start() {

	interval = setInterval (function() {
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

	h1Interval = setInterval(function(){
		h1.fadeToggle(600)
	}, 600);
}


start();

$(window).on("blur", function(){
  console.log("stopped");
  clearInterval(interval);
  clearInterval(h1Interval);
});
$(window).on("focus", function(){
  console.log("started");
  start();
});