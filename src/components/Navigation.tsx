import {Page} from "elysiahyperkit/routing";
import {HtmxOrStaticLink, NavbarLink} from "elysiahyperkit/templates";
import * as elements from "typed-html";
import {homepage} from "../routes/routes";
import {Attributes} from "typed-html";


export const NavLink = ({page, children, ...attributes}: {page: Page} & Attributes) => {
    return (
        <NavbarLink page={page} class="nav-link" hx-target="#body" hx-push-url="true" {...attributes} preload="mouseover" preload-images="true">
            {children}
        </NavbarLink>
    )
}

export const BackLink = () => {
    return (
        <div class="w-fit">
            <HtmxOrStaticLink endpoint={homepage.endpoint} class="nav-link" hx-target="#body" hx-push-url="true" preload="mouseover" preload-images="true">
                back
            </HtmxOrStaticLink>
        </div>
    )
}