import { useState } from "react";
import { Link } from "react-router-dom";

const MenuModal = ({ mobileMenu }) => {
  const [closeMenu, setCloseMenu] = useState(mobileMenu);
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactDetail}>
        <div className={styles.contact}>
          <p>[Email]</p>
          <p>scarlettdigital@gmail.com</p>
        </div>
        <div className={styles.contact}>
          <p>[Phone]</p>
          <p>070* *** ****</p>
        </div>
      </div>
      <div className={styles.innerWrapper}>
        <Link to="/" className={styles.innerWrapperLink}>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div className={styles.menu}>
        <h1>[MENU]</h1>{" "}
        <h1 className={styles.closeMenu} onClick={() => setCloseMenu()}>
          X
        </h1>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
      flex
      flex-col
      gap-[2rem]
      items-center
      justify-center
      w-full
    `,

  innerWrapperLink: `
      hover:text-[#ccc]
      poppins
    `,

  contactDetail: `
    absolute
    w-full
    top-0
    left-0 
    my-[2rem]
    ml-[2rem]
    `,

  contact: `
    poppins
    flex
    flex-row
    w-[70%]
    gap-[1rem]
    text-[1.3rem]
    tracking-wide
    `,

  innerWrapper: `
      flex
      flex-col
    `,
  menu: `
      flex
      flex-row
      justify-between
      w-[90%]
      mx-auto
      absolute
      left-0
      bottom-0
      text-[4rem]
  
    `,

  closeMenu: `
        cursor-pointer
    `,
};

export default MenuModal;
