import React, { useEffect } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./BlogPost.module.css";

const BlogPost = ({ data }) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.post}>
        <Link to={"/blog/" + data.frontmatter.slug}>
          <GatsbyImage
            image={data.frontmatter.img.childImageSharp.gatsbyImageData}
            alt={data.frontmatter.title}
            className={styles.postImg}
            quality={100}
          />
        </Link>
        <p>{data.frontmatter.date}</p>
        <Link to={"/blog/" + data.frontmatter.slug}>
          <h1 className={styles.postTitle}>{data.frontmatter.title}</h1>
        </Link>
        <p className={styles.postDesc}>{data.frontmatter.desc}</p>
      </div>
    </div>
  );
};

export default BlogPost;
