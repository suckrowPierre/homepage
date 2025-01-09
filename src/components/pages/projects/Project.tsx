import {Project} from "../../projects/projects";
import * as elements from "typed-html";
import {Divider} from "../../Divider";


export const ProjectTitle = ({children}:{children:any}) => (
    <p class="col-span-full text-lg font-bold pb-4 uppercase">
        {children}
    </p>
)

const ProjectImage = ({src}:{src: string}) => (
    <img src={src} class={"col-span-full pb-4"} />
)

export function chunkProjectArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

export const ProjectElement = ({project}: {project: Project}) => (
    <div class="col-span-full md:col-span-1 md:row-start-1 md:row-end-4 md:grid md:grid-rows-subgrid text-justify md:gap-2">
        <h1 class="col-span-full font-bold text-base">{project.title}</h1>
            {project.image ? <ProjectImage src={project.image} /> : null}
        <div>
            <p class="pb-2">{project.longDescription ? project.longDescription : project.shortDescription}</p>
            {project.contributors ?
                <p class="pb-2">-{project.contributors}</p> : null
            }
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
    </div>
)

export const ProjectElements = ({projects, title, divider=false}:{projects: Project[], title:string, divider:boolean}) => {
    if (projects.length > 0) {
        const chunkedResearch = chunkProjectArray(projects, 3);

        return (
            <div>
                {divider ? <Divider/>: null}
                <ProjectTitle>{title}</ProjectTitle>
                {
                    chunkedResearch.map((researchChunk, i) => (
                        <ProjectElementsGridWrapper>
                            {
                                researchChunk.map((project) => (
                                    <ProjectElement project={project} />
                                )).join('')
                            }
                        </ProjectElementsGridWrapper>
                    ))
                }
            </div>
        );
    } else {
        return null;
    }
};

export const ProjectElementsGridWrapper = ({children}: {children: any}) => (
    <div class="grid grid-cols-3 grid-rows-auto overflow-y-auto no-scrollbar gap-8 mb-8">
        {children}
    </div>
)

export const ProjectPageGrid = ({children}: {children: any}) => (
    <div class="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-8 grid-rows-auto overflow-y-auto">
        {children}
    </div>
)

export const ProjectPage = ({movingContent, staticContent}: {movingContent:any, staticContent:any}) => (
    <ProjectPageGrid>
        <div class="grid grid-rows-subgrid row-start-1 row-end-3">
            {staticContent}
        </div>
        <div class="col-span-3 md:overflow-y-auto no-scrollbar">
            {movingContent}
        </div>
    </ProjectPageGrid>
)