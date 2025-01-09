import {ContentFrame} from "../ContentFrame";
import * as elements from "../../../../typed-html-hyperscript";
import {ContentGrid} from "../SwissGrid";

const FourOFourText = () => {
    return (
        <div class="
        col-start-8 text-8xl sm:text-9xl pl-[-2px] portrait:mt-0 md:mt-[-22px] leading-[5.5rem] sm:leading-[6.5rem] md:pr-8 font-medium">
            <p class="font-knight w-fit">404</p>
            <p class="font-knight w-fit">404</p>
            <p class="font-knight w-fit">404</p>
        </div>
    )
}

const WrongText = () => (
    <div class="
        col-start-3 col-end-8 text-8xl sm:text-9xl pl-[-2px] portrait:mt-0 md:mt-[-22px] leading-[5.5rem] sm:leading-[6.5rem] font-medium">
        <p class="font-knight w-fit">It looks like you took the wrong turn</p>
    </div>
)

export const FourOFour = () => (<ContentFrame>
    <ContentGrid>
            <WrongText/>
            <FourOFourText/>
    </ContentGrid>
</ContentFrame>)