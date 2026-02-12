import { useState, useMemo } from "react";
import AddCourseForm from "./AddCourseForm";
import CourseTable from "./CourseTable";
import ResultCards from "./ResultCards";
import PrintButton from "./PrintButton";
import { calculateGPA } from "../../utils/gpaCalculator";

export default function SGPA_LGPA_Calculator() {
  const [semester1, setSemester1] = useState([]);
  const [semester2, setSemester2] = useState([]);

  const [form, setForm] = useState({
    semester: "S1",
    code: "",
    credits: "",
    grade: "A",
  });

  const addCourse = (e) => {
    e.preventDefault();

    const newCourse = {
      id: Date.now(),
      code: form.code,
      credits: form.credits,
      grade: form.grade,
    };

    if (form.semester === "S1") setSemester1([...semester1, newCourse]);
    else setSemester2([...semester2, newCourse]);

    setForm({ ...form, code: "", credits: "" });
  };

  const removeS1 = (id) => setSemester1(semester1.filter((c) => c.id !== id));

  const removeS2 = (id) => setSemester2(semester2.filter((c) => c.id !== id));

  const sgpaS1 = useMemo(() => calculateGPA(semester1), [semester1]);
  const sgpaS2 = useMemo(() => calculateGPA(semester2), [semester2]);

  const lgpa = useMemo(
    () => calculateGPA([...semester1, ...semester2]),
    [semester1, semester2],
  );

  return (
    <div className="app-shell">
      <div className="app-box">
        <div className="h2-marquee">
          <h2>SGPA & LGPA Calculator - BIT University of Moratuwa</h2>
        </div>

        <AddCourseForm form={form} setForm={setForm} onAdd={addCourse} />

        <CourseTable title="Semester 1" data={semester1} onRemove={removeS1} />
        <CourseTable title="Semester 2" data={semester2} onRemove={removeS2} />

        <ResultCards s1={sgpaS1} s2={sgpaS2} lgpa={lgpa} />

        <div className="print-section no-print">
          <PrintButton />
        </div>

        <footer className="footer">
          Developed by{" "}
          <span className="footer-name">
            <a
              href="https://www.linkedin.com/in/afas-ahamed-3032692aa"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              Afas Ahamed
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
