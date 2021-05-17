const app = require("../app");
const debug = require("debug")("node-test:server");
const http = require("http");
const server = http.createServer(app);
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

server.listen(port, () => {
  console.log("Port active");
});

server.on("listening", onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
