import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordion = () => {
  // state
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // functon

  function handleSingleSelection(getcurrentId) {
    console.log(getcurrentId);
    setSelected(getcurrentId === selected ? null : getcurrentId);
  }

  function handleMultiSelection(getcurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfcurrentId = copyMultiple.indexOf(getcurrentId);

    if (findIndexOfcurrentId !== -1) {
      copyMultiple.splice(findIndexOfcurrentId, 1);
    } else {
      copyMultiple.push(getcurrentId);
    }

    setMultiple(copyMultiple);
  }

  return (
    <>
      <div>sono paggina accordion</div>
      <div className="acc-wrapper">
        <button onClick={() => setMultiSelection(!multiSelection)}>
          {multiSelection
            ? "Disable Multi Selection"
            : "Enable Multi Selection"}
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((elem, index) => (
              <div
                className="item"
                key={index}
                onClick={() =>
                  multiSelection
                    ? handleMultiSelection(elem.id)
                    : handleSingleSelection(elem.id)
                }
              >
                <div className="title">
                  <h3>{elem.question}</h3>
                  <span>+</span>
                </div>
                <div>
                  {(multiSelection
                    ? multiple.includes(elem.id)
                    : selected === elem.id) && (
                    <div className="acc-content">{elem.answer}</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>no data found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
