
import React from "react";
import useConditionsData from "../../hooks/useConditionsData";
import "../../App.css";
import Nav from "./Nav";
import Table from "./Table";

function App() {
  const {
    difficulty,
    setDifficulty,
    table,
    show,
    setShow,
    flagCount,
    setFlagCount,
    freeze,
    setFreeze,
    start,
    setStart,
    end,
    setEnd,
    trueFlagCount,
    setTrueFlagCount
  } = useConditionsData();

  const adjustClass = function(difficulty) {
    let clas = "layout-";
    if (difficulty === "Easy") {
      return clas + "Easy";
    } else if (difficulty === "Medium") {
      return clas + "Medium";
    } else {
      return clas + "Hard";
    }
  }

  return (
    <div className={adjustClass(difficulty)}>
      <Nav
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        show={show}
        setShow={setShow}
        flagCount={flagCount}
        setFlagCount={setFlagCount}
        freeze={freeze}
        setFreeze={setFreeze}
        start={start}
        setStart={setStart}
        setEnd={setEnd}
        end={end}
      />
      <Table
        table={table}
        difficulty={difficulty}
        flagCount={flagCount}
        setFlagCount={setFlagCount}
        freeze={freeze}
        setFreeze={setFreeze}
        end={end}
        trueFlagCount={trueFlagCount}
        setTrueFlagCount={setTrueFlagCount}
      />
    </div>
  );
}

export default App;
