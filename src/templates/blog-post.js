import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Breadcrumbs title={post.frontmatter.title}/>

      <article id="portfolio-details" className="portfolio-details" data-aos="fade-up" data-aos-delay="100" itemScope itemType="http://schema.org/Article">
      <div className="container">

        <div className="portfolio-details-container">

          <div className="owl-carousel portfolio-details-carousel">
            {post.frontmatter.images.map((image) =>
              <img src={"/img/projects/" + image} className="img-fluid" alt=""/>
            )}
          </div>

          <div className="portfolio-info col-12 col-lg-4 mb-5">
            <ul className="m-0">
              <li><strong>Category</strong>: <span id="post-category">{post.frontmatter.category}</span></li>
              {post.frontmatter.description ? <li><strong>Description</strong>: {post.frontmatter.description}</li> : null}
            </ul>
          </div>

        </div>

        <div className="portfolio-description mb-4" dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody">
        </div>

      </div>
    </article>

      <nav className="blog-post-nav container my-4">
        <hr className="mb-4"/>
        <div className="row">
          {previous && (
            <Link to={previous.fields.slug} rel="prev" className="col-12 col-lg-6 mb-2 mb-lg-0">
              <img src={previous.frontmatter.preview} />
              <div style={{textAlign: "right"}}>
                <span>← Previous</span>
                <strong>{previous.frontmatter.title}</strong>
              </div>
            </Link>
          )}
          {next && (
            <Link to={next.fields.slug} rel="next" className={"col-12 col-lg-6" + (previous ? "" : " offset-lg-6")}>
              <div>
                <span>Next →</span>
                <strong>{next.frontmatter.title}</strong>
              </div>
              <img src={next.frontmatter.preview} />
            </Link>
          )}
        </div>
      </nav>


    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        description
        category
        images
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        preview
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        preview
      }
    }
  }
`
