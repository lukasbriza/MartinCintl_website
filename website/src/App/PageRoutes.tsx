import React, {useEffect,useState} from "react"
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Switch, Route, useLocation} from 'react-router-dom'
import {useContext} from 'react';
import {PageContext, AnimationContext} from '../Functions/Context'
////////////////////////////////////////
//COMPONENTS//
import {Menu} from '../Components/Menu/Menu'
import {SocialIcons} from '../Components/Social_icons/SocialIcons'
import {PageCounter} from '../Components/Page_counter/PageCounter'
import {Hero} from '../Pages/Hero'
import {About} from '../Pages/About'
import {Products} from '../Pages/Products'
import {Contact} from '../Pages/Contact'
import {MenuSlider} from '../Components/Menu_slider/MenuSlider'
////////////////////////////////////////
//CONFIG//
import {config} from './config'

function PageRoutes(){
    const context:any = useContext(PageContext)
    const contextAn:any = useContext(AnimationContext)
    const location = useLocation()

    useEffect(() =>{
        context.functions.setLocation(location.pathname)
    }, [location])

    return(
        <React.Fragment>
            <Menu/>
            <PageCounter 
                pageLinks={config.routesMain} 
                counterData={config.counter}
                show={contextAn.pageCounter}
            />
            <MenuSlider
                routesAll={config.routesAll}
                pagesAll={config.pagesAll}
                location={location}
            />
            <TransitionGroup>
                <CSSTransition
                    timeout={2000}
                    classNames={contextAn.animationClass}    
                    key={location.key}
                >
                    <Switch location={location}>
                        <Route exact path="/" component={Hero}/>
                        <Route exact path="/about" component={About}/>
                        <Route path="/products" component={Products}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <SocialIcons size={25}/>
        </React.Fragment>
    )
}

export {PageRoutes}