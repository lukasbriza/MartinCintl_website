import React, { createContext, useState } from 'react'

//CONTEXT TYPES//
interface ProviderProps {
    children: React.ReactNode
}

export interface AppContextType {
    width: number,
    location: string,
    languageMutation: "cz" | "eng",
    contactFormular: { name: "Osobní trénink" | "Funkční diagnostika" | "Online coaching", tag: 1 | 2 | 3 } | undefined,
    functions: {
        setLanguageMutation: React.Dispatch<React.SetStateAction<"cz" | "eng">>,
        setLocation: React.Dispatch<React.SetStateAction<string>>,
        setContactFormular: React.Dispatch<React.SetStateAction<{ name: "Osobní trénink" | "Funkční diagnostika" | "Online coaching", tag: 1 | 2 | 3 } | undefined>>,
    }
}

export interface AnimationContextType {
    menuSlider: boolean,
    actualPage: boolean,
    animationClass: "Up" | "Down" | "Left" | "Right" | "",
    pageCounter: boolean,
    openTile1: boolean,
    openTile2: boolean,
    openTile3: boolean,
    tileAnRunning: boolean,

    functions: {
        setMenuSlider: React.Dispatch<React.SetStateAction<boolean>>,
        setActualPage: React.Dispatch<React.SetStateAction<boolean>>,
        setPageCounter: React.Dispatch<React.SetStateAction<boolean>>,
        setOpenTile1: React.Dispatch<React.SetStateAction<boolean>>,
        setOpenTile2: React.Dispatch<React.SetStateAction<boolean>>,
        setOpenTile3: React.Dispatch<React.SetStateAction<boolean>>,
        setTileAnRunning: React.Dispatch<React.SetStateAction<boolean>>,
        setAnimationClass: React.Dispatch<React.SetStateAction<"Up" | "Down" | "Left" | "Right" | "">>,
    }
}

//CONTEXTS//
const PageContext = createContext<AppContextType | null>(null)
const AnimationContext = createContext<AnimationContextType | null>(null)
//CUSTOM PROVIDERS//
function PageContextProvider(props: ProviderProps) {
    //SETTERS
    const [languageMutation, setLanguageMutation] = useState<"cz" | "eng">('cz')
    const [location, setLocation] = useState<string>("/")
    const [contactFormular, setContactFormular] = useState<{ name: "Osobní trénink" | "Funkční diagnostika" | "Online coaching", tag: 1 | 2 | 3 } | undefined>(undefined)
    const [width, setWidth] = useState<null | number>(null)

    window.addEventListener('load', () => {
        setTimeout(() => {
            setWidth(window.innerWidth)
        }, 100)
    })
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth)
    })

    //APP STATE
    const appState: AppContextType = {
        width: width ? width : 550,
        location: location,
        languageMutation: languageMutation,
        contactFormular: contactFormular,

        functions: {
            setLanguageMutation: setLanguageMutation,
            setLocation: setLocation,
            setContactFormular: setContactFormular,
        }
    }
    return (
        <PageContext.Provider value={appState}>
            {props.children}
        </PageContext.Provider>
    )
}

function AnimationContextProvider(props: ProviderProps) {
    //SETTERS
    const [menuSlider, setMenuSlider] = useState<boolean>(false)
    const [actualPage, setActualPage] = useState<boolean>(true)
    const [pageCounter, setPageCounter] = useState<boolean>(!menuSlider)
    const [openTile1, setOpenTile1] = useState<boolean>(true)
    const [openTile2, setOpenTile2] = useState<boolean>(false)
    const [openTile3, setOpenTile3] = useState<boolean>(false)
    const [tileAnRunning, setTileAnRunning] = useState<boolean>(false)
    const [animationClass, setAnimationClass] = useState<"Up" | "Down" | "Left" | "Right" | "">('')

    //APP STATE
    const appState: AnimationContextType = {
        menuSlider: menuSlider,
        actualPage: actualPage,
        animationClass: animationClass,
        pageCounter: pageCounter,
        openTile1: openTile1,
        openTile2: openTile2,
        openTile3: openTile3,
        tileAnRunning: tileAnRunning,

        functions: {
            setMenuSlider: setMenuSlider,
            setActualPage: setActualPage,
            setPageCounter: setPageCounter,
            setOpenTile1: setOpenTile1,
            setOpenTile2: setOpenTile2,
            setOpenTile3: setOpenTile3,
            setTileAnRunning: setTileAnRunning,
            setAnimationClass: setAnimationClass,
        }
    }
    return (
        <AnimationContext.Provider value={appState}>
            {props.children}
        </AnimationContext.Provider>
    )
}
export {
    PageContextProvider,
    AnimationContextProvider,
    PageContext,
    AnimationContext
}