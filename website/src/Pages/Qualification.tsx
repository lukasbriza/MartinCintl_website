import img from '../Static/QualificationIMG.jpg'

import { Gallery } from '../Components/Gallery/Gallery.jsx'
import { FooterPersonalGsap } from '../Components/Footer/FooterPersonalGsap'
import { galleryTilesAnimation } from '../Functions/AnimationManager'

import { useEffect, useState, useRef } from 'react'

import cert1 from '../Static/Cert01.jpg'
import cert2 from '../Static/CertA1.jpeg'
import cert3 from '../Static/CertA2.jpeg'
import cert4 from '../Static/CertA3.jpeg'
import cert5 from '../Static/CertA4.jpeg'
import cert6 from '../Static/CertA5.jpg'
import cert7 from '../Static/CertB1.jpg'
import cert8 from '../Static/CertB2.jpg'
import cert9 from '../Static/CertC1.jpeg'

const images = [
    { title: 'Certificate', src: cert1 },
    { title: 'Certificate', src: cert2 },
    { title: 'Certificate', src: cert3 },
    { title: 'Certificate', src: cert4 },
    { title: 'Certificate', src: cert5 },
    { title: 'Certificate', src: cert6 },
    { title: 'Certificate', src: cert7 },
    { title: 'Certificate', src: cert8 },
    { title: 'Certificate', src: cert9 }
]

function Qualification() {
    const [showGallery, setGallery] = useState(false)
    const [showGalleryTiles, setShowGalleryTiles] = useState(true)
    const [activeIndex, setActiveIndex] = useState(1)
    return (
        <div
            id="Qualification"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="layer">
                <GalleryTiles
                    setIndex={setActiveIndex}
                    showGallery={setGallery}
                    showGalleryTilesFn={setShowGalleryTiles}
                    showGalleryTiles={showGalleryTiles}
                />
                <Gallery
                    show={showGallery}
                    setGallery={setGallery}
                    images={images}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    setShowGalleryTiles={setShowGalleryTiles}
                />
            </div>
            <FooterPersonalGsap />
        </div>
    )
}

function GalleryTiles(props: any) {
    const tileRef: any = useRef()
    useEffect(() => {
        if (props.showGalleryTiles === true) {
            galleryTilesAnimation(tileRef.current, true)
        } else {
            galleryTilesAnimation(tileRef.current, false)
        }
    }, [props.showGalleryTiles])

    return (
        <div className='galleryTiles-wrapper' ref={tileRef}>
            {images.map(({ title, src }, index) => {
                return (
                    <div className="img-container" key={index} onClick={() => {
                        props.setIndex(index)
                        props.showGalleryTilesFn(false)
                        props.showGallery(true)
                    }}>
                        <img src={src} alt={title} className="img" />
                    </div>
                )
            })}
        </div>
    )
}

export { Qualification }