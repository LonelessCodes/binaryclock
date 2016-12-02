/**
 * Fits the length of the input string to the specified length.
 * E.g. Useful to fit a 6bit string (each char either 1 or 0) to an 8bit string
 * @param {String} input The input string
 * @param {Number} length Length of the output string
 * @param {String} filler The char to fill the additional chars with
 * @return {String} Final string with specified length
 */
function toBit(input, length, filler) {
	filler = filler || "0";
	let string = "";
	for (let i = 0; i < length - input.length; i++) string += filler;
	string += input;
	return string;
};

/**
 * Calc the new time and output to the console
 */
function loop() {
	const time = new Date();
	console.log(
		toBit((time.getHours() >>> 0).toString(2), 6), // calc hours
		toBit((time.getMinutes() >>> 0).toString(2), 6), // calc minutes
		toBit((time.getSeconds() >>> 0).toString(2), 6)); // calc seconds
}
setInterval(loop, 1000);