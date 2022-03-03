import "../../styles/GeneralComponents/input.css";

const Input = (props) => {
  return (
      <input className="input" required name={props.name} placeholder={props.placeholder} type={props.type} onChange={props.onChange}/>
  );
};

export default Input;
