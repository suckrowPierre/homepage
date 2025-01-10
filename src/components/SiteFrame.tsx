import * as elements from "typed-html";
import {BaseHTML, Head, Body} from "elysiahyperkit/templates";
import {photoAndVideoPage} from "../routes/routes";

const LoadMansoryAfterRequest = () => (
    <script>
        {`
            document.addEventListener('DOMContentLoaded', function() {
                document.body.addEventListener('htmx:afterSwap', function(evt) {
                     if (evt.detail.pathInfo.requestPath === "${photoAndVideoPage.endpoint}"){
                        loadMacy();
                        }
                });
            
            });
`}
    </script>
)


export const SiteFrame = ({children}: {children: any}) => {
    return (
        <BaseHTML
            head={
            <Head title={"Pierre-Louis Suckrow"} authors={["Pierre-Louis Suckrow"]}>
                <link href='./public/styles.css' rel='stylesheet' />
                <script src="https://cdn.jsdelivr.net/npm/macy@2"></script>
                <script src={'./public/js/photoMasonry.js'}></script>
                <script src="https://unpkg.com/htmx-ext-preload@2.0.1/preload.js"></script>
                <link rel="icon" href="/public/cursor.ico" />
                <LoadMansoryAfterRequest />
            </Head>
            }
            body={<Body class={"overscroll-none overflow-x-hidden overflow-none h-[100dvh] px-8 py-4 text-sm"} id="body" hx-ext="preload">
                    {children}
        </Body> }
        />
    )
}

