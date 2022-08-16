import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ProfilePhoto from "../images/profile_pic.png";

const NavMenu = () => {
  const [handleAuth, setHandleAuth] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {handleAuth ? (
        <>
          <Link to="/create-post">
            <Button
              id={"write"}
              clickHandler={() => setHandleAuth(true)}
              value={"write"}
              isDisabled={false}
            />
          </Link>

          <img
            className={styles.ProfilePhoto}
            src={ProfilePhoto}
            alt="profile img"
            width={50}
            height={50}
            onClick={() => setModal(true)}
          />
        </>
      ) : (
        <>
          <Link to="/signin">
            <Button id={"signin"} value={"Sign In"} isDisabled={false} />
          </Link>
          <Button
            id={"auth"}
            value={"Auth"}
            isDisabled={false}
            clickHandler={() => setHandleAuth(true)}
          />
        </>
      )}
    </div>
  );
};

const styles = {
  wrapper: `
  flex 
  flex-row
  items-center 
  gap-[2rem] 
    `,
};

export default NavMenu;
