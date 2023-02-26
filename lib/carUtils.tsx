import fs from "fs";
import path from "path";
import { Car } from "../src/shared/car";

export function getCars(): Car[] {
  const filePath: string = path.join(process.cwd(), "data/cars.json");
  const fileContent: string = fs.readFileSync(filePath, "utf8");
  const cars: Car[] = JSON.parse(fileContent);
  return cars;
}
