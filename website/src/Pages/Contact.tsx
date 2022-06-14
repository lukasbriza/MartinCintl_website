import { useEffect, useState, useContext } from 'react'
//COMPONENTS//
import ContactImg from '../Static/ContactBG.webp'
import { SubmitButton } from '../Components/Form_components/Partial_components/SubmitButton'
import { Overlay } from '../Components/Overlay/Overlay'
import { FormInput } from '../Components/Form_components/Partial_components/FormInput'
import { IconSegment } from '../Components/Form_components/Partial_components/IconSegment'
import { FooterPersonalGsap } from '../Components/Footer/FooterPersonalGsap'
//DATA//
import { config } from '../App/config'
//FETCH AGENT//
import { FetchAgent } from '../Functions/FetchAgent'


function Contact() {
    ////////////////////////////////////////////////////////////////
    //COMPONENT STATE//
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [text, setText] = useState<string>("");

    const [showModal, setShowModal] = useState<boolean>(false)

    const [nameFocus, setNameFocus] = useState<boolean>(false);
    const [emailFocus, setEmailFocus] = useState<boolean>(false);
    const [textFocus, setTextFocus] = useState<boolean>(false);

    const [nameCorrect, setNameCorrect] = useState<boolean>(true);
    const [emailCorrect, setEmailCorrect] = useState<boolean>(true);
    const [textCorrect, setTextCorrect] = useState<boolean>(true);

    const [clearName, setclearName] = useState<boolean>(false);
    const [clearEmail, setClearEmail] = useState<boolean>(false);
    const [clearText, setClearText] = useState<boolean>(false);

    const handleSubmit = () => {
        if (
            nameCorrect === true &&
            emailCorrect === true &&
            textCorrect === true
        ) {
            FetchAgent.SendMail({ name: name, email: email, text: text })
            setclearName(true);
            setClearEmail(true);
            setClearText(true);

            alert("Děkuji za zprávu. Brzy se Vám ozvu!");

            setTimeout(() => {
                setclearName(false);
                setClearEmail(false);
                setClearText(false);
            }, 1000)
        }
    }

    const handleName = (text: string) => {
        setName(text)
        let regex = /[&=#|'<>^]/g;
        let result = regex.test(text)
        result ? setNameCorrect(false) : setNameCorrect(true);
    }
    const handleEmail = (text: string) => {
        setEmail(text)
        let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/g;
        let result = regex.test(text)
        result ? setEmailCorrect(false) : setEmailCorrect(true);
    }
    const handleText = (text: string) => {
        setText(text)
        let regex = /[&=#|'<>^]/g;
        let result = regex.test(text)
        result ? setTextCorrect(false) : setTextCorrect(true);
    }
    return (
        <div
            id="Contact"
            style={{ backgroundImage: `url(${ContactImg})` }}
        >
            <div
                id="ContactLayer" className="relative w100 h100"
            >
                <div id="ContactContent">
                    <div id="priceInfo">Aktuální ceny mých služeb můžete najít &nbsp;<b onClick={() => setShowModal(true)}>ZDE</b></div>
                    <div id="Form">
                        <h2>Kontaktujme se</h2>
                        <div id="inputSection">
                            <FormInput
                                type="name"
                                callback={handleName}
                                focused={nameFocus}
                                onClick={() => { setNameFocus(true); setEmailFocus(false); setTextFocus(false); }}
                                correct={nameCorrect}
                                clear={clearName}
                            />
                            <FormInput
                                type="email"
                                callback={handleEmail}
                                focused={emailFocus}
                                onClick={() => { setNameFocus(false); setEmailFocus(true); setTextFocus(false); }}
                                correct={emailCorrect}
                                clear={clearEmail}
                            />
                            <FormInput
                                type="textarea"
                                callback={handleText}
                                focused={textFocus}
                                onClick={() => { setNameFocus(false); setEmailFocus(false); setTextFocus(true); }}
                                correct={textCorrect}
                                clear={clearText}
                            />
                        </div>
                        <SubmitButton fn={handleSubmit} />
                    </div>
                </div>
                <div id="extendedFooter">
                    <IconSegment icon={'Pin'} description={'Tvůj Gym s.r.o. - Havlíčkova 260, Kolín 28002'} />
                    <IconSegment icon={'Call'} description={'+420 722 950 942'} />
                    <IconSegment icon={'Mail'} description={'martincintl@seznam.cz'} link={config.socialLinks.mail} />
                    <IconSegment icon={'Instagram'} description={'martin.cintl'} link={config.socialLinks.instagram} />
                    <IconSegment icon={'Facebook'} description={'martincintlfitness'} link={config.socialLinks.facebook} />
                </div>
                <FooterPersonalGsap />
            </div>
            <Overlay content={
                <table id="priceTable">
                    <thead>
                        <tr>
                            <th>Osobní trénink</th>
                            <th>Cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 trénink</td>
                            <td>550 Kč</td>
                        </tr>
                        <tr>
                            <td>1 trénink (2 osoby)</td>
                            <td>700 Kč</td>
                        </tr>
                        <tr>
                            <td>10 tréninků</td>
                            <td>4500 Kč</td>
                        </tr>
                        <tr>
                            <td>10 tréninků (2 osoby)</td>
                            <td>6000 Kč</td>
                        </tr>
                        <tr>
                            <th>Funkční fiagnostika</th>
                            <th>Cena</th>
                        </tr>
                        <tr>
                            <td>Diagnostika a výstup</td>
                            <td>1000 Kč</td>
                        </tr>
                        <tr>
                            <td>Diagnostika a výstup + nápravný trénink + plán</td>
                            <td>2200 Kč</td>
                        </tr>
                        <tr>
                            <th>Online coaching</th>
                            <th>Cena</th>
                        </tr>
                        <tr>
                            <td>Online coaching (za měsíc)</td>
                            <td>1500 Kč</td>
                        </tr>
                    </tbody>
                </table>
            } onClick={() => setShowModal(false)} show={showModal} />
        </div>
    )
}

export { Contact }