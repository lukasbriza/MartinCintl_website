import {useContext, useEffect, useRef, useState} from 'react'
////////////////////////////////////////////////////
//COMPONENTS//
import {Tile} from '../Components/Tile/Tile'
import {TileMobile} from '../Components/Tile/TileMobile'
import {TileContent} from '../Components/Tile_content/Tile_content'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperCore, {Pagination} from 'swiper'
////////////////////////////////////////////////////
//SWIPER STYLES//
import "swiper/swiper-bundle.css"
import "swiper/modules/pagination/pagination.min.css"
////////////////////////////////////////////////////
//PICTURES//
import service1 from '../Static/Service1IMG.jpg'
import service2 from '../Static/Service2IMG.jpg'
import service3 from '../Static/Service3IMG.jpeg'
////////////////////////////////////////////////////
//CONTEXT//
import {AnimationContext, PageContext} from '../Functions/Context'

///////////////////////////////////////////////////
//INSTALL SWIPER MODULE//
SwiperCore.use([Pagination]);

function Products(){
    const contextAn:any = useContext(AnimationContext)
    const contextApp:any = useContext(PageContext)

    const[flagAnimation1, setFlagAnimation1] = useState(true)
    const[flagAnimation2, setFlagAnimation2] = useState(false)
    const[flagAnimation3, setFlagAnimation3] = useState(false)

    const[textAnimation1, setTextAnimation1] = useState(true)
    const[textAnimation2, setTextAnimation2] = useState(false)
    const[textAnimation3, setTextAnimation3] = useState(false)

    if(contextApp.width > 700){
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
    } else {

        return(
            <div id="Products">
                <Swiper 
                    pagination={{"clickable": true}} 
                    className="productSwiper" 
                    speed={2000}
                    onPaginationUpdate={(e)=>{
                        let index:number = e.activeIndex
                        switch(index) {
                            case 0:
                                setFlagAnimation1(true)
                                setFlagAnimation2(false)
                                setFlagAnimation3(false)

                                setTextAnimation1(true)
                                setTextAnimation2(false)
                                setTextAnimation3(false)
                                break
                            case 1:
                                setFlagAnimation1(false)
                                setFlagAnimation2(true)
                                setFlagAnimation3(false)

                                setTextAnimation1(false)
                                setTextAnimation2(true)
                                setTextAnimation3(false)
                                break
                            case 2:
                                setFlagAnimation1(false)
                                setFlagAnimation2(false)
                                setFlagAnimation3(true)

                                setTextAnimation1(false)
                                setTextAnimation2(false)
                                setTextAnimation3(true)
                                break
                            

                        }
                    }}>
                    <SwiperSlide>
                        <TileMobile 
                            background={service1} 
                            flagCount={"01"} 
                            flagText={"Osobní trénink"} 
                            id={"tile1"}
                            open={flagAnimation1}
                        >
                            <TileContent 
                                show={textAnimation1} 
                                count={1}
                                idContent={"mobileTileContent1"}
                            />
                        </TileMobile>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TileMobile 
                            background={service2} 
                            flagCount={"02"} 
                            flagText={"Funkční diagnostika"} 
                            id={"tile2"}
                            open={flagAnimation2}
                        >
                            <TileContent 
                                show={textAnimation2} 
                                count={2}
                                idContent={"mobileTileContent2"}
                            />
                        </TileMobile>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TileMobile 
                            background={service3}
                            flagCount={"03"} 
                            flagText={"Online coaching"} 
                            id={"tile3"}
                            open={flagAnimation3}
                        >
                            <TileContent 
                                show={textAnimation3} 
                                count={3}
                                idContent={"mobileTileContent3"}
                            />
                        </TileMobile>
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    }
}


export {Products}