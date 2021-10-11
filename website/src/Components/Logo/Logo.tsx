import {Link} from 'react-router-dom'

function Logo(props:logo){
    return(
        <Link to="/" id={props.id}>
            <p id="name">Martin Cintl</p>
            <p id="tag">osobní trenér</p>
        </Link>
    )
}

export {Logo}