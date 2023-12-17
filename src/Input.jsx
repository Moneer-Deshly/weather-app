
function Input(props) {

    return (
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} onKeyUp={props.onKeyUp}/>
    );
}

export default Input