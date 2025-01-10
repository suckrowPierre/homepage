import * as elements from "typed-html";
import {ProjectElements, ProjectPage, ProjectSubTitle, ProjectTitle} from "./Project";
import {webDesignProjects} from "../../projects/WebDesignProjects";

/*
            If you're looking for a developer to create a lightweight, tailored web application that reflects a thoughtful and refined approach, I would be delighted to collaborate and bring your vision to life.        </p>
 */

const FirstText = () => (
    <div>
        <ProjectSubTitle>A minimal approach</ProjectSubTitle>
        <p class="pt-[3px] text-justify">
            Through my past experience as a full-stack web developer, I became dissatisfied with bloated frameworks and solutions that introduce unnecessary complexity and bring overwhelming ecosystems. These often complicate projects beyond necessity, creating more obstacles than solutions. Embracing a love for minimalistic design, I began valuing clarity and functionality in my design language. Seeking to extend these principles beyond a website’s layout to the codebase of the application led me to pursue a tech stack that embodies these principles, focusing on clean, modular, and efficient development. <br/><br/>
            Adopting the ideology behind HTMX, I carefully balance server-side and client-side rendering based on the specific needs of each component. By combining this approach with the speed and flexibility of modern JavaScript frameworks like Bun, I can develop custom solutions efficiently while adhering to modular design practices. To streamline development further, I created ElysiaHyperKit, an npm package containing reusable building blocks, allowing me to rapidly prototype and implement ideas across projects while maintaining consistency.
        </p>
    </div>
)

export const WebDesign = () => {
    return (
        <ProjectPage
            staticContent={[
                <ProjectTitle>Webdesign</ProjectTitle>,
                <FirstText />]}
            movingContent={[
                <ProjectElements projects={webDesignProjects} title={"Projects"}/>,
            ]}
        />
    )
}
