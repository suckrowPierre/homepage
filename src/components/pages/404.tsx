import {ContentFrame} from "../ContentFrame";
import * as elements from "../../../../typed-html-hyperscript";
import {ContentGrid} from "../SwissGrid";
import {optimizedImagePath} from "../../data/bucketImages";

const FourOFourImage = () => (
    <img src={optimizedImagePath("404.jpg")} class="col-span-full w-full h-full object-contain" />
)

export const FourOFour = () => (<ContentFrame>
    <ContentGrid>
            <FourOFourImage/>
    </ContentGrid>
</ContentFrame>)