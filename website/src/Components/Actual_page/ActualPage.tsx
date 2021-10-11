import {useEffect, useState} from 'react'

function ActualPage(props:actualPage){
    const [actualPage, setActualPage] = useState('test')

    useEffect(() =>{
        let actualPage = pagecontroller(props.location.pathname)
        setActualPage(actualPage)
        console.log(actualPage)
    }, [props.location])

    function pagecontroller(path:any){
        switch(path){
            case '/':
                return 'Fitness'
            case '/about':
                return 'O mně'
            case '/products':
                return 'Služby'
            case '/contact':
                return 'Kontakt'
            default:
                return 'Fitness'
        }
    }
    return(
        <p id={props.id}>{actualPage}</p>
    )
}

export {ActualPage}