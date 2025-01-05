import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-body footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: '6rem' }}>
      <div className="container py-5">
        <div className="row g-5">
          {/* Newsletter Section - Aligned to the Left */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            {/* <p className="text-white mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p> */}
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                Sign Up
              </button>
            </div>
          </div>

          {/* Address Section - Aligned to the Right */}
          <div className="col-lg-3 col-md-6 ms-auto">
            <h5 className="text-white mb-4">Contact Us</h5>
            <p className="mb-2 text-white">
              <FaMapMarkerAlt className="me-3" />
              Dha phase 2, sector H, Islamabad, Pakistan
            </p>
            <p className="mb-2 text-white">
              <FaWhatsapp className="me-3" />
              +1 (716) 209-7873
            </p>
            <p className="mb-2 text-white">
              <FaPhoneAlt className="me-3" />
              +92 336 100000 470
            </p>
            <p className="mb-2 text-white">
              <FaEnvelope className="me-3" />
              almaassolarsolution@gmail.com
            </p>
            <div className="d-flex pt-2">
              {/* <a className="btn btn-square btn-outline-light btn-social me-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a> */}
              <a className="btn btn-square btn-outline-light btn-social me-2" href="https://www.facebook.com/profile.php?id=61566737597854&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a className="btn btn-square btn-outline-light btn-social me-2" href="https://www.instagram.com/p/DBl81hGTBqp/?igsh=MXhxZHBsZHYwNHBweA==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              {/* <a className="btn btn-square btn-outline-light btn-social" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">Your Site Name</a>, All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a href="https://htmlcodex.com/">HTML Codex</a>
              <br />
              Distributed By: <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
