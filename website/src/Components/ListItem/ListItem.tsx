function ListItem(props:ListItem){

    return(
        <div className="listWrapper">
            <div 
                className="square"
                style={{
                    width: props.size+"px",
                    height: props.size+"px"
                }}
            ></div>
            <p className="listText">{props.text}</p>
        </div>
    )
}

export {ListItem}