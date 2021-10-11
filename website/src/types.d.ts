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
    location: {}
}

type menuButton = {
    id?: string,
    menuProps: string[],
    location: {}
}