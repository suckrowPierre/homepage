
export const ResourcesLink = "https://files.suckrowpierre.com"

export const optimizedImagePath = (
    fileName: string,
    width?: number,
    height?: number,
    quality?: number,
    format: string = "auto"
) => {
    const options: string[] = [`format=${format}`];

    if (width) {
        options.push(`width=${width}`);
    }
    if (height) {
        options.push(`height=${height}`);
    }
    if (quality) {
        options.push(`quality=${quality}`);
    }

    const path = `${ResourcesLink}/cdn-cgi/image/${options.join(",")}/${fileName}`;
    return path;
};

export const getAuthorizationToken = async () => {
    const applicationKeyId = process.env.BACKBLAZE_APPLICATION_KEY_ID;
    const applicationKey = process.env.BACKBLAZE_APPLICATION_KEY;

    const encodedCredentials = Buffer.from(`${applicationKeyId}:${applicationKey}`).toString("base64");
    const url = "https://api.backblazeb2.com/b2api/v3/b2_authorize_account";

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Basic ${encodedCredentials}`
            }
        });

        if (!response.ok) {
            throw new Error(`Authorization failed with status: ${response.status}`);
        }

        const data = await response.json();

        const authorizationToken = data.authorizationToken;
        const apiUrl = data.apiInfo.storageApi.apiUrl;

        return {authorizationToken, apiUrl};

    } catch (error) {
        console.error("Error getting authorization token:", error);
        throw error;
    }
};


export const getAllFileNamesFromFolderInBucket = async (folderName: string) => {
    const bucketId = process.env.BACKBLAZE_BUCKET_ID;
    const authObject = await getAuthorizationToken();
    const authorizationToken = authObject.authorizationToken;
    const apiUrl = authObject.apiUrl;

    const url = `${apiUrl}/b2api/v3/b2_list_file_names`;

    const queryParams = new URLSearchParams({
        bucketId,
        maxFileCount: "10000",
        prefix: folderName
    });

    const response = await fetch(`${url}?${queryParams.toString()}`, {
            method: "GET",
            headers: {
                "Authorization": authorizationToken,
                "Content-Type": "application/json"
            }
    });

    const data = await response.json();

    let files: { src: string, timestamp: number }[] = [];
    for (const file of data.files) {
        if (file.fileName.endsWith(".jpg")) {
            files.push({src: file.fileName, timestamp: file.uploadTimestamp});
        }
    }
    return files;
};