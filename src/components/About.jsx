import './About.css';

const AboutUs = () => {
  return (
    <div className='container'>
      <div className='about-wrapper'>
        <div className='about-text'>
          <h3>Why Choose Our Services?</h3>
          <p>
            Open Source Recruiter is our clients’ platform of choice because of guaranteed, efficient results which
            exceed expectations while being delivered with a smile. Why would you pay for useless job ads that generate
            no candidates or give you a huge pool of unqualified applicants that you then have to sort through? With
            OSR, the only difficult decision is choosing which of our incredible candidates will best empower your
            organization.
          </p>
        </div>
        <div className='about-img'>
          <img src='business.jpg' />
        </div>
      </div>
      <div className='about-wrapper'>
        <div className='about-img'>
          <img src='about-process.webp' />
        </div>
        <div className='about-text'>
          <h3>Our Process</h3>
          <p>
            Our process is designed to be simple yet effective. Once you start an engagement with OSR we will sit down
            with you to get all the details to identify your ideal candidate and understand all the qualifications and
            cultural fit for the position. We will create a custom social media kit, place targeted ads, and run the
            search data you provided into our proprietary system to start sourcing candidates. From there, our highly
            skilled recruiters will start the outreach with candidates. Our searches also reach a diverse and inclusive
            pool of candidates through our partnership with deiajobs.com.
          </p>
        </div>
      </div>
      <div className='about-wrapper'>
        <div className='about-text'>
          <h3>Our Commitment</h3>
          <p>
            Our commitment is to find you the most qualified candidate for any job in an honest, efficient, and ethical
            manner.
          </p>
        </div>
        <div className='about-img'>
          <img src='commitment.jpg' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
