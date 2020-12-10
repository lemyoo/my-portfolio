import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faAd } from "@fortawesome/free-solid-svg-icons";
import {faTwitter,faFacebookF, faGithub} from '@fortawesome/free-brands-svg-icons'

function Navigation() {
    return (
        <div>
           <header>
        {/*Navbar*/}
        <nav className="navbar white navbar-light navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="/#">
              <strong>DJ</strong>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-toggle="collapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                  <a href="/#" className="nav-link">
                    <FontAwesomeIcon icon={faFacebookF} color="blue" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#" className="nav-link">
                    <FontAwesomeIcon icon={faTwitter} color="blue" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#" className="nav-link">
                    <FontAwesomeIcon icon={faGithub} color="ash" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*End of navbar*/}
      </header> 
        </div>
    )
}

export default Navigation
