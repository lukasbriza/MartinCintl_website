import React from 'react'
import aboutImg from '../Static/AboutIMG.jpg'
////////////////////////////////////////////////
//COMPONENTS//
import {Button} from '../Components/Button/Button'

function About(){
    return(
        <div 
            id="About"
            style={{backgroundImage: `url(${aboutImg})`}}
        >
            <div id="AboutLayer" className="wv100 hv100">
                <section id="About-section" className="wv100">
                    <p id="mainPart">
                        Jmenuji se MARTIN CINTL<br/>
                        a ve <a href="https://www.tvujgym.cz/">Tvůj Gym</a> působím jako trenér se specializací na <br/> 
                        silový a nápravný trénink.
                    </p>
                    <p id="secondaryPart">
                        Pomáhám nejen začátečníkům s osvojením techniky cvičení, ale i sportovcům zlepšit 
                        jejich výkon a dosáhnout jejich vytyčeného cíle. V obou případech je pro mě klíčové dosáhnout co 
                        nejlepšího výsledku za podmínky udržení celkového zdravý člověka, bez bolesti a omezení
                    </p>
                    <Button text={"chci cvičit"} id={"About-button"} link={"/products"} onClick={()=>{console.log('click')}}/>
                </section>
            </div>
        </div>
    )
}

export {About}