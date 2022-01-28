import { useEffect, useState, useContext } from 'react'
//COMPONENTS//
import { SubmitButton } from '../Components/Form_components/Partial_components/SubmitButton'
import { FormInput } from '../Components/Form_components/Partial_components/FormInput'
import { IconSegment } from '../Components/Form_components/Partial_components/IconSegment'
import { PricingSegment } from '../Components/Form_components/Partial_components/PricingSegment'
import { ProgressBar } from '../Components/Form_components/Partial_components/ProgressBar'
import { MobileFormSetup } from '../Components/Form_components/MobileFormSetup'
import { FooterPersonalGsap } from '../Components/Footer/FooterPersonalGsap'
import { Options } from '../Components/Form_components/Partial_components/Options'
//CONTEXT//
import { PageContext } from '../Functions/Context'
//DATA//
import { inputsData, selectOptionsData } from '../Components/Form_components/Partial_components/DataInputs'
import { config } from '../App/config'
//FETCH AGENT//
import { FetchAgent } from '../Functions/FetchAgent'


function Contact() {
    ////////////////////////////////////////////////////////////////
    //COMPONENT STATE//
    const [values, setValues] = useState({ name: "", telephone: "", text: "" })
    const [option, setOption] = useState("")
    const [roll, setRoll] = useState(false)
    const [priceDataState, setPricedataState] = useState<any>([{ name: '', value: 0 }])

    const context: any = useContext(PageContext)

    const inputs = inputsData
    const selectOptions = selectOptionsData
    const priceData = [
        [
            { name: "1 trénink", value: 550 },
            { name: "1 trénink (2 osoby)", value: 700 },
            { name: "10 tréninků", value: 4500 },
            { name: "10 tréninků (2 osoby)", value: 6000 }
        ], [
            { name: "Diagnostika a výstup", value: 1000 },
            { name: "Diagnostika a výstup + nápravný trénink a plán", value: 2200 }
        ], [
            { name: "Online coaching (za měsíc)", value: 1500 }
        ]
    ]
    ////////////////////////////////////////////////////////////////
    //DEFAULT SETUP//
    useEffect(() => {
        if (context.contactFormular === undefined) {
            optionSetup(1)
            priceDataSetup(1)
        } else {
            optionSetup(context.contactFormular.tag)
            priceDataSetup(context.contactFormular.tag)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        if (option === selectOptionsData[0].value) {
            priceDataSetup(selectOptionsData[0].optionNumber)
        }
        if (option === selectOptionsData[1].value) {
            priceDataSetup(selectOptionsData[1].optionNumber)
        }
        if (option === selectOptionsData[2].value) {
            priceDataSetup(selectOptionsData[2].optionNumber)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [option])


    const optionSetup = (option: number) => {
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

    const priceDataSetup = (tag: number) => {
        switch (tag) {
            case 1:
                setPricedataState(priceData[0])
                break
            case 2:
                setPricedataState(priceData[1])
                break
            case 3:
                setPricedataState(priceData[2])
                break
        }
    }

    const handleChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        const validate = () => {
            let regExpName = /^[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ ]/g
            let name = regExpName.test(values.name)
            let regExpTelephone = /^[0-9]{9,9}$/
            let telephone = regExpTelephone.test(values.telephone)
            let regExpText = /^[\w\d &,.a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ]/
            let text = regExpText.test(values.text)
            console.log({ name: name, telephone: telephone, text: text })
            return { name: name, telephone: telephone, text: text }
        }

        if (validate().name === true && validate().telephone === true && validate().text === true) {
            alert("Děkuji za zprávu. Ozvu se Vám co nejdříve")
            FetchAgent.SendMail({
                name: values.name,
                telephone: values.telephone,
                text: values.text,
                option: option
            })
        } else {
            alert("Zadány nepovolené údaje.")
        }
    }

    const handleSubmit2 = () => {
        alert("Děkuji za zprávu. Ozvu se Vám co nejdříve")
        FetchAgent.SendMail({
            name: values.name,
            telephone: values.telephone,
            text: values.text,
            option: option
        })
    }
    ////////////////////////////////////////////////////////////////
    //MOBILE FORM HANDLER//
    const [progress, setProgress] = useState({ c1: true, c2: false, c3: false })

    ////////////////////////////////////////////////////////////////
    //FUNCIONS//
    function validation(e: { c1: boolean, c2: boolean, c3: boolean }) {
        if (e.c1 === true && e.c2 === true && e.c3 === true) {
            let regExpName = /^[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ ]/g
            let name = regExpName.test(values.name)
            let regExpTelephone = /^[0-9]{9,9}$/
            let telephone = regExpTelephone.test(values.telephone)
            let regExpText = /^[\w\d &,.a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ]/
            let text = regExpText.test(values.text)

            if (name === true && telephone === true && text === true) {
                setProgress(e)
            } else {
                alert("Nesprávně zadané údaje.")
            }
        } else {
            setProgress(e)
        }
    }

    ////////////////////////////////////////////////////////////////
    if (context.width > 1100) {
        return (
            <div
                id="Contact"
                onClick={() => { if (roll) { setRoll(false) } }}
            >
                <div className="contactContent-wrapper">
                    <div className="contactForm">

                        <form className="leftSide" autoComplete="on">

                            <Options
                                selectOptions={selectOptions}
                                actualOption={option}
                                roll={roll}
                                forwardFn={{
                                    setRoll: setRoll,
                                    optionSetup: optionSetup,
                                }}
                            />

                            {inputs.map((input: any) => {
                                return (
                                    <FormInput
                                        {...input}
                                        onChange={(e: any) => { handleChange(e) }}
                                        onFocus={() => { setRoll(false) }}
                                        key={input.id}
                                        mobilestyle={false}
                                    />
                                )
                            })}

                            <SubmitButton fn={handleSubmit} />
                        </form>

                        <div className="rightSide">
                            <div className="pricingSegment-wrapper">
                                <PricingSegment priceData={priceDataState} />
                            </div>
                            <div className="iconSegment-wrapper">
                                <IconSegment icon={'Pin'} description={'Tvůj Gym s.r.o. - Havlíčkova 260, Kolín 28002'} />
                                <IconSegment icon={'Call'} description={'+420 722 950 942'} />
                                <IconSegment icon={'Mail'} description={'martincintl@seznam.cz'} link={config.socialLinks.mail} />
                                <IconSegment icon={'Instagram'} description={'martin.cintl'} link={config.socialLinks.instagram} />
                                <IconSegment icon={'Facebook'} description={'martincintlfitness'} link={config.socialLinks.facebook} />
                            </div>
                        </div>
                    </div>
                </div>
                <FooterPersonalGsap />
            </div>
        )
    } else {
        return (
            <div
                id="ContactMobile"
                onClick={() => { if (roll) { setRoll(false) } }}
            >
                <div id="ContactMobileForm-wrapper">
                    <form id="ContactMobileForm" className="relative center">
                        <ProgressBar callback={(e: { c1: boolean, c2: boolean, c3: boolean }) => validation(e)} progress={progress} />
                        <MobileFormSetup
                            progress={progress}
                            fn={{
                                selectOptions: selectOptions,
                                option: option,
                                roll: roll,
                                forwardFn: {
                                    setRoll: setRoll,
                                    optionSetup: optionSetup,
                                    setProgress: setProgress,
                                    handleChange: handleChange,
                                    handleSubmit: handleSubmit2,
                                    validation: validation
                                }
                            }}
                            priceData={priceDataState}
                            formInputs={inputs}
                        />
                    </form>
                </div>
                <FooterPersonalGsap />
            </div>
        )
    }
}

export { Contact }