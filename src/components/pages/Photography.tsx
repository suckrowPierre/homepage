import * as elements from "typed-html";
import {ContentFrame} from "../ContentFrame";
import {optimizedImagePath} from "../../data/bucketImages";
import {isProject, Media, photographyCache, Project} from "../../data/imageCache";

const ProjectButton = ({ project }: { project?: Project }) => {
    const projectName = project ? project.name : "all";

    const newHyperscript = `
        on click viewProject("${projectName}") then set $currentProject to "${projectName}" then set window.previousScrollY to undefined end
        on mouseenter viewProject("${projectName}") end 
        on mouseleave viewProject($currentProject) then set window.previousScrollY to undefined end
    `;

    return (
        <div class="mr-4 pb-4 md:pb-0">
            <button class="underline cursor-pointer betterhover:hover:no-underline" data-project-name={projectName} _={newHyperscript}>
                {projectName} ({project ? project.numberOfImages : photographyCache.allNumberOfMedia})
            </button>
        </div>
    );
};

const PhotoMenu = () => {
    const photoCache = photographyCache;
    return (
    <div class="md:w-[250px] flex w-full overflow-x-scroll whitespace-nowrap h-fit md:flex-col md:overflow-y-scroll md:h-full">
        <ProjectButton />
        {
            photoCache.projectsAndMedia.map((projectOrMedia: Project | Media) => {
                if (isProject(projectOrMedia)) {
                    return (
                        <ProjectButton project={projectOrMedia} />
                    );
                }
            })
        }
    </div>
)}

const GridPhoto = ({ media, project }: {media:Media, project?: string}) => {
    return (
        <div class="photo-item w-full pb-[4%]"
             data-project={project || "All"}>
            <button
                hx-get={`image_view/${media.src}`}
                hx-trigger="click"
                hx-swap="afterbegin"
                hx-target="#photo-view"
                data-swap-target="single-photo-view"
                _="on click set window.previousScrollY to #photo-view.scrollTop"
                class="w-full h-full"
                preload="mouseover" preload-images="true"
            >
                <img src={optimizedImagePath(media.src, 550)} alt={media.name + " thumbnail"} class="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"/>
            </button>
        </div>
    );
}

const ExitSinglePhotoViewButton = () => {
    const hyperscript = `
        on click remove #single-photo-view
        then show #photo-grid
        then wait 10ms
        then set #photo-view.scrollTop to window.previousScrollY
    `;

    return (
        <button class="absolute top-0 right-0 m-4" _={hyperscript}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
    );
}



const Photogrid = () => {
    const photoCache = photographyCache.projectsAndMedia as Media[];

    return (
        <div class="h-full flex flex-wrap" id="photo-grid">
            {photoCache
                .map((mediaOrProject: Project | Media) => {
                    if (isProject(mediaOrProject)) {
                        const project = mediaOrProject as Project;
                        return project.media.map((media) => (
                            <GridPhoto media={media} project={project.name} />
                        ));
                    } else {
                        return <GridPhoto media={mediaOrProject as Media} />;
                    }
                })
                .flat()}
            <script type="text/hyperscript">
                on htmx:afterSwap if (event.detail.target.id === "photo-view") then hide #photo-grid
            </script>
        </div>
    );
};



export const SinglePhotoView = ({ media }:{media:Media}) => (
    <div class="relative w-full h-full flex justify-center items-center" id="single-photo-view">
        <ExitSinglePhotoViewButton />
        <img src={optimizedImagePath(media.src, 550)} alt={media.name} loading="lazy" class="max-h-full max-w-full m-auto" />
    </div>
);

const MenuScript = () => (
    <script type="text/hyperscript">
        {
            `
            on load set $currentProject to "all"

            def viewProject(projectName)
                if window.previousScrollY is undefined then
                    console.log("Setting window.previousScrollY to", #photo-view.scrollTop)
                    set window.previousScrollY to #photo-view.scrollTop
                end
                if #single-photo-view exists
                    then remove #single-photo-view
                    then show #photo-grid
                end
                if projectName == "all"
                    show <.photo-item/>
                    resetColumns()
                else
                    hide <.photo-item/> 
                    then show <.photo-item[data-project=\$\{projectName\}]/>
                    then decrementColumns()
                end
                then recalculateGrid()
                if $currentProject == projectName then set #photo-view.scrollTop to window.previousScrollY else set #photo-view.scrollTop to 0 end
            end
            `}
    </script>
)

export const Photography = () => (
    <ContentFrame>
        <div class={`
    w-full
    h-full
    min-h-0
    grid
    gap-4
    grid-cols-1
    grid-rows-[auto,1fr]
    md:grid-rows-1
    md:grid-cols-[auto_1fr]
    relative
    `}>
            <MenuScript />
            <PhotoMenu />
            <div id="photo-view" class="h-full overflow-y-auto overflow-x-hidden">
                <Photogrid />
            </div>
        </div>
    </ContentFrame>
);
