import * as elements from "typed-html";
import {Research} from "../pages/projects/Research";
import {Software} from "../pages/projects/Software";
import {WebDesign} from "../pages/projects/WebDesign";
import {ArtisticInstallation} from "../pages/projects/ArtisticInstallation";

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
    longDescription?: string;
    isCurrent?: boolean;
    cvLink?: string;
    publisher?: string;
    publicationDate?: string;
    links?: {text: string, url: string}[];
    HtmlContent?: any;
    image?: string;
    contributors?: string;
}


//    new ProjectType("Sounddesign", "/sounddesign", undefined),
export const projectTypes = [
    new ProjectType("(Artistic based) Research","/research",  <Research/>),
    //new ProjectType("Art & Installations", "installation", <ArtisticInstallation/>),
    new ProjectType("Software Development", "/software", <Software/>),
    new ProjectType("Web Design and Development", "/web-design", <WebDesign/>),
];

