import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Blogs.module.scss";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { blogs: data },
  };
};

const Blogs = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Renome | Blogs</title>
        <meta name="keywords" content="Renome" />
      </Head>
      <h1 className={styles.blogs__header}>blog</h1>
      <h3 className={styles.blogs__subHeader}>news,recipes and much more</h3>
      {blogs.map((blog) => (
        <Link href={"/blogs/" + blog.id} key={blog.id}>
          <a className={styles.blogs__singleBlog_title}>
            <h3>{blog.title}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Blogs;
