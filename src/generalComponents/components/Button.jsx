import "../styles/button.css"

const Button = (props) => {
    return (
        <button className="button" type={props.type}>{props.title}</button>
    )
}
export default Button