import {Project} from "../../projects/projects";
import * as elements from "typed-html";
import {Divider} from "../../Divider";


export const ProjectTitle = ({children}:{children:any}) => (
    <p class="col-span-full text-lg font-bold pb-4 uppercase h-fit md:h-28 lg:h-20">
        {children}
    </p>
)

export const ProjectSubTitle = ({children}:{children:any}) => (
    <p class="col-span-full font-bold text-base h-fit md:h-28 lg:h-20">
        {children}
    </p>
)
const ProjectImage = ({src, link}: {src: string, link?: string | undefined}) => (
    <div class="aspect-w-1 aspect-h-1 col-span-full pb-4 cursor-pointer transition-transform duration-300 transform hover:scale-105">
        {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={src} class="w-full h-full object-cover" />
            </a>
        ) : (
            <img src={src} class="w-full h-full object-cover" />
        )}
    </div>
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
        <ProjectSubTitle>{project.title}</ProjectSubTitle>
            {project.image ? <ProjectImage src={project.image} link={project.cvLink}/> : null}
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
    <div class="grid grid-cols-3 grid-rows-auto overflow-y-auto no-scrollbar gap-8 mb-8 last:mb-0">
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
        <div class="">
            {staticContent}
        </div>
        <div class="col-span-1 md:col-span-3 md:overflow-y-auto no-scrollbar">
            {movingContent}
        </div>
    </ProjectPageGrid>
)