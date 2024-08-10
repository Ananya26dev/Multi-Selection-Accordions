import data from "./data";
import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <center>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 mt-5">
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
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${dataItem.id}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse${dataItem.id}`}
                      >
                        #{dataItem.id} {dataItem.question}
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse${dataItem.id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">{dataItem.answer}</div>
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
