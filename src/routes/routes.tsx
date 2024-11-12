import {Route, RequestType, Page} from "elysiahyperkit/routing";
import {
    cvService, imageViewService,
    landingPageService,
    legalService,
    photographyService,
    projectService,
    serviceBluePrint
} from "../services/services";
import {ProjectType} from "../components/projects/projects";
import * as elements from "typed-html";

//pages

export const homepage = new Page("/", landingPageService, "Homepage", false);
const cvPage = new Page("/cv", cvService, "Cv", true);
export const legal = new Page("/legal", legalService, "Legal Notice", true);

export const projectPages: Route[] = [];


Object.entries(ProjectType).forEach(([name, value]) => {
    if (ProjectType.PhotoAndVideo === value) return;
    const HtmlToShow = () => (<p>{value}</p>);
    const projectPage = new Page(`/${name.toLowerCase()}`, projectService, value, true, HtmlToShow);
    projectPages.push(projectPage);
});
export const photoAndVideoPage = new Page("/photography", photographyService, ProjectType.PhotoAndVideo, true);
projectPages.push(photoAndVideoPage);

export const nonProjectPages: Route[] = [homepage, cvPage];


//routes

// for image view with the name of the image
const imageView = new Route(RequestType.GET, "/image_view/*", imageViewService);

export const routes = [...nonProjectPages, ...projectPages, legal, imageView];