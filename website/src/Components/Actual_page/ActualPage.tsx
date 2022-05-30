import { useEffect, useState, useRef } from 'react'

function ActualPage(props: actualPage) {
    const [actualPage, setActualPage] = useState('')
    const [opacity, setOpacity] = useState(1)
    const prevPageRef: any = useRef()

    //LOCATION LISTENER//
    useEffect(() => {
        let page = pagecontroller(props.location.pathname)
        prevPageRef.current = actualPage
        setActualPage(page)

    }, [actualPage, props.location])

    //SHOW LISTENER//
    useEffect(() => {
        if (props.show === true) {
            setOpacity(1)
        }
        if (props.show === false) {
            setOpacity(0)
        }
    }, [props.show])

    function pagecontroller(path: any) {
        switch (path) {
            case '/':
                return 'Fitness'
            case '/about':
                return 'Já'
            case '/products':
                return 'Produkty'
            case '/contact':
                return 'Kontakt'
            case '/qualification':
                return 'Kvalifikace'
            case '/references':
                return 'Reference'
            default:
                return 'Fitness'
        }
    }
    return (
        <p
            id={props.id}
            style={{ opacity: opacity }}
        >
            {actualPage}
        </p>
    )
}

export { ActualPage }