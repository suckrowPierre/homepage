import {ContentFrame} from "../ContentFrame";
import * as elements from "typed-html";
import {ContentGrid} from "../SwissGrid";

const AboutText = () => (
    <p>
        This portfolio showcases the works of Pierre-Louis Suckrow.
    </p>
)

const HTMX = () => (
    <a target="_blank" class="text-link" href="https://htmx.org/">HTMX</a>
)

const Elysia = () => (
    <a target="_blank" class="text-link" href="https://elysiajs.com/">ElysiaJS</a>
)

const Bun = () => (
    <a target="_blank" class="text-link" href="https://bun.sh/">Bun</a>
)

const ElysiaHyperKit = () => (
    <a target="_blank" class="text-link" href="https://github.com/suckrowPierre/elysiahyperkit">ElysiaHyperKit</a>
)

const TypedHTML = () => (
    <a target="_blank" class="text-link" href="https://github.com/nicojs/typed-html">TypedHtml</a>

)

const Tailwind = () => (
    <a target="_blank" class="text-link" href="https://tailwindcss.com/">Tailwind</a>
)

const ElysiaTailwind = () => (
    <a target="_blank" class="text-link" href="https://github.com/gtramontina/elysia-tailwind">Elysia Tailwind</a>
)

const MaceyJS = () => (
    <a target="_blank" class="text-link" href="http://macyjs.com/">Macy.js</a>
)
const HTMXPreload = () => (
    <a target="_blank" class="text-link" href="https://htmx.org/extensions/preload/#:~:text=The%20preload%20extension%20allows%20you,applications%20needs%20and%20use%20cases.">HTMX Preload Extension</a>
)

const BuildText = () => (
    <div>
        <p>
            {`This site was build using ${<HTMX/>}, ${<HTMXPreload/>},${<Elysia/>},${<Bun/>},${<TypedHTML/>},${<MaceyJS/>} via ${<ElysiaHyperKit/>}.`}
        </p>
        <p>
            {`For styling ${<Tailwind/>} is being used via the ${<ElysiaTailwind/>} plugin.`}
        </p>
        <p>
            Helvetica Neue together with the Chomsky font family is being used.
        </p>
    </div>
)

export const SiteInformation = () => (<ContentFrame>
    <ContentGrid>
        <div class="col-span-full">
            <AboutText/>
            <br/>
            <br/>
            <BuildText/>
        </div>
    </ContentGrid>
</ContentFrame>)