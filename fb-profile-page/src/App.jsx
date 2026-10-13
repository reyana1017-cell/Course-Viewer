import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/courses"
          element={
            <CoursesPage
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
            />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;