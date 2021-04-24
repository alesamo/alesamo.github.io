import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
    const data = useStaticQuery(graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            author {
              name
              summary
            }
            social {
              twitter
            }
          }
        }
      }
    `)

    const author = data.site.siteMetadata?.author;
    const social = data.site.siteMetadata?.social;
  
    return (
        <section id="hero">
            <div className="hero-container">
            <span className="hero-logo" data-aos="zoom-in">
                <img src="/img/hero-logo.png" alt="Logo"/>
            </span>
            <h1 data-aos="zoom-in">Alesamo</h1>
            <h2 data-aos="fade-up">Personal portfolio</h2>
            </div>
        </section>
    )
  }

export default Header