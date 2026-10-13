import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.errorCard}>
        <div className={styles.errorNumber}>404</div>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/" className={styles.homeButton}>
          ← Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;