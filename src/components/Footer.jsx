import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; 
import PatternFooter from '../assets/PatternFooter.png';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-top">
         <div className="pattern">
              <img src={PatternFooter} alt="pattern" />
         </div>
         <div className="columns">    
            <div class="logo-column">
                <img src={logo} alt="Logo" class="footer-logo" />
                <p class="footer-description">
                    Takeaway & Delivery template <br /> for small – medium businesses.
                </p>
            </div>
            <div className="footer-columns">
                <div class="footer-column">
                    <h4>Company</h4>
                        <ul>
                            <li><button>Home</button></li>
                            <li><button>Order</button></li>
                            <li><button>FAQ</button></li>
                            <li><button>Contact</button></li>
                        </ul>
                </div>

                <div class="footer-column">
                    <h4>Template</h4>
                        <ul>
                            <li><button>Style Guide</button></li>
                            <li><button>Changelog</button></li>
                            <li><button>Licence</button></li>
                            <li><button>Webflow University</button></li>
                        </ul>
                </div>

                <div class="footer-column">
                    <h4>Flowbase</h4>
                        <ul>
                            <li><button>More Cloneables</button></li>
                        </ul>
                 </div>
            </div>
        </div>
      </div>



      <div class="footer-bottom">
        <p>
          Built by <span class="link">Flowbase</span> · Powered by <span className="link">Webflow</span>
        </p>
        <div class="footer-socials">
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
