import {Page} from "elysiahyperkit/routing";
import {HtmxOrStaticLink, NavbarLink} from "elysiahyperkit/templates";
import * as elements from "typed-html";
import {homepage} from "../routes/routes";

export const NavLink = ({page, children}: {page: Page, children: any}) => {
    return (
        <NavbarLink page={page} class="btn-link" hx-target="#body" hx-push-url="true">
            {children}
        </NavbarLink>
    )
}

export const NavLinkUppercase = ({page, children}: {page: Page, children: any}) => {
    return (
        <NavbarLink page={page} class="btn-link uppercase" hx-target="#body" hx-push-url="true">
            {children}
        </NavbarLink>
    )
}

export const BackLink = () => {
    return (
        <HtmxOrStaticLink endpoint={homepage.endpoint} class="btn-link uppercase" hx-target="#body" hx-push-url="true">
            back
        </HtmxOrStaticLink>
    )
}