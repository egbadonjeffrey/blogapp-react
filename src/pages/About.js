import AboutAuthor from "../components/AboutAuthor";
import HeroBanner from "../components/HeroBanner";
import Logo from "../components/Logo";
import stylesSpecial from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.aboutBodybackground}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <p className={styles.aboutCompany}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, rem
          natus! Aut, tempora unde quos rerum dolorem labore ducimus eos quidem
          aliquid, accusamus velit provident. Pariatur ipsam incidunt voluptatem
          dignissimos?
        </p>

        <div className={styles.aboutWrapper}>
          <AboutAuthor />
        </div>

        <h1 className={styles.bottomDescription}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          ipsam!{" "}
        </h1>
        <p></p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
    container
    mx-auto
    h-[100vh]
    gap-[2rem]
  `,

  aboutCompany: `
    mx-auto
    w-[100%]
    text-left
    mb-[2rem]
  `,

  logo: `
    w-[40%]
    mx-auto
    my-[2rem]
  `,

  aboutWrapper: `
  flex
  justify-center
    mb-[2rem]
  `,

  aboutBodybackground: `
    flex
    flex-col
    gap-[2rem]
    h-[30]
  `,

  bottomDescription: `
    
  `,
};

export default About;
