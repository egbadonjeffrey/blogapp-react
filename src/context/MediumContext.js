import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDoc, getDoc, doc } from "firebase/firestore";
import { db, auth, provider } from "../utlils/Firebase";
import { signInWithPopup } from "firebase/auth";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  //   GETTING POST DATA

  useEffect(() => {
    const getPost = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              author: doc.data().author,
              body: doc.data().body,
              date: doc.data().date,
              thumbnail: doc.data().imageUrl,
              title: doc.data().title,
            },
          };
        })
      );
    };

    getPost();
  }, []);

  const addUserToFirebase = async (currentUser) => {
    await setDoc(doc(db, "users", currentUser.email), {
      email: currentUser.email,
      name: currentUser.displayName,
      imageUrl: currentUser.photoURL,
      followerCount: 0,
    });
  };
  // SIGNING IN WITH GOOGLE AUTH

  const handleGoogleAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    const subscriber = userData.user;
    console.log(subscriber);
    setCurrentUser(subscriber);
    addUserToFirebase(subscriber);
  };

  return (
    <MediumContext.Provider
      value={{
        posts,
        handleGoogleAuth,
      }}
    >
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
