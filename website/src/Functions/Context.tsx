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

    //APP STATE
    let appState = {
        location: location,
        languageMutation: languageMutation,
        transitionType: transition,

        functions:{
            setLanguageMutation: setLanguageMutation,
            setLocation: setLocation,
            setTransition: setTransition
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
    const [openTile, setOpenTile] = useState(false)

    //APP STATE
    let appState = {
        menuSlider: menuSlider,
        actualPage: actualPage,
        pageCounter: pageCounter,
        openTile: openTile,

        functions:{
            setMenuSlider: setMenuSlider,
            setActualPage: setActualPage,
            setPageCounter: setPageCounter,
            setOpenTile: setOpenTile,
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