import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://radit-software-h3dnf0e8ddhpcbdj.germanywestcentral-01.azurewebsites.net/api/consultants';

// Get all consultants
export const getConsultants = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    console.error('Error fetching consultants:', error);
    throw error;
  }
};

// Create a new consultant
export const createConsultant = async (consultant) => {
  try {
    const response = await axios.post(API_URL, consultant);
    return response;
  } catch (error) {
    console.error('Error creating consultant:', error);
    throw error;
  }
};

// Update a consultant
export const updateConsultant = async (id, consultant) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, consultant);
    return response;
  } catch (error) {
    console.error('Error updating consultant:', error);
    throw error;
  }
};

// Delete a consultant
export const deleteConsultant = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response;
  } catch (error) {
    console.error('Error deleting consultant:', error);
    throw error;
  }
};
