/**
 * Interfaz para definir los hooks
 */

export interface FileProcessorHooks {
  preProcess(fileContent: string): string;
  postProcess(benefits: number[], weights: number[]): void;
}
