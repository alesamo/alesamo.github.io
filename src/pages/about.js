import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About me" />
      <Breadcrumbs title="About me"/>
      <div className="container" id="about">
        <div class="row">
            <img src="/img/avatar.jpg" alt="Avatar" className="col-12 col-lg-3" data-aos="fade-up"/>
            <div className="mt-5 mt-lg-0 col-12 col-lg-9" data-aos="fade-up">
                <blockquote>
                    <p>
                        I have been a professional in digital imaging for a long period of time. I have had the good fortune to work in a wide range of advertising, film and television productions, including the transfer of knowledge to new generations.
                    </p>
                    <p>
                        With a visual / artistic education, it has always motivated me to carry out the realization of ideas, through what we call today new technologies (CGI) and capture them in image. I have lived the change from analog to digital, and I think it is wonderful the challenge that arises today in having the image closer and closer, and transforming it into a new sensory experience for the viewer.
                    </p>
                    <p>
                        I am an empathetic, analytical, responsible and professional person; always eager to learn and with people skills, with skills of coordination and direction of multidisciplinary groups as well (If required); because, in the particular, either individually or in groups I have been able to grow in this quality.
                    </p>
                </blockquote>
            </div>
        </div>

        <div data-aos="fade-up">
            <h1>Experience</h1>

            <h2>3D Designer</h2>
            <h3>La Frontera VR</h3>
            <p>Development, modeling, and texturing (some test) of 3D characters for the company's own project in VR.</p>
            <Link to="/professional/vr-development">View projects</Link>
        </div>
        <div data-aos="fade-up">
            <h2>Professor</h2>
            <h3>U-tad (Universidad de Tecnología y Arte Digital)</h3>
            <p>Professor in the area of ​​Workshop (Drawing and Digital Illustration), Lighting & Shader's, Lighting & Render, Creative Process, and Modeling - VFX Master -</p>
        </div>
        <div data-aos="fade-up">
            <h2>Lighting Supervisor</h2>
            <h3>Enne</h3>
            <p>Visual Development, Shader concept. Lighting Supervisor.</p>
            <Link to="/professional/enne-works">View projects</Link>
        </div>
        <div data-aos="fade-up">
            <h2>3D Generalist</h2>
            <h3>OttiPlanet</h3>
            <p>Together with a team of collaborators, I participated in a study in the city of La Coruña (Spain) to offer digital imaging solutions to the advertising, film / TV and infoarchitecture sectors. During those years he created the commercial spots for the Xunta de Galicia, image development for "R" (telephony and Internet), virtual recreation of animated pieces and image regeneration for the aquarium of the city of La Coruña (Spain), special effects for Films like "Agallas" (directors: Andrés Luque Pérez, Samuel Martín Mateos Producers: Antonio Saura, Pancho Casal, José Velasco), and "Los muertos van deprisa" (director: Ángel de la Cruz).​</p>
            <Link to="/professional/ottiplanet-works">View projects</Link>
        </div>
        <div data-aos="fade-up">
            <h2>Lighting Director</h2>
            <h3>Dygra Films</h3>
            <p>Texturing - Lighting - Lighting Direction - Visual development in short films and Production design series - Post-Production.
    Awarded with a Goya through the film "The Living Forest" / and "The Dream of a night of San Juan" - Particularly prize "Channo Piñeiro" (Galician Academy of Audiovisual) "Better direction of photography by The Living Forest.​</p>
            <Link to="/professional/dygra-works">View projects</Link>
        </div>
        <div data-aos="fade-up">
            <h2>Dep Director</h2>
            <h3>Television Federal SA TELEFE</h3>
            <p>I was summoned for the direction of the computer animation department. Reorganizing and establishing working methodology for the realization of separators, ID's owned by the company / channel. (Openings, Separators, institutional, scenographies and effects, etc. for the integral production of the channel and its independent productions).​</p>
            <Link to="/professional/telefe-works/">View projects</Link>
        </div>
        <div data-aos="fade-up">
            <h2>Co Owner</h2>
            <h3>Aicon</h3>
            <p>Created my own studio with a group of collaborators. Based on the generation of animation by computer of international level, for which they have emphasized animations such as "Belight-ants", "Telecom Personal", "Arlistán-Arquitecto", "Ford", "Organics" etc, and projects of Television series with special effects (mini-series), such as "Hall 53", "El Eternauta" together with the possibility of international investment (Artear Canal 13 Buenos Aires - Columbia Pictures), "Piluso and Coquito in animation" etc.​</p>
            <p>Resumed private production through his company, providing animation services for independent producers, advertising agencies, air and cable television channels. Offering services in the production of "Image Design" for different signals. (AzulTelevision, Channel 9 of Bs. As.) Separators and signals for "Volver" cable signal of Channel 13 - Bs. As. "Uniseries" - I-Sat Signals and separators for "Multicanal" Arcor SA, 3D Animation and characters for "Coca-Cola's" Hielocos "," Nave "(trip to the interior of the earth) The Video-Match 2000 Show "Telefé; Opening and Presentation" Desayuno" Channel 7 Bs.As. 'Previously ATC Argentina Television Color' </p>
            <Link to="/professional/aicon-works/">View projects</Link>
        </div>
        <div data-aos="fade-up">
            <h2>3D Production Manager</h2>
            <h3>Arte Digital S.A.</h3>
            <p>Called by a group of entrepreneurs of the televising and publicity scope for the creation of the department of Computer Graphics of the "Monserrat Studios". As a Production Manager, generated the project of the first study that would have full production, both digital and video shooting. (Cooperativa de Caseros, Atashi, Arno, YPF, Philips, Ivuevanol, Limzul, Day's ...).​</p>
        </div>
        <div data-aos="fade-up">
            <h2>3D Production Direction</h2>
            <h3>Arquicad S.A.</h3>
            <p>Created the Department of Computer Graphics, where I carried out similar activities in the advertising and television field (ATC Channel 7 Buenos Aires identifier). Carried out works of hyperrealism of the projection of architectural models for one of the most important architectural studies in Argentina (Arq. Juan Carlos López). Designed logos and slides for magazines. Presentations for television programs (Caloi ...en su tinta), as well as public space dividers in back-projecting (Open Plaza Shopping Mall). Participated in the image project for multi-media columns, to be held for the first time in the country (Shopping Paseo Alcorta).​</p>
        </div>
        <div data-aos="fade-up">
            <h2>3D Generalist</h2>
            <h3>Transvideo S.A.</h3>
            <p>Elaboration of the presentation of the children´s programs (Prof. Lambetain) as well as the chars IDs /presentation for the video home companies like Telecinema, RDC "Radiocom", AVH, Emeral, Target. Also created commercials, both partially and completely, for television. Armed and animated the first model (architecture) of a building in 3D (Alto Palermo Shopping) for the search of investors. Exemplified the visualization in movement of a mock-up (scenography) and elaborated techniques in 3D. For traditional 2D animation, provided technical - operative support to creatives and publicity directors. Developed the presentation of the awards ceremony "Lápiz de Platino", award of Editorial Dossier to advertising creativity in Argentina - Uruguay - Paraguay - Chile.​</p>
            <Link to="/professional/transvideo-works/">View projects</Link>
        </div>
        <div data-aos="fade-up">
            <h2>CGI generalist</h2>
            <h3>Datagraph S.A.</h3>
            <p>Datagrapth S.A. was the first company in Argentina to elaborate CGI images. Joint in "Computer Graphics", conducting their own trainning. Looking for the insertion of static or animated images in Argentina, Paraguay and Uruguay.​</p>
        </div>
        <div data-aos="fade-up">
            <h2>Draftsman</h2>
            <h3>R.C.A. Victor</h3>
            <p>Auxiliary and substitution work as a designer and ilustrator in the composition of music cover (envelopes) as well as the design of posters for the promotion of them.​</p>
        </div>

        <hr data-aos="fade-up"/>

        <div data-aos="fade-up" className="row equal" id="gallery">
            <a className="col-4 col-lg-2"><img src="/img/about/1.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/2.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/3.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/4.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/5.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/6.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/7.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/8.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/9.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/10.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/11.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/12.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/13.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/14.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/15.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/16.jpg"/></a>
            <a className="col-4 col-lg-2"><img src="/img/about/17.jpg"/></a>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
