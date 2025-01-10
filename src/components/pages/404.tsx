import {ContentFrame} from "../ContentFrame";
import * as elements from "../../../../typed-html-hyperscript";
import {ContentGrid} from "../SwissGrid";

const FourOFourImage = () => (
    <img src="public/404.png" class="col-span-full w-full h-full object-contain" />
)

export const FourOFour = () => (<ContentFrame>
    <ContentGrid>
            <FourOFourImage/>
    </ContentGrid>
</ContentFrame>)