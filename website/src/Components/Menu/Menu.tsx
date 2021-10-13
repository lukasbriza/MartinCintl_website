import {useLocation} from 'react-router-dom'
import {useEffect} from 'react'

import {Logo} from '../Logo/Logo'
import {ActualPage} from '../Actual_page/ActualPage'
import {MenuButton} from '../Menu_button/MenuButton'
import {LanguageMutation} from '../Language_mutations/LanguageMutation'



function Menu(){
    let location = useLocation()

    useEffect(() =>{
        console.log(location)
    }, [location])

    return(
        <section id="menu">
            <Logo id="logo"/>
            <ActualPage id="actualPage-counter" pages={["Fitness", "O mně", "Služby",]} location={location}/>
            <LanguageMutation id="languageMutation" languages={["cs", "eng"]}/>
            <MenuButton id="menu-button" menuProps={["O mně", "Služby","Kvalifikace","Reference","Kontakt"]} location={location}/>
        </section>
    )
}

export {Menu}