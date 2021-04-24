import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Navigation = () => {
  
    return (
        <div id="header" className="d-flex align-items-center">
            <div className="container">
                <div className="logo d-block d-lg-none">
                    <Link to="/" itemProp="url">
                        <img src="/img/logo.png" alt="logo" className="img-fluid"/>
                    </Link>
                </div>

                <nav className="nav-menu d-none d-lg-block">
                    <ul className="nav-inner">
                    <li><Link to="/" itemProp="url">Home</Link></li>
                    <li><Link to="/about" itemProp="url">About me</Link></li>

                    <li className="nav-logo">
                        <Link to="/" itemProp="url">
                            <img src="/img/logo.png" alt="logo" className="img-fluid"/>
                        </Link>
                    </li>

                    <li><Link to="/#portfolio" itemProp="url">Portfolio</Link></li>
                    <li><Link to="#footer" itemProp="url">Contact</Link></li>

                    </ul>
                </nav>

            </div>
        </div>
    )
  }

export default Navigation