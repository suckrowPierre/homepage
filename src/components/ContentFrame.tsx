import * as elements from "typed-html";
import {BackLink} from "./Navigation";
import {MainDiv} from "./MainDiv";


export const ContentFrame = ({children}: {children: any}) => {
    return (
        <MainDiv>
            <div class="w-full flex col-span-full lg:h-[100px] items-end lg:mt-4 portrait:h-fit mt-0 portrait:mt-0">
                <BackLink/>
            </div>
            <div class="pt-4 relative h-full overflow-hidden">
                {children}
            </div>
        </MainDiv>
    )
}