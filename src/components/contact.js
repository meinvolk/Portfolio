import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div className="contact-form">
                <div className='container'>
                    <div className='row'>
                        <form action="https://formspree.io/bensingerbilly@gmail.com" method="POST" >
                            <input className='col-md-6' type="text" placeholder="Your Name" name="name" />
                            <input className='col-md-6' type="email" placeholder="Your email ... example@domain.com" name="_replyto" />
                            <textarea className='col-md-12' name="message" rows="3" placeholder="Your Message" />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

module.exports = Contact;