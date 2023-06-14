import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default function Home({ data }) {
  const blogs = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <h1>Blog</h1>
      {blogs.map((blog, index) => (
        <p key={index}>{blog.frontmatter.fullTitle}</p>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        html
        frontmatter {
          date
          desc
          fullTitle
          img {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          slug
          title
        }
      }
    }
  }
`;
