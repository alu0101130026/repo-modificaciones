import { expect } from "chai";
import "mocha";
import * as assert from "assert";
import * as fs from "fs";
import * as net from "net";
import { getFileStats } from "../src/semana10/client.js";

/*describe("getFileStats", () => {
  it("should return correct stats for existing file", (done) => {
    const filePath = "testfile.txt";
    const fileContent = "Line 1\nLine 2\nLine 3";

    fs.writeFileSync(filePath, fileContent);

    getFileStats(filePath, (err, stats) => {
      if (err) {
        done(err);
      } else {
        assert.strictEqual(stats, "3 3 15");
        done();
      }
    });
  });

  it("should return error for non-existing file", (done) => {
    const filePath = "nonexistentfile.txt";

    getFileStats(filePath, (err, stats) => {
      assert(err instanceof Error);
      assert.strictEqual(err.message, "The file does not exist.");
      done();
    });
  });
});

describe("Server", () => {
  let server: net.Server;

  before((done) => {
    server = net.createServer((connection) => {
      connection.on("data", (data) => {
        const filePath = data.toString().trim();
        if (filePath === "testfile.txt") {
          connection.write("3 3 15");
        } else {
          connection.write("The file does not exist.");
        }
        connection.end();
      });
    });

    const PORT = 60300;
    server.listen(PORT, () => {
      done();
    });
  });

  after(() => {
    server.close();
  });

  it("should return correct stats for existing file", (done) => {
    const client = net.connect({ port: 60300 }, () => {
      client.write("testfile.txt");
    });

    client.on("data", (data) => {
      const stats = data.toString().trim();
      assert.strictEqual(stats, "3 3 15");
      done();
    });
  });

  it("should return error for non-existing file", (done) => {
    const client = net.connect({ port: 60300 }, () => {
      client.write("nonexistentfile.txt");
    });

    client.on("data", (data) => {
      const errorMessage = data.toString().trim();
      assert.strictEqual(errorMessage, "The file does not exist.");
      done();
    });
  });
});
*/
