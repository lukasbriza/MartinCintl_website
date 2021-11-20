import {Link} from 'react-router-dom'


function Button(props:button){
    
    if(props.link !== undefined)
    {
        return(
            <Link 
                id={props.id}
                to={props.link}
                className="button-wrapper"
                onClick={(e)=>{props.onClick(e)}}
                onMouseEnter={props.onMouseEnter}
                onTouchStart={props.onTouchStart}
                
            >
                <p 
                    className="button-text"
                >
                    {props.text}
                </p>
            </Link>
        )
    }
    else
    {
        return(
            <div 
                id={props.id} 
                className="button-wrapper"
                onClick={(e)=>{props.onClick(e)}}
                ref={props.reference}
            >
                <p 
                    className="button-text"
                >
                    {props.text}
                </p>
            </div>
        )
    }   
}

export {Button}