import { Link } from 'react-router-dom';
import './MoreInfo.css';
import React from 'react';

const MoreInfo = () => {
  return (
    <div className='container'>
      <div className='info-wrapper'>
        <div className='info-header'>
          <div className='info-image'>
            <img src='analytics.jpg' alt='Analytics' />
          </div>
          <div className='info-text'>
            <h2>Recruitment Automation</h2>
            <p>
              Open Source Recruiter is an automation recruitment firm that utilizes machine learning technology across
              multiple platforms to efficiently source candidates for employers and match job seekers to desired
              positions.
            </p>
            <Link className='learn-more button' to={`/aboutus`}>
              Learn More
            </Link>
          </div>
        </div>

        <div className='info-body-text'>
          <div className='info-text'>
            <h2>Open Source Model</h2>
            <p>
              Our open-source business model allows recruiters to work directly with our company to streamline the
              sourcing-to-hire process, allowing for the most efficient and cost-effective approach to recruiting in the
              industry.
            </p>

            <Link className='learn-more button' to={`/aboutus`}>
              Learn More
            </Link>
          </div>

          <div className='info-image'>
            <img src='recruitment.jpg' alt='Recruitment' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
