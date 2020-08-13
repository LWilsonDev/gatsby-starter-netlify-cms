import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>Your message has been sent</p>
          <div className="is-12 has-text-centered pt-4">
              <Link className="button is-info" to="/">
                Back to the Site
              </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
