import {ContentFrame} from "../ContentFrame";
import * as elements from "typed-html";
import {ProjectType} from "../projects/projects";

//{projectType.HtmlContent(projectType.projects)}

export const ProjectsSite= ({projectType}: {projectType: ProjectType}) => (
    <ContentFrame>
        {projectType.HtmlContent}
    </ContentFrame>
)