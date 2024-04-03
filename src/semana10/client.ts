import fs from "fs";
import * as child_process from "child_process";
import * as net from "net";

const connection = net.connect({ port: 60300 });

/**
 * Función que obtiene el número de líneas, palabras y carácteres de un archivo
 * @param filePath Ruta del archivo
 * @param callback Errores o datos obtenidos
 */
export function getFileStats(
  filePath: string,
  callback: (err: Error | null, stats?: string) => void,
) {
  /**
   * Manejamos el error de si el archivo existe o no
   */
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      callback(new Error("The file does not exist."));
      return;
    }

    /**
     * Ejecutamos cat para leer el archivo y enviamos su salida a wc para contar los valores
     */
    const catProcess = child_process.spawn("cat", [filePath]);
    const wcProcess = child_process.spawn("wc", ["-l", "-w", "-c"]);

    /**
     * Utilizamos pipe para redirigir la salida de cat hacia wc
     */
    catProcess.stdout.pipe(wcProcess.stdin);

    let statsOutput = "";

    wcProcess.stdout.on("data", (data) => {
      statsOutput += data;
    });

    /**
     * Manejamos errores en cat y wc
     */
    catProcess.on("error", (err) => {
      callback(new Error(`Error when executing 'cat': ${err.message}`));
    });

    wcProcess.on("error", (err) => {
      callback(new Error(`Error when executing 'wc': ${err.message}`));
    });

    /**
     * Vemos ahora si los procesos han terminado
     */
    wcProcess.on("close", (code) => {
      if (code === 0) {
        callback(null, statsOutput);
      } else {
        callback(new Error(`'wc' ended with output code ${code}`));
      }
    });
  });

  connection.end();
}
