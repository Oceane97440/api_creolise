const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.use(server.static(__dirname + '/public'));

server.set("port", process.env.PORT || 3000);

server.listen(server.get("port"), () => {
    console.log(`server on port ${server.get("port")}`);
});