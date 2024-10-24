import { Page } from "./components.js"

/* function Layout() {
    return {
        view: ({children}) => [
            m("header"),
            m("main"),
            children,
            m("aside")
        ]
    }
} */

const routes = {
    "/": { view: () =>  m(Page)},
/*     "/ejemplo": { view: () => m(Layout, Header)}
 */}

m.route(document.body, "/", routes)