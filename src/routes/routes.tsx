import {Route, RequestType, Page} from "elysiahyperkit/routing";
import {
    cvService, imageViewService,
    landingPageService,
    legalService, notFoundService,
    photographyService,
    projectService,
} from "../services/services";
import {ProjectType, projectTypes} from "../components/projects/projects";
import * as elements from "typed-html";
import {ProjectsSite} from "../components/pages/ProjectSite";

//pages

export const homepage = new Page("/", landingPageService, "Homepage", false);
const cvPage = new Page("/cv", cvService, "Cv", true);
export const legal = new Page("/legal", legalService, "Legal Notice", true);

export const projectPages: Route[] = [];

export const photoAndVideoPage = new Page("/archive", photographyService, "Media Archive", true);
//projectPages.push(photoAndVideoPage);

projectTypes.forEach(projectType => {
    const HtmlToShow = () => (<ProjectsSite projectType={projectType}/>);
    const projectPage = new Page(projectType.endpoint, projectService, projectType.name, true, HtmlToShow);
    projectPages.push(projectPage);
});


export const nonProjectPages: Route[] = [homepage, cvPage];


//routes

// for image view with the name of the image
const imageView = new Route(RequestType.GET, "/image_view/*", imageViewService);

export const notFoundPage = new Page("*", notFoundService, "404 Not Found", false);


export const routes = [...nonProjectPages, ...projectPages, legal, imageView, notFoundPage];