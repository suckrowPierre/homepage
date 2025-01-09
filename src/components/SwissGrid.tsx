import * as elements from "typed-html";

export const SwissGrid = ({children, }: {children: any}) => {
    return (
        <div class={`
    w-full
    h-full
    min-h-0
    grid
    gap-4
    lg:grid-cols-12
    grid-rows-[auto_1fr_auto]
    
    relative
    `}>
            <div class="w-full col-span-full lg:h-[100px] portrait:hidden">
            </div>
            {children}
        </div>
    )
}

export const ContentGrid = ({children, }: {children: any}) => {
    return (
        <div class={`
    w-full
    h-full
    min-h-0
    grid
    gap-4
    lg:grid-cols-12
    relative
    `}>
            {children}
        </div>
    )
}

export const ContentGridStaticFirstCol = ({children, }: {children: any}) => {
    return (
        <div class={`
    w-full
    h-full
    min-h-0
    grid
    gap-4
    gap-x-16
    lg:grid-cols-[300px_auto]
    relative
    `}>
            {children}
        </div>
    )
}