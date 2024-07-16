import React from "react"
import HomePage from "../pages/HomePage"
import AboutMePage from "../pages/AboutMePage"
import SkillsPage from "../pages/SkillsPage"
import ProjectPage from "../pages/ProjectPage"

type RouteExtend = {
    title:string,
    path:string,
    comp:React.ComponentType
}
export const RoutingPlus:{[key:string]:RouteExtend} = {
    home:{
        title:"Home",
        path:"/",
        comp:HomePage
    },
    about:{
        title:"About Me",
        path:"/about",
        comp:AboutMePage
    },
    skills:{
        title:"Skills",
        path:"/skills",
        comp:SkillsPage
    },
    projects:{
        title:"Projects",
        path:"/projects",
        comp:ProjectPage
    }
}