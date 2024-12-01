import * as elements from "typed-html";
import {MainDiv} from "../MainDiv";
import {NavLink} from "../Navigation";
import {email, github, instagram, researchGate} from "../../personalInfo";
import {SwissGrid} from "../SwissGrid";
import {legal, nonProjectPages, projectPages} from "../../routes/routes";
import {optimizedImagePath} from "../../data/bucketImages";

const Image = () => {
    return (
        <div class="z-[-10] w-full sm:w-[300px] md:w-[500px]"  >
            <img class="w-full h-full" src={optimizedImagePath("landingPage.jpg", 200,230)}/>
        </div>

    )
}
//
/*
            <div class="w-full h-full"
                 style="background: radial-gradient(circle 500px, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));">
            </div>
 */

//        text-8xl landscape:text-9xl landscape:leading-[6.5rem] md:text-9xl ml-[-2px] mt-[-22px] leading-[5.5rem] md:leading-[6.5rem] md:pr-8 font-medium">
export const Title = () => {
    return (
        <div class="
        text-8xl sm:text-9xl pl-[-2px] mt-[-22px] leading-[5.5rem] sm:leading-[6.5rem] md:pr-8 font-medium w-fit cursor-pointer">
                <p class="font-knight w-fit">Suckrow</p>
                <p class="font-knight w-fit">Pierre Louis</p>
        </div>
    )
}
//                    <hr class="border-t-2 border-black w-3/4 md:w-1/2 my-2"/>

const NavLinks = () => {
    const nonProjectPagesToShow = nonProjectPages.filter((page) => page.showInNavbar);
    const projectPagesToShow = projectPages.filter((page) => page.showInNavbar);
    return (
        <ul class="w-fit">
            {
                projectPagesToShow.map(page => (
                    <li>
                        <NavLink page={page}>
                            {page.title}
                        </NavLink>
                    </li>
                )).join("")
            }

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
    )
}

//
const Contacts = () => (
    <ul class="flex flex-col pl-4 items-end lg:items-start portrait:items-end w-full">
        <li>
            <a class={"nav-link text-right"} href={`mailto:${email}`}>Mail</a>
        </li>
        <li>
            <a class={"nav-link"} href={instagram} target="_blank">Instagram</a>
        </li>
        <li>
            <a class={"nav-link"} href={github} target="_blank">Github</a>
        </li>
        <li>
            <a class={"nav-link"} href={researchGate} target="_blank">ResearchGate</a>
        </li>
        <li>
            <NavLink page={legal}>
                {legal.title}
            </NavLink>
        </li>
    </ul>
)

export const LandingPage = () => {


    return (
        <SwissGrid>
            <div class="col-span-full lg:flex portrait:flex-col w-fit">
                <Title />
                <NavLinks />
            </div>
            <div class="lg:col-start-8 col-span-full portrait:col-span-full lg:mt-16 flex flex-row-reverse items-end lg:items-start portrait:items-end">
                <Contacts />
                <Image />
            </div>







        </SwissGrid>
    )
}

/*

 */