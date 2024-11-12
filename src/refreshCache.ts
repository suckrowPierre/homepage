import {writePhotographyNamesToCache} from "./data/imageCache";
import {getAllFileNamesFromFolderInBucket} from "./data/bucketImages";

await writePhotographyNamesToCache(await getAllFileNamesFromFolderInBucket("photography"));
