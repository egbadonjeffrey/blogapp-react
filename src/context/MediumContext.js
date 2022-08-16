import { createContext } from "react";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const articles = [
    {
      id: 1,
      Title: "If This Was to End In Fire",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iure perspiciatis? Distinctio voluptatem laboriosam minus labore error. Natus quas eos non, vel veniam modi dolorum molestiae, ipsum dolores, ab saepe.",
      authorName: "Egbadon Jeffrey",
      postThumbnail:
        "https://blogs.agu.org/martianchronicles/files/2012/12/end-of-the-world-1024x716.jpg",
      authorLink: "github.com/theScarlettCoder",
      authorImage:
        "https://i.pinimg.com/originals/48/96/10/4896102e402d5e3f3a0e494a80838fd7.jpg",
      aboutAuthor:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, neque dicta exercitationem dolorum, adipisci vitae beatae temporibus cupiditate explicabo atque inventore molestias illum, architecto quibusdam non at deserunt magnam quia?",
    },
    {
      id: 2,
      Title: "Water",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iure perspiciatis? Distinctio voluptatem laboriosam minus labore error. Natus quas eos non, vel veniam modi dolorum molestiae, ipsum dolores, ab saepe.",
      authorName: "Egbadon Benedict",
      postThumbnail:
        "https://blogs.agu.org/martianchronicles/files/2012/12/end-of-the-world-1024x716.jpg",
      authorLink: "github.com/theScarlettCoder",
      authorImage:
        "https://i.pinimg.com/originals/48/96/10/4896102e402d5e3f3a0e494a80838fd7.jpg",
      aboutAuthor:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, neque dicta exercitationem dolorum, adipisci vitae beatae temporibus cupiditate explicabo atque inventore molestias illum, architecto quibusdam non at deserunt magnam quia?",
    },
    {
      id: 3,
      Title: "Fire",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iure perspiciatis? Distinctio voluptatem laboriosam minus labore error. Natus quas eos non, vel veniam modi dolorum molestiae, ipsum dolores, ab saepe.",
      authorName: "Oitomen Jeffrey",
      postThumbnail:
        "https://blogs.agu.org/martianchronicles/files/2012/12/end-of-the-world-1024x716.jpg",
      authorLink: "github.com/theScarlettCoder",
      authorImage:
        "https://i.pinimg.com/originals/48/96/10/4896102e402d5e3f3a0e494a80838fd7.jpg",
      aboutAuthor:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, neque dicta exercitationem dolorum, adipisci vitae beatae temporibus cupiditate explicabo atque inventore molestias illum, architecto quibusdam non at deserunt magnam quia?",
    },
  ];

  return (
    <MediumContext.Provider
      value={{
        articles,
      }}
    >
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
