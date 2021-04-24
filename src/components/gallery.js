import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import $ from "jquery"
import Isotope from "isotope-layout/js/isotope";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.iso = new Isotope( '.portfolio-container', {
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            stamp: '.item--static',
            percentPosition: true,
            resizesContainer: true,
            resizable: true,
            filter: '.filter-personal'
        });

        var iso = this.iso;

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');
            iso.arrange({ filter: $(this).data('filter') });
        });
    }
  
    render() {
        return (
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Portfolio</h2>
                        <p>I have been a professional in digital imaging for a long period of time. I have had the good fortune to work in a wide range of advertising, film and television productions, including the transfer of knowledge to new generations. Here is my personal development and testing ideas. With a visual / artistic education, it has always motivated me to carry out the realization of them.</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                            <li data-filter="*">All</li>
                            <li data-filter=".filter-personal" className="filter-active">Personal</li>
                            <li data-filter=".filter-professional">Professional</li>
                            <li data-filter=".filter-sketchwork">Sketchwork</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row equal portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {this.props.posts.map((post, i) => {
                            const title = post.frontmatter.title || post.fields.slug
                            return (
                                
                                <div className={"col-lg-4 col-md-6 portfolio-item filter-" + post.frontmatter.category} key={post.fields.slug}>
                                    <article className="portfolio-wrap">
                                        <img src={post.frontmatter.preview} className="img-fluid" alt="Project preview" onLoad={() => this.props.posts.length == i + 1 ? this.iso.layout() : null}/>
                                        <Link to={post.fields.slug} itemProp="url">
                                            <div className="portfolio-info" itemScope itemType="http://schema.org/Article">
                                                <h4>{title}</h4>
                                            </div>
                                        </Link>
                                    </article>
                                </div>

                                /*<GalleryItem post={post}/>*/
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

const GalleryItem = ({post}) => {
    const title = post.frontmatter.title || post.fields.slug
    return (
        <div className={"col-lg-4 col-md-6 portfolio-item filter-" + post.frontmatter.category} key={post.fields.slug}>
            <article className="portfolio-wrap">
                <img src={post.frontmatter.preview} className="img-fluid" alt="Project preview" onLoad={() => console.log(">")}/>
                <Link to={post.fields.slug} itemProp="url">
                    <div className="portfolio-info" itemScope itemType="http://schema.org/Article">
                        <h4>{title}</h4>
                    </div>
                </Link>
            </article>
        </div>
    )
}

export default Gallery