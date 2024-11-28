import * as elements from "typed-html";
import {Project} from "../../projects/projects";
import {ProjectElement} from "./Project";
import {ResearchProjects} from "../../projects/ResearchProjects";

//Dedicated to producing artistic work and conducting research through mediums such as photography, videography, sound design, as well as my academic background in computer science and physics.
const FirstText = () => (
    <p class="">
        Artistic based researcher with an interest in the intersection of art, science, and technology. <br/>
        Currently pursuing a master's degree in <a target="_blank" class="btn-link" href="https://www.newpractice.net/study">"Design & Computation"</a> at <a target="_blank" class="btn-link" href="https://www.udk-berlin.de/">UDK</a>/<a target="_blank" class="btn-link" href="https://www.tu.berlin/">TU</a> Berlin.<br/>
        Bachelor's degree in Computer Science with a minor in Experimental Physics from <a target="_blank" class="btn-link" href="https://www.lmu.de/en/">LMU</a> Munich.
    </p>
)

export const Research = () => {
    const projects = ResearchProjects;
    return (
        <div>
            <div class="w-[75%]">
                <FirstText />
                <hr class="border-t-2 border-black w-full my-2 pb-8"/>
                {
                    projects.length > 0
                        ? projects.map((project) => (
                            <ProjectElement project={project} />
                        ))
                        : null
                }
            </div>
        </div>
    )
}
