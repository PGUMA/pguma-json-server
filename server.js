const process = require("process");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleWares = jsonServer.defaults();

const port = process.env.PORT || 8009;

server.use(middleWares);
server.use(router);
server.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit();
    return;
  }
  console.log("Start listening...");
  console.log("http://localhost:" + port);
});
