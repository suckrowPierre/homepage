import * as elements from "typed-html";

export const SwissGrid = ({children}: {children: any}) => (
    <div class={`
    w-full
    h-full
    min-h-0
    grid
    gap-4
    lg:grid-cols-12
    grid-rows-[auto_auto_1fr]
    relative
    lg:pt-[100px]
    portrait:pt-0
    `}>
        <div class="w-full col-span-full">
        </div>
        {children}
    </div>
)