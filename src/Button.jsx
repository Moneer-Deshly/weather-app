
function Button(props) {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.onClick(event)
        }
    }

    return (
        <button className={props.className} onClick={props.onClick} onKeyDown={handleKeyDown} tabIndex={props.tabIndex}>{props.children}</button>
    );
}

export default Button