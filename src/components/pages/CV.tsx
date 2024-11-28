import {ContentFrame} from "../ContentFrame";
import * as elements from "typed-html";
import {email, github, linkedin} from "../../personalInfo";
import {Attributes} from "typed-html";

const CVTableLength = 200;

const textClassesTimeLine = "";
const Divider = () => (
    <hr class="my-4 border-black"/>
)

const TimeLineTitle = ({children, ...attributes }: Attributes) => (
    <h2 class="text-2xl" {...attributes}>
        {children}
    </h2>
)

const TimeLineGrid = ({children, ...attributes }: Attributes) => (
<div class="grid grid-cols-10 mb-12 md:mb-4 mt-4 gap-x-4 gap-y-2" {...attributes}>
    {children}
</div>
)

const TimeLineDate = ({startDate, endDate, ...attributes} : {startDate: Date, endDate?: Date} & Attributes) => {
    const formatDate = (date: Date) => {
        return date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear()
    }
    return (
            <p class={"col-span-5 sm:col-span-2 " + textClassesTimeLine} {...attributes}>
                {formatDate(startDate)} - <br/>{endDate ? formatDate(endDate) : "Present"}
            </p>
    )
}

//text-center align-center margin-auto
const TimeLinePlace = ({firm, city} : {firm: string, city: string}) => (
    <div class={"col-span-5  sm:col-span-2 text-right sm:text-left " + textClassesTimeLine}>
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
    <div class={"col-span-3 sm:col-span-2 " + textClassesTimeLine}>
        <p>{publisher}</p>
        <p>{year}</p>
    </div>
)

const PublicationTitle = ({title, description, link }: {title: string, description:string, link:string}) => (
    <div class="col-span-7 sm:col-span-8">
        <a class={"btn-link " + textClassesTimeLine} href={link} target="_blank">
            {title}
        </a>
        <p>
            {description}
        </p>
    </div>
)

const Publication = ({title, description, publisher, year, link}: {title: string, description:string, publisher: string, year: string, link:string}) => (
    <TimeLineGrid>
        <Publisher publisher={publisher} year={year}/>
        <PublicationTitle title={title} description={description} link={link}/>
    </TimeLineGrid>
)

const Projekt = ({title, description, link}: {title: string, description:string, link?:string}) => (
    <TimeLineGrid>
        <div class="col-span-10">
            <p class={textClassesTimeLine}>
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
        <TimeLineDate startDate={startDate} endDate={endDate} class={"col-span-4 sm:col-span-2 " + textClassesTimeLine}/>
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
    <div {...attributes}>
        <p>Pierre-Louis Suckrow</p>
        <p><a class="btn-link" href={`mailto:${email}`}>{email}</a></p>
        <p><a class="btn-link" href={github} target="_blank">{github}</a></p>
        <p><a class="btn-link" href={linkedin} target="_blank">{linkedin}</a></p>
        {children}
    </div>
)

const Programming = () => (
    <div>
        <p>Programming Languages and Stacks:</p>
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
    </div>
)

const ToolsAndTechnologies = () => (
    <div>
        <p>Tools & Technologies:</p>
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
    <div>
        <TimeLineTitle>
            Professional Experience
        </TimeLineTitle>
        <TimeLineOccupation title="Student Assistant Communication in Social and Economic Contexts"
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
    </div>
)

export const Edu = () => (
    <div>
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
    </div>
)

export const ResearchProjects = () => (
    <div>
        <TimeLineTitle>
            Research
        </TimeLineTitle>
        <Projekt title="A Reflection on Generative AI and Memory Reconstruction" description="Critical Reflection on Generative AI through memory and it's effect on our recollection" />
        <Projekt title="Computational BioMythology" description="Investigation of the usage of Evolutionary Algorithms in the simulation of Myths" />
        <Projekt title="Memory Spaces" description="Installation about the reflection of lived memory through generative AI and sound" />
    </div>
)

export const SoftwareProjects = () => (
    <div>
        <TimeLineTitle>
            Software Projects
        </TimeLineTitle>
        <Projekt title="WaveGenSynth" description="Synthesizer with Generative AI Sound Engine" link="https://github.com/suckrowPierre/WaveGenSynth"/>
        <Projekt title="LatentAccounting" description="WebUI for usage of smart personal accounting through embeddings and latent spaces"
                 link="https://github.com/suckrowPierre/LatentAccounting"/>
        <Projekt title="Elysiahyperkit" description="A NPM package to build Webapps with Bun, Elysia, Hyperscript and HTMX"
                 link="https://github.com/suckrowPierre/elysiahyperkit"/>
        <Projekt title="Design & Computation Intranet" description="WebAPP for an Inventory and Guide Management System for the Design & Computation Intranet" />
    </div>
)

export const Scholarships = () => (
    <div>
        <TimeLineTitle>
            Scholarships
        </TimeLineTitle>
        <Scholarship title="German Academic Scholarship Foundation" startDate={new Date("2024-05")} link={"https://www.studienstiftung.de/"}/>
    </div>
)

export const Publications = () => (
    <div>
        <TimeLineTitle>
            Publications
        </TimeLineTitle>
        <Publication publisher={"Farm"} year={"2024"} title={"Diffusion-Based Sound Synthesis in Music Production"} link={"https://doi.org/10.1145/3677996.3678289"} description={"Exploration of Generative AI as a Soundsource in Instruments and Music Production."}/>
        <Publication publisher={"Wicked Solutions"} year={"2024"} title={"Navigating (personal) finances in a latent way"} description={"Investigation of smarter booking through Latent Spaces and Embeddings"} link={"https://wicked.udk.ai/volumes/1/pierre.pdf"}/>
    </div>
)

export const CV = () => (
    <ContentFrame>
        <div class="text-base h-full overflow-auto flex flex-col lg:flex-row-reverse">
            <div class="w-full lg:max-w-[400px]">
                <InfoBlock class={"block lg:hidden"}>
                    <Divider/>
                </InfoBlock>
                <div>
                    <p>German & French Nationality - Mother tongues</p>
                    <p>English C1 - Cambridge Certificate</p>
                </div>
                <Divider/>
                <div>
                    <p>Artistic Domains:</p>
                    <p>Photography, Videography, Sound Design</p>
                    <br/>
                    <Programming/>
                    <br/>
                    <ToolsAndTechnologies/>
                </div>
                <Divider/>
                <div>
                    <p>Certificates:</p>
                    <p>Cambridge - Certificate</p>
                    <p>MINT - Certificate</p>
                </div>
            </div>
            <div class="w-full h-[700px] lg:mr-4">
                <InfoBlock class={"hidden lg:grid grid-rows-2 grid-flow-col"}>
                </InfoBlock>
                <Divider/>
                <Work/>
                <br/>
                <br/>
                <Edu/>
                <br/>
                <br/>
                <Scholarships/>
                <br/>
                <br/>
                <Publications/>
                <br/>
                <br/>
                <ResearchProjects/>
                <br/>
                <br/>
                <SoftwareProjects/>
                <br/>
                <br/>
                </div>

        </div>
    </ContentFrame>
)