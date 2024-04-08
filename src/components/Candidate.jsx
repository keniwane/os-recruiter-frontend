/* eslint-disable react/no-unescaped-entities */
import UploadFile from './UploadFile';
import './Candidate.css';

const Candidate = () => {
  return (
    <div className='container'>
      <div className='candidate-wrapper'>
        <div className='candidate-info-text'>
          <h1>Looking to Land Your Next Big Job?</h1>
          <p>
            Have <strong> Open Source Recruiter</strong> assist! We are specialists in talent acquisition and work with
            global clients to fill various positions. Movie stars and sports legends have dedicated agents to help them
            land jobs - now you can have one too!
          </p>
          <br />
          <p>
            By simply emailing or uploading your resume, you will be considered for every relevant job which comes
            across our desk. Our executive recruiters will reach out with opportunities of interest. Sign up today for
            free to hvae dozens of unique and interesting opportunities delivered directly to you!
          </p>
          <br />
          <h1>We're Here to Help!</h1>
          <p>
            Whether you are actively looking for work or are currently employed, partnering with a recruiter is a great
            way to find unexpected career advancement opportunities.
          </p>
          <br />
          <p>
            As new positions are posted across every industry every day, it can become overwhelming to stay informed of
            all key developments. Many times, new positions are not made available to the general public (or even
            available internally, for that matter) as employers silently search for candidates.
          </p>
          <br />
          <p>
            Working with a recruiter is a great way to have someone else campaign and market on your behalf, identifying
            opportunities you may not otherwise uncover.
          </p>
        </div>
        <UploadFile />
      </div>
    </div>
  );
};

export default Candidate;
