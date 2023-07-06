import { NavLink } from "react-router-dom";

export function AppFooter() {
    return (
        <footer className="app-footer main-layout full">
            <section className="footer-links">
                <h2>myteam</h2>
                <div>
                    <NavLink to="/">home</NavLink>
                    <NavLink to="/about">about</NavLink>
                </div>
            </section>

            <section className="footer-address">
                <p>
                    <span>987 Hillcrest Lane</span>
                    <span>Irvine, CA</span>
                    <span>California 92714</span>
                    <span>Call Us: 949-833-7432</span>
                </p>
            </section>

            <section className="social-links">
                <p className="links">
                    <span>Twitter</span>
                    <span>Facebook</span>
                    <span>Dribble</span>
                </p>
                <p>Copyright 2020. All Rights Reserved</p>
            </section>
        </footer>
    );
}
