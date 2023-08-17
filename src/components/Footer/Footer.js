import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <h1>Ridex</h1>
            </Link>
            <p className="footer-text">
              Search for cheap rental cars in New York. With a diverse fleet of 19,000 vehicles, Waydex offers its
              consumers an
              attractive and fun selection.
            </p>
          </div>
          <ul className="footer-list">

            <li>
              <p className="footer-list-title">Company</p>
            </li>

            <li>
              <a href="#" className="footer-link">About us</a>
            </li>

            <li>
              <a href="#" className="footer-link">Pricing plans</a>
            </li>

            <li>
              <a href="#" className="footer-link">Our blog</a>
            </li>

            <li>
              <a href="#" className="footer-link">Contacts</a>
            </li>

          </ul>

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">Support</p>
            </li>

            <li>
              <a href="#" className="footer-link">Help center</a>
            </li>

            <li>
              <a href="#" className="footer-link">Ask a question</a>
            </li>

            <li>
              <a href="#" className="footer-link">Privacy policy</a>
            </li>

            <li>
              <a href="#" className="footer-link">Terms & conditions</a>
            </li>

          </ul>

          <ul className="footer-list">

            <li className="footer-list-title">
              <p >Neighborhoods in New York</p>
            </li>

            <li className="footer-link">
              <a href="#" >Manhattan</a>
            </li>

            <li className="footer-link">
              <a href="#" >Central New York City</a>
            </li>

            <li className="footer-link">
              <a href="#" >Upper East Side</a>
            </li>

            <li className="footer-link">
              <a href="#" >Queens</a>
            </li>

            <li className="footer-link">
              <a href="#" >Theater District</a>
            </li>

            <li className="footer-link">
              <a href="#" >Midtown</a>
            </li>

            <li className="footer-link">
              <a href="#" >SoHo</a>
            </li>

            <li className="footer-link">
              <a href="#" >Chelsea</a>
            </li>

          </ul>
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/profile.php?id=100054128583713&mibextid=ZbWKwL"
          className="fab fa-facebook-f"></a>
        <a href="https://instagram.com/hossamgaberhamed?igshid=MzNlNGNkZWQ4Mg=="
          className="fab fa-instagram"></a>
        <a href="https://www.linkedin.com/in/hossam-gaber-8b2154264" className="fab fa-linkedin"></a>
        <a href="https://github.com/hossamgaber44" className="fa-brands fa-github"></a>
      </div>
      <div className="credit">
        <h3>© copyright @ 2023 by <span> HOSSAM GABER</span></h3>
      </div>
    </footer>
  )
}

export default Footer