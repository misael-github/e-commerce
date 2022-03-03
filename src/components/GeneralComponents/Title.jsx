import "../../styles/GeneralComponents/title.css"

const Title = (props) => {
    return (
      <div className="container__title-pages">
          <h2 className="title-pages">{props.text}</h2>
      </div>
    )
}
export default Title