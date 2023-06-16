import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/pages/index.module.css";

import Portrait from "../images/portrait.jpg";

import Blogs from "../components/Blogs/Blogs";
import { graphql } from "gatsby";

export default function Home({ data }) {
  const blogs = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className={styles.header}>
        <img
          src={Portrait}
          alt="Harnish's portrait"
          className={styles.portrait}
        />
        <h1>Harnish Mistry</h1>
        <p>
          Boring blog that I might occasionally use to document random things I
          might learn.
        </p>
      </div>
      <section className={["container", styles.blogs].join(" ")}>
        {blogs.map((blog, index) => (
          <Blogs key={index} data={blog} />
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
          alt
          title
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
