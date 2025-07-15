import React, { useState } from 'react';
import { contactAPI } from './apiService';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_yw8qvi2';
const EMAILJS_TEMPLATE_ID = 'template_188emqr';  
const EMAILJS_PUBLIC_KEY = 'F1DEta-r63kmADyV7'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            setSubmitStatus('error');
            console.error('Error sending email:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{padding: '20px', maxWidth: '600px' }}>
            <h2>Contact Me</h2>

            {submitStatus === 'success' && (
                <div style={{
                    color: 'green',
                    backgroundColor: '#d4edda',
                    padding: '10px',
                    marginBottom: '20px',
                    borderRadius: '5px'
                }}>
                    Thank you! Your message has been sent successfully.
                </div>
            )}

            {submitStatus === 'error' && (
                <div style={{
                    color: 'red',
                    backgroundColor: '#f8d7da',
                    padding: '10px',
                    marginBottom: '20px',
                    borderRadius: '5px'
                }}>
                    Sorry, there was an error sending your message. Please try again.
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{marginBottom: '15px'}}>
                    <label style={{ display: 'block', marginBottom: '5px'}}>
                        Name *
                    </label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }} 
                    />
                </div>

                <div style={{marginBottom: '15px'}}>
                        <label style={{display: 'block', marginBottom: '5px'}}>
                            Email *
                        </label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                        />
                </div>
                <div style={{marginBottom: '15px'}}>
                    <label style={{display: 'block', marginBottom: '5px'}}>
                        Subject *
                    </label>
                    <input 
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </div>
                <div style={{marginBottom: '15px'}}>
                    <label style={{display: 'block', marginBottom: '5px'}}>
                        Message*
                    </label>
                    <textarea 
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        backgroundColor: isSubmitting ? '#ccc' : '#007bff',
                        color: 'white',
                        padding: '12px 24px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

            </form>
        </div>
    )
};

export default Contact;