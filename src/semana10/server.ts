import * as net from "net";
import { getFileStats } from "./client.js";

/**
 * Creamos el servidor
 */
const server = net.createServer((connection) => {
  console.log("A client has connected.");

  connection.write(`Connection established.`);
  connection.write("\n");

  connection.on("data", (data) => {
    const filePath = data.toString().trim();
    console.log(`Statistics for the file: ${filePath}`);

    getFileStats(filePath, (err, stats) => {
      if (err) {
        connection.write(err.message);
      } else {
        connection.write(stats);
      }
      connection.end();
    });
  });

  connection.on("close", () => {
    console.log("A client has disconnected.");
  });
});

server.on("error", (err) => {
  console.error("Error ocurred:", err);
});

/**
 * Vamos a poner un puerto para usarlo como ejemplo
 */
const PORT = 60300;
server.listen(PORT, () => {
  console.log("Waiting for clients to connect.");
});
