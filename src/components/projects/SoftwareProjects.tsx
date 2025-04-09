import {Project} from "./projects";

const WaveGenSynth : Project = {
    title: "WaveGenSynth",
    shortDescription: "Synthesizer with Generative AI Sound Engine",
    longDescription: "WaveGenSynth is a digital synthesizer written in C++ with the JUCE framework that leverages latent diffusion to create playable sounds. It can seamlessly integrate into your musical workflow as a VST, AU, standalone application, or run directly from the source code.",
    cvLink: "https://github.com/suckrowPierre/WaveGenSynth",
    links: [{text: "GitHub", url: "https://github.com/suckrowPierre/WaveGenSynth"}],
    isCurrent: false,
    image: "WaveGenSynth.jpg"
}

const LatentAccounting :  Project = {
    title: "LatentAccounting",
    shortDescription: "WebUI for usage of smart personal accounting through embeddings and latent spaces",
    longDescription: "A webapp for personal bookkeeping and accounting using embeddings and natural language processing technologies. Built via Built with FastAPI and HTMX",
    cvLink: "https://github.com/suckrowPierre/LatentAccounting",
    links: [{text: "GitHub", url: "https://github.com/suckrowPierre/LatentAccounting"}],
    image: "accounting.jpg",
    isCurrent: false,
}

const Elysiahyperkit : Project = {
    title: "ElysiaHyperKit",
    shortDescription: "A NPM package to build Webapps with Bun, Elysia, Hyperscript and HTMX",
    cvLink: "https://github.com/suckrowPierre/elysiahyperkit",
    links: [{text: "GitHub", url: "https://github.com/suckrowPierre/elysiahyperkit"}],
    image: "elysiahyperkit.jpg",
    isCurrent: false,
}

const DC_Intra : Project = {
    title: "Design & Computation Intranet",
    shortDescription: "WebAPP for an Inventory and Guide Management System for the Design & Computation Intranet. ",
    longDescription: "WebAPP for an Inventory and Guide Management System for the Design & Computation Intranet build using HTMX, Hyperscript, Elysia.js, SQLite.",
    isCurrent: false,
    image: "dc_intra.jpg",
}

const MemorySpaces : Project = {
    title: "MemorySpaces",
    shortDescription: "Code for the interactive installation MemorySpaces, which features a WebApp for initializing the experience, a Python backend server to generate user-input-based audio via generative AI, and an audio cache managed through a database. It also encompasses code for creating and outputting multi-channel audio output.",
    isCurrent: false,
    image: "memory.jpg",
    cvLink: "https://github.com/suckrowPierre/MemorySpaces",
    links: [{text: "GitHub", url: "https://github.com/suckrowPierre/MemorySpaces"}],

}

export const softwareProjects = [Elysiahyperkit, WaveGenSynth, DC_Intra, MemorySpaces]



