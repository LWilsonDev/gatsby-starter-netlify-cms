import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { FaQuoteLeft } from 'react-icons/fa';


const Testimonials = ({ testimonials }) => (
  <div className="content pt-6" >
    {testimonials.map(testimonial => (
      <div class="box has-background-link-light">
        <article key={v4()} className="media">
          <div class="media-left">
            <span class="icon has-text-grey-light">
                      <FaQuoteLeft className="quote-icon" size="32"/>
                      </span>
          </div>
          <div class="media-content">
                      <div class="content">
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

