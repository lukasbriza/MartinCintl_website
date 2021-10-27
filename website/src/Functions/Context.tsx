import React, {createContext, useState} from 'react'
import {useLocation} from 'react-router-dom'


//CONTEXTS//
const PageContext = createContext({})
const AnimationContext = createContext({})


//CUSTOM PROVIDERS//
function PageContextProvider(props:any){
    //SETTERS
    const [languageMutation, setLanguageMutation] = useState('cs')
    const [location, setLocation] = useState(undefined)
    const [transition, setTransition] = useState(undefined)
    const [contactFormular, setContactFormular] = useState(undefined)

    //APP STATE
    let appState = {
        location: location,
        languageMutation: languageMutation,
        transitionType: transition,
        contactFormular: contactFormular,

        functions:{
            setLanguageMutation: setLanguageMutation,
            setLocation: setLocation,
            setTransition: setTransition,
            setContactFormular: setContactFormular,
        }
    }
    return(
        <PageContext.Provider value={appState}>
            {props.children}
        </PageContext.Provider>
    )  
}

function AnimationContextProvider(props:any){
    //SETTERS
    const [menuSlider, setMenuSlider] = useState(false)
    const [actualPage, setActualPage] = useState(true)
    const [pageCounter, setPageCounter] = useState(!menuSlider)
    const [openTile1, setOpenTile1] = useState(true)
    const [openTile2, setOpenTile2] = useState(false)
    const [openTile3, setOpenTile3] = useState(false)
    const [tileAnRunning, setTileAnRunning] = useState(false)

    //APP STATE
    let appState = {
        menuSlider: menuSlider,
        actualPage: actualPage,
        pageCounter: pageCounter,
        openTile1: openTile1,
        openTile2: openTile2,
        openTile3: openTile3,
        tileAnRunning: tileAnRunning,

        functions:{
            setMenuSlider: setMenuSlider,
            setActualPage: setActualPage,
            setPageCounter: setPageCounter,
            setOpenTile1: setOpenTile1,
            setOpenTile2: setOpenTile2,
            setOpenTile3: setOpenTile3,
            setTileAnRunning: setTileAnRunning,
        }
    }
    return(
        <AnimationContext.Provider value={appState}>
            {props.children}
        </AnimationContext.Provider>
    )
}
export{
    PageContextProvider, 
    AnimationContextProvider,
    PageContext,
    AnimationContext
}