import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

class Contact extends Component {
    render() {
        return (
            <ScrollableAnchor id="Contact">
                <div className="contact-form">
                    <div className='container'>
                        <form name="contact" netlify>
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
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ScrollableAnchor>
        );
    }
};

export default Contact;