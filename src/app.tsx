import * as elements from "typed-html";
import {App, AppParams, SiteType } from "elysiahyperkit";
import { tailwind } from "@gtramontina.com/elysia-tailwind";
import {routes} from "./routes/routes";


const appParams: AppParams = {
    port: 3000,
    staticDir: true,
    hyperScript: true,
    siteType: SiteType.HTMX,
}

const app = new App(appParams).use(tailwind({
    path: "/public/styles.css",
    source: "./src/styles.css",
    config: "./tailwind.config.js",
}))

app.setRoutes(routes).start();
