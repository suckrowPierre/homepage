import * as elements from "typed-html";
import {MainDiv} from "../MainDiv";
import {NavLink} from "../Navigation";
import {email, github, instagram} from "../../personalInfo";
import {SwissGrid} from "../SwissGrid";
import {legal, nonProjectPages, projectPages} from "../../routes/routes";
import {optimizedImagePath} from "../../data/bucketImages";

const Image = () => {
    return (
        <div class="absolute md:right-[200px] right-0 my-4 w-[200px] z-[-10] h-[230px]">
            <div class="absolute w-full h-full"
                 style="background: radial-gradient(circle 500px, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));">
            </div>
            <img class="h-full" src={optimizedImagePath("landingPage.jpg", 200,230)}/>
        </div>
    )
}

export const Title = () => {
    return (
        <div class="text-8xl landscape:text-9xl landscape:leading-[6rem]  md:text-9xl col-span-full mt-6 leading-[5rem] md:leading-[6rem]">
            <div class=" top-0 left-0 opacity-95 blur-[0.4px] ">
                <p class="font-fancy">Pierre Louis</p>
                <p class="font-fancy">Suckrow</p>
                </div>
        </div>
    )
}

export const LandingPage = () => {
    const nonProjectPagesToShow = nonProjectPages.filter((page) => page.showInNavbar);
    const projectPagesToShow = projectPages.filter((page) => page.showInNavbar);

    return (
        <SwissGrid>
            <Title />
            <Image />
            <div class="
            grid subgrid
            grid-cols-1
            landscape:grid-cols-2
            h-full
            ">
                <ul class="portrait:pt-[50px] md:portrait:pt-0">
                    {
                        projectPagesToShow.map(page => (
                            <li>
                                <NavLink page={page}>
                                    {page.title}
                                </NavLink>
                            </li>
                        )).join("")
                    }
                    <hr class="border-t-2 border-black w-3/4 md:w-1/2 my-2"/>
                    {
                        nonProjectPagesToShow.map(page => (
                            <li>
                                <NavLink page={page}>
                                    {page.title}
                                </NavLink>
                            </li>
                        )).join("")
                    }
                </ul>

                <ul class="flex flex-col justify-end items-end h-full">
                    <li>
                        <a class={"nav-link"} href={`mailto:${email}`}>Mail</a>
                    </li>
                    <li>
                        <a class={"nav-link"} href={instagram} target="_blank">Instagram</a>
                    </li>
                    <li>
                        <a class={"nav-link"} href={github} target="_blank">Github</a>
                    </li>
                    <li>
                        <NavLink page={legal}>
                                {legal.title}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </SwissGrid>
    )
}