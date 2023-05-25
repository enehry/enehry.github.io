import type { Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";

export interface Navdata {
  title: string;
  link: string;
  // vue component
  icon: any;
}

export interface Project {
  id: string;
  title: string;
  description: Document;
  platforms: ProjectPlatform[];
  image: Asset;
  link: string;
  tags: string[];
  github?: string;
  order: number;
}

export enum ProjectPlatform {
  WEB = "Web",
  MOBILE = "Mobile",
  DESKTOP = "Desktop",
  API = "Api",
  ALL = "All",
}