import {useContext, useEffect, useRef} from 'react'
////////////////////////////////////////////////////
//COMPONENTS//
import {Button} from '../Components/Button/Button'
import {ListItem} from '../Components/ListItem/ListItem'
////////////////////////////////////////////////////
//PICTURES//
import service1 from '../Static/Service1IMG.jpg'
import service2 from '../Static/Service2IMG.jpg'
import service3 from '../Static/Service3IMG.jpeg'
////////////////////////////////////////////////////
//CONTEXT//
import {AnimationContext} from '../Functions/Context'
////////////////////////////////////////////////////
//ANIMATION//
import {tileOn, tileOff, tileTextOn, tileTextOff} from '../Functions/AnimationManager'


function Products(){
    const contextAn:any = useContext(AnimationContext)

    return(
        <div id="Products">
            <Tile 
                background={service1} 
                flagCount={"01"} 
                flagText={"Osobní trénink"} 
                id={"tile1"}
                open={contextAn.openTile1}
                openTrigger={contextAn.functions.setOpenTile1}
            >
                <TileContent 
                    show={contextAn.openTile1} 
                    count={1} 
                    idContent={"tileContent1"}
                />
            </Tile>
            <Tile 
                background={service2} 
                flagCount={"02"} 
                flagText={"Funkční diagnostika"} 
                id={"tile2"}
                open={contextAn.openTile2}
                openTrigger={contextAn.functions.setOpenTile2}
            >
                <TileContent 
                    show={contextAn.openTile2} 
                    count={2}
                    idContent={"tileContent2"}
                />
            </Tile>
            <Tile 
                background={service3}
                flagCount={"03"} 
                flagText={"Online coaching"} 
                id={"tile3"}
                open={contextAn.openTile3}
                openTrigger={contextAn.functions.setOpenTile3}
            >
                <TileContent 
                    show={contextAn.openTile3} 
                    count={3}
                    idContent={"tileContent3"}
                />
            </Tile>
        </div>
    )
}

function Tile(props:Tile){
    const contextAn:any = useContext(AnimationContext)

    const tile:any = useRef()
    const flag:any = useRef()
    const flagLine:any = useRef()
    const flagText:any = useRef()
    const layer:any = useRef()

    let openTimeout:NodeJS.Timeout
    //////////////////////////////////////////////////////
    //OPEN ANIMATION LISTENER//
    useEffect(() =>{
        if(props.open === true) {
            //set layer opacity => open tile => open flag => show text with button
            tileOn(
                layer.current,
                tile.current, 
                flagLine.current, 
                flagText.current,
                flag.current
            )
        }
        if(props.open === false) {
            tileOff(
                layer.current,
                tile.current, 
                flagLine.current, 
                flagText.current,
                flag.current
            )
        }
    }, [props.open])
    //////////////////////////////////////////////////////
    //PC VIEW//
    return(
        <div 
            className="tile hv100"
            id={props.id}
            ref={tile}

            onMouseEnter={()=>{
                switch (props.flagCount){
                    case "01":
                        openTimeout = setTimeout(()=>{
                            contextAn.functions.setOpenTile1(true)
                            contextAn.functions.setOpenTile2(false)
                            contextAn.functions.setOpenTile3(false)
                        },250)
                        break
                    case "02":
                        openTimeout = setTimeout(()=>{
                            contextAn.functions.setOpenTile1(false)
                            contextAn.functions.setOpenTile2(true)
                            contextAn.functions.setOpenTile3(false)
                        },250)
                        break
                    case "03":
                        openTimeout = setTimeout(()=>{
                            contextAn.functions.setOpenTile1(false)
                            contextAn.functions.setOpenTile2(false)
                            contextAn.functions.setOpenTile3(true)
                        },250)
                        break
                }
            }}
            onMouseLeave={()=>{
                clearTimeout(openTimeout)
            }}

            style={{
                backgroundImage: `url(${props.background})`
            }}
        >
            <div 
                className="tileLayer w100 h100"  
                ref={layer}
            >
                <div 
                    className="flag"
                    ref={flag}
                >
                    <p className="count">
                        {props.flagCount}
                    </p>
                    <div 
                        className="flagLine"
                        ref={flagLine}
                    ></div>
                    <p 
                        className="flagText"
                        ref={flagText}
                    >
                        {props.flagText}
                    </p>
                </div>
                {props.children}
            </div>
        </div>
    )
}

function TileContent(props:Tile_content){
    const content:any = useRef()
    const tileText:any = useRef()
    const tileButton:any = useRef()

    //SHOW LISTENER//
    useEffect(() =>{
        if(props.show === true){
            tileTextOn(
                content.current, 
                tileText.current, 
                tileButton.current
            )
        }
        if(props.show === false){
            tileTextOff(
                content.current, 
                tileText.current, 
                tileButton.current
            )
        }
    }, [props.show])
    //////////////////////////////////////////////////////
    let button
    let text
    if(props.count === 1){
            button = <Button 
                        text={"Mám zájem"} 
                        id={"tile01_button"} 
                        reference={tileButton} 
                        link={"/contact"} 
                        onClick={()=>{console.log('1')}}
                    />
            text = (
                <>
                <ListItem text={'Individuální silový a nápravný trénink'}/>
                <ListItem text={'Náprava pohybového aparátu a prevence (rehab/prehab)'}/>
                <ListItem text={'Začátečníci, pokročilí i sportovci'}/>
                </>
            )
    }
    if(props.count === 2){
            button = <Button 
                        text={"Mám zájem"} 
                        id={"tile02_button"}
                        reference={tileButton} 
                        link={"/contact"} 
                        onClick={()=>{console.log('2')}}
                    />
            text = (
                    <>
                    <ListItem 
                        text={'Co to je?'} 
                        importance={1}/>
                    <ListItem 
                        text={'Vyšetření měkkých i pevných tkání centrální nervové soustavy a jejich propojení'}
                        importance={2}/>
                    <ListItem
                        text={'V čem mi pomůže?'}
                        importance={1}
                    />
                    <ListItem
                        text={'Zjištění stavu a omezení pohybového aparátu.'}
                        importance={2}
                    />
                    <ListItem
                        text={'Zjištění možné příčiny bolestí či podráždění.'}
                        importance={2}
                    />
                    <ListItem
                        text={'Stanovení tréninkového/ nápravného plánu.'}
                        importance={2}
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
                        onClick={()=>{console.log('3')}}
                    />
            text = (

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
                tileText
            </div>    
                {button}
        </div>
    )
}




export {Products}