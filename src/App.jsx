import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer';
import { HomePage } from './views/home-page';
import { AboutPage } from './views/about-page';
import { ContactUs } from './views/contact-us';


function App() {
    return (
        <Router>
            <section className="main-layout">
                <AppHeader />
                <main className='main-content main-layout full'>
                    <Routes>
                        <Route element={<HomePage />} path="/" />
                        <Route element={<AboutPage />} path="/about" />
                        <Route element={<ContactUs />} path="/contact" />
                    </Routes>
                </main>
                <AppFooter />
            </section>
        </Router>
    );
}

export default App;
