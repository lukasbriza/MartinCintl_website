import {useState,useEffect} from 'react'

function PricingSegment(props:pricingSegment){
    const [color, setColor] = useState("")

    useEffect(() =>{
        if(props.color !== undefined){
            setColor(props.color)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    let components = props.priceData.map((price:{name:string, value:number}, index)=>{
        return(
            <div className="segmentLine" key={index}>
                <p className="lineName" style={{color:color}}>{price.name}</p>
                <p className="lineValue" style={{color:color}}>{price.value + " Kč"}</p>
            </div>
        )
    })
    return(
        <>
        {components}
        </>
    )
}

export {PricingSegment}