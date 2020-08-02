import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import HTMLContent from "../components/Content";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = props => {
  const { page } = props;
  return (
    <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!page.frontmatter.image.childImageSharp ? page.frontmatter.image.childImageSharp.fluid.src : page.frontmatter.image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
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
          {page.frontmatter.title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              '#335367b8 0.5rem 0px 0px, #335367b8 -0.5rem 0px 0px',
            backgroundColor: '#335367b8',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {page.frontmatter.subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="">
                    <h3 className="has-text-weight-semibold is-size-2">{page.frontmatter.mainpitch.title}</h3>
                  </div>

                <main>
                    <div  dangerouslySetInnerHTML={{ __html: page.html }}>

                    </div>
                    </main>


                </div>


                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}



IndexPageTemplate.propTypes = {
  //image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),



}

const IndexPage = ({ data }) => {
  //const { frontmatter } = data.markdownRemark
  const { markdownRemark: page } = data;
  const {
    frontmatter: {

    },
  } = page;

  return (
    <Layout>
      <IndexPageTemplate
       page={{ ...page }}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {

          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            subheading
            mainpitch {
              title
            }
          }
          html
        }
  }
`


// frontmatter {
//   title
//   image {
//     childImageSharp {
//       fluid(maxWidth: 2048, quality: 100) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//   heading
//   subheading
//   mainpitch {
//     title
//     description
//   }
//   description
//   intro {
//     blurbs {
//       image {
//         childImageSharp {
//           fluid(maxWidth: 240, quality: 64) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       text
//     }
//     heading
//     description
//   }
// }