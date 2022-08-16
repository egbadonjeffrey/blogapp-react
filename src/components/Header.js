import { useState } from "react";
import Logo from "./Logo";
import MenuModal from "./MenuModal";
import NavMenu from "./NavMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div>
        <Logo />
      </div>

      <div className={styles.navigationMenu}>
        <NavMenu />
      </div>

      <div className={styles.menuButton} onClick={() => setMobileMenu(true)}>
        [Menu]
      </div>

      {mobileMenu && (
        <div
          className={styles.modalWrapper}
          onClick={() => setMobileMenu(false)}
        >
          <MenuModal mobileMenu={mobileMenu} />
        </div>
      )}
    </div>
  );
};

const styles = {
  backgroundWrapper: `
        absolute
        bg-[#ccc]
        w-[100vw]
        h-[100%]
    `,

  wrapper: `
      container 
      flex 
      items-center 
      justify-between 
      mx-auto 
      my-[1rem] 
      text-primary
      `,

  navigationMenu: `
      hidden
      md:block
  `,

  menuButton: `
    block
    md:hidden
    text-[1.4rem]
    font-bold
    cursor-pointer
  `,

  modalWrapper: `
      flex
      block
      md:hidden

      fixed
      top-0
      right-0
      justify-center
      bg-[#1c1c1c]
      text-white
      text-left
      text-[2rem]
      font-semibold
      w-[100%]
      h-[100vh]
      sm:w-[90%]
      sm:h-[90vh]
          
        `,
};

export default Header;
