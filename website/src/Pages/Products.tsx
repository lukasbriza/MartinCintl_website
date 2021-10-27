import {useContext, useEffect, useRef, useState} from 'react'
////////////////////////////////////////////////////
//COMPONENTS//
import {Tile} from '../Components/Tile/Tile'
import {TileContent} from '../Components/Tile_content/Tile_content'
////////////////////////////////////////////////////
//PICTURES//
import service1 from '../Static/Service1IMG.jpg'
import service2 from '../Static/Service2IMG.jpg'
import service3 from '../Static/Service3IMG.jpeg'
////////////////////////////////////////////////////
//CONTEXT//
import {AnimationContext} from '../Functions/Context'



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


export {Products}