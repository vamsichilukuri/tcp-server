const net = require("net");
const fs = require("fs");
const request = require("request");

const server = net.createServer((socket) => {
	// socket.write("");
	socket.on("data", (data) => {
		var data = data.toString();
		var download = (uri, filename, callback) => {
			request.head(uri, (err, res, body) => {
				res.headers["content-type"];
				res.headers["content-length"];
				// console.log("content-type: ", res.headers["content-type"]);
				// console.log("content-length: ", res.headers["content-length"]);

				request(uri)
					.pipe(fs.createWriteStream(filename))
					.on("close", callback);
			});
		};
		var month = new Date().getUTCMonth() + 1;
		var date =
			new Date().getUTCDate() +
			"-" +
			month +
			"-" +
			new Date().getFullYear() +
			"-" +
			new Date().getTime();
		download(data, "images/" + date + ".png", () => {
			console.log("Done");
		});
		// console.log(" download ", data.toString());
	});
});
server.listen(8081);
