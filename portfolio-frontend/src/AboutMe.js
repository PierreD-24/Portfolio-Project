import React from 'react';

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="about-container">
                <div className="about-content">
                    {/* Profile Section */}
                    <div className="profile-section">
                        <div className="profile-image-container">
                            <img
                                src="/images/profile-photo.PNG"
                                alt="Profile"
                                className="profile-image"
                            />
                        </div>
                        <div className="profile-info">
                            <h2>About Me</h2>
                            <h3>Full-Stack Developer</h3>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <span className="contact-label">Email:</span>
                                    <span className="contact-value">pdahrouj7@gmail.com</span>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-label">Location:</span>
                                    <span className="contact-value">Chico, CA</span>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-label">Status:</span>
                                    <span className="contact-value">Available for new opportunities</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio Section */}
                    <div className="bio-section">
                        <div className="bio-content">
                            <p className="bio-intro">
                                Hello! I'm a passionate full-stack developer with a strong foundation in modern web technologies.
                                I enjoy creating efficient, scalable, and user-friendly applications that solve real-world problems.
                            </p>
                        </div>
                    </div>

                    <div className="social-section">
                        <h4>View Resume</h4>
                        <div className="social-links">
                            <a
                                href="https://docs.google.com/document/d/1iAPWs5lFNQBVUmM9StslAkQ_JW-QvOSGOin_cbKi1iM/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link resume"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;