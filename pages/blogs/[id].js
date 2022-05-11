import styles from "../../styles/Blogs.module.scss";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((blog) => {
    return {
      params: { id: blog.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();

  return {
    props: { blog: data },
  };
};

const Details = ({ blog }) => {
  return (
    <div>
      <h3 className={styles.blogs__header}>{blog.userId}</h3>
      <h1 className={styles.blogs__subHeader}>{blog.title}</h1>
      <p className={styles.blogs__text}>{blog.body}</p>
    </div>
  );
};

export default Details;
