//Declarations
var bigimg = document.getElementById("bigimg");
var instr = document.getElementById("instruction");
var backbut = document.getElementById("back");
var nextbut = document.getElementById("next");
var currentslide = 1;
var totalslides = 12;
var slideinfo = [
	null,
	["/heart/images/slide1.jpeg", "You will need a 15cm×15cm square piece of paper."],
	["/heart/images/slide2.jpeg", "Rotate the paper as shown."],
	["/heart/images/slide3.jpeg", "Fold the paper into half (from right to left) and unfold, leaving a crease."],
	["/heart/images/slide4.jpeg", "Repeat folding from bottom to top."],
	["/heart/images/slide5.jpeg", "Turn the paper around and fold the top corner down to the center."],
	["/heart/images/slide6.jpeg", "Fold the bottom corner up to the center off the top edge as shown."],
	["/heart/images/slide7.jpeg", "Fold the right side up to the center line as shown."],
	["/heart/images/slide8.jpeg", "Repeat with left side."],
	["/heart/images/slide9.jpeg", "Turn the paper around and fold the top-left corner down as shown."],
	["/heart/images/slide10.jpeg", "Repeat with top-right corner."],
	["/heart/images/slide11.jpeg", "Fold the two side corners in as shown."],
	["/heart/images/slide12.jpeg", "Turn the heart around. You're done!"]
];

//function code
function prevslide() {
	if (currentslide == 1) {
		return;
	}
	currentslide -= 1;
	bigimg.src = slideinfo[currentslide][0];
	instr.innerText = slideinfo[currentslide][1];
};
function nextslide() {
	if (currentslide == totalslides) {
		return;
	}
	currentslide += 1;
	bigimg.src = slideinfo[currentslide][0];
	instr.innerText = slideinfo[currentslide][1];
};
function setup() {
	bigimg.src = slideinfo[currentslide][0];
	instr.innerText = slideinfo[currentslide][1];
};