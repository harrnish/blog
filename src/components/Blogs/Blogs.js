import React from "react";
import { Link } from "gatsby";
import * as styles from "./Blogs.module.css";

function formatDate(date) {
  let newDate = new Date(date * 1000).toDateString();
  newDate = newDate.split(" ");

  return newDate[2] + " " + newDate[1] + ", " + newDate[3];
}

const Blogs = ({ data }) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.post}>
        {/* <Link to={"/blog/" + data.frontmatter.slug}>
          <GatsbyImage
            image={data.frontmatter.img.childImageSharp.gatsbyImageData}
            alt={data.frontmatter.title}
            className={styles.postImg}
            quality={100}
          />
        </Link> */}
        <Link to={"/blog/" + data.frontmatter.slug}>
          <h2 className={styles.title}>{data.frontmatter.title}</h2>
        </Link>
        <p className={styles.date}>{formatDate(data.frontmatter.date)}</p>
        {/* <p className={styles.postDesc}>{data.frontmatter.desc}</p> */}
      </div>
    </div>
  );
};

export default Blogs;
