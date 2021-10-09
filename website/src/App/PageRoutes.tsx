import React from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {Switch, Route, useLocation} from 'react-router-dom'
import { useContext } from 'react';
////////////////////////////////////////
//COMPONENTS//
import {Menu} from '../Components/Menu/Menu'
import {Hero} from '../Pages/Hero'
////////////////////////////////////////

function PageRoutes(){
    const location = useLocation()

    return(
        <React.Fragment>
            <Menu/>
            <TransitionGroup>
                <CSSTransition
                    timeout={2000}
                    classNames={"some"}    
                    key={location.key}
                >
                    <Switch location={location}>
                        <Route exact path="/" component={Hero}/>
                        <Route path="/" />
                        <Route path="/" />
                        <Route path="/" />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </React.Fragment>
    )
}

export {PageRoutes}