import data from "./data";
import { useState } from "react";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }
  return (
    <div className="container">
      <center>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 mt-5">
            <button
              className="btn btn-primary mb-4"
              onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            >
              Enable Multi Selection
            </button>
            {data && data.length > 0 ? (
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {data.map((dataItem) => (
                  <div
                    className="accordion-item bg-info text-white"
                    key={dataItem.id}
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        onClick={
                          enableMultiSelection
                            ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)
                        }
                      >
                        #{dataItem.id} {dataItem.question}
                      </button>
                    </h2>
                    <div>
                      {enableMultiSelection
                        ? multiple.indexOf(dataItem.id) !== -1 && (
                            <div className="accordion-body">
                              {dataItem.answer}
                            </div>
                          )
                        : selected === dataItem.id && (
                            <div className="accordion-body">
                              {dataItem.answer}
                            </div>
                          )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="alert alert-danger" role="alert">
                No Data Found!
              </div>
            )}
          </div>
          <div className="col-2"></div>
        </div>
      </center>
    </div>
  );
}
