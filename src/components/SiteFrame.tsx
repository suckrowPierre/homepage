import * as elements from "typed-html";
import {BaseHTML, Head, Body} from "elysiahyperkit/templates";
import {homepage} from "../routes/routes";

export const SiteFrame = ({children}: {children: any}) => {
    return (
        <BaseHTML
            head={
            <Head title={"Pierre-Louis Suckrow"} authors={["Pierre-Louis Suckrow"]}>
                <link href='./public/styles.css' rel='stylesheet' />
            </Head>
            }
            body={<Body class={"p-8 pt-4 overscroll-none overflow-none h-[100dvh] text-base font-light"} id="body">{children}</Body> }
        />
    )
}

