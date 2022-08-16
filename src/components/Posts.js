import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { MediumContext } from "../context/MediumContext";

const Posts = () => {
  const { articles } = useContext(MediumContext);

  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/posts/` + article.id}>
            <div className={styles.wrapper}>
              <div className={styles.postDetails}>
                <div className={styles.postThumbnailContainer}>
                  <img
                    className={styles.postThumbnail}
                    src={article.postThumbnail}
                    alt="post Thumbnail"
                  />
                </div>
                <div className={styles.articleData}>
                  <div className={styles.postTitle}>{article.Title}</div>
                  <div className={styles.postAuthorNameAndDate}>
                    <p>{article.authorName}</p>
                    <span></span>
                  </div>

                  <div>
                    <p>{article.body}</p>
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
