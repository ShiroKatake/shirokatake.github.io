import { Image } from "./Image";

export interface Project {
  projectName: string;
  coverImage: Image;
  releaseDate: string;
  repoUrl: string | null;
  supportImages: Image[] | null;
  summary: string | null;
  videoPreview: {
    altText: string | null;
    aspectratio: number | null;
    caption: string | null;
    imageFallback: Image | null;
    url: string;
  };
}

export interface GameProject extends Project {
  storeUrl: string;
}

export interface WebProject extends Project {
  publicUrl: string;
}