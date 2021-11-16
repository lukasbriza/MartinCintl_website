import {useEffect, useState, useRef, useContext} from 'react'
//COMPONENTS//
import {SubmitButton} from '../Components/Form_components/SubmitButton'
import {FormInput} from '../Components/Form_components/FormInput'
import {IconSegment} from '../Components/Form_components/IconSegment'
import {PricingSegment} from '../Components/Form_components/PricingSegment'
import {Footer_personal_gsap} from '../Components/Footer/Footer_personal_gsap'
//ANIMATIONS//
import {triangleRollOff, triangleRollOn} from '../Functions/AnimationManager'
//CONTEXT//
import {PageContext} from '../Functions/Context'


function Contact(){
    //COMPONENT STATE//
    const [values, setValues] = useState({
        name: "",
        telephone: "",
        text: ""
    })
    const [option, setOption] = useState("")
    const [roll, setRoll] = useState(false)

    const context:any = useContext(PageContext)
    ////////////////////////////////////////////////////////////////
    //DEFAULT SETUP//
    useEffect(() =>{
        optionSetup(1)
    },[])


    const optionSetup = (option:number) => {
        switch (option) {
            case 1:
                setOption(selectOptions[0].value)
                break
            case 2:
                setOption(selectOptions[1].value)
                break
            case 3:
                setOption(selectOptions[2].value)
                break
        }
    }

    const handleChange = (e:any) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        console.log('submit')
    }
    ////////////////////////////////////////////////////////////////

    const inputs = [
        {
            id: "name-input",
            name: "name",
            type: "text",
            placeholder: "Jméno a přijmení",
            errorMessage: "Zadán nevalidní znak. Minimální počet znaků je 3.",
            label: "Jméno",
            pattern: "^[A-Za-z0-9]{3,}$",
            labelCounter: "02",
            required: true,
        },{
            id: "telephone-input",
            name: "telephone",
            type: "tel",
            placeholder: "602582262",
            errorMessage: "Je povolen pouze tvar telefonního čísla o délce 9-ti čísel. Bez mezer.",
            label: "Telefon",
            labelCounter: "03",
            pattern: "^[0-9]{9,9}$",
            required: true,
        },{
            id: "text-input",
            name: "text",
            type: "textarea",
            placeholder: "Zpráva...",
            errorMessage: "Nejsou povoleny speciální znaky.",
            label: "Zpráva",
            labelCounter: "04",
            pattern: "."
        }
    ]

    const selectOptions = [
        {
            id: "personalTraining",
            value: "Osobní trénink",
            optionNumber: 1
        },{
            id: "diagnostic",
            value: "Funkční diagnostika",
            optionNumber: 2
        },{
            id: "onlineCoaching",
            value: "Online Coaching",
            optionNumber: 3
        }
    ]

    if(context.width > 1100){  
        return(
            <div 
                id="Contact" 
                onClick={()=>{if(roll){setRoll(false)}}}
            >
                <div className="contactContent-wrapper">
                    <div className="contactForm">

                        <form className="leftSide">
                            
                            <Options 
                                selectOptions={selectOptions} 
                                actualOption={option}
                                roll={roll}
                                forwardFn={{
                                    setRoll: setRoll,
                                    optionSetup: optionSetup,
                                }}
                            />

                            {inputs.map((input:any)=>{
                                return(
                                    <FormInput
                                        {...input}
                                        onChange={(e:any)=>{handleChange(e)}}
                                        onFocus={()=>{setRoll(false)}}
                                        key={input.id}
                                    />
                                )
                            })}

                            <SubmitButton fn={handleSubmit}/>
                        </form>

                        <div className="rightSide">
                            <div className="pricingSegment-wrapper">
                                <PricingSegment priceData={[
                                    {name: "1 trénink (1 osoba)", value: 550},
                                    {name: "1 trénink (2 osoby)", value: 700},
                                    {name: "10 tréninků", value: 4500},
                                    {name: "10 tréninků (2 osoby)", value: 4500}
                                ]}/>
                            </div>
                            <div className="iconSegment-wrapper">
                                <IconSegment icon={'Pin'} description={'Tvůj Gym s.r.o. - Havlíčkova 260, Kolín 28002'}/>
                                <IconSegment icon={'Call'} description={'+420 722 950 942'}/>
                                <IconSegment icon={'Mail'} description={'martincintl@seznam.cz'} link={'test'}/>
                                <IconSegment icon={'Instagram'} description={'martincintl_fit'} link={'test'}/>
                                <IconSegment icon={'Facebook'} description={'martincintlfitness'} link={'test'}/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <Footer_personal_gsap/>
            </div>
        )
    } else {
        return(
        <></>
        )
    }
}


function Options(props:options){
    ////////////////////////////////////////////////////////////////
    //REFS//
    const triangleRef = useRef<any>()
    const optionRef = useRef<any>()
    //TRIANGLE ANIMATION//
    useEffect(() =>{        
        if(props.roll === true){
            triangleRollOn(triangleRef.current,optionRef.current,".option-select")
        }
        if(props.roll === false){
            triangleRollOff(triangleRef.current,optionRef.current,".option-select")
        } 
        
    },[props.roll])
    ////////////////////////////////////////////////////////////////

    return(
        <div className="formInput" id="service-input">
            <label htmlFor="service" className="flag-contact">
                <p className="flagOrder">01</p>
                <p className="flagText">Služba</p>
            </label>
            <div className="actualOption">
                <div id="actualOption">
                    {props.actualOption}
                </div>
                <div id="button" onClick={()=>{props.forwardFn.setRoll(!props.roll)}}>
                    <div className="triangle" ref={triangleRef}></div>
                </div>
                <div className="options" ref={optionRef}>
                    {
                        props.selectOptions.map((option:{id:string,value:string,optionNumber:number})=>{
                            return(
                            <p className="option-select" 
                                id={option.id} 
                                key={option.id}
                                onClick={() =>{props.forwardFn.optionSetup(option.optionNumber)}}
                            >
                                {option.value}
                            
                            </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export {Contact}