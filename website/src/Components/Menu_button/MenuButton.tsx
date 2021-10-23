import {useContext} from 'react'

import {AnimationContext} from '../../Functions/Context'

function MenuButton(props:menuButton){
    const context:any = useContext(AnimationContext)

    return(
            <div 
                id={props.id}
                onClick={() => {
                    context.functions.setMenuSlider(!context.menuSlider)
                }}
            >
                <p className="center absolute">Menu</p>
            </div>
    )
}

export {MenuButton}