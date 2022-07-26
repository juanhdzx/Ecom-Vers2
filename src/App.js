//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Product from './Components/Product';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';






function App(){
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
                <Footer />
            </Router>
        </section>
    </React.StrictMode>
)
}

export default App;
