import * as elements from "typed-html";
import {ProjectElements, ProjectPage, ProjectSubTitle, ProjectTitle} from "./Project";
import {installationProjects} from "../../projects/InstallationProjects";

const FirstText = () => (
    <div>
        <ProjectSubTitle>A new orientation</ProjectSubTitle>
        <p class="pt-[3px] text-justify">
            {`Rooted in an early fascination with artistic expression, my creative interests have long driven me to explore photography, videography, and sound as outlets for documentation and self-expression. Now, through my master’s program in  <a target="_blank" class="text-link" href="https://www.newpractice.net/study">"Design & Computation"</a> at the <a target="_blank" class="text-link" href="https://www.udk-berlin.de/">University of the Arts Berlin</a> and the <a target="_blank" class="text-link" href="https://www.tu.berlin/">Technical University Berlin</a>, I have the opportunity to delve deeper into artistic projects, broaden my artistic expression, and merge it with my technical background and ongoing research. I strive to further embody my current and future works through installation pieces and artworks.`}
        </p>
    </div>
)

export const ArtisticInstallation = () => {
    return (
        <ProjectPage
            staticContent={[
                <ProjectTitle>Artistic and installation work</ProjectTitle>,
                <FirstText />]}
            movingContent={[
                <ProjectElements projects={installationProjects} title={"Projects"}/>,
            ]}
        />
    )
}
