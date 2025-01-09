import * as elements from "typed-html";
import {
    ProjectElements,
    ProjectPage,
    ProjectTitle
} from "./Project";
import {
    ongoingResearch,
    publishedResearch,
    unpublishedResearch
} from "../../projects/ResearchProjects";

const FirstText = () => (
    <div>
        <h1 class="col-span-full font-bold text-base">Some title</h1>
    <p class="pt-2">
        Artistic based researcher with an interest in the intersection of art, science, and technology. <br/>
        Currently pursuing a master's degree in <a target="_blank" class="btn-link" href="https://www.newpractice.net/study">"Design & Computation"</a> at <a target="_blank" class="btn-link" href="https://www.udk-berlin.de/">UDK</a>/<a target="_blank" class="btn-link" href="https://www.tu.berlin/">TU</a> Berlin.<br/>
        Bachelor's degree in Computer Science with a minor in Experimental Physics from <a target="_blank" class="btn-link" href="https://www.lmu.de/en/">LMU</a> Munich.
    </p>
    </div>
)

export const Research = () => {
    return (
        <ProjectPage
            staticContent={[
                <ProjectTitle>(Artistic based) Research</ProjectTitle>,
                <FirstText />]}
            movingContent={[
                <ProjectElements projects={ongoingResearch} title={"Ongoing Research"}/>,
                <ProjectElements projects={publishedResearch} title={"Published Research"} divider={true}/>,
                <ProjectElements projects={unpublishedResearch} title={"Unpublished Research"} divider={true}/>
            ]}
        />
    )
}