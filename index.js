require("dotenv").config();
const mimodulito = require("./analizarRutas");
const http = require("http");
const miservidor = http.createServer((req, res) => {
  // req.url
  // req.method
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.write(`Hola. gracias por pedis ${req.method} en ${req.url}`);
  // res.end();
  const miUrl = new URL(req.url);
  mimodulito.init(miUrl.pathname);
  mimodulito.siguiente
  miUrl.pathname.split("/");
});
miservidor.listen(process.env.PORT, () => {
  console.log("puerto", process.env.PORT, "...");
});
