import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <div
      className="full-width-image-container full-width-image margin-top-0"
      style={{
        backgroundImage: `url('/img/headphones.jpg')`,
        backgroundPosition: `center`,
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
        All Projects
      </h1>
    </div>
    <section className="section">
      <Helmet title="Projects" />
      <div className="container content">
        <h2 className="is-size-4 is-bold-light">Filter By Tag</h2>
        <div className="buttons">

          <ul className="taglist ">
            {group.map(tag => (

            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                <button className="button is-info">{tag.fieldValue} ({tag.totalCount})</button>
              </Link>
            </li>
          ))}
          </ul>
        </div>
        <div className="content">
          <BlogRoll />
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
