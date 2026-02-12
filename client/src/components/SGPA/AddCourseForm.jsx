import { GRADE_POINTS } from "../../utils/gradePoints";

export default function AddCourseForm({ form, setForm, onAdd }) {
  return (
    <div className="card no-print">
      <h3>Add Module</h3>

      <form onSubmit={onAdd} className="form-grid">

        <select
          className="input"
          value={form.semester}
          onChange={(e) => setForm({ ...form, semester: e.target.value })}
        >
          <option value="S1">Semester 1</option>
          <option value="S2">Semester 2</option>
        </select>

        <input
          className="input"
          placeholder="Module Code (e.g IT101)"
          value={form.code}
          onChange={(e) => setForm({ ...form, code: e.target.value })}
        />

        <input
          className="input"
          placeholder="Credits (e.g 3)"
          value={form.credits}
          onChange={(e) => setForm({ ...form, credits: e.target.value })}
        />

        <select
          className="input"
          value={form.grade}
          onChange={(e) => setForm({ ...form, grade: e.target.value })}
        >
          {Object.keys(GRADE_POINTS).map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>

        <button type="submit" className="btn-primary">
          Add
        </button>

      </form>
    </div>
  );
}
