import React from 'react'
import { Link } from 'gatsby'
import { FaSoundcloud } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter pb-4">
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">

                <a className="mr-4" title="soundcloud" href="https://soundcloud.com/mywaymusicuk">
                <FaSoundcloud className="quote-icon" size="40"/>
                </a>
                <a className="mr-4" title="linkedin" href="https://www.linkedin.com/in/patrick-johns-7884b02a/">
                <FaLinkedin className="quote-icon" size="40"/>
                </a>


          </div>
          <div>
            <p className="is-size-7 pt-4 pb-4">Website by <a className="is-link" href="https://lucywilson.me/">Lucy Wilson</a></p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
