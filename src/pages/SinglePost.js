import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MediumContext } from "../context/MediumContext";
import AboutAuthor from "../components/AboutAuthor";
import { db } from "../utlils/Firebase";
import { doc, getDoc } from "firebase/firestore";

const SinglePost = () => {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  const { posts } = useContext(MediumContext);

  useEffect(() => {
    const getSingleDoc = async () => {
      setLoading(true);
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setArticle(docSnap.data());
      } else {
        console.log("No Such Document!");
      }
      console.log(id);
      setLoading(false);
    };

    getSingleDoc();
  }, []);

  console.log(article);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.postDetails}>
        <div className={styles.postThumbnail}>
          <img src={article?.imageUrl} alt="post thumbnail" />
        </div>
        <div className={styles.postTitle}>{article?.title}</div>
        <div className={styles.postAuthorNameAndDate}>
          <p>{article?.author}</p>
          <p>Date</p>
        </div>

        <div>{article?.body}</div>
      </div>

      <div className={styles.aboutAuthor}>
        <AboutAuthor />
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
  flex
  flex-col
  gap-[1rem]
  w-[90%]
  container
  mx-auto
  `,

  postDetails: `
    flex
    flex-col
    gap-[1rem]
  `,
};

export default SinglePost;
