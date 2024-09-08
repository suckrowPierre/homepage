import {Route, RequestType, Page} from "elysiahyperkit/routing";
import {cvService, infoPageService, landingPageService, testContentService} from "../services/services";


export const homepage = new Page("/", landingPageService, "Homepage", false);
const infoPage = new Page("/info", infoPageService, "Info", true);
const photoPage = new Page("/photos", testContentService, "Photos", true);
const cvPage = new Page("/cv", cvService, "Cv", true);

// Project Pages

const waveGenSynthPage = new Page("/wavegen-synth", landingPageService, "Diffusion-Based Sound Synthesis in Music Production", true);
const genMemory = new Page("/gen-memory", landingPageService, "A Reflection on Generative AI and Memory Reconstruction", true);
const bioMythology = new Page("/bio-mythology", landingPageService, "Computational BioMythology", true);
const memorySpacesPage = new Page("/memory-spaces", landingPageService, "Memory Spaces", true);

const testProjekt3 = new Page("/test-projekt3", landingPageService, "Projekt3", true);
const testProjekt4 = new Page("/test-projekt4", landingPageService, "Projekt4", true);
const testProjekt5 = new Page("/test-projekt5", landingPageService, "Projekt5", true);
const testProjekt6 = new Page("/test-projekt6", landingPageService, "Projekt6", true);
const testProjekt7 = new Page("/test-projekt7", landingPageService, "Projekt7", true);
const testProjekt8 = new Page("/test-projekt8", landingPageService, "Projekt8", true);
const testProjekt9 = new Page("/test-projekt9", landingPageService, "Projekt9", true);
const testProjekt10 = new Page("/test-projekt10", landingPageService, "Projekt10", true);
const testProjekt11 = new Page("/test-projekt11", landingPageService, "Projekt11", true);
const testProjekt12 = new Page("/test-projekt12", landingPageService, "Projekt12", true);
const testProjekt13 = new Page("/test-projekt13", landingPageService, "Projekt13", true);
const testProjekt14 = new Page("/test-projekt14", landingPageService, "Projekt14", true);
const testProjekt15 = new Page("/test-projekt15", landingPageService, "Projekt15", true);
const testProjekt16 = new Page("/test-projekt16", landingPageService, "Projekt16", true);
const testProjekt17 = new Page("/test-projekt17", landingPageService, "Projekt17", true);


const testProjects = [testProjekt3, testProjekt4, testProjekt5, testProjekt6, testProjekt7, testProjekt8, testProjekt9, testProjekt10, testProjekt11, testProjekt12, testProjekt13, testProjekt14, testProjekt15, testProjekt16, testProjekt17];


export const projectPages = [waveGenSynthPage, genMemory, bioMythology, memorySpacesPage, ...testProjects];
export const nonProjectPages = [homepage, infoPage, photoPage, cvPage];
export const routes = [...nonProjectPages, ...projectPages];