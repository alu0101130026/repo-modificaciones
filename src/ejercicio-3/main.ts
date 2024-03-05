import * as fs from "fs";

class FileReader {
  constructor(private filePath: string) {}

  // Reads file
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo:", error.message);
      return "";
    }
  }
}

class FileWriter {
  constructor(private filePath: string) {}

  // Writes file
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo:", error.message);
    }
  }
}

// Client code
const filePath = "example.txt";
const fileReader = new FileReader(filePath);
const fileWriter = new FileWriter(filePath);

// Reading content
const currentContent = fileReader.readFile();
console.log("Current content:", currentContent);

// Writing content
const newData = "This is new content to be written into the file.";
fileWriter.writeFile(newData);

// Updating content
const updatedContent = fileReader.readFile();
console.log("Updated content:", updatedContent);
