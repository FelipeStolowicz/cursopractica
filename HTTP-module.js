const http = require('http')

const server =http.createServer((req,res)=> {
	if(req.url==='/'){
		res.end('QUIERO LA LIBERTADORES');
		return;
	}
	if(req.url==='/about'){
		res.end('Y UNA GALLINA MATAR');
		return;
	}
	res.end(`
	<h1>Oops!</h1>
	<p>No podemos encontrar la pagina que estas buscando, bokita es muy grande para eso. Anda a cantar </p>
	<a href="/">QUIIEEEEE...</a>
	`)
})
server.listen(5000)