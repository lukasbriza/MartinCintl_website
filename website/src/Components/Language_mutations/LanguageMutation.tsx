import {useState, useContext, useEffect} from 'react'
import {PageContext} from '../../Functions/Context'

function LanguageMutation(props:languageMutations){
    const context:any = useContext(PageContext)
    const [language, setLanguage] = useState(context.languageMutation)
    const [optiondisplay, setOptionDisplay] = useState("none")
    const [rolled, setRolled] = useState(false)
    const [mutationWrapperClass, setMutationWrapperClass] = useState({})
    const [rotation, setRotation] = useState(0)

    useEffect(() =>{
        setLanguage(context.languageMutation)
    },[context.languageMutation])

    useEffect(() =>{
        if(rolled === true){
            roll() //set default on location change
        }
    },[context.location])


    //LANGUAGE OPTIONS//
    function switchLanguage(e:any){
        let lang:string = e.target.getAttribute('data-value')
        //CHNAGE STATE
        setLanguage(lang)
        //CHANGE CONTEXT
        context.functions.setLanguageMutation(lang)
    }

    function roll(){
        //ROLL DOWN
        if(rolled === false){
            setOptionDisplay("grid")
            setMutationWrapperClass("activeMutationWrapper")
            setRotation(180)
            setRolled(true)
        
        //ROLL UP
        } else {
            setOptionDisplay('none')
            setMutationWrapperClass({})
            setRotation(0)
            setRolled(false)
        }
    }

    let lngOptions = props.languages.map((option:string, i:number)=>{
        return(
            <p 
                id={i+"lng"} 
                key={i+"lng"} 
                className="language option"
                onClick={(e)=>{switchLanguage(e)}}
                data-value={option}
            >
                {option}
            </p>
        )
    })

    return(
        <div id={props.id}>
            <div 
                id="mutation-wrapper" 
                className={"absolute center "+mutationWrapperClass}
                onClick={()=>{roll()}}
            >
                <p id="language" className="language">
                    {language}
                </p>
                <div 
                    id="arrow"
                    style={{
                        transform: "rotate("+rotation+"deg)"
                    }}
                >
                </div>
            </div>
            <div 
                id="option-wrapper"
                style={{
                    display: optiondisplay
                }}
            >
                {lngOptions}
            </div>
        </div>
    )
}

export {LanguageMutation}