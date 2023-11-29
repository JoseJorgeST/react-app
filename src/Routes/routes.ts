import { lazy } from "react";

import NoLazy from "../pages/NoLazy";

interface Route{
    name: string,
    path: string,
    to: string,
    Component: () => JSX.Element,
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
    {
        to: "/lazy1",
        path: 'lazy1',
        Component: LazyLayout,
        name: "LazyLayout"
    },
    {
        to: "/no-lazy",
        path: 'no-lazy',
        Component: NoLazy,
        name: "No Lazy"
    }

]