import EmailForm from './EmailForm';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className='container'>
      <div className='contact-info'>
        <h1>People Are Our Business.</h1>
        <h4>
          Our commitment is to find the most qualified candidate for any job in an honest, efficient, and ethical
          manner.
        </h4>
        <div className='contact-icons'>
          <img src='email.png' />
          <p>info@osrecruiter.com</p>
          <img src='phone.png' />
          <p>916-633-1863</p>
          <img src='office.png' />
          <p>1401 21st Street Suite 5230 Sacramento, CA 95811</p>
        </div>
        <EmailForm />
      </div>
    </div>
  );
};

export default ContactUs;
