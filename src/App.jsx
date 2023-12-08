import Calendar from "./Calendar";
import "./Calendar.css";

function App() {
  return (
    <>
      <div className="contaner">
        <h1>2023 Calender</h1>
        <section className="months">
          <Calendar />
        </section>
      </div>
    </>
  );
}

export default App;
