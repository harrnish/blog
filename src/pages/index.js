import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/pages/index.module.css";

import BlogPost from "../components/BlogPost/BlogPost";
import { graphql } from "gatsby";

export default function Home({ data }) {
  const blogs = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <h1 className={styles.header}>Harnish Mistry</h1>
      <section className={["container", styles.blogs].join(" ")}>
        {blogs.map((blog, index) => (
          <BlogPost key={index} data={blog} />
        ))}
      </section>
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
