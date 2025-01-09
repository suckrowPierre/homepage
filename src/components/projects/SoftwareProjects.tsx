import {Project} from "./projects";

const WaveGenSynth : Project = {
    title: "WaveGenSynth",
    shortDescription: "Synthesizer with Generative AI Sound Engine",
    longDescription: "WaveGenSynth is a digital synthesizer written in C++ with the JUCE framework that leverages latent diffusion to create playable sounds. It can seamlessly integrate into your musical workflow as a VST, AU, standalone application, or run directly from the source code.",
    cvLink: "https://github.com/suckrowPierre/WaveGenSynth",
    links: [{text: "GitHub", url: "https://github.com/suckrowPierre/WaveGenSynth"}],
    isCurrent: false,
}

/*
<Projekt title="WaveGenSynth" description="Synthesizer with Generative AI Sound Engine" link="https://github.com/suckrowPierre/WaveGenSynth"/>
        <Projekt title="LatentAccounting" description="WebUI for usage of smart personal accounting through embeddings and latent spaces"
                 link="https://github.com/suckrowPierre/LatentAccounting"/>
        <Projekt title="Elysiahyperkit" description="A NPM package to build Webapps with Bun, Elysia, Hyperscript and HTMX"
                 link="https://github.com/suckrowPierre/elysiahyperkit"/>
        <Projekt title="Design & Computation Intranet" description="WebAPP for an Inventory and Guide Management System for the Design & Computation Intranet" />
 */

const LatentAccounting :  Project = {
    title: "LatentAccounting",
    shortDescription: "WebUI for usage of smart personal accounting through embeddings and latent spaces",
    longDescription: "A webapp for personal bookkeeping and accounting using embeddings and natural language processing technologies. Built via Built with FastAPI and HTMX",
    cvLink: "https://github.com/suckrowPierre/LatentAccounting",
    links: [{text: "GitHub", url: "https://github.com/suckrowPierre/LatentAccounting"}],
    isCurrent: false,
}

const Elysiahyperkit : Project = {
    title: "ElysiaHyperKit",
    shortDescription: "A NPM package to build Webapps with Bun, Elysia, Hyperscript and HTMX",
    cvLink: "https://github.com/suckrowPierre/elysiahyperkit",
    links: [{text: "GitHub", url: "https://github.com/suckrowPierre/elysiahyperkit"}],
    isCurrent: false,
}

const DC_Intra : Project = {
    title: "Design & Computation Intranet",
    shortDescription: "WebAPP for an Inventory and Guide Management System for the Design & Computation Intranet. ",
    longDescription: "WebAPP for an Inventory and Guide Management System for the Design & Computation Intranet build using HTMX, Hyperscript, Elysia.js, SQLite.",
    isCurrent: false,
}


export const softwareProjects = [Elysiahyperkit, WaveGenSynth, DC_Intra, LatentAccounting]



