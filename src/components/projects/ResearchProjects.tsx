import {Project} from "./projects";

const Mythologie : Project = {
    title: "The fittest of the Myth. A darwinistic simulation of myth evolution.",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien"
}

const GenAI : Project = {
    title: "How much swagger? A measurement of sub-cultural aesthetics through conceptualization of latent spaces.",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien"
}

const DiffusionSynth: Project = {
    title: "Diffusion-Based Sound Synthesis in Music Production",
    shortDescription: "This project explores the use of generative AI in music production by developing a digital instrument that synthesizes sounds from textual descriptions using diffusion-based models. The tool integrates with standard production workflows, enabling users to generate, modify, and experiment with unique soundscapes",
    links: [{text: "Research Gate", url: "https://www.researchgate.net/publication/383663370_Diffusion-Based_Sound_Synthesis_in_Music_Production"}, {text: "ACM Digital Library", url: "https://dl.acm.org/doi/10.1145/3677996.3678289"}]
}

export const ResearchProjects = [Mythologie, GenAI, DiffusionSynth];

