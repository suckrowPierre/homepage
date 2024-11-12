import * as elements from "typed-html";

export enum ProjectType {
    Research = "Artistic based Research",
    PhotoAndVideo = "Photography and Videography",
    Sound = "Sounddesign",
    Software = "Software Development",
    Web = "Web Design and Development"
}

export class Project {
    constructor(
        public title: string,
        public type: ProjectType,
        public shortDescription: string,
        public HtmlContent: any
    ) {}
}

