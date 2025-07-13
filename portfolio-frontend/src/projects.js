import { useState, useEffect } from "react";
import { projectsAPI } from "./apiService";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await projectsAPI.getAll();
                setProjects(response.data);
                setError(null);
            } catch (err) {
                setError('Failed to load project');
                console.error('Error fetching projects: ', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <div>Loading projects...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{padding: '20px'}}>
            <h2>My Projects</h2>
            {projects.map(project => (
                <div key={project.id} style={{border: '1px solid #ccc', margin: '10px', padding: '15px'}}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                    <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
