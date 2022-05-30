import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageContext, AnimationContext } from '../../Functions/Context'

function Logo(props: logo) {
    const appContext: any = useContext(PageContext)
    const context: any = useContext(AnimationContext)

    const [logoStyle, setLogoStyle] = useState("white")

    return (
        <Link
            to="/"
            id={props.id}
            onClick={(e) => { if (appContext.location === "/") { e.preventDefault() } }}
            onMouseEnter={() => { context.functions.setAnimationClass("Down") }}
            onTouchStart={() => { context.functions.setAnimationClass("Down") }}
        >
            <p id="name" style={{ color: logoStyle }}>Martin Cintl</p>
            <p id="tag" style={{ color: logoStyle }}>osobní trenér</p>
        </Link>
    )
}

export { Logo }