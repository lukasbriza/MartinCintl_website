import {useContext,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {PageContext, AnimationContext} from '../../Functions/Context'
import {deviceDetection} from "../../Functions/DeviceDetect"

function Logo(props:logo){
    const appContext:any = useContext(PageContext)
    const context:any = useContext(AnimationContext)

    const [logoStyle, setLogoStyle] = useState("white")

    useEffect(() =>{
        if(appContext.width <= 768 && logoStyle === "white" && appContext.location === "/contact"){
            setLogoStyle("black")
        }
        if(appContext.width > 768 && logoStyle === "black"){
            setLogoStyle("white")
        }
    },[appContext.width])
    useEffect(() =>{
        if(context.menuSlider === true && appContext.width <= 768 && appContext.location === "/contact"){
            setLogoStyle("white")
        }
        if(context.menuSlider === false && appContext.width <=768 && appContext.location === "/contact"){
            setLogoStyle("black")
        }
    },[context.menuSlider])
    useEffect(() =>{
        if(appContext.location !== "/contact"){
            setLogoStyle("white")
        }
        if(appContext.location === "/contact" && appContext.width <= 768){
            setLogoStyle("black")
        }
    },[appContext.location])
    

    return(
        <Link to="/" id={props.id}>
            <p id="name" style={{color: logoStyle}}>Martin Cintl</p>
            <p id="tag" style={{color: logoStyle}}>osobní trenér</p>
        </Link>
    )
}

export {Logo}