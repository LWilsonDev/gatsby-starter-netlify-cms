import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { FaQuoteLeft } from 'react-icons/fa';


const Testimonials = ({ testimonials }) => (
  <div className="content pt-6" >
    {testimonials.map(testimonial => (
      <div key={v4()} className="box has-background-link-light">
        <article className="media">
          <div className="media-left">
            <span className="icon has-text-grey-light">
                <FaQuoteLeft className="quote-icon" size="32"/>
            </span>
          </div>
          <div className="media-content">
            <div className="content">
              <p className="is-size-4">{testimonial.quote}</p>
              <p className="is-size-6">{testimonial.author}, <i>{testimonial.article}</i></p>
          </div>
          </div>
        </article>
      </div>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
      article: PropTypes.string,
    })
  ),
}

export default Testimonials

