(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{4264:function(e,t,l){"use strict";var a=l(7294),r=l(5444);t.Z=function(e){var t=e.title;return a.createElement("section",{id:"breadcrumbs",className:"breadcrumbs","data-aos":"fade-up"},a.createElement("div",{className:"container"},a.createElement("div",{className:"d-flex justify-content-between align-items-center"},a.createElement("h2",null,t),a.createElement("ol",null,a.createElement("li",null,a.createElement(r.Link,{to:"/",itemProp:"url"},"Home")),a.createElement("li",null,t)))))}},4870:function(e,t,l){"use strict";l.r(t);var a=l(7294),r=l(5444),n=l(8374),c=l(3751),i=l(4264);t.default=function(e){var t,l=e.data,o=e.location,m=l.markdownRemark,s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=l.previous,d=l.next;return a.createElement(n.Z,{location:o,title:s},a.createElement(c.Z,{title:m.frontmatter.title,description:m.frontmatter.description||m.excerpt}),a.createElement(i.Z,{title:m.frontmatter.title}),a.createElement("article",{id:"portfolio-details",className:"portfolio-details","data-aos":"fade-up","data-aos-delay":"100",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("div",{className:"container"},a.createElement("div",{className:"portfolio-details-container"},a.createElement("div",{className:"owl-carousel portfolio-details-carousel"},m.frontmatter.images.map((function(e){return a.createElement("img",{src:"/img/projects/"+e,className:"img-fluid",alt:""})}))),a.createElement("div",{className:"portfolio-info col-12 col-lg-4 mb-5"},a.createElement("ul",{className:"m-0"},a.createElement("li",null,a.createElement("strong",null,"Category"),": ",a.createElement("span",{id:"post-category"},m.frontmatter.category)),m.frontmatter.description?a.createElement("li",null,a.createElement("strong",null,"Description"),": ",m.frontmatter.description):null))),a.createElement("div",{className:"portfolio-description mb-4",dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"}))),a.createElement("nav",{className:"blog-post-nav container my-4"},a.createElement("hr",{className:"mb-4"}),a.createElement("div",{className:"row"},u&&a.createElement(r.Link,{to:u.fields.slug,rel:"prev",className:"col-12 col-lg-6 mb-2 mb-lg-0"},a.createElement("img",{src:u.frontmatter.preview}),a.createElement("div",{style:{textAlign:"right"}},a.createElement("span",null,"← Previous"),a.createElement("strong",null,u.frontmatter.title))),d&&a.createElement(r.Link,{to:d.fields.slug,rel:"next",className:"col-12 col-lg-6"+(u?"":" offset-lg-6")},a.createElement("div",null,a.createElement("span",null,"Next →"),a.createElement("strong",null,d.frontmatter.title)),a.createElement("img",{src:d.frontmatter.preview})))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2652bee0fa07bb73cdff.js.map