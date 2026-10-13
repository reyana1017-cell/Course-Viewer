import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.welcome}>
        WELCOME TO
      </div>

      <h1>Reanna Course Viewer App</h1>

      <p>
        Learn new skills, explore different courses, and discover
        opportunities to improve your knowledge.
      </p>

      <Link to="/courses" className={styles.exploreButton}>
        Explore Courses →
      </Link>
    </div>
  );
}

export default HomePage;