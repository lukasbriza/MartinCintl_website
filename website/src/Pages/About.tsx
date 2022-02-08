import { useContext, useState } from 'react'
import aboutImg from '../Static/AboutIMG.jpg'
import { AnimationContext } from '../Functions/Context'
////////////////////////////////////////////////
//COMPONENTS//
import { Button } from '../Components/Button/Button'
import { Overlay } from '../Components/Overlay/Overlay'


function About() {
    const context: any = useContext(AnimationContext)

    const [showModal, setShowModal] = useState(false)

    return (
        <div
            id="About"
            style={{ backgroundImage: `url(${aboutImg})` }}
        >
            <div id="AboutLayer" className="wv100 hv100">
                <section id="About-section" className="wv100">
                    <p id="mainPart">
                        Jmenuji se MARTIN CINTL<br />
                        a ve <a href="https://www.tvujgym.cz/" target="_blank" rel="noreferrer">Tvůj Gym</a> působím jako trenér se specializací na <br />
                        silový a nápravný trénink.
                    </p>
                    <div id="secondaryPart">
                        Pomáhám nejen začátečníkům s osvojením techniky cvičení, ale i sportovcům zlepšit
                        jejich výkon a dosáhnout jejich vytyčeného cíle. V obou případech je pro mě klíčové dosáhnout co
                        nejlepšího výsledku za podmínky udržení celkového zdraví člověka, bez bolesti a omezení. <br />
                        <p id="showMore" onClick={() => { setShowModal(true) }}>Ukaž více</p>
                    </div>
                    <Button
                        text={"chci cvičit"}
                        id={"About-button"}
                        link={"/products"}
                        onClick={() => { console.log('click') }}
                        onMouseEnter={() => { context.functions.setAnimationClass("Up") }}
                        onTouchStart={() => { context.functions.setAnimationClass("Up") }}
                    />
                </section>
                <Overlay show={showModal} content={
                    `Silový trénink vnímám nejen jako skvělý nástroj pro budování svalové hmoty, 
                    síly a zlepšení sportovního výkonu, ale i jako součást rehabilitace, prevence před zraněním a udržení celkového zdraví člověka.\n
                    Ke každému ze svých svěřenců přistupuji individuálně, v závislosti na zdravotním stavu / omezení, 
                    výstupu z komplexní funkční diagnostiky, 
                    výkonnostní kategorii a především na jeho cíli. \n

                    K tomuto povolání mne kvalifikuje více jak 8 let praxe, závodní zkušenosti (silový trojboj - kategorie RAW) 
                    a bezpočet absolvovaných odborných a rekvalifikačních kurzů.`
                } onClick={() => { setShowModal(false) }} />
            </div>
        </div>
    )
}

export { About }