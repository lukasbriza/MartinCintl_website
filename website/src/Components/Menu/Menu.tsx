import { useLocation } from 'react-router-dom'
import { useContext } from 'react'

import { Logo } from '../Logo/Logo'
import { ActualPage } from '../Actual_page/ActualPage'
import { MenuButton } from '../Menu_button/MenuButton'
import { LanguageMutation } from '../Language_mutations/LanguageMutation'

import { config } from '../../App/config'
import { AnimationContext } from '../../Functions/Context'



function Menu() {
    let location = useLocation()
    const context = useContext(AnimationContext)
    return (
        <section id="menu">
            <Logo id="logo" />
            <ActualPage
                id="actualPage-counter"
                location={location}
                mainRoutes={config.routesMain}
                mainPages={config.mainPages}
                show={context ? context.actualPage : true}
            />
            <LanguageMutation
                id="languageMutation"
                languages={config.languageMutations}
            />
            <MenuButton
                id="menu-button"
                pagesAll={config.pagesAll}
                routesAll={config.routesAll}
                location={location}
            />
        </section>
    )
}

export { Menu }