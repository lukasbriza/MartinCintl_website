import React, { useEffect } from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useContext } from 'react';
import { PageContext, AnimationContext } from '../Functions/Context'
////////////////////////////////////////
//COMPONENTS//
import { Menu } from '../Components/Menu/Menu'
import { SocialIcons } from '../Components/Social_icons/SocialIcons'
import { PageCounter } from '../Components/Page_counter/PageCounter'
import { Hero } from '../Pages/Hero'
import { About } from '../Pages/About'
import { Products } from '../Pages/Products'
import { Contact } from '../Pages/Contact'
import { Qualification } from "../Pages/Qualification";
import { References } from "../Pages/References"
import { MenuSlider } from '../Components/Menu_slider/MenuSlider'
////////////////////////////////////////
//CONFIG//
import { config } from './config'


function PageRoutes() {
    const context = useContext(PageContext)
    const contextAn = useContext(AnimationContext)
    const location = useLocation()

    useEffect(() => {
        context!.functions.setLocation(location.pathname)

    }, [context, location])

    return (
        <React.Fragment>
            <Menu />
            <PageCounter
                pageLinks={config.routesMain}
                counterData={config.counter}
                show={contextAn!.pageCounter}
            />
            <MenuSlider
                routesAll={config.routesAll}
                pagesAll={config.pagesAll}
                location={location}
            />
            <TransitionGroup>
                <CSSTransition
                    timeout={2000}
                    classNames={contextAn!.animationClass}
                    key={location.key}
                >
                    <Switch location={location}>
                        <Route exact path="/" component={Hero} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/qualification" component={Qualification} />
                        <Route exact path="/references" component={References} />
                        <Route path={'/(.+)'} render={() => (<Hero />)} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <SocialIcons size={25} />
        </React.Fragment>
    )
}

export default PageRoutes