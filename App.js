import { useEffect, useState } from "react";
import "./styles.css";
const Light = (props) => {
  const c = props.color;
  const css = {
    "background-color": c
  };
  return <div className="temp" style={css}></div>;
};
function App() {
  const config = [
    {
      col: "green",
      next: "yellow",
      time: "3000"
    },
    {
      col: "yellow",
      next: "red",
      time: "2000"
    },
    {
      col: "red",
      next: "green",
      time: "1000"
    }
  ];

  const [activeSignal, setActiveSignal] = useState("green");
  const light = config.find((l) => l.col === activeSignal);
  useEffect(() => {
    const temp = setTimeout(() => {
      setActiveSignal(light.next);
    }, light.time);
    return () => {
      clearTimeout(temp);
    };
  }, [light]);

  return (
    <div className="App">
      {config.map((light) => {
        return (
          <Light color={activeSignal === light.col ? light.col : "grey"} />
        );
      })}
    </div>
  );
}

export default App;
