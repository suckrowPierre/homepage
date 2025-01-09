import * as elements from "typed-html";
import {Project} from "../../projects/projects";
import {ProjectElement, ProjectTitle} from "./Project";
import {
    ongoingResearch,
    publishedResearch,
    ResearchProjects,
    unpublishedResearch
} from "../../projects/ResearchProjects";
import {ContentGrid, ContentGridStaticFirstCol} from "../../SwissGrid";
import {Divider} from "../../Divider";
import {softwareProjects} from "../../projects/SoftwareProjects";

//Dedicated to producing artistic work and conducting research through mediums such as photography, videography, sound design, as well as my academic background in computer science and physics.
const FirstText = () => (
    <p class="">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    </p>
)



const Projects = () => {
    if (softwareProjects.length > 0) {
        return (
            <div>
                <ProjectTitle>
                    Software Projects
                </ProjectTitle>
                {
                    softwareProjects.map((project) => (
                        <ProjectElement project={project} />
                    )).join('')
                }
            </div>
        )
    } else return null
}

export const Software = () => {
    return (
        <ContentGridStaticFirstCol>
            <div>
                <FirstText />
                <br/>
                <br/>
            </div>
                <div class="w-full overflow-y-auto">
                    <Projects/>
                </div>
        </ContentGridStaticFirstCol>
    )
}
