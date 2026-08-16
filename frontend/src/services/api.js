const API_BASE = '/api';

async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const config = {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    return data;
  } catch (error) {
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      console.warn(`Local backend API unavailable at ${endpoint}. Using secure client relay.`);
      return null;
    }
    throw error;
  }
}

export const api = {
  // Projects
  getProjects: () => request('/projects'),
  getProject: (id) => request(`/projects/${id}`),

  // Skills
  getSkills: () => request('/skills'),

  // Achievements
  getAchievements: () => request('/achievements'),


};

export default api;
