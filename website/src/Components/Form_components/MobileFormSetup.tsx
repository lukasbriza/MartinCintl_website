import {Options} from './Partial_components/Options'
import {PricingSegment} from './Partial_components/PricingSegment'
import {IconSegment} from '../Form_components/Partial_components/IconSegment'
import {Button} from '../Button/Button'
import {FormInput} from './Partial_components/FormInput'

function MobileFormSetup(props:any){
    let c1 = props.progress.c1
    let c2 = props.progress.c2
    let c3 = props.progress.c3


    //SETUP1//
    if(c1 === true && c2===false && c3 === false){
        let array:any = []
        props.priceData.forEach((item:{name:string, value:number}) => {
            array.push({name:item.name, value:item.value})
        })
        return (
            <>
                <div className="contentForm-wrapper">
                    <Options 
                        selectOptions={props.fn.selectOptions} 
                        actualOption={props.fn.option}
                        roll={props.fn.roll}
                        forwardFn={{
                            setRoll: props.fn.forwardFn.setRoll,
                            optionSetup: props.fn.forwardFn.optionSetup,
                        }}
                        flag={false}
                    />
                    <PricingSegment priceData={array} color={"black"}/>
                </div>
                <div className="contactForm-button-wrapper">
                    <Button 
                        text={"Pokračovat"} 
                        id={"formContinueBtn1"} 
                        onClick={()=>{props.fn.forwardFn.setProgress({c1: true, c2: true, c3: false})}}/>
                </div>
            </>
        )
    }
    //SETUP2//
    else if(c1 === true && c2===true && c3 === false){
        const inputs = props.formInputs
        return(
            <>
                <div className="contentForm-wrapper">
                    {
                       inputs.map((input:any)=>{  
                           return( 
                                <FormInput
                                    {...input}
                                    onChange={(e:any)=>{props.fn.forwardFn.handleChange(e)}}
                                    onFocus={()=>{props.fn.forwardFn.setRoll(false)}}
                                    key={input.id}
                                    mobilestyle={true}
                                />
                           )
                            
                        })
                        
                    }
                </div>
                <div className="contactForm-button-wrapper">
                    <Button 
                        text={"Zpět"} 
                        id={"formContinueBtn2"} 
                        onClick={()=>{props.fn.forwardFn.setProgress({c1: true, c2: false, c3: false})}}/>
                    <Button 
                        text={"Pokračovat"} 
                        id={"formContinueBtn3"} 
                        onClick={()=>{props.fn.forwardFn.setProgress({c1: true, c2: true, c3: true})}}/>
                </div>
            </>
        )
    }
    //SETUP3//
    else if(c1 === true && c2===true && c3 === true){
        return(
            <>
                <div className="submitContent">
                    <div className="message">
                        Zbývá jen odeslat!
                    </div>
                    <div className="iconSegmentMobile-wrapper">
                            <IconSegment icon={'Pin'} description={'Tvůj Gym s.r.o. - Havlíčkova 260, Kolín 28002'}/>
                            <IconSegment icon={'Call'} description={'+420 722 950 942'}/>
                            <IconSegment icon={'Mail'} description={'martincintl@seznam.cz'} link={'test'}/>
                            <IconSegment icon={'Instagram'} description={'martincintl_fit'} link={'test'}/>
                            <IconSegment icon={'Facebook'} description={'martincintlfitness'} link={'test'}/>
                    </div>
                </div>            
                <div className="contactForm-button-wrapper">
                <Button 
                    text={"Zpět"} 
                    id={"formContinueBtn4"} 
                    onClick={()=>{props.fn.forwardFn.setProgress({c1: true, c2: true, c3: false})}}/>
                <Button 
                    text={"Odeslat"} 
                    id={"formContinueBtn5"} 
                    onClick={()=>{props.fn.forwardFn.handleSubmit()}}/>
                </div>
            </>
        )
    } 
    //DEFAULT//
    else {
        return(<></>)
    }
}

export {MobileFormSetup}