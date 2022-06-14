import { useContext, useState } from 'react'

import { AnimationContext } from '../../Functions/Context'

function MenuButton(props: menuButton) {
    const context = useContext(AnimationContext)

    const [mobStyle, setmobStyle] = useState("white")

    return (
        <div
            id={props.id}
            onClick={() => {
                console.log(context?.menuSlider)
                switch (context?.menuSlider) {
                    case true:
                        context?.functions.setMenuSlider(false)
                        break;
                    case false:
                        context?.functions.setMenuSlider(true)
                        break;
                }
                //context?.functions.setMenuSlider(context.menuSlider)
            }}
        >
            <p className="center absolute" style={{ color: mobStyle, fontWeight: 600 }}>Menu</p>
        </div>
    )
}

export { MenuButton }