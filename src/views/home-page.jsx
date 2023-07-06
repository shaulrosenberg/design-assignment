import { NavLink } from "react-router-dom";
import { MainHero } from "../cmps/main-hero";
import cogIcon from '../assets/img/icon-cog.svg';
import chartIcon from '../assets/img/icon-chart.svg';
import brandIcon from '../assets/img/icon-brand-recognition.svg';

export function HomePage() {
    return (
        <section className='home-page full'>

            <article className="hero-find">
                <p className="find-header">find the best <span>talent</span></p>
                <p className="find-content">Finding the right people and building high performing teams can be hard.
                    Most companies aren’t tapping into the abundance of global talent.
                    We’re about to change that.</p>
            </article>


            <article className="hero-build">

                <p>Build & manage distributed teams like no one else.</p>

                <section className="card-list">

                    <article className="card">
                        <img alt="card-1" src={brandIcon}></img>
                        <div className="card-info">
                            <h3>Experienced Individuals</h3>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </article>

                    <article className="card">
                        <img alt="card-2" src={cogIcon}></img>
                        <div className="card-info">
                            <h3>Easy to Implement</h3>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                    </article>

                    <article className="card">
                        <img alt="card-3" src={chartIcon}></img>
                        <div className="card-info">
                            <h3>Enhanced Productivity</h3>
                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </article>

                </section>

            </article>

            <MainHero />

            {/* red section */}
            <section className="newsletter">
                <div className="contact-container">
                    <h2>Ready to get started?</h2>
                    <NavLink to="/contact" className="nav-link">contact us</NavLink>
                </div>
            </section>
        </section>
    )
}
