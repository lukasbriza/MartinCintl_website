import {useContext} from 'react'
import {AnimationContext} from '../Functions/Context'
//COMPONENTS//
import HeroImg from '../Static/Hero.webp'
import {Button} from '../Components/Button/Button'

function Hero(){
    const context:any = useContext(AnimationContext)

    return(
        <div id="Hero">
            <Gradient className="radial-gradient"/>
            <img src={HeroImg} alt="Martin Cintl"/>
            <div className="quote-section">
                <section className="quote">
                    <p id="quote-firstLine">&ldquo; Cvičení nezmění poze tvoje tělo,</p>
                    <p id="quote-secondLine">změní i tvou mysl, náladu i přístup k životu. &rdquo;</p>
                    <p id="signature">Martin Cintl</p>
                </section>
                <Button 
                    text="Kdo jsem?" 
                    id="quote-button" 
                    onClick={() => {console.log('click')}} 
                    link="/about" 
                    onMouseEnter={()=>{context.functions.setAnimationClass("Up")}}
                    onTouchStart={()=>{context.functions.setAnimationClass("Up")}}
                />
            </div>  
        </div>
    )
}

function Gradient(props:any){
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100vw"
        height="100vh"
        {...props}
        style={{
            backgroundColor: "rgba(19,19,19,0.5)",
        }}
        >
            <defs>
                <radialGradient id="rgrad" cx="50%" cy="50%" r="50%">
                <stop
                    offset="0%"
                    style={{
                    stopColor: "rgb(79,95,164)",
                    stopOpacity: 1,
                    }}
                />
                <stop
                    offset="65%"
                    style={{
                    stopColor: "rgb(19,19,19)",
                    stopOpacity: 0,
                    }}
                />
                </radialGradient>
            </defs>
            <ellipse
                cx="72%"
                cy="55%"
                rx="120vw"
                ry="90vh"
                style={{
                fill: "url(#rgrad)",
                }}
            />
        </svg>
    )
}

export {Hero}