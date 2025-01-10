import * as elements from "typed-html";
import {ProjectElements, ProjectPage, ProjectSubTitle, ProjectTitle} from "./Project";
import {softwareProjects} from "../../projects/SoftwareProjects";

const FirstText = () => (
    <div>
        <ProjectSubTitle>Evolving understandings</ProjectSubTitle>
        <p class="pt-[3px] text-justify">
            {`Developing an early interest in technology and information systems, I began to self-educate myself in all things related to computer science. This curiosity dictated my academic path through school and ultimately shaped my choice of a bachelor's degree in Computer Science with a minor in Experimental Physics from the <a target="_blank" class="text-link" href="https://www.lmu.de/en/">Ludwig Maximilian University of Munich</a>. I bring a strong theoretical foundation paired with practical knowledge across various topics, frameworks, and programming languages. Having started with Java, I now primarily work with Python and JavaScript/TypeScript, while also having experience in C++ and Haskell and continuing to deepen my expertise in these areas.`}
        </p>
    </div>
)

export const Software = () => {
    return (
        <ProjectPage
            staticContent={[
                <ProjectTitle>Software</ProjectTitle>,
                <FirstText />]}
            movingContent={[
                <ProjectElements projects={softwareProjects} title={"Projects"}/>,
            ]}
        />
    )
}
