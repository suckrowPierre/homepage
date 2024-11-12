import * as elements from "typed-html";
import {BackLink} from "./Navigation";
import {MainDiv} from "./MainDiv";


export const ContentFrame = ({children}: {children: any}) => {
    return (
        <MainDiv>
            <BackLink/>
            <div class="pt-4 relative h-full overflow-hidden">
                {children}
            </div>
        </MainDiv>
    )
}