import { lazy } from "react";
import  LazyPage1  from "../pages/LazyPage1";
import  LazyPage2  from "../pages/LazyPage2";
import  LazyPage3  from "../pages/LazyPage3";
import  LazyPage4  from "../pages/LazyPage4";

interface Route{
    name: string,
    path: string,
    to: string,
    Component: () => JSX.Element,
}

const Lazy1 = lazy(() => import('../pages/LazyPage1'));
const Lazy2 = lazy(() => import('../pages/LazyPage2'));
const Lazy3 = lazy(() => import('../pages/LazyPage3'));
const Lazy4 = lazy(() => import('../pages/LazyPage4'));

export const routes: Route[] = [
    {
        to: "/lazy1",
        path: 'lazy1',
        Component: LazyPage1,
        name: "Lazy 1"
    },
    {
        to: "/lazy2",
        path: 'lazy2',
        Component: LazyPage2,
        name: "Lazy 2"
    },
    {
        to: "/lazy3",
        path: 'lazy3',
        Component: LazyPage3,
        name: "Lazy 3"
    },
    {
        to: "/lazy4",
        path: 'lazy4',
        Component: LazyPage4,
        name: "Lazy 4"
    },
]