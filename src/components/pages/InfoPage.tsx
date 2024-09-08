import {ContentFrame} from "../ContentFrame";
import * as elements from "typed-html";

const text = `
Dedicated to producing artistic work and conducting research through mediums such as photography, videography, sound design, as well as my academic background in computer science and physics.
<br/><br/>
Master student of <a target="_blank" class="btn-link" href="https://www.newpractice.net/study">"Design & Computation"</a> at UDK/TU Berlin.
`

export const InfoPage = ({children}: {children: any}) => (
    <ContentFrame>
        <p class={"max-w-[400px] text-justify absolute bottom-16 right-0 md:right-32"}>
            {text}
        </p>
    </ContentFrame>
)