import axios from 'axios';

const API_BASE_URL = 'https://portfolio-api-gkb9ehdrf8ckf7fj.canadacentral-01.azurewebsites.net';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json', 
    },
});

export const projectsAPI = {
    getAll: () => api.get('/projects'),
    getById: (id) => api.get(`/projects/${id}`),
    getFeatured: () => api.get('/projects/featured')
};

export const skillsAPI = {
    getAll: () => api.get('/skills'),
    getByCategory: (category) => api.get(`/skills/category/${category}`),
    getCategories: () => api.get('/skills/categories'),
};

export const contactAPI = {
    submit: (message) => api.post('/contact', message)
};

export default api;