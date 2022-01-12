import "../styles/button.css"

const Button = (props) => {
    return (
        <button className={`button ${props.variant}` } type={props.type}>{props.title}</button>
    )
}
export default Button