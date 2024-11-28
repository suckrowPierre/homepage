import {Project} from "../../projects/projects";
import * as elements from "typed-html";

const ExternalArrowSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"/>
    </svg>
)

export const ProjectElement = ({project}: {project: Project}) => (
    <div class="pb-8">
        <h1 class="font-bold">{project.title}</h1>
        <p>{project.shortDescription}</p>
        <div>
            { project.links?.length > 0 ?
                project.links?.map((link) => (
                    <a target="_blank" class="btn-link pr-4" href={link.url}>
                        {link.text}
                    </a>
                ))
                : null
            }
        </div>
    </div>
)