import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MediumContext } from "../context/MediumContext";

const Posts = () => {
  const { posts } = useContext(MediumContext);

  const [article, setArticle] = useState([]);

  // console.log(article);

  return (
    <>
      <h1 className={styles.articlesHeader}> Articles </h1>
      {posts?.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/` + post.id}>
            <div className={styles.wrapper}>
              <div className={styles.postDetails}>
                <div className={styles.postThumbnailContainer}>
                  <img
                    className={styles.postThumbnail}
                    src={post?.data?.thumbnail}
                    alt="post Thumbnail"
                  />
                </div>
                <div className={styles.articleData}>
                  <div className={styles.postTitle}>{post?.data?.title}</div>
                  <div className={styles.postAuthorNameAndDate}>
                    <p>{post?.data?.author}</p>
                    <span></span>
                  </div>

                  <div>
                    <p>{post?.data?.body.slice(0, 500)}</p>
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
      w-[100%]
      mx-auto
      my-[3rem]
    `,

  articlesHeader: `
    w-[30%]
    m-auto
    text-center
    text-[3rem]
    border-b-[3px]
    border-[#1c1c1c]
  `,

  postDetails: `
    flex
    flex-col
    container
    md:flex-row
    justify-center
    mx-auto
    gap-[2rem]
    md:w-[100%]
    w-[80%]
    h-[30%]
    `,

  postThumbnailContainer: `
   
    `,

  postThumbnail: `
     w-[100%]
    `,
  postTitle: `
    text-[1.4rem]
    font-bold
    w-[100%]
  `,

  postAuthorNameAndDate: `
      flex
      flex-row
      gap-[.4rem]
    `,

  articleData: `
      flex
      flex-col
      gap-[1rem]
      w-[100%]
    `,
};

export default Posts;
