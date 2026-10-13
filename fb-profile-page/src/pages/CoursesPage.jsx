import CourseDetails from "../components/CourseDetails";
import styles from "./CoursesPage.module.css";

function CoursesPage({ selectedCourse, setSelectedCourse }) {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Web Development focuses on creating, designing, and maintaining websites using programming languages such as HTML, CSS, and JavaScript.",
      icon: "💻",
      level: "Intermediate",
    },
    {
      id: 2,
      title: "Information Management",
      description:
        "Information Management focuses on organizing, storing, managing, and protecting data to make information easy to access and use.",
      icon: "🗄️",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Networks and Communication",
      description:
        "Networks and Communication focuses on how computers and devices connect, share data, and communicate with each other through networks..",
      icon: "🌐",
      level: "Intermediate",
    },
  ];

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className={styles.coursesPage}>

      {/* Page Header */}
      <section className={styles.pageHeader}>
        <p>LEARNING CENTER</p>
        <h1>Explore Our Courses</h1>
        <span>
          Choose a course below and start learning today.
        </span>
      </section>

      {/* Course Cards */}
      <section className={styles.courseSection}>
        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <div
              key={course.id}
              className={`${styles.courseCard} ${
                selectedCourse?.id === course.id
                  ? styles.selectedCard
                  : ""
              }`}
              onClick={() => handleSelectCourse(course)}
            >
              <div className={styles.icon}>{course.icon}</div>

              <span className={styles.level}>
                {course.level}
              </span>

              <h2>{course.title}</h2>

              <p>{course.description}</p>

              <button
                className={styles.viewButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectCourse(course);
                }}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Course Details */}
      {selectedCourse && (
        <section className={styles.detailsSection}>
          <CourseDetails course={selectedCourse} />
        </section>
      )}

    </div>
  );
}

export default CoursesPage;