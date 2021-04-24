import React, { useEffect } from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

import "aos/dist/aos.css";
import AOS from "aos"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  useEffect(() => {
    AOS.init({
      once: true});
  }, []);

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {(isRootPath) ? <Header/> : null}
      <Navigation/>
      <main id="main">{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
