
const cachePath = "public/photographyContent.json";

export interface Project {
    name: string;
    media: Media[];
    timestamp: number;
    numberOfImages: number;
}

export interface Media {
    src: string;
    timestamp: number;
    name: string;
}


export function isProject(obj: any): obj is Project {
    return obj && 'media' in obj;
}

export function isMedia(obj: any): obj is Media {
    return obj && 'src' in obj;
}


export type ProjectOrMedia = (Project | Media);

export interface PhotographyCache {
    projectsAndMedia: ProjectOrMedia[];
    allNumberOfMedia: number;
}

export let photographyCache: PhotographyCache = {projectsAndMedia: [], allNumberOfMedia: 0};



export const writePhotographyNamesToCache = async (photographyList: { src: string, timestamp: number }[]) => {
    await Bun.write(cachePath, JSON.stringify({images: photographyList}));
}

export const readPhotographyNamesFromCache = async () => {
    const list = (await Bun.file(cachePath).json())["images"];
    list.forEach((item: { src: string, timestamp: number }) => {
        const srcSplitted = item.src.split("/");
        if (srcSplitted.length > 3) {
            throw new Error("Invalid src in cache: To many subfolders " + item.src);
        }
        if (srcSplitted.length === 3) {
            const projectName = srcSplitted[1];
            const mediaName = srcSplitted[2];
            const media = {src: item.src, timestamp: item.timestamp, name: mediaName};
            const project = photographyCache.projectsAndMedia.find((project) => project.name === projectName) as Project | undefined;
            //check if project already exists if not create it
            if (!project) {
                const project: Project = {name: projectName, media: [media], timestamp: item.timestamp, numberOfImages: 1};
                photographyCache.allNumberOfMedia++;
                photographyCache.projectsAndMedia.push(project);
            } else {
                project.media.push(media);
                project.numberOfImages++;
                photographyCache.allNumberOfMedia++;
                if (item.timestamp > project.timestamp) {
                    project.timestamp = item.timestamp;
                }
            }
        }
        if (srcSplitted.length === 2) {
            const media: Media = {src: item.src, timestamp: item.timestamp, name: srcSplitted[1]};
            photographyCache.projectsAndMedia.push(media);
            photographyCache.allNumberOfMedia++;
        }
    }   );
    photographyCache.projectsAndMedia.sort((a, b) => {
        return b.timestamp - a.timestamp;}
    );
}

await readPhotographyNamesFromCache();

export const findMediaFromPath = (path: string): Media | undefined => {
    for (const projectOrMedia of photographyCache.projectsAndMedia) {
        if (isProject(projectOrMedia)) {
            const media = projectOrMedia.media.find((m) => m.src === path);
            if (media) {
                return media;
            }
        } else if (isMedia(projectOrMedia)) {
            if (projectOrMedia.src === path) {
                return projectOrMedia;
            }
        }
    }
    return undefined;
}


