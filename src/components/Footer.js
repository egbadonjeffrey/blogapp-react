import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapper}>
          <p className={styles.firstParagraph}>want to connect ?</p>
          <p className={styles.secondParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className={styles.socials}>
            <Socials />
          </div>
          <p className={styles.thirdParagraph}>Built by @theScarlettCoder.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  wrapper:
    "w-full bg-primary mt-[100vp]  h-auto py-[2rem] text-white  text-center",
  innerWrapper:
    "flex flex-col container mx-auto items-center gap-[1rem]  font-normal",
  firstParagraph: "text-[3rem] font-semibold",
  secondParagraph: "text-[1.3rem] font-medium",
  thirdParagraph: "text-[.8rem] -mb-[2rem]",
  socials: "my-[4rem] ",
};

export default Footer;
