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
    pages: string[],
    id?: string,
    location: any
}

type menuButton = {
    id?: string,
    menuProps: string[],
    location: any
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