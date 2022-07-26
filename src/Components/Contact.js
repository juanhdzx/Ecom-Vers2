import React from 'react';
import Background from './porsche.jpeg';

function Contact() {
    return (
        <div>
                <h1>Fitment Only</h1>

            <div className="contact-img" style={{ 
                        backgroundImage: `url(${Background})`, 
                        backgroundRepeat: 'no-repeat',
                        // backgroundSize: 'contain', 
                        height:'800px',
                        width:'600'
                    }}>
                
                    <h4>Contact Us!</h4>
                    {/* <div class="hero-image"> <!-- using this tag to conatin information in multiple parts of my website --> */}
                    {/* <img src="https://image.nengun.com/catalogue/1024x768/nengun-6532-03-workwheels-meister_s1_3_piece_wheels_-_custom_order-b1c2d0ce.jpg" id="contact-img" alt="Porsche 911"/> */}
            </div>
                <h3>Leave a Message</h3>
            


            <main>
            <form>
            
                {/* <!-- FIRST NAME    --> */}
        
                <label for="first-name" class="inputText">First Name</label>
                <br />
                {/* <br/> <!-- adds a line break to text but I am also using it to add space between certain information and also the appearance of my website --> */}
                <input type="text" id="first-name" name="first-name" placeholder="Enter first name"/>
                <br/>
                <br/>
                {/* <!-- LAST NAME   --> */}
        
                <label for="last-name" class="inputText">Last Name</label>
                <br/>
                <input type="text" id="last-name" name="last-name" placeholder="Enter last name"/>
                <br/>
                <br/>
                {/* <!-- PHONE NUMBER   --> */}
        
                <label for="phone-number" class="inputText">Phone Number</label>
                <br/>
                <input type="text" id="phone-number" name="phone-number" placeholder="Phone number"/>
                <br/>
                <br/>
                {/* <!--  EMAIL  --> */}
                <label for="email" class="inputText">Email</label>
                <br/>
                <input type="text" id="email" name="email" placeholder="@address"/>
                <br/>
                <br/>
        
                {/* <!--  COMMENT BOX  --> */}
        
                <label for="comment-box" className="inputText">Comment Box</label>
                <br/>
                <textarea id="comment-box" name="comment-box" placeholder="How can we help?"></textarea>
                <br/>
                <br/>
        
                {/* <!--  SUBMIT BUTTON  --> */}
                <input type="submit" value="Submit" class="submitbutton"/>
        
            </form>
            </main>
    </div>
    )
}

export default Contact