import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import FeaturedBlogRoll from '../components/FeaturedBlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


import Testimonials from '../components/Testimonials'

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
        backgroundPosition: `center left`,
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
    <section className="section section--gradient pb-6">
      <div className="container">
        <div className="pt-6">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="has-text-white">
                    <h3 className="has-text-weight-semibold is-size-2 has-text-white">{page.frontmatter.mainpitch.title}</h3>
                  </div>
                    <div className="content" dangerouslySetInnerHTML={{ __html: page.html }}>
                    </div>
                </div>


                <Testimonials testimonials={page.frontmatter.testimonials} />

                <div className="tile is-ancestor pt-6">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={page.frontmatter.imageGroup.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={page.frontmatter.imageGroup.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={page.frontmatter.imageGroup.image3} />
                    </article>
                  </div>
                </div>
              </div>


                <div className="is-12 pl-0 pr-0 pt-6 pb-6">
                  <h3 className="has-text-weight-semibold has-text-white is-size-2">
                    Latest Projects
                  </h3>
                  <FeaturedBlogRoll />
                  <div className="is-12 has-text-centered pt-4">
                    <Link className="button is-info is-large" to="/tags">
                      More Projects →
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
  //testimonials: PropTypes.array,



}

const IndexPage = ({ data }) => {
  //const { frontmatter } = data.markdownRemark
  const { markdownRemark: page } = data;
  // const {
  //   frontmatter: {

  //   },
  // } = page;

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
            testimonials {
              author
              quote
              article
            }
            imageGroup {
              image1 {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 526, quality: 92) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              image2 {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 526, quality: 92) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              image3 {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 1075, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
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