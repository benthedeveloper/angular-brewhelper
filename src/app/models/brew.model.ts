import { BrewStatus } from "../enums/brew-status.enum";

export interface IBrew {
  id: string;
  name: string;
  description: string;
  status: BrewStatus;
  abv: number;
  og: number;
  fg: number;
  ibu: number;
  imageUrl: string;
  imageAltText: string;
}