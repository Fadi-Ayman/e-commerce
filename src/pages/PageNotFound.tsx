import { Link } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Cannot Found This Page ! </h1>
      <p className={styles.zoomArea}>
      </p>
      <section className={styles.errorContainer}>
        <span className={styles.errorSpan1}>4</span>
        <span className={styles.errorCircle}>
          <span className={styles.screenReaderText}>0</span>
        </span>
        <span className={styles.errorSpan2}>4</span>
      </section>
      <div className={styles.linkContainer}>
        <Link to="/home" className={styles.moreLink}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
