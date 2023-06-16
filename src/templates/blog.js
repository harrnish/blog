import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import * as styles from "../styles/templates/blog.module.css";

export default function Blog({ data }) {
  const blog = data.markdownRemark;
  const html = blog.html.replace(/\n/g, "<br />");

  function formatDate(date) {
    let newDate = new Date(date * 1000).toDateString();
    newDate = newDate.split(" ");

    return newDate[2] + " " + newDate[1] + ", " + newDate[3];
  }

  return (
    <Layout>
      <Helmet>
        <title>Blog | {blog.frontmatter.title} | Harnish Mistry</title>
      </Helmet>
      <div className={["container", styles.blog].join(" ")}>
        <div className={styles.whitespace}></div>
        <Link to="/">
          <p id={styles.backButton}>Back</p>
        </Link>
        <div className={styles.blogTitle}>
          <h1>{blog.frontmatter.title}</h1>
        </div>
        <div>
          <div className={styles.blogDate}>
            <p className={styles.date}>{formatDate(blog.frontmatter.date)}</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <GatsbyImage
            image={blog.frontmatter.img.childImageSharp.gatsbyImageData}
            alt={blog.frontmatter.alt}
            className={styles.postImg}
            quality={100}
          />
        </div>
        <div
          className={styles.htmlRender}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div className={styles.whitespace}></div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query getBlog($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        desc
        alt
        title
        img {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: { fit: FILL }
            )
          }
        }
        slug
      }
    }
  }
`;
