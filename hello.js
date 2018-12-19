var http = require('http');
var fs = require("fs");
var data = fs.readFileSync('index.html');
http.createServer(function (request, response) {	
	var url = request.url;
	if(url ==='/'){
		response.writeHead(200,{'Content-Type':'text/html'})
		// 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
		fs.readFile('./index.html','utf-8',function(err,data){
		if(err){
		throw err ;
		}
		response.end(data);
		});
	}else{
			response.writeHead(200,{'Content-Type':'text/html'});
			// 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
			fs.readFile('./404.html','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				response.end(data);
			});
	}
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
