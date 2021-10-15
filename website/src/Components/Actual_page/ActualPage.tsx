import {useEffect, useState, useRef} from 'react'

function ActualPage(props:actualPage){
    const [actualPage, setActualPage] = useState('')
    const prevPageRef:any = useRef()

    useEffect(() =>{
        let page = pagecontroller(props.location.pathname)
        prevPageRef.current = actualPage
        setActualPage(page)
    }, [props.location])

    let prevPage = prevPageRef.current
    console.log(actualPage, prevPage)

    function pagecontroller(path:any){
        switch(path){
            case '/':
                return 'Fitness'
            case '/about':
                return 'Já'
            case '/products':
                return 'Produkty'
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