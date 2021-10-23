/*GLOBAL TYPES*/
type button = {
    text: string,
    id: string,
    onClick?: any,
    link?: string
}

type logo = {
    id:string
}

type actualPage = {
    id?: string,
    location: any,
    mainRoutes: string[],
    mainPages: string[],
    show: boolean,
}

type menuButton = {
    id?: string,
    pagesAll: string[],
    routesAll: string[],
    location: any,
}

type languageMutations = {
    id?:string,
    languages: string[]
}

type pageCounter ={
    pageLinks: string[],
    counterData: string[]
}

type activeLinkObj ={
    idLink: string,
    idCount: string,
    idUnderliner:string
}

type socialIcons = {
    size: number
}

type socialIcon = {
    id?: string,
    size: number,
    to: string
}