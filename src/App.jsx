import { useState, useEffect } from "react";
import btnImage from "./assets/images/icon-arrow.svg";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [resultDay, setResultDay] = useState("--");
  const [resultMonth, setResultMonth] = useState("--");
  const [resultYear, setResultYear] = useState("--");

  const [emptyDay, setEmptyDay] = useState(false);
  const [emptyMonth, setEmptyMonth] = useState(false);
  const [emptyYear, setEmptyYear] = useState(false);

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  let normalClass = "border-2 border-black";
  let errorClass = "border-2 border-black";

  const calculateDate = () => {
    if (day === "") {
      setEmptyDay(true);
    }
    if (month === "") {
      setEmptyMonth(true);
    }
    if (year === "") {
      setEmptyYear(true);
    }

    if (emptyDay === false && currentDay < parseFloat(day)) {
      setResultDay(currentDay - parseFloat(day) + 30);
      setMonth(month - 1);
      setEmptyDay(false);
    } else if (emptyDay === false) {
      setResultDay(currentDay - parseFloat(day));
    } else {
      setEmptyDay(false);
    }

    if (emptyMonth === false && currentMonth < parseFloat(month)) {
      setResultMonth(currentMonth - parseFloat(month) + 12);
      setYear(year - 1);
    } else if (emptyMonth === false) {
      setResultMonth(currentMonth - parseFloat(month));
    } else {
      setEmptyMonth(false);
    }
    if (emptyYear === false) {
      setResultYear(currentYear - parseFloat(year));
    } else {
      setEmptyYear(false);
    }
  };

  return (
    <div className="container">
      <div>
        {/*Day submit */}
        <form action="submit">
          <p className="uppercase">day</p>
          <input
            type="text"
            className={
              emptyDay
                ? errorClass
                : (day > 31 || day < 1) && day !== ""
                ? errorClass
                : normalClass
            }
            placeholder="DD"
            required
            onChange={(e) => {
              setDay(e.target.value);
            }}
          />
          {emptyDay ? (
            <p className="text-red-800">this field is required</p>
          ) : (
            <p
              className={
                (day > 31 || day < 1) && day !== "" ? "text-red-800" : "hidden"
              }
            >
              must be valid day
            </p>
          )}
        </form>

        {/*Month submit*/}
        <form action="submit">
          <p className="uppercase">month</p>
          <input
            type="text"
            className={
              (month > 12 || month < 1) && month !== ""
                ? errorClass
                : normalClass
            }
            placeholder="MM"
            required
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          />
          {emptyMonth ? (
            <p className="text-red-800">this field is required</p>
          ) : (
            <p
              className={
                (month > 12 || month < 1) && month !== ""
                  ? "text-red-800"
                  : "hidden"
              }
            >
              must be valid month
            </p>
          )}
        </form>

        {/*Year submit */}

        <form action="submit">
          <p className="uppercase">year</p>
          <input
            type="text"
            className={year > currentYear ? errorClass : normalClass}
            placeholder="YYYY"
            required
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </form>
        {emptyYear ? (
          <p className="text-red-800">this field is required</p>
        ) : (
          <p className={year > currentYear ? "text-red-800" : "hidden"}>
            must be in the past
          </p>
        )}
      </div>

      <div className="line w-20 h-[1.5px] m-2 bg-slate-400 "></div>
      <button className=" border border-black" onClick={calculateDate}>
        <img className="bg-slate-700" src={btnImage} alt="" />
      </button>
      <div className="resultContainer">
        <h1>{Number.isNaN(resultYear) ? "--" : resultYear}years</h1>
        <h1>{Number.isNaN(resultMonth) ? "--" : resultMonth}months</h1>
        <h1>{Number.isNaN(resultDay) ? "--" : resultDay}days</h1>
      </div>
    </div>
  );
}

export default App;
