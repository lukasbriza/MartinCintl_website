import {useEffect, useState, useRef, useContext} from 'react'
//COMPONENTS//
import {SubmitButton} from '../Components/Form_components/Partial_components/SubmitButton'
import {FormInput} from '../Components/Form_components/Partial_components/FormInput'
import {IconSegment} from '../Components/Form_components/Partial_components/IconSegment'
import {PricingSegment} from '../Components/Form_components/Partial_components/PricingSegment'
import {ProgressBar} from '../Components/Form_components/Partial_components/ProgressBar'
import {MobileFormSetup} from '../Components/Form_components/MobileFormSetup'
import {FooterPersonalGsap} from '../Components/Footer/FooterPersonalGsap'
import {Options} from '../Components/Form_components/Partial_components/Options'
//CONTEXT//
import {PageContext} from '../Functions/Context'
//DATA//
import {inputsData, selectOptionsData} from '../Components/Form_components/Partial_components/DataInputs'


function Contact(){
    ////////////////////////////////////////////////////////////////
    //COMPONENT STATE//
    const [values, setValues] = useState({name: "", telephone: "", text: ""})
    const [option, setOption] = useState("")
    const [roll, setRoll] = useState(false)

    const context:any = useContext(PageContext)

    const inputs = inputsData
    const selectOptions = selectOptionsData
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
    //MOBILE FORM HANDLER//
    const[progress,setProgress]=useState({c1:true,c2:false,c3:false})

    ////////////////////////////////////////////////////////////////
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
                                        mobilestyle={false}
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
                    <FooterPersonalGsap/>
            </div>
        )
    } else {
        return(
        <div 
            id="ContactMobile" 
            onClick={()=>{if(roll){setRoll(false)}}}
        >
            <div id="ContactMobileForm-wrapper">
                <form id="ContactMobileForm" className="relative center">
                    <ProgressBar callback={(e:{c1:boolean, c2:boolean, c3:boolean}) => setProgress(e)} progress={progress}/>
                    <MobileFormSetup 
                        progress={progress} 
                        fn={{
                            selectOptions: selectOptions,
                            option: option,
                            roll: roll,
                            forwardFn:{
                                setRoll: setRoll,
                                optionSetup: optionSetup,
                                setProgress: setProgress,
                                handleChange: handleChange,
                                handleSubmit: handleSubmit
                            }
                        }}
                        priceData={[
                            {name: "1 trénink (1 osoba)", value: 550},
                            {name: "1 trénink (2 osoby)", value: 700},
                            {name: "10 tréninků", value: 4500},
                            {name: "10 tréninků (2 osoby)", value: 4500}
                        ]}
                        formInputs={inputs}
                    />
                </form>
            </div>
            <FooterPersonalGsap/>
        </div>
        )
    }
}

export {Contact}