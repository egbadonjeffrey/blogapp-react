import { Link } from "react-router-dom";
import LogoImage from "../images/logo.png";

const Logo = () => {
  return (
    <div>
      <Link to="/" className={styles.link}>
        <img src={LogoImage} alt="Logo" />
      </Link>
    </div>
  );
};

const styles = {
  link: `
        cursor-pointer
        text-[1.5rem]
        hover:text-[#ccc]
    `,
};

export default Logo;
