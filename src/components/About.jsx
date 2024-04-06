import './About.css';

const AboutUs = () => {
  return (
    <div className='container'>
      <div className='about-wrapper'>
        <div className='about-text'>
          <h3>Who We Are</h3>
          <p>
            Open Source Recruiter (OSR) is a top-rated military-friendly search firm. We believe in doing good for those
            that have honorably served.Our Unique flat fee recruiting structure uses cutting-edge AI technology to
            source candidates. At the same time, our vast global network of recruiters works to find you teh ideal
            candidate quickly. Our innovative approach to recruiting is effective,efficient, and, most of all
            affordable! With partial proceeds from every search benefiting Wounded Veteran Charities, we believe in
            doing good for those that have honorably served.
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
          <h3>Why Choose Our Services?</h3>
          <p>
            Open Source Recruiter is our clients’ platform of choice because of guaranteed, efficient results which
            exceed expectations while being delivered with a smile. Why would you pay for useless job ads that generate
            no candidates or give you a huge pool of unqualified applicants that you then have to sort through? With
            OSR, the only difficult decision is choosing which of our incredible candidates will best empower your
            organization.
          </p>
        </div>
      </div>
      <div className='about-wrapper'>
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
        <div className='about-img'>
          <img src='commitment.jpg' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
