process.env.DEBUG = 'swagger:*';
var swaggerServer = require('swagger-server');
var app = swaggerServer('api/swagger-demo.yaml');
app.listen(3002, function() {
	console.log('swagger is running');
});