import * as elements from "typed-html";
import {nonProjectPages, projectPages} from "../../routes/routes";
import {MainDiv} from "../MainDiv";
import {NavLink, NavLinkUppercase} from "../Navigation";
import {email, github, instagram} from "../../personalInfo";


const Navbar = () => {
    const nonProjectPagesToShow = nonProjectPages.filter((page) => page.showInNavbar);
    const projectPagesToShow = projectPages.filter((page) => page.showInNavbar);
    return (
        <nav class="flex flex-col w-[70%] z-10 h-full max-h-full">
            <ul class="overflow-auto no-scrollbar">
                {
                    nonProjectPagesToShow.map(page => (
                        <div>
                        <li>
                            <NavLinkUppercase page={page} >
                            {page.title}
                            </NavLinkUppercase>
                        </li>
                            <br/>
                        </div>
                    )).join("")
                }
                {
                    projectPagesToShow.map(page => (
                        <li class="mt-2">
                            <NavLink page={page}>
                                {page.title}
                            </NavLink>
                        </li>
                    )).join("")
                }
            </ul>
        </nav>
    )
}

const Contact = () => {
    return (
        <ul class="absolute bottom-0 right-0">
            <li>
                <a class="btn-link text-right block" href={`mailto:${email}`}>Mail</a>
            </li>
            <li>
                <a class="btn-link text-right block" href={instagram} target="_blank">Instagram</a>
            </li>
            <li>
                <a class="btn-link text-right block" href={github} target="_blank">Github</a>
            </li>
        </ul>
    )

}

const Image = () => {
    return (
        <div class="absolute md:right-[200px] right-0 w-[230px] z-[-10] h-[260px]">
            <div class="absolute w-full h-full"
                 style="background: radial-gradient(circle 500px, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));">
            </div>
            <img class="h-full" src="public/landingPageImage.png"/>
        </div>
    )
}

export const LandingPage = () => {
    return (
        <MainDiv>
                <div class="mr-auto">
                    <h1 class={"text-3xl text-center uppercase"}>
                        ***Pierre-Louis***<br/>***Suckrow***
                    </h1>
                </div>
                <div class="pt-4 relative flex-1 overflow-hidden">
                    <Image />
                    <Navbar />
                </div>

                <Contact />
        </MainDiv>
    )
}