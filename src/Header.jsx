
function Header(props) {

    return (
        <header className={props.className}>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header