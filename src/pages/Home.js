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

      <Posts />

      <HeroBanner
        backgroundImage={stylesSpecial.bottomBackground}
        alignArticle={stylesSpecial.alignRight}
      />
    </div>
  );
};

const styles = {};

export default Home;
