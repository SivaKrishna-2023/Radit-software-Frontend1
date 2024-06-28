import React from 'react';
import './ConsultantList.css';

const ConsultantList = ({ consultants, onUpdate, onDelete }) => {
  return (
    <div className="list-container">
      {consultants.map((consultant) => (
        <div className="consultant-card" key={consultant._id}>
          <div>
            <h3>{consultant.name}</h3>
            <p>Expertise: {consultant.expertise}</p>
            <p>Experience: {consultant.experience} years</p>
            <p>Email: {consultant.email}</p>
          </div>
          <div className="actions">
            <button className="edit-btn" onClick={() => onUpdate(consultant)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(consultant._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConsultantList;
