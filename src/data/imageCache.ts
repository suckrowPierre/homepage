
const cachePath = "public/photographyContent.json";

export interface Project {
    name: string;
    media: Media[];
    timestamp: number;
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

//array of Project or Media objects
export type MediaList = (Project | Media)[];

//array of Project or Media objects
export let photographyCache: MediaList = [];



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
            const project = photographyCache.find((project) => project.name === projectName) as Project | undefined;
            //check if project already exists if not create it
            if (!project) {
                photographyCache.push({name: projectName, media: [media], timestamp: item.timestamp});
            } else {
                project.media.push(media);
                if (item.timestamp > project.timestamp) {
                    project.timestamp = item.timestamp;
                }
            }
        }
        if (srcSplitted.length === 2) {
            const media = {src: item.src, timestamp: item.timestamp, name: srcSplitted[1]};
            photographyCache.push(media);
        }
    }   );
    photographyCache.sort((a, b) => {
        return b.timestamp - a.timestamp;}
    );
}

await readPhotographyNamesFromCache();

export const findMediaFromPath = (path: string): Media | undefined => {
    for (const projectOrMedia of photographyCache) {
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


