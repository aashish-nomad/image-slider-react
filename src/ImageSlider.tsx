import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
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
    <img src={imageUrls[imageIndex]} className="img-slider-img"/>
    <button className="img-slider-button" style={{left: 0}} onClick={handleLeftClick}><ArrowBigLeft/></button>
    <button className="img-slider-button" style={{right: 0}} onClick={handleRightClick}><ArrowBigRight/></button>
  </div>
}