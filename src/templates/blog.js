import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import * as styles from "../styles/templates/blog.module.css";

export default function Blog({ data }) {
  const blog = data.markdownRemark;
  return (
    <Layout>
      <div className="container">
        <Link to="/">
          <p>Back</p>
        </Link>
        <h1>{blog.frontmatter.title}</h1>
        <div className={styles.imgContainer}>
          <GatsbyImage
            image={blog.frontmatter.img.childImageSharp.gatsbyImageData}
            alt={blog.frontmatter.title}
            className={styles.postImg}
            quality={100}
          />
        </div>
        <div
          className={styles.htmlRender}
          dangerouslySetInnerHTML={{ __html: blog.html }}
        ></div>
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
        fullTitle
        img {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: { fit: FILL }
              width: 700
              height: 500
            )
          }
        }
        slug
        title
      }
    }
  }
`;
