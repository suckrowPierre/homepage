import * as elements from "typed-html";
import {Research} from "../pages/projects/Research";

export class ProjectType {
    constructor(
        public name: string,
        public endpoint: string,
        public HtmlContent: any,
    ) {}
}

export interface Project {
    title: string;
    shortDescription: string;
    links?: {text: string, url: string}[];
    HtmlContent?: any;
}

//
export const projectTypes = [
    new ProjectType("Artistic based Research","/research",  <Research/>),
    new ProjectType("Sounddesign", "/sounddesign", undefined),
    new ProjectType("Software Development", "/software", undefined),
    new ProjectType("Web Design and Development", "web-design", undefined),
];

