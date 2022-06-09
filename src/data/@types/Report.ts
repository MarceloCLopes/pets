import { Pet } from "./Pet";

export interface Report {
  id: number;
  email: string;
  amount: string;
  pet: Pet;
}
