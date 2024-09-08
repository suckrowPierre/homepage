import * as elements from "typed-html";

export const MainDiv = ({children}: {children: any}) => (
    <div class="flex flex-col relative h-full">
        {children}
    </div>
)