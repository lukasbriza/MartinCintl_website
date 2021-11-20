import {useRef, useContext, useEffect} from 'react'
////////////////////////////////////////////////////
//CONTEXT//
import {PageContext, AnimationContext} from '../../Functions/Context'
////////////////////////////////////////////////////
//ANIMATIONS//
import {tileTextOff,tileTextOn} from '../../Functions/AnimationManager'
////////////////////////////////////////////////////
//COMPONENTS//
import {Button} from '../Button/Button'
import {ListItem} from '../ListItem/ListItem'
////////////////////////////////////////////////////

function TileContent(props:Tile_content){
    const content:any = useRef()
    const tileText:any = useRef()
    const tileButton:any = useRef()

    const context:any = useContext(PageContext)
    const contextAn:any = useContext(AnimationContext)
    //////////////////////////////////////////////////////
    //SHOW LISTENER//
    useEffect(() =>{
        if(props.show === false){
            tileTextOff(
                content.current, 
                tileText.current, 
                tileButton.current
            ) 
        }
        if(props.show === true){
            tileTextOn(
                content.current, 
                tileText.current, 
                tileButton.current,
                contextAn.functions
            )
        }
    }, [props.show])
    //////////////////////////////////////////////////////
    //CONTACT FORMULAR STATE SET//
    function pushAppState(state:number){
        switch(state){
            case 1:
                context.functions.setContactFormular({name: 'Osobní trénink', tag: state})
                break
        
            case 2:    
                context.functions.setContactFormular({name: 'Funkční diagnostika', tag: state})
                break
            case 3:
                context.functions.setContactFormular({name: 'Online coaching', tag: state})
                break
        }
    }
    //////////////////////////////////////////////////////
    let button
    let text
    if(props.count === 1){
            button = <Button 
                        text={"Mám zájem"} 
                        id={"tile01_button"} 
                        reference={tileButton} 
                        link={"/contact"} 
                        onMouseEnter={()=>{contextAn.functions.setAnimationClass("Up")}}
                        onTouchStart={()=>{contextAn.functions.setAnimationClass("Up")}}
                        onClick={()=>{pushAppState(1)}}
                    />
            text = (
                <>
                <ListItem text={'Individuální silový a nápravný trénink'} importance={1}/>
                <ListItem text={'Náprava pohybového aparátu a prevence (rehab/prehab)'} importance={1}/>
                <ListItem text={'Začátečníci, pokročilí i sportovci'} importance={1}/>
                </>
            )
    }
    if(props.count === 2){
            button = <Button 
                        text={"Mám zájem"} 
                        id={"tile02_button"}
                        reference={tileButton} 
                        link={"/contact"} 
                        onMouseEnter={()=>{contextAn.functions.setAnimationClass("Up")}}
                        onTouchStart={()=>{contextAn.functions.setAnimationClass("Up")}}
                        onClick={()=>{pushAppState(2)}}
                    />
            text = (
                    <>
                    <ListItem 
                        text={'Vyšetření měkkých i pevných tkání centrální nervové soustavy a jejich propojení'}
                        importance={1}/>

                    <ListItem
                        text={'Zjištění stavu a omezení pohybového aparátu.'}
                        importance={1}
                    />
                    <ListItem
                        text={'Zjištění možné příčiny bolestí či podráždění.'}
                        importance={1}
                    />
                    <ListItem
                        text={'Stanovení tréninkového/ nápravného plánu.'}
                        importance={1}
                    />
                    </>
                )
    }
    if(props.count === 3){
            button = <Button 
                        text={"Mám zájem"} 
                        id={"tile03_button"} 
                        reference={tileButton} 
                        link={"/contact"} 
                        onMouseEnter={()=>{contextAn.functions.setAnimationClass("Up")}}
                        onTouchStart={()=>{contextAn.functions.setAnimationClass("Up")}}
                        onClick={()=>{pushAppState(3)}}
                    />
            text = (
                    <>
                    <ListItem 
                        text={'Každý měsíc nový tréninkový plán.'} 
                        importance={1}/>
                    <ListItem 
                        text={'Pravidelná kontrola výsledků a techniky cvičení.'} 
                        importance={1}/>
                    <ListItem 
                        text={'Kompletní videotéka.'} 
                        importance={1}/> 
                    <ListItem 
                        text={'Pokročilí cvičenci, sportovci.'} 
                        importance={1}/> 
                    </>
                )
    }

    return(
        <div 
            className="tileContent"
            ref={content}
        >
            <div 
                className="tileText"
                ref={tileText}
                id={props.idContent}
            >
                {text}
            </div>    
                {button}
        </div>
    )
}

export {TileContent}