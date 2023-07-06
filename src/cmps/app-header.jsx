import { NavLink, redirect, useNavigate } from "react-router-dom";

export function AppHeader() {
    const navigate = useNavigate()

    function redirect() {
        navigate('/')
    }

    return (
        <section className="app-header main-layout full">
            <div className="app-header-container">
                <nav className="nav-links">
                    <h1 className="logo" onClick={redirect}>myteam</h1>
                    <NavLink className="nav-link" to="/">
                        home
                    </NavLink>
                    <NavLink className="nav-link" to="/about">
                        about
                    </NavLink>
                </nav>
                <NavLink className="nav-link nav-link-right" to="/contact">
                    contact us
                </NavLink>
            </div>
        </section>
    );
}
