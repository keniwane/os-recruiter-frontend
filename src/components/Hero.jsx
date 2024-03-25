const Hero = () => {
  return (
    <div className='container'>
      <div className='flex-layout'>
        <div className='text-section'>
          <h1>
            Accelerate Your Hiring Journey!
            <br /> <span>Where AI Meets Hire Expectations</span>
          </h1>
          <div className='cta-buttons'>
            <button className='button'>Employers</button>
            <button className='button'>Candidates</button>
          </div>
        </div>
        <div className='video-box'>
          <video src='osr-video.mp4' controls autoPlay muted>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
