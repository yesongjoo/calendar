// function Thomas() {

// function Putdate() {
//   daybox = document.createElement("div");
//   daybox.innerHTML = `<div className="daybox">${date.getDate()}</div>`;
//   grid.insertAdjacentElement("afterbegin", daybox);
// }

export default function Calendar() {
  let holidays = {
    "New Year": new Date("Sunday, January 1, 2023"),
    "Good Friday": new Date("Friday, April 7, 2023"),
    "Easter Monday": new Date("Monday, April 10, 2023"),
    "Victoria Day": new Date("Monday, May 22, 2023"),
    "Saint-Jean-Baptiste Day": new Date("Saturday, June 24, 2023"),
    "Canada Day": new Date("Saturday, July 1, 2023"),
    "Civic Holiday ": new Date("Monday, August 7, 2023"),
    "Labour Day": new Date("Monday, September 4, 2023"),
    "National Day for Truth and Reconciliation": new Date(
      "Saturday, September 30, 2023"
    ),
    "Thanksgiving Day": new Date("Monday, October 9, 2023"),
    "Remembrance Day": new Date("Saturday, November 11, 2023"),
    "Christmas Day": new Date("Monday, December 25, 2023"),
    "Boxing Day": new Date("Tuesday, December 26, 2023"),
  };

  let days = [];
  for (let i = 0; i < 365; i++) {
    let date = new Date("2023-01-01 1:00");
    date.setDate(date.getDate() + i);
    let day = {
      date,
      holiday: Object.entries(holidays).find(
        (h) =>
          h[1].getMonth() == date.getMonth() && date.getDate() == h[1].getDate()
      ),
    };
    days.push(day);
  }
  console.log(days);

  return (
    <>
      <div className="eachmonth">
        <div className="grid">
          {days.map((day) => (
            <div className="eachbox">
              {day.date.getDate()}
              {day.holiday ? day.holiday[0] : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
