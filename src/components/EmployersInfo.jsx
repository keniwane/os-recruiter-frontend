/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import EmailForm from './EmailForm';
import './EmployersInfo.css';

const EmployersInfo = () => {
  return (
    <div className='employers container'>
      <div className='employers-wrapper'>
        <div className='employers-info'>
          <h1>Recruiting? We're on the Job!</h1>
          <p>
            Searching for candidates can be an arduous task and is often time-consuming for even the most experienced
            recruiter. Using our candidate sourcing platform and global network of recruiters, we work to simplify and
            streamline the process for you.
          </p>
          <br />
          <p>
            Our flat-fee cost structure ensures no extra or hidden fees are added to your project. When you engage our
            services, you are assigned an Executive Client Advisor to oversee the team of recruiters working for you. We
            also guarantee the most diverse and inclusive outreach to candidates of all demographics.
          </p>
          <br />
          <p>
            With each engagement, your posting will also be shared with our partner diversity search firm
            (deiajobs.com), where visibility will further spread to dozens of diverse organizations. We are also able to
            undertake confidential job searches and handle all recruitment and selection processes discretely.
          </p>
        </div>
        {/* <div className='employers-img'>
          <img src='about-us.jpg' />
        </div> */}
        <div className='section-header'>
          <h1>Ready to Get Started?</h1>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default EmployersInfo;
