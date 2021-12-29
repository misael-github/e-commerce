import imgBanner from "../../assets/banner.jpg"
import "../styles/banner.css"

const Banner = () => {
    return (
      <div className="container-banner">
          <img src={imgBanner} className="img-banner"/>
      </div>
    )
}

export default Banner