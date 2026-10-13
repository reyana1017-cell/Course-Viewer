import styles from "./CourseDetails.module.css";

function CourseDetails({ course }) {
  if (!course) {
    return (
      <div className={styles.emptyDetails}>
        <div className={styles.emptyIcon}>📚</div>
        <h2>Select a Course</h2>
        <p>
          Choose one of the courses above to view its details.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.courseDetails}>
      <div className={styles.detailsTop}>
        <div className={styles.detailsIcon}>
          {course.icon}
        </div>

        <div>
          <span className={styles.detailsLabel}>
            COURSE DETAILS
          </span>
          <h2>{course.title}</h2>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.detailsContent}>
        <h3>About this course</h3>

        <p>{course.description}</p>

        <div className={styles.infoBox}>
          <div className={styles.infoItem}>
            <span>📖</span>
            <div>
              <strong>Course</strong>
              <p>{course.title}</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <span>📊</span>
            <div>
              <strong>Level</strong>
              <p>{course.level}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;