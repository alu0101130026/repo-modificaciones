import fs from "fs";
import { FileProcessorHooks } from "./interfaces/fileprocessorhooks.js";

/**
 * Clase que implementa por defecto los hooks
 */
export class DefaultHooks implements FileProcessorHooks {
  preProcess(fileContent: string): string {
    return fileContent;
  }

  postProcess(benefits: number[], weights: number[]): void {
    console.log("Default post-processing:", benefits, weights);
  }
}

/**
 * Clase con el constructor de los hooks y el método process
 */
export class BackpackFileProcessor {
  private hooks: FileProcessorHooks = new DefaultHooks();

  constructor(hooks?: FileProcessorHooks) {
    if (hooks) {
      this.hooks = hooks;
    }
  }

  /**
   * Método plantilla para procesar los datos
   * @param filePath Ruta del archivo
   * @returns Dos arrays con beneficios y elementos de la mochila
   */
  process<T>(filePath: string): [number[], number[]] {
    const fileContent: string = fs.readFileSync(filePath, "utf-8");
    const processedContent: string = this.hooks.preProcess(fileContent);

    let benefits: number[] = [];
    let weights: number[] = [];

    try {
      if (this.isJSONFormat(processedContent)) {
        const data: T = JSON.parse(processedContent);

        benefits = data["elementos"].map((element: any) => element.beneficio);
        weights = data["elementos"].map((element: any) => element.peso);
      } else {
        const lines: string[] = processedContent.split("\n");
        const capacity: number = parseInt(lines[0]);
        const numElements: number = parseInt(lines[1]);

        for (let i = 2; i < numElements + 2; i++) {
          const [numElemento, peso, beneficio] = lines[i]
            .split(",")
            .map(Number);
          benefits.push(beneficio);
          weights.push(peso);
        }
      }
    } catch (error) {
      console.error("Error processing file:", error);
    }

    this.hooks.postProcess(benefits, weights);
    return [benefits, weights];
  }

  /**
   * Función que comprueba si los datos están en formato JSON
   * @param data Datos del JSON
   * @returns Verdadero o falso
   */
  private isJSONFormat(data: string): boolean {
    try {
      JSON.parse(data);
      return true;
    } catch (error) {
      return false;
    }
  }
}

/**
 * Vamos ahora a poner un ejemplo
 */
const filePath = "./src/semana9/datos.json"; 

export class CustomHooks implements FileProcessorHooks {
  preProcess(fileContent: string): string {
    return fileContent.toUpperCase();
  }

  postProcess(benefits: number[], weights: number[]): void {
    console.log("Custom post-processing:", benefits, weights);
  }
}

const fileProcessor = new BackpackFileProcessor(new CustomHooks());
fileProcessor.process(filePath);
