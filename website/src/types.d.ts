/*GLOBAL TYPES*/
type button = {
    text: string,
    id: string,
    onClick?: any,
    link?: string,
    reference?: any
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

type menuSlider = {
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
    counterData: string[],
    show: boolean,
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

type Tile = {
    background: string,
    flagCount: string,
    flagText: string,
    id?: string,
    open: boolean,
    openTrigger: any,
    children: any
}

type Tile_content = {
    show: boolean,
    count: number,
    idContent: string
}

type ListItem = {
    size?:number
    text: string
    importance?:1|2|3,
}

type flag = {
    order: number,
    text: string,
    for:string,
    id?:string
}


type input = {
    type: 'textarea'|'phone'|'text',
    name: string,
    placeholder?: string, 
    rows?: number,
    cols?: number,
    fn: (value:text)=>void
}
