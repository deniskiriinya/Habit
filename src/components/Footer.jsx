import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-about">
          <h3>HabiTude</h3>
          <p>
            Your all-in-one habit-building companion — track, reflect, and grow daily with mindful practices.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Habit</Link></li>
            <li><Link to="/cooking">Cooking</Link></li>
            <li><Link to="/exercising">Exercising</Link></li>
            <li><Link to="/praying">Praying</Link></li>
            <li><Link to="/meditation">Meditation</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/HabiTude" target="_blank" rel="noreferrer" className="facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.twitter.com/yourusername" target="_blank" rel="noreferrer" className="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noreferrer" className="instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HabiTude. All rights reserved.</p>
      </div>
    </footer>
  );
}
