import React, {useState, useEffect} from 'react';
import {skillsAPI} from './apiService';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                setLoading(true);
                const response = await skillsAPI.getAll();
                setSkills(response.data);
                setError(null);
            } catch (err) {
                setError('Failed to load skills');
                console.error('Error fetching skills', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    if (loading) return <div>Loading skills...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>My Skills</h2>
            {skills.map(skill => (
                <div key={skills.id} style={{
                    border: '1px solid #ddd',
                    margin: '5px',
                    padding: '10px',
                    display: 'inline-block',
                    borderRadius: '5px'
                }}>
                    <strong>{skill.name}</strong>
                    <br />
                    <small>{skill.category} - Level {skill.proficiencyLevel}/5</small>
                </div>
            ))}
        </div>
    );
};

export default Skills;