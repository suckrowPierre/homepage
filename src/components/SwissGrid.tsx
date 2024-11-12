import * as elements from "typed-html";

export const SwissGrid = ({children}: {children: any}) => (
    <div class={`
    w-full
    h-full
    min-h-0
    grid
    gap-4
    grid-cols-1
    grid-rows-[auto_1fr]
    relative
    `}>
        {children}
    </div>
)