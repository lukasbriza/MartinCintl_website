
function PricingSegment(props:any){
    let components = props.priceData.map((price:{name:string, value:number})=>{
        return(
            <div className="segmentLine">
                <p className="lineName">{price.name}</p>
                <p className="lineValue">{price.value + " Kč"}</p>
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