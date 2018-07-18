import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

class Contact extends Component {
    render() {
        return (
            <ScrollableAnchor id="Contact">
                <div className="contact-form">
                    <div className='container'>
                        <form action="https://formspree.io/bensingerbilly@gmail.com" method="POST" >
                            <div className='row'>
                                <div className='col-md-6'>
                                    <input type="text" placeholder="Name" name="name" autoComplete='name'/>
                                </div>
                                <div className='col-md-6'>
                                    <input type="email" placeholder="Email" name="_replyto" autoComplete='email'/>
                                </div>
                                <div className='col-md-12'>
                                    <textarea name="message" rows="3" placeholder="Message" />
                                </div>
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </ScrollableAnchor>
        );
    }
};

module.exports = Contact;