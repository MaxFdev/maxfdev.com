declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.mdx" {
  import { ComponentType } from "react";
  
  export const name: string;
  export const image: string;
  export const overview: string;
  export const topics: string[];
  export const repoUrl: string;
  
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
