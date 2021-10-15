import React, {useEffect} from "react"
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Switch, Route, useLocation} from 'react-router-dom'
import {useContext} from 'react';
import {PageContext} from '../Functions/Context'
////////////////////////////////////////
//COMPONENTS//
import {Menu} from '../Components/Menu/Menu'
import {PageCounter} from '../Components/Page_counter/PageCounter'
import {Hero} from '../Pages/Hero'
import {About} from '../Pages/About'
import {Products} from '../Pages/Products'
import {Contact} from '../Pages/Contact'
////////////////////////////////////////

function PageRoutes(){
    const context:any = useContext(PageContext)
    const location = useLocation()

    useEffect(() =>{
        context.functions.setLocation(location.pathname)
    }, [location])

    return(
        <React.Fragment>
            <Menu/>
            <PageCounter 
                pageLinks={["/","/about","/products","/contact"]} 
                counterData={["01","02","03","04"]}
            />
            <TransitionGroup>
                <CSSTransition
                    timeout={2000}
                    classNames={"some"}    
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
        </React.Fragment>
    )
}

export {PageRoutes}