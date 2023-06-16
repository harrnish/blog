import React, { useEffect } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./BlogPost.module.css";

function formatDate(date) {
  let newDate = new Date(date * 1000).toDateString();
  newDate = newDate.split(" ");

  return newDate[2] + " " + newDate[1] + ", " + newDate[3];
}

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
        <p>{formatDate(data.frontmatter.date)}</p>
        <Link to={"/blog/" + data.frontmatter.slug}>
          <h1 className={styles.postTitle}>{data.frontmatter.title}</h1>
        </Link>
        <p className={styles.postDesc}>{data.frontmatter.desc}</p>
      </div>
    </div>
  );
};

export default BlogPost;
