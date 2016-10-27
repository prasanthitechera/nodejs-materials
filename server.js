var http=require("http");
var server=http.createServer(function (req,res) {
	res.writeHead(200,{"content_Type":"text/plain"});
	res.end("hiiii...")
	// body...
})
server.listen(8082,function () {
	console.log("server....")
	// body...
})