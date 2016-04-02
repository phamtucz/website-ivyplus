
$(".product-img.zoom").elevateZoom({zoomWindowPosition: 7});

var isSafari = /constructor/i.test(window.HTMLElement);
if (isSafari) {
	console.log("isSafari");
	$("h3::before").css("top", "41px");
	$("h3::after").css("top", "41px");
} else {
	console.log("is not safari");

}