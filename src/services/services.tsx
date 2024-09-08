import * as elements from "typed-html";
import {ServiceParams, destructServiceArgs, isHTMXRequest } from "elysiahyperkit/services"
import {LandingPage} from "../components/pages/LandingPage";
import {SiteFrame} from "../components/SiteFrame";
import {ContentFrame} from "../components/ContentFrame";
import {InfoPage} from "../components/pages/InfoPage";
import {CV} from "../components/pages/CV";


export const landingPageService  = async (...args) => {
    const serviceArgs: ServiceParams = destructServiceArgs(args);
    const isHTMX = isHTMXRequest(serviceArgs.request);
    if (isHTMX) {
        return (
                <LandingPage />
        )
    }
    return (
        <SiteFrame>
            <LandingPage />
        </SiteFrame>
    )
};


export const infoPageService = async (...args) => {
    const serviceArgs: ServiceParams = destructServiceArgs(args);
    const isHTMX = isHTMXRequest(serviceArgs.request);
    if (isHTMX) {
        return (
            <InfoPage />
        )
    }
    return (
        <SiteFrame>
            <InfoPage />
        </SiteFrame>
    )
}

export const cvService = async (...args) => {
    const serviceArgs: ServiceParams = destructServiceArgs(args);
    const isHTMX = isHTMXRequest(serviceArgs.request);
    if (isHTMX) {
        return (
            <CV />
        )
    }
    return (
        <SiteFrame>
            <CV />
        </SiteFrame>
    )
}

export const testContentService =  async (...args) => {
    const serviceArgs: ServiceParams = destructServiceArgs(args);
    const isHTMX = isHTMXRequest(serviceArgs.request);
    if (isHTMX) {
        return (
            <ContentFrame>
                Hello World
            </ContentFrame>
        )
    }
    return (
        <SiteFrame>
            <ContentFrame>
                Hello World
            </ContentFrame>
        </SiteFrame>
    )

}