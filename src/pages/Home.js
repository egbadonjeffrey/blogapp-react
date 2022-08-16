import stylesSpecial from "../styles/Home.module.css";

import HeroBanner from "../components/HeroBanner";
import { useState } from "react";
import Posts from "../components/Posts";

const Home = () => {
  const [bottom, setBottom] = useState(false);

  return (
    <div>
      <HeroBanner
        backgroundImage={stylesSpecial.topBackground}
        alignArticle={stylesSpecial.alignLeft}
      />
      <h1 className={styles.articlesHeader}> Articles </h1>

      <Posts />

      <HeroBanner
        backgroundImage={stylesSpecial.bottomBackground}
        alignArticle={stylesSpecial.alignRight}
      />
    </div>
  );
};

const styles = {
  articlesHeader: `
    w-[30%]
    m-auto
    text-center
    text-[3rem]
    border-b-[3px]
    border-[#1c1c1c]
  `,
};

export default Home;
