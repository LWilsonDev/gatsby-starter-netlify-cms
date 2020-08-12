import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/headphones.jpg')`,
             backgroundPosition: `top left`,
              backgroundAttachment: `fixed`,
          }}
        >
          <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
            '#335367b8 0.5rem 0px 0px, #335367b8 -0.5rem 0px 0px',
          backgroundColor: '#335367b8',
            color: 'white',
            lineHeight: '1',
            textAlign: 'center',
            padding: '0.25em',

          }}
        >
            Projects
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
