import * as elements from "typed-html";
import {ContentFrame} from "../ContentFrame";
import {optimizedImagePath} from "../../data/bucketImages";
import {isProject, Media, photographyCache, Project} from "../../data/imageCache";

const PhotoMenu = () => (
    <div class="w-[250px]">
        <p>All</p>
        <p>This Project</p>
        <p>That Project</p>
        <p>Another Project</p>
    </div>
);

const GridPhoto = ({ media }: {media:Media}) => {
    console.log(media);
    return (
        <div class="photo-item w-full pb-[4%]">
            <button
                hx-get={`image_view/${media.src}`}
                hx-trigger="click"
                hx-swap="afterbegin"
                hx-target="#photo-view"
                data-swap-target="single-photo-view"
                _="on click set window.scrollPosition to #photo-view.scrollTop"
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
        then set #photo-view.scrollTop to window.scrollPosition
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
    const photoCache = photographyCache as Media[];

    return (
        <div className="h-full m-auto flex flex-wrap" id="photo-grid">
            {photoCache.map((mediaOrProject: Project | Media) => {
                if (isProject(mediaOrProject)) {
                    const project = mediaOrProject as Project;
                    return project.media.map((media) => (
                        <GridPhoto key={media.id} media={media} />
                    ));
                } else {
                    return <GridPhoto key={mediaOrProject.id} media={mediaOrProject as Media} />;
                }
            })}
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

export const Photography = () => (
    <ContentFrame>
        <div class={`
    w-full
    h-full
    min-h-0
    grid
    gap-4
    grid-cols-[auto_1fr]
    relative
    `}>
            <PhotoMenu />
            <div id="photo-view" class="h-full overflow-y-auto overflow-x-hidden">
                <Photogrid />
            </div>
        </div>
    </ContentFrame>
);
