import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons';


function Footer () {
    return (
        
        <IconContext.Provider value={{ color: "cornflowerblue", size: "1.5em"}}>
            <footer>
                    <ul className="social-media">
                        <a href="https://facebook.com"><FaFacebook /></a>
                        <br />
                        <a href="https://github.com/juanhdzx"><FaGithub color="black"/></a> 
                        <br />
                        <a href="https://twitter.com"><FaTwitter /></a> 
                        <br />
                    </ul>  
                    <div>
                        <p>Copyrights | Fitment Only | All rights reserved.</p>
                    </div>
            </footer>
        </IconContext.Provider>
    )
}

export default Footer;