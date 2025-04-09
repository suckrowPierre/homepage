import {Project} from "./projects";
import * as elements from "typed-html";

const IndustryRoundTable : Project = {
    title: "industry-roundtable.com",
    shortDescription: "A webpage and interactive platform that connects industry leaders, academic professionals, and alumni, fostering collaboration, knowledge exchange, and shared expertise.",
    cvLink: "https://industry-roundtable.com",
    links: [{text: "Page", url: "https://industry-roundtable.com"}],
    isCurrent: false,
    image: "industry.jpg"
}

const MemorySpacesWebsite : Project = {
    title: "memory-spaces.de",
    shortDescription: "Multimedia website to display and document the artwork \"Memory Spaces\" via image, video, text and interactive 3d-models.",
    cvLink: "https://memory-spaces.de/",
    links: [{text: "Page", url: "https://memory-spaces.de/"}],
    isCurrent: false,
    image: "memoryspaces_page.jpg"
}

const ThisPage : Project = {
    title: "suckrowpierre.com",
    shortDescription: "Personal webpage to display my works, media archive and expertise.",
    cvLink: "https://suckrowpierre.com/",
    links: [{text: "Page", url: "https://suckrowpierre.com/"}],
    isCurrent: false,
    image: "portfolio.jpg"
}

export const webDesignProjects = [IndustryRoundTable, ThisPage]



