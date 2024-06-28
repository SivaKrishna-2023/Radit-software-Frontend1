import React, { useState, useEffect } from 'react';
import './ConsultantForm.css';

const ConsultantForm = ({ onCreate, onUpdate, onCancel, consultant }) => {
  const [name, setName] = useState('');
  const [expertise, setExpertise] = useState('');
  const [experience, setExperience] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (consultant) {
      setName(consultant.name);
      setExpertise(consultant.expertise);
      setExperience(consultant.experience);
      setEmail(consultant.email);
    }
  }, [consultant]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (consultant) {
      onUpdate({ name, expertise, experience, email });
    } else {
      onCreate({ name, expertise, experience, email });
    }
    setName('');
    setExpertise('');
    setExperience('');
    setEmail('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Expertise" value={expertise} onChange={(e) => setExpertise(e.target.value)} required />
      <input type="number" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      {consultant ? (
        <div className="form-actions">
          <button type="submit">Update Consultant</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      ) : (
        <button type="submit">Add Consultant</button>
      )}
    </form>
  );
};

export default ConsultantForm;
