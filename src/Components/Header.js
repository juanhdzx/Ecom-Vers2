import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    /*Switch,*/
    Route,
    /*Link,*/
    NavLink,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import Contact from './Contact';
import Product from './Product';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <section id="mainSection">
            <Router>
                <Header />
                <article id="bodyApp">
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/Product' element={<Product />}/>
                        <Route path='/Contact' element={<Contact />}/>
                    </Routes>
                </article>
            </Router>
        </section>
    </React.StrictMode>
)

function Header() {
    return(
        //<Router>
        <header className="site-header">
                
            <nav>
                <ul className="navbar">
                    <li><NavLink
                         to='/Contact'
                            >Contact</NavLink>
                    </li>
                    <li><NavLink
                          to='/Product'
                            >Pieces</NavLink>
                    </li>
                    <li><NavLink to='/'   
                            >Home</NavLink>
                    </li>
                </ul>
            </nav>
         </header>
           
    );
}

export default Header;