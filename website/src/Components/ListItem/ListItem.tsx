import { useEffect, useState } from "react"

function ListItem(props:ListItem){
    const [size, setSize] = useState(7)
    
    useEffect(() =>{
        if(props.size !== undefined){
            setSize(props.size)
        }
    }, [])

    let margin = '10px'
    if(props.importance !== undefined){
        margin = props.importance*30+"px"
    }
    return(
        <div className="listWrapper">
            <div 
                className="square"
                style={{
                    width: size+"px",
                    height: size+"px",
                    marginLeft: margin,
                }}
            ></div>
            <p className="listText">{props.text}</p>
        </div>
    )
}

export {ListItem}