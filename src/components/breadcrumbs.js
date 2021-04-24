import * as React from "react"
import { Link, graphql } from "gatsby"

const Breadcrumbs = ({title}) => {

    return (
        <section id="breadcrumbs" className="breadcrumbs" data-aos="fade-up">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                <h2>{title}</h2>
                <ol>
                    <li><Link to="/" itemProp="url">Home</Link></li>
                    <li>{title}</li>
                </ol>
                </div>

            </div>
        </section>
    )
}

export default Breadcrumbs