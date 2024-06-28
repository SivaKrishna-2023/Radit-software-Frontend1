import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { getConsultants, createConsultant, updateConsultant, deleteConsultant } from './services/api';
import ConsultantForm from './components/ConsultantForm';
import ConsultantList from './components/ConsultantList';
import LandingPage from './components/LandingPage';
import './App.css';

const App = () => {
  const [consultants, setConsultants] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedConsultant, setEditedConsultant] = useState(null);

  useEffect(() => {
    loadConsultants();
  }, []);

  const loadConsultants = async () => {
    try {
      const response = await getConsultants();
      setConsultants(response.data);
    } catch (error) {
      console.error('Error loading consultants:', error);
    }
  };

  const handleCreate = async (data) => {
    try {
      await createConsultant(data);
      loadConsultants();
    } catch (error) {
      console.error('Error creating consultant:', error);
    }
  };

  const handleUpdate = async (consultant) => {
    try {
      setEditMode(true);
      setEditedConsultant(consultant);
    } catch (error) {
      console.error('Error updating consultant:', error);
    }
  };

  const handleEditCancel = () => {
    setEditMode(false);
    setEditedConsultant(null);
  };

  const handleEditSubmit = async (data) => {
    try {
      await updateConsultant(editedConsultant._id, data);
      setEditMode(false);
      setEditedConsultant(null);
      loadConsultants(); // Refresh consultants after update
    } catch (error) {
      console.error('Error updating consultant:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteConsultant(id);
      loadConsultants(); // Refresh consultants after delete
    } catch (error) {
      console.error('Error deleting consultant:', error);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">
            <img src="https://res.cloudinary.com/dy5xxxedo/image/upload/v1719507058/sy0y8w8ccba0fec7j5fm.jpg" alt="TechPro Consultants Logo" className="nav-logo" />
          </Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/consultants">Consultants</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/consultants"
            element={
              <>
                <h1>Consultants</h1>
                {editMode ? (
                  <ConsultantForm
                    onCreate={handleCreate}
                    onUpdate={handleEditSubmit}
                    onCancel={handleEditCancel}
                    consultant={editedConsultant}
                  />
                ) : (
                  <ConsultantForm onCreate={handleCreate} />
                )}
                <ConsultantList consultants={consultants} onUpdate={handleUpdate} onDelete={handleDelete} />
              </>
            }
          />
        </Routes>
        <footer>
          <div className="footer-content">
            <p>&copy; 2024 TechPro Consultants. All rights reserved.</p>
            <ul>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms of Service</Link></li>
              <li><Link to="/">Contact Us</Link></li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
