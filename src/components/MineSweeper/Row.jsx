import React from "react";
import { countBombs } from "../../helper/randomizeTable";
import Square from "./Square";
//import useConditionsData from "../hooks/useConditionsData";

// STYLESHEETS
import "../../styles/Row.css";

export default function Table(props) {
  const {
    table,
    flagCount,
    setFlagCount,
    trueFlagCount,
    setTrueFlagCount,
    freeze,
    setFreeze,
    rowIndex,
    end
  } = props;

  const row = table[rowIndex];

  // const handleView = (e) => {
  //   if (e.type === "click") {
  //     setView("visible");
  //   } else if (e.type === "contextmenu") {
  //     // right click
  //     setView("flag");
  //     setFlagCount(flagCount + 1);
  //   } else {
  //     setView("hidden");
  //   }
  // };

  return (
    <div className="row">
      {row.map((val, colIndex) => {
        return (
          <Square
            key={rowIndex + "-" + colIndex}
            value={val}
            numberBombs={countBombs(table, rowIndex, colIndex)}
            flagCount={flagCount}
            setFlagCount={setFlagCount}
            trueFlagCount={trueFlagCount}
            setTrueFlagCount={setTrueFlagCount}
            freeze={freeze}
            setFreeze={setFreeze}
            end={end}
          />
        );
      })}
    </div>
  );
}
