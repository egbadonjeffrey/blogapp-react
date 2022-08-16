import { Link } from "react-router-dom";
import Button from "../components/Button";

const SignIn = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Welcome Back!</h1>
        <h4 className={styles.heading2}>
          Sign in to sip from the fountain of knowledge
        </h4>
      </div>

      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          type="email"
          name="email"
          placeholder="Email"
          // value={}
          // onChange={}
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          type="password"
          name="password"
          placeholder="Password"
          // value={}
          // onChange={}
        />
      </div>
      <div className={styles.submitButtonLink}>
        <Button
          id={"submitbutton"}
          type={"submit"}
          value={"Sign In"}
          isDisabled={false}
          buttonCustomStyle={styles.submitButton}
        />
        <div className={styles.textAndLink}>
          <p className={styles.text}>{"Don't"} have an account? </p>
          <Link to="/signup" className={styles.Link}>
            Create Account
          </Link>
        </div>
      </div>

      <div className={styles.googleAuth}>
        <Button
          id={"googleauth"}
          value={"Login With Google"}
          isDisabled={false}
          buttonCustomStyle={styles.googleButton}
          // clickHandler={}
        />
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
        flex 
        flex-col
        w-[90%]
        container
        mx-auto
        mb-[10rem]
        items-center
        gap-[3rem]
        text-primary
        h-auto
    `,

  headingContainer: `
        text-center
    `,

  heading: `
        text-[2.5rem]
        font-xl
    `,

  heading2: `
      text-[1.2rem]
        font-normal
        p-0
  `,

  textAndLink: `
      text-[1.2rem]
      flex
      gap-[1rem]
  `,

  text: `
        hidden
        md:block
    `,

  Link: `
      text-[#0000FF]
      hover:text-primary
    `,

  inputContainer: `
        flex
        flex-col 
        container
        gap-[1rem] 
  `,

  inputField: `
    py-[.8rem]
    px-[.5rem]
    border-b-[.1rem]
    border-solid
    border-[#1C1C1C]
    text-[1rem]
    outline-none
  `,

  submitButton: `
        bg-[#1C1C1C]
        text-[#fff]
        text-[1rem]
        hover:bg-[transparent]
        hover:text-[#1C1C1C]
        mx-0
    `,

  submitButtonLink: `
        flex
        flex-row
        container
        w-full
        justify-between
        gap-[1rem]
        container
        items-center
  `,
};

export default SignIn;
