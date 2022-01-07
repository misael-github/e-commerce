import "../styles/button.css"

const Button = (props) => {
    return (
        <button className="button">{props.title}</button>
    )
}
export default Button