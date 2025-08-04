import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { projectsAPI } from './apiService';

const ProjectShowcase = () => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true);
                const response = await projectsAPI.getAll();
                setProject(response.data[0]);
                setError(null);
            } catch (err) {
                setError('Failed to load project');
                console.error('Error fetching project', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();

    }, []);

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        adaptiveHeight: true,
        dotsClass: "slick-dots custom-dots"
    };

    if (loading) return <div className="loading">Loading project...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!project) return <div className="error">No project found</div>;

    return (
        <div className='project-showcase'>
            <div className="showcase-container">
                <h2>Featured Project</h2>

                <div className='carousel-wrapper'>
                    <Slider {...carouselSettings}>
                        {project.images.map((image, index) => (
                            <div key={index} className='slide'>
                                <img
                                    src={image}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className="project-image"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='project-content'>
                    <div className='project-info'>
                        <h3 className='project-title'>{project.title}</h3>
                        <p className='project-description'>{project.description}</p>
                        {project.detailedDescription && (
                            <div className='detailed-description'>
                                <p>{project.detailedDescription}</p>
                            </div>
                        )}

                        <div className='technologies-section'>
                            <h4>Technologies Used</h4>
                            <div className='tech-grid'>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='tech-badge'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className='project-actions'>
                            {project.gitHubUrl && (
                                <a
                                    href={project.gitHubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='action-btn primary-btn'
                                >
                                    View Source Code
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="action-btn secondary-btn"
                                >
                                    View Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ProjectShowcase;