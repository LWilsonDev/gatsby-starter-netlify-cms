import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        mainpitch={data.mainpitch || {}}
        testimonials={testimonials}
        imageGroup={{
          image1: {
            image: getAsset(entry.getIn(['data', 'imageGroup', 'image1', 'image'])),
            alt: entry.getIn(['data', 'imageGroup', 'image1', 'alt']),
          },
          image2: {
            image: getAsset(entry.getIn(['data', 'imageGroup', 'image2', 'image'])),
            alt: entry.getIn(['data', 'imageGroup', 'image2', 'alt']),
          },
          image3: {
            image: getAsset(entry.getIn(['data', 'imageGroup', 'image3', 'image'])),
            alt: entry.getIn(['data', 'imageGroup', 'image3', 'alt']),
          },
        }}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
