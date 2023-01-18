import React from "react";

function Summary() {
  const data = [
    {
      heading: "Your Deposited Value",
      value: "$0.00",
      hasSubValue: false,
      hasClaimAllButton: false,
      lgCol: 3,
    },
    {
      heading: "Your Average APY",
      value: "0.00%",
      hasSubValue: false,
      hasClaimAllButton: false,
      lgCol: 2,
    },
    {
      heading: "TENFI Wallet Balance",
      value: "0.00",
      hasSubValue: true,
      subValue: "$0.00",
      hasClaimAllButton: false,
      lgCol: 3,
    },
    {
      heading: "TENFI Rewards",
      value: "0.00",
      hasSubValue: true,
      subValue: "$0.00",
      hasClaimAllButton: true,
      lgCol: 4,
    },
  ];

  return (
    <div className="summary-container jumbotron px-4 py-3">
      <div className="row">
        <div className="col-md-2">
          <h3 className="purple-text">Summary</h3>
        </div>
        <div className="col-md-10">
          <div className="row">
            {data.map((d) => {
              return (
                <div className={`col-lg-${d.lgCol} col-md-6 px-1 py-1`}>
                  <div className="sumamrized-data-container jumbotron d-flex flex-column justify-content-between p-2 mb-0 mx-1">
                    <h4 className="summarized-data-heading d-flex ">
                      {d.heading}
                      {d.hasClaimAllButton && (
                        <button
                          className=" ml-auto standard-outline-button"
                          style={{ padding: "8px", background: "transparent" }}>
                          Claim All
                        </button>
                      )}
                    </h4>
                    <div className="d-flex">
                      <h4 className="summarized-data-value white-text">
                        {d.value}
                      </h4>
                      &ensp;
                      {d.hasSubValue && (
                        <span className="summarized-data-subvalue mt-3">
                          {d.subValue}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
