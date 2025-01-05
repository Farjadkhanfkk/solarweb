'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import Pic from './assets/contactusbanner1.jpg'; // Adjust the path as necessary
import Logo from '../../../../public/assets/logo.png'; // Adjust the path as necessary

const ContactForm = () => {
    const [formData, setFormData] = useState({
        phone: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');
    
        try {
            const response = await fetch('http://localhost:8000/api/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: formData.phone,
                    message: formData.message,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                setResponseMessage('Message sent successfully!');
                console.log('Server response:', data);
            } else {
                const errorData = await response.json();
                console.error('Error submitting form:', errorData);
                setResponseMessage('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setResponseMessage('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    

    return (
        <>
            {/* Page Title Section */}
            <section
                style={{
                    backgroundImage: `url(${Pic.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    padding: '100px 0',
                    height: '300px',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                {/* Logo in the top-right corner */}
                <img
                    src={Logo.src}
                    alt="Logo"
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        width: '100px', // Adjust size for responsiveness
                    }}
                />
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ margin: 0, fontSize: '28px' }}>Almas Solar Solution</h1>
                    <h3 style={{ margin: 0, fontSize: '18px' }}>Contact Us</h3>
                </div>
            </section>

            {/* Contact Form Section */}
            <section style={{ paddingBottom: '80px' }}>
                <div className="container bg-success mt-5 mb-5">
                    <div className="col-lg-12 col-xl-12 mx-auto">
                        <div className="shadow p-4 rounded" style={{ backgroundColor: '#fff' }}>
                            <div className="text-center mb-4">
                                <span className="text-primary fw-bold display-28 d-block mb-2">#Send Us Message</span>
                                <h2 className="h1 mb-0">Contact With Us</h2>
                            </div>
                            <form className="contact quform" onSubmit={handleSubmit}>
                                <div className="quform-elements">
                                    <div className="row">
                                        {/* Contact Number Field */}
                                        <div className="col-md-6 mb-4" style={responsiveStyles.fieldContainer}>
                                            <div className="quform-element form-group">
                                                <label htmlFor="phone" style={{ marginBottom: '5px' }}>
                                                    <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
                                                    Contact Number <span className="quform-required">*</span>
                                                </label>
                                                <div className="quform-input">
                                                    <input
                                                        className="form-control"
                                                        id="phone"
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Your phone here"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                        style={responsiveStyles.input}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message Field */}
                                        <div className="col-md-12 mb-4">
                                            <div className="quform-element form-group">
                                                <label htmlFor="message" style={{ marginBottom: '5px' }}>
                                                    Message <span className="quform-required">*</span>
                                                </label>
                                                <div className="quform-input">
                                                    <textarea
                                                        className="form-control"
                                                        id="message"
                                                        name="message"
                                                        rows="3"
                                                        placeholder="Tell us a few words"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                        style={responsiveStyles.textarea}
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="quform-submit-inner">
                                                <button
                                                    className="btn-style2 primary"
                                                    type="submit"
                                                    style={{ width: '100%' }}
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            {/* Response Message */}
                            {responseMessage && (
                                <div className="alert mt-3" role="alert">
                                    {responseMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @media (max-width: 768px) {
                    section {
                        height: 200px;
                        padding: 60px 0;
                    }
                    img {
                        width: 80px;
                    }
                    h1 {
                        font-size: 24px;
                    }
                    h3 {
                        font-size: 16px;
                    }
                }
                @media (max-width: 576px) {
                    .container {
                        padding: 15px;
                    }
                    .form-control {
                        font-size: 14px;
                    }
                    .textarea {
                        height: 200px;
                    }
                    button {
                        width: 100%;
                    }
                }
            `}</style>
        </>
    );
};

const responsiveStyles = {
    fieldContainer: {
        flex: '0 0 100%',
        maxWidth: '100%',
    },
    input: {
        borderRadius: '15px',
        marginBottom: '20px',
        height: '45px',
        fontSize: '16px',
    },
    textarea: {
        borderRadius: '15px',
        marginBottom: '20px',
        height: '200px',
        fontSize: '16px',
    },
};

export default ContactForm;
