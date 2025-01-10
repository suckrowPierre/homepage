import {ContentFrame} from "../ContentFrame";
import * as elements from "typed-html";
import {email, github, linkedin} from "../../personalInfo";
import {Attributes} from "typed-html";
import {ProjectElement} from "./projects/Project";
import {ongoingResearch, publishedResearch, ResearchProjects, unpublishedResearch} from "../projects/ResearchProjects";
import {Project} from "../projects/projects";
import {Divider} from "../Divider";
import {softwareProjects} from "../projects/SoftwareProjects";
import {webDesignProjects} from "../projects/WebDesignProjects";

const CVTableLength = 200;

const textClassesTimeLine = "font-medium";
const CVElement = ({children}: {children: any}) => (
    <div class="pb-12">
        {children}
    </div>
)

const TimeLineTitle = ({children, ...attributes }: Attributes) => (
    <h2 class="text-lg pb-4" {...attributes}>
        {children}
    </h2>
)

const TimeLineGrid = ({children, ...attributes }: Attributes) => (
<div class="grid grid-cols-10 mb-12 md:mb-4 gap-x-4 gap-y-2 pb-2" {...attributes}>
    {children}
</div>
)

const TimeLineDate = ({startDate, endDate, ...attributes} : {startDate: Date, endDate?: Date} & Attributes) => {
    const formatDate = (date: Date) => {
        return date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear()
    }
    return (
            <p class={"col-span-5 sm:col-span-2 "} {...attributes}>
                {formatDate(startDate)} - <br/>{endDate ? formatDate(endDate) : "Present"}
            </p>
    )
}

//text-center align-center margin-auto
const TimeLinePlace = ({firm, city} : {firm: string, city: string}) => (
    <div class={"col-span-5  sm:col-span-2 text-right sm:text-left "}>
        <p>{firm}</p>
        <p>{city}</p>
    </div>
)
const TimeLineTitleAndRole = ({title, role}: {title:string, role:string}) => (
    <div class="col-span-10 sm:col-span-6">
        <p class={textClassesTimeLine}>{title}</p>
        <p>{role}</p>
    </div>
)

const Publisher = ({publisher, year}: {publisher: string, year: string}) => (
    <div class={"col-span-3 sm:col-span-2 "}>
        <p>{publisher}</p>
        <p>{year}</p>
    </div>
)

const PublicationTitle = ({title, description, link }: {title: string, description:string, link:string | undefined}) => (
    <div class="col-span-7 sm:col-span-8">
        <a class={"btn-link " + textClassesTimeLine} href={link ? link : ""} target="_blank">
            {title}
        </a>
        <p>
            {description}
        </p>
    </div>
)

const Publication = ({title, description, publisher, year, link}: {title: string, description:string, publisher: string, year: string, link:string | undefined}) => (
    <TimeLineGrid>
        <Publisher publisher={publisher} year={year}/>
        <PublicationTitle title={title} description={description} link={link}/>
    </TimeLineGrid>
)

const Projekt = ({title, description, link}: {title: string, description:string, link?:string| undefined}) => (
    <TimeLineGrid>
        <div class="col-span-10">
            <p class={textClassesTimeLine + " py-2"}>
                {link ?
                    <a class={"btn-link"} href={link} target="_blank">
                        {title}
                    </a>
                    : title
                }
            </p>
            <p>
                {description}
            </p>
        </div>
    </TimeLineGrid>
)



const Scholarship = ({title, startDate, endDate, link}: {title: string, startDate: Date, endDate?: Date, link:string}) => (
    <TimeLineGrid>
        <TimeLineDate startDate={startDate} endDate={endDate} class={"col-span-4 sm:col-span-2 "}/>
        <p class={"col-span-6 sm:col-span-8 " + textClassesTimeLine}>
            <a class={"btn-link"} href={link} target="_blank">
                {title}
            </a>
        </p>
    </TimeLineGrid>
)




const TimeLineOccupation = ({title, role, startDate, endDate, firm, city}: {title:string, role:string, startDate: Date, endDate?: Date, firm: string, city: string}) => (
    <TimeLineGrid>
        <TimeLineDate startDate={startDate} endDate={endDate}/>
        <TimeLinePlace firm={firm} city={city}/>
        <TimeLineTitleAndRole title={title} role={role}/>
    </TimeLineGrid>
)

const CVTable = ({children, ...attributes }: Attributes) => (
    <table class="table-fixed border-separate w-full border-spacing-y-2" {...attributes}>
        {children}
    </table>
    )

const InfoBlock = ({children, ...attributes }: Attributes) => (
    <div class="grid grid-cols-1 md:grid-cols-10">
        <div class="col-span-full lg:col-span-4">
            <p class="text-lg font-bold">Pierre-Louis Suckrow</p>
            <p>- Berlin, Germany</p>
            <p>*2000 Gap, France</p>
        </div>
        <div class={"col-span-full lg:col-span-6"}>
        <p><a class="btn-link" href={`mailto:${email}`}>{email}</a></p>
        <p><a class="btn-link" href={github} target="_blank">{github}</a></p>
        </div>
        {children}
    </div>
)

const Programming = () => (
    <CVElement>
        <TimeLineTitle>Programming Languages and Stacks:</TimeLineTitle>
        <CVTable>
            <thead>
            <tr class="text-left">
                <th class={`w-[${CVTableLength}px] font-normal`}>Python</th>
                <th class="font-normal">NumPy, Torch, TensorFlow, OpenCV, FastAPI, Conda, Jinja2, Pandas, Matplotlib, Pyo, Librosa</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Javascript/<br/>Typescript</td>
                <td>
                    Node, NPM, Bun, HTMX, Hyperscript, Elyia.js, Tailwind, React, Jest, PrismaDB, Three.js
                </td>
            </tr>
            <tr>
                <td>SQL</td>
                <td>MySQL, SQLite, ChromaDB</td>
            </tr>
            <tr>
                <td>C++</td>
                <td>JUCE, CMake</td>
            </tr>
            <tr>
                <td>PHP</td>
                <td>Kirby</td>
            </tr>
            <tr>
                <td>Java</td>
                <td></td>
            </tr>
            <tr>
                <td>GraphQL</td>
                <td></td>
            </tr>
            <tr>
                <td>HTML/CSS</td>
                <td></td>
            </tr>
            <tr>
                <td>Shell</td>
                <td></td>
            </tr>
            </tbody>
        </CVTable>
    </CVElement>
)

const ToolsAndTechnologies = () => (
    <div>
        <TimeLineTitle>Tools & Technologies:</TimeLineTitle>
        <CVTable>
            <thead>
            <tr class="text-left">
                <th class={`w-[${CVTableLength}px] font-normal`}>It</th>
                <th class="font-normal">Linux, MacOS, Windows, Git, Docker, Kubernetes, Ubuntu, Proxmox, Nvidia JetPack</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Media</td>
                <td>Photoshop, Lightroom, Premiere, Figma, Ableton Live, Unreal Engine, TouchDesigner, Obsidian</td>
            </tr>
            <tr>
                <td>Computation Intelligence</td>
                <td>Stable Diffusion, GPT, LLAMA, AudioLDM, HuggingFace, Text-Generation-Webui, Stable-Diffusion-Webui, ComfyUi</td>
            </tr>
            </tbody>
        </CVTable>
    </div>
)

export const Work = () => (
    <CVElement>
        <TimeLineTitle>
            Professional Experience
        </TimeLineTitle>
        <TimeLineOccupation title="Student Assistant Design & Computation"
                            role="IT Admin role, development of Intranet"
                            startDate={new Date("2024-12")}
                            firm="UDK" city="Berlin"/>
        <TimeLineOccupation title="Student Assistant Department of Communication in Social and Economic Contexts"
                            role="IT Admin role, co-development of internal network for Generative AI."
                            startDate={new Date("2024-05")}
                            firm="UDK" city="Berlin"/>
        <TimeLineOccupation title="Student Assistant in Digital Education and Artificial Intelligence"
                            role="Maintenance of AI Infrastructure, Development of AI Applications."
                            startDate={new Date("2024-03")}
                            endDate={new Date("2024-07")}
                            firm="UDK" city="Berlin"/>
        <TimeLineOccupation title="Working Student"
                            role="Fullstack Web Development"
                            startDate={new Date("2022-05")}
                            endDate={new Date("2023-03")}
                            firm="Scandio"
                            city="Munich"/>
    </CVElement>
)

export const Edu = () => (
    <CVElement>
        <TimeLineTitle>
            Educational Background
        </TimeLineTitle>
        <TimeLineOccupation title='Master <a target="_blank" class="btn-link" href="https://www.newpractice.net/study">Design & Computation</a>'
                            role="Interdisciplinary Master Programme at the Intersection of Art, Science, Society & Technology"
                            startDate={new Date("2023-10")}
                            firm="UDK/TU"
                            city="Berlin"/>
        <TimeLineOccupation title="Bachelor Computer Science with a Minor in Experimental Physics"
                            role="Theoretical, Practical, and Technical Education in Computer Science and Physics"
                            startDate={new Date("2019-10")}
                            endDate={new Date("2023-12")}
                            firm="LMU"
                            city="Munich"/>
        <TimeLineOccupation title="High School Diploma"
                            role="Abitur with focus on Natural Sciences"
                            startDate={new Date("2011-09")}
                            endDate={new Date("2019-07")}
                            firm="Gymnasium"
                            city={"Ottobrunn"}
                            />
    </CVElement>
)

export const OngoingResearch = () => {
    if (ongoingResearch.length > 0) {
        return (
            <CVElement>
                <TimeLineTitle>
                    Ongoing Research
                </TimeLineTitle>
                {
                    ongoingResearch.map((project) => (
                            <Projekt title={project.title} description={project.shortDescription}/>
                        )).join('')
                }
            </CVElement>
        )
    } else return null
}

export const UnpublishedResearch = () => {
    if (unpublishedResearch.length > 0) {
        return (
            <CVElement>
                <TimeLineTitle>
                    Unpublished Research
                </TimeLineTitle>
                {
                    unpublishedResearch.map((project) => (
                            <Projekt title={project.title} description={project.shortDescription}
                                     link={project.cvLink ? project.cvLink : undefined}/>
                        )).join('')
                }
            </CVElement>
        )
    } else return null
}

export const SoftwareProjects = () => {
    if (softwareProjects.length > 0) {
        return (
            <CVElement>
                <TimeLineTitle>
                    Software Projects
                </TimeLineTitle>
                {
                    softwareProjects.map((project) => (
                        <Projekt title={project.title} description={project.shortDescription}
                                 link={project.cvLink ? project.cvLink : undefined}/>
                    )).join('')
                }
            </CVElement>
        )
    } else return null
}

export const WebDesignProjects = () => {
    if (webDesignProjects.length > 0) {
        return (
            <CVElement>
                <TimeLineTitle>
                    WebDesign Projects
                </TimeLineTitle>
                {
                    webDesignProjects.map((project) => (
                        <Projekt title={project.title} description={project.shortDescription}
                                 link={project.cvLink ? project.cvLink : undefined}/>
                    )).join('')
                }
            </CVElement>
        )
    } else return null
}

export const Scholarships = () => (
    <CVElement>
        <TimeLineTitle>
            Scholarships
        </TimeLineTitle>
        <Scholarship title="German Academic Scholarship Foundation/ Studienstiftung des deutschen Volkes" startDate={new Date("2024-05")} link={"https://www.studienstiftung.de/"}/>
    </CVElement>
)

export const Publications = () => {
    if  (publishedResearch.length > 0) {
        return (
            <CVElement>
                <TimeLineTitle>
                    Published Research
                </TimeLineTitle>
                {
                    publishedResearch.map((project) => (
                        <Publication publisher={project.publisher} year={project.publicationDate} title={project.title}
                                     link={project.cvLink ? project.cvLink : undefined}
                                     description={project.shortDescription}/>
                    )).join('')
                }
            </CVElement>
        )
    }
    else return null
}


export const CV = () => (
    <ContentFrame>
        <div class="h-full overflow-auto">
            <div class={"flex flex-col lg:flex-row"}>
                <div class="w-full h-full lg:mr-4">
                    <InfoBlock>
                    </InfoBlock>
                </div>
                <div class="lg:hidden w-full">
                    <Divider/>
                </div>
                <div class={"w-full h-full lg:max-w-[400px]"}>
                    <p>German & French Nationality - Mother tongues</p>
                    <p>English C1 - Cambridge Certificate</p>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row-reverse">
                <div class="w-full h-full lg:max-w-[400px]">
                    <Divider/>
                    <div>
                        <CVElement>
                            <TimeLineTitle>Artistic Domains:</TimeLineTitle>
                            <p>Photography, Videography, Sound Design</p>
                        </CVElement>
                        <Programming/>
                        <ToolsAndTechnologies/>
                    </div>
                    <Divider/>
                    <div>
                        <TimeLineTitle>Certificates:</TimeLineTitle>
                        <p>Cambridge - Certificate</p>
                        <p>MINT - Certificate</p>
                    </div>
                </div>
                <div class="w-full h-[700px] lg:mr-4">
                    <Divider/>
                    <Work/>
                    <Edu/>
                    <Scholarships/>
                    <Publications/>
                    <OngoingResearch/>
                    <UnpublishedResearch/>
                    <SoftwareProjects/>
                    <WebDesignProjects/>
                    </div>
            </div>

        </div>
    </ContentFrame>
)