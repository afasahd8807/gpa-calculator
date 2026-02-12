import { GRADE_POINTS } from "../../utils/gradePoints";

export default function CourseTable({ title, data, onRemove }) {
  return (
    <div className="card">
      <div className="row-between">
        <h3 style={{ margin: 0 }}>{title}</h3>
        <p className="small-text" style={{ margin: 0 }}>
          Total Modules: {data.length}
        </p>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Module</th>
              <th>Credits</th>
              <th>Grade</th>
              <th>Grade Point</th>
              <th className="no-print"></th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-row">
                  No modules added yet.
                </td>
              </tr>
            ) : (
              data.map((c) => (
                <tr key={c.id}>
                  <td>{String(c.code).toUpperCase()}</td>
                  <td>{c.credits}</td>
                  <td>{c.grade}</td>
                  <td>{GRADE_POINTS[c.grade] ?? "-"}</td>
                  <td className="no-print">
                    <button className="btn-danger" onClick={() => onRemove(c.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
