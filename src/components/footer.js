import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Footer = () => {
    const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            email
            instagram
            linkedin
            artstation
            behance
          }
        }
      }
    }
  `)

    const social = data.site.siteMetadata?.social


    return (
        <footer id="footer">

            <div className="container footer-bottom clearfix" data-aos="fade-up">
                
                <div className="social-links d-flex justify-content-center mb-4">
                    <a href={`mailto:${social?.email || ``}`} title="Email" target="_blank" rel="noreferrer"><i class="icofont-ui-email"></i></a>
                    <a href={`https://www.linkedin.com/in/${social?.linkedin || ``}`} title="LinkedIn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                </div>

                <div className="copyright">
                    2018 - {new Date().getFullYear()} &copy; <strong>Alesamo</strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer