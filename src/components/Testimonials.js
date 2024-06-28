import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'John Doe', text: 'TechPro Consultants helped us streamline our IT operations. Highly recommended!' },
    { id: 2, name: 'Jane Smith', text: 'Their development team delivered exactly what we needed, on time and within budget.' },
    { id: 3, name: 'Michael Johnson', text: 'The support team at TechPro Consultants is responsive and knowledgeable.' },
  ];

  return (
    <div className="testimonials-container">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial-card">
          <p>{testimonial.text}</p>
          <p className="testimonial-author">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
