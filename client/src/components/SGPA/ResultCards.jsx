export default function ResultCards({ s1 = {}, s2 = {}, lgpa = {} }) {
  const safe = (v) => (isNaN(v) ? "0.00" : Number(v).toFixed(2));

  return (
    <div className="grid-3">

      <div className="card result-accent">
        <h3> SGPA – Semester 1</h3>
        <h1 className="big-number">{safe(s1.gpa)}</h1>
        <p className="small-text">
          Credits Used: {s1.totalCredits || 0}
        </p>
      </div>

      <div className="card result-accent">
        <h3> SGPA – Semester 2</h3>
        <h1 className="big-number">{safe(s2.gpa)}</h1>
        <p className="small-text">
          Credits Used: {s2.totalCredits || 0}
        </p>
      </div>

      <div className="card result-accent">
        <h3> LGPA – Final Level GPA</h3>
        <h1 className="big-number">{safe(lgpa.gpa)}</h1>
        <p className="small-text">
          Total Credits: {lgpa.totalCredits || 0}
        </p>
      </div>

    </div>
  );
}
