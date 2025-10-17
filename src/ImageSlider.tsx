import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import "./image-slider.css"


type ImageSliderProps = {
  imageUrls: string[]
}

export function ImageSlider({imageUrls}: ImageSliderProps) {
  const[imageIndex, setImageIndex] = useState(0)

  function handleLeftClick() {
    setImageIndex(index => {
      if(index == 0) return imageUrls.length - 1
      return index - 1
    })
  }

  function handleRightClick() {
    setImageIndex(index => {
      if(index == imageUrls.length - 1) return 0
      return index + 1
    })
  }

  return <div style={{
    width: "100%",
    height: "100%",
    position: 'relative'
  }}>
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      overflow: "hidden"
    }}>
      {imageUrls.map((imgSrc) => {
        return <img key={imgSrc} src={imgSrc} className="img-slider-img" style={{translate: `${-100 * imageIndex}%`}}/>
      })}
    </div>
    <button className="img-slider-button" style={{left: 0}} onClick={handleLeftClick}><ArrowBigLeft/></button>
    <button className="img-slider-button" style={{right: 0}} onClick={handleRightClick}><ArrowBigRight/></button>
    <div
    style={{
      position: "absolute",
      bottom: ".5rem",
      left: "50%",
      translate: "-50%",
      display: "flex",
      gap: '.25rem'
    }}
    >
      {imageUrls.map((_, index)=>(
        <button key={index} onClick={() => setImageIndex(index)} className="image-slider-dot-button">
          {index == imageIndex ? <CircleDot/> : <Circle/>}
        </button>
      ))}
    </div>
  </div>
}