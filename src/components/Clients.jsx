/* eslint-disable react/no-unescaped-entities */
import './Clients.css';

const Clients = () => {
  return (
    <div className='testimonials'>
      <figure className='testimonial-text'>
        <figcaption>
          <blockquote>
            <p>
              At my company, we hire all levels of employees and OSR is the only source we use. Posting positions are
              fine but this costs money and leaves us with more work, and in the end, we are about 50/50 for good
              long-term hires.
            </p>
          </blockquote>
          <h3>Jack Harris</h3>
          <h4>Regent Noble</h4>
        </figcaption>
      </figure>
      <figure className='testimonial-text'>
        <figcaption>
          <blockquote>
            <p>
              Using Open Source Recruiter I never have to worry about filling hard to fill positions and the best part
              of this is we don't have to pay for expensive and noneffective listings. We even use OSR for a senior
              leadership role with great success!
            </p>
          </blockquote>
          <h3>Barron Smith</h3>
          <h4>CD Printing</h4>
        </figcaption>
      </figure>
      <figure className='testimonial-text'>
        <figcaption>
          <blockquote>
            <p>
              Finding the right candidates consumes a lot of time and money at our company. After utilizing Open Source
              Recruiter, we were able to streamline the entire recruitment process and find quality individuals in no
              time.
            </p>
          </blockquote>
          <h3>Tomás Wayne</h3>
          <h4>Collaboratory</h4>
        </figcaption>
      </figure>
    </div>
  );
};

export default Clients;
