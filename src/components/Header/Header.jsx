import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <div className="header__container-logo">
                <img className="header__logo" src={"/img/logo.png"} alt="logo"/>
            </div>
            <div className="header__container-avatar">
                <p>N/A</p>
            </div>
        </header>
    )
}
