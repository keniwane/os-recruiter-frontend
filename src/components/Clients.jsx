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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque mauris luctus erat placerat
              aliquam. Donec maximus in risus at condimentum. Suspendisse non sem id enim pharetra tempor ut nec mauris.
            </p>
          </blockquote>
          <h3>Name</h3>
          <h4>Company</h4>
        </figcaption>
      </figure>
    </div>
  );
};

export default Clients;
