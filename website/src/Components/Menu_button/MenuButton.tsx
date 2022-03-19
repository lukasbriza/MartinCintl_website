import { useContext, useState } from 'react'

import { AnimationContext, PageContext } from '../../Functions/Context'

function MenuButton(props: menuButton) {
    const context: any = useContext(AnimationContext)
    const appContext: any = useContext(PageContext)

    const [mobStyle, setmobStyle] = useState("white")

    return (
        <div
            id={props.id}
            onClick={() => {
                context.functions.setMenuSlider(!context.menuSlider)
            }}
        >
            <p className="center absolute" style={{ color: mobStyle, fontWeight: 600 }}>Menu</p>
        </div>
    )
}

export { MenuButton }