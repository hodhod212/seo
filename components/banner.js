import styles from "./banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Göteborg</span>{" "}
        <span className={styles.title2}>Kaffe</span>{" "}
      </h1>
      <p className={styles.subTitle}>Upptäck dina lokala kaféer!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
