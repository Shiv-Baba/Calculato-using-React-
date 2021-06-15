import { useState } from "react";
import "./App.css";
const BUTTON_LIST = [
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "*",
  "C",
  "0",
  "=",
  "/",
];
export default function App() {
  const [evalState, setEvalState] = useState("");
  function buttonHandler(someState, event) {
    setEvalState((prevState) => prevState + someState);
    if (event.target.innerHTML === "=") {
      try {
        // display.value = eval(evalStr);
        setEvalState((evalStr) => {
          eval(evalStr);
        });
        setEvalState("");
        // evalStr = "";
      } catch (e) {
        setEvalState("Error");
      }
    } else {
      // evalStr = evalStr + event.target.innerHTML;
      // display.value = evalStr;
      setEvalState((evalState) => {
        evalState += event.target.innerHTML;
      });
    }
  }
  // function entryHandler() {}
  return (
    <div className="App">
      <section id="calculator">
        <input type="text" id="display" value={evalState} />
        {BUTTON_LIST.map((btns, index) => {
          return (
            <Button
              value={btns}
              btnHandler={buttonHandler}
              // entryHandler={entryHandler}
            />
          );
        })}
      </section>
    </div>
  );
}

function Button(props) {
  const [buttonState, setButtonState] = useState(props.value);
  const clickHandler = (event) => {
    props.btnHandler(buttonState, event);
  };
  return <button onClick={clickHandler}>{props.value}</button>;
}
