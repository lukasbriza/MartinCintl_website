import { useRef, useEffect } from "react";
import { galleryShowAnimation } from "../../Functions/AnimationManager";
import Slider from "react-touch-drag-slider";

function Gallery(props) {
  //const [index, setIndex] = useState(props.activeIndex)
  const galleryRef = useRef();
  const images = props.images;
  //////////////////////////////////////////////////////////////
  //SHOW ANIMATION//
  useEffect(() => {
    if (props.show === true) {
      galleryShowAnimation(galleryRef.current, true);
    }
    if (props.show === false) {
      galleryShowAnimation(galleryRef.current, false);
    }
  }, [props.show]);
  //////////////////////////////////////////////////////////////
  const setFinishedIndex = (i) => {
    console.log("finished dragging on slide", i);
    props.setActiveIndex(i);
  };
  const next = () => {
    if (props.activeIndex < images.length - 1) {
      props.setActiveIndex(props.activeIndex + 1);
    }
  };
  const previous = () => {
    if (props.activeIndex > 0) props.setActiveIndex(props.activeIndex - 1);
  };
  return (
    <div className="gallery-wrapper" ref={galleryRef}>
      <div className="cross-container">
        <Cross
          onClick={props.setGallery}
          setShowGalleryTiles={props.setShowGalleryTiles}
        />
      </div>
      <div className="gallery-container">
        <ArrowSVG className="leftArr" onClick={previous} />

        <Slider
          onSlideComplete={setFinishedIndex}
          onSlideStart={(i) => {
            console.clear();
            console.log("started dragging on slide", i);
          }}
          activeIndex={props.activeIndex}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}
        >
          {images.map(({ title, src }, index) => (
            <img src={src} key={index} alt={title} />
          ))}
        </Slider>

        <ArrowSVG className="rightArr" onClick={next} />
      </div>
    </div>
  );
}

function ArrowSVG(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <path fill="white" d="M10.477 0H1.5l12.024 12L1.5 24h8.977L22.5 12z" />
    </svg>
  );
}

function Cross(props) {
  return (
    <div
      className="cross-wrapper"
      onClick={() => {
        props.onClick(false);
        props.setShowGalleryTiles(true);
      }}
    >
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}

export { Gallery };
