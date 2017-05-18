/**
 * Fits the length of the input string to the specified length.
 * E.g. Useful to fit a 6bit string (each char either 1 or 0) to an 8bit string
 * @param {Number} length Length of the output string
 * @param {String} filler The char to fill the additional chars with
 * @return {String} Final string with specified length
 */
String.prototype.toBit = function (length, filler) {
	filler = filler || "0";
	var string = "";
	for (var i = 0; i < length - this.length; i++) string += filler;
	string += this;
	return string;
};

/**
 * Calc the new time and output to the console
 */
function loop() {
	const time = new Date();
	console.log(
		(time.getHours() >>> 0).toString(2).toBit(6), // calc hours
		(time.getMinutes() >>> 0).toString(2).toBit(6), // calc minutes
		(time.getSeconds() >>> 0).toString(2).toBit(6)); // calc seconds
}
setInterval(loop, 1000);