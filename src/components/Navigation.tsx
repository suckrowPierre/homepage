import {Page} from "elysiahyperkit/routing";
import {HtmxOrStaticLink, NavbarLink} from "elysiahyperkit/templates";
import * as elements from "typed-html";
import {homepage, photoAndVideoPage} from "../routes/routes";
import {Attributes} from "typed-html";


export const NavLink = ({page, children, ...attributes}: {page: Page} & Attributes) => {
    // if page is photography call function loadMasonry() to load masonry layout
    let extraAttributes = {};
    if (page.endpoint === photoAndVideoPage.endpoint) {
        extraAttributes = {
            "hx-trigger": "loadMasonry"
        }
    }
    return (
        <NavbarLink page={page} class="nav-link" hx-target="#body" hx-push-url="true" {...attributes} preload="mouseover" preload-images="true">
            {children}
        </NavbarLink>
    )
}

export const BackLink = () => {
    return (
        <div class="w-fit">
            <HtmxOrStaticLink endpoint={homepage.endpoint} class="nav-link" hx-target="#body" hx-push-url="true">
                back
            </HtmxOrStaticLink>
        </div>
    )
}