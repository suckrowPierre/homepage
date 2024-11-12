import * as elements from "typed-html";
import {ServiceParams, destructServiceArgs, isHTMXRequest } from "elysiahyperkit/services"
import {LandingPage} from "../components/pages/LandingPage";
import {SiteFrame} from "../components/SiteFrame";
import {CV} from "../components/pages/CV";
import {Photography, SinglePhotoView} from "../components/pages/Photography";
import {findMediaFromPath, isPathInCache, photographyCache} from "../data/imageCache";
import {photoAndVideoPage} from "../routes/routes";


export const serviceBluePrint = async (HtmlToShow,...args) => {
    if (args.length > 0) {
        const serviceArgs: ServiceParams = destructServiceArgs(args);
        const isHTMX = isHTMXRequest(serviceArgs.request);
        if (isHTMX) {
            return (
                <HtmlToShow/>
            )
        }
    }
    return (
        <SiteFrame>
            <HtmlToShow />
        </SiteFrame>
    )
}

export const projectService = async (...args) => {
    const HtmlToShow = args.shift();
    return serviceBluePrint(HtmlToShow, ...args);
}

export const landingPageService  = async (...args) => {
    return serviceBluePrint(LandingPage, ...args);
};

export const cvService = async (...args) => {
    return serviceBluePrint(CV, ...args);
}

export const legalService = async (...args) => {
    return serviceBluePrint(() => (<p>Legal</p>), ...args);
}

export const photographyService = async (...args) => {
    //const photoList = await getAllFileNamesFromFolderInBucket("photography");
    return serviceBluePrint(Photography, ...args);
}

export const imageViewService = async (...args) => {
    if (args.length > 0) {
        const serviceArgs: ServiceParams = destructServiceArgs(args);
        const imagePath = serviceArgs.params["*"];
        console.log(imagePath);

        if (!imagePath.endsWith(".jpg") && !imagePath.endsWith(".png")) {
            throw new Error("Invalid image name");
        }

        const media = findMediaFromPath(imagePath);

        if (!media) {
            throw new Error("Image not found");
        }

        return (
            <SinglePhotoView media={media}/>
        )
    }
}
