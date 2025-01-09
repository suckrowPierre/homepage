import * as elements from "typed-html";
import {
    ProjectElements,
    ProjectPage, ProjectSubTitle,
    ProjectTitle
} from "./Project";
import {
    ongoingResearch,
    publishedResearch,
    unpublishedResearch
} from "../../projects/ResearchProjects";

const FirstText = () => (
    <div>
        <ProjectSubTitle>Inbetween fences</ProjectSubTitle>
        <p class="pt-[3px] text-justify">
            Having pursued a natural science-inspired education culminating in a bachelor’s degree in Computer Science with a minor in Experimental Physics at the <a target="_blank" class="btn-link" href="https://www.lmu.de/en/">Ludwig Maximilian University of Munich</a>, I have now turned to applying and intertwining my knowledge and methodologies with my interests in the arts, sciences, cultures, and technologies through my current master’s program, <a target="_blank" class="btn-link" href="https://www.newpractice.net/study">"Design & Computation"</a>. This joint program between the <a target="_blank" class="btn-link" href="https://www.udk-berlin.de/">University of the Arts Berlin</a> and the <a target="_blank" class="btn-link" href="https://www.tu.berlin/">Technical University Berlin</a> emphasizes creative collaboration across disciplines, fostering the development of new teaching and research formats. My recent work focuses on the implementation and broader implications of computational intelligence across various modalities, with particular emphasis on audio and cultural contexts.
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