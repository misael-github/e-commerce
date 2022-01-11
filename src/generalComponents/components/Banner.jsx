// import imgBanner from "../../assets/banner.jpg"
import imgElectrodomesticos from "../../assets/electrodomesticosBannerGrande.jpg"

import "../styles/banner.css"

const Banner = () => {
    return (
      <div className="container-banner">
          <img src={imgElectrodomesticos} className="img-banner"/>
      </div>
    )
}

export default Banner