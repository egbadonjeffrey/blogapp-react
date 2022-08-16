import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MediumContext } from "../context/MediumContext";

const Posts = () => {
  const { posts } = useContext(MediumContext);

  const [article, setArticle] = useState([]);

  useEffect(() => {
    posts.map((articles) => setArticle(articles));
  }, [posts]);

  console.log(article);

  return (
    <>
      {article?.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/` + post.id}>
            <div className={styles.wrapper}>
              <div className={styles.postDetails}>
                <div className={styles.postThumbnailContainer}>
                  <img
                    className={styles.postThumbnail}
                    src={post.postThumbnail}
                    alt="post Thumbnail"
                  />
                </div>
                <div className={styles.articleData}>
                  <div className={styles.postTitle}>{post.Title}</div>
                  <div className={styles.postAuthorNameAndDate}>
                    <p>{post.authorName}</p>
                    <span></span>
                  </div>

                  <div>
                    <p>{post.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

const styles = {
  wrapper: `
      container
      w-[70%]
      mx-auto
      my-[3rem]
    `,
  postDetails: `
    flex
    flex-col
    md:flex-row
    gap-[2rem]
    w-[100%]
    `,

  postThumbnailContainer: `
    `,

  postThumbnail: `
      w-[100%]
      h-[100%]
    `,
  postTitle: ``,
  postAuthorNameAndDate: `
      flex
      flex-row
      gap-[.4rem]
    `,

  articleData: `
      flex
      flex-col
      gap-[1rem]
    `,
};

export default Posts;
