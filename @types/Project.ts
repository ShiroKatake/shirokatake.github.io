import { Image } from "./Image";

export interface Project {
  _id: string;
  _updatedAt: string;
  projectName: string;
  coverImage: Image;
  releaseDate?: string;
  repoUrl?: string;
}

export interface GameProject extends Project {
  _type: 'gameProject';
  storeUrl?: string;
}

export interface WebProject extends Project {
  _type: 'webProject';
  publicUrl?: string;
}