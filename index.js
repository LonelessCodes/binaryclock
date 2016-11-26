String.prototype.toBit = function (length) {
	let string = "";
	for (let i = 0; i < length - this.length; i++) string += "0";
	string += this;
	return string;
};

function loop() {
	const time = new Date();
	console.log(
		(time.getHours() >>> 0).toString(2).toBit(6),
		(time.getMinutes() >>> 0).toString(2).toBit(6),
		(time.getSeconds() >>> 0).toString(2).toBit(6));
}
setInterval(loop, 1000);