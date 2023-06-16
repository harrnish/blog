import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import * as styles from "../styles/templates/blog.module.css";

export default function Blog({ data }) {
  const blog = data.markdownRemark;
  return (
    <Layout>
      <h1>{blog.frontmatter.title}</h1>
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
