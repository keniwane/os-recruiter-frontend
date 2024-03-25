import React, { useState, useEffect } from 'react';
import './Industries.css';

const Industries = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);

    const handleChange = () => setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const industries = [
    { id: 'admin', name: 'Administration', image: 'industries/admin.svg' },
    { id: 'bank', name: 'Banking', image: 'industries/bank.svg' },
    { id: 'nonprofit', name: 'Non Profit', image: 'industries/nonprofit.svg' },
    { id: 'construction', name: 'Warehouse & Distribution', image: 'industries/construction.svg' },
    { id: 'accounting', name: 'Accounting', image: 'industries/accounting.svg' },
    { id: 'education', name: 'Education', image: 'industries/education.svg' },
    { id: 'healthcare', name: 'Healthcare', image: 'industries/healthcare.svg' },
    { id: 'sales', name: 'Sales', image: 'industries/sales.svg' },
  ];

  return (
    <div className='scroller container' data-animated={!reduceMotion}>
      <h3 className='industry-title'>Industries We Serve</h3>
      <div className='scroller__inner'>
        {industries.map((industry) => (
          <React.Fragment key={industry.id}>
            <figure className='logo-container'>
              <img src={industry.image} alt={industry.name} />
              <figcaption>{industry.name}</figcaption>
            </figure>
            {reduceMotion && (
              <figure className='logo-container' aria-hidden='true'>
                <img src={industry.image} alt={industry.name} />
                <figcaption>{industry.name}</figcaption>
              </figure>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Industries;
