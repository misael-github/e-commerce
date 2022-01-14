import "../styles/button.css"

const Button = (props) => {
    return (
        <button className={`button ${props.variant}` } type={props.type} onClick={props.onClick}>{props.title}</button>
    )
}
export default Button