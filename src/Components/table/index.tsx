import React, { useState } from "react";
import data from "../../data.json";
import "../../assets/styles/blockchainList.css";
import SuccessModal from "../sucessModal";

function Table() {
  const [dataList, setDataList] = useState(data);
  const [manageList, setManageList] = useState<any>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const search = (searchElement: string) => {
    let arr: any = [];
    data.forEach((d) => {
      if (d.name.toLowerCase().includes(searchElement.toLowerCase())) {
        arr.push(d);
      }
    });
    setDataList(arr);
  };

  const sortByType = (type: string) => {
    let arr: any = [];
    if (type === "all") {
      arr = data;
    } else {
      data.forEach((d) => {
        if (d.type.toLowerCase() === type.toLowerCase()) {
          arr.push(d);
        }
      });
    }
    setDataList(arr);
  };

  const sortBy = (type: string) => {
    console.log(type, "type");
    // let arr = [];
    switch (type) {
      case "name": {
        console.log("inside name");
        // code block
        let arr = data.sort((a, b) => (a.name > b.name ? 1 : -1));
        setDataList([...arr]);
        console.log(arr);
        console.log(dataList);

        break;
      }
      case "balance": {
        // code block
        let arr = data.sort((a, b) => (a.balance > b.balance ? 1 : -1));
        setDataList([...arr]);
        break;
      }
      case "deposited": {
        // code block
        let arr = data.sort((a, b) => (a.deposited > b.deposited ? 1 : -1));
        setDataList([...arr]);
        break;
      }
      case "yearly": {
        // code block
        let arr = data.sort((a, b) => (a.yearly > b.yearly ? 1 : -1));
        setDataList([...arr]);
        break;
      }
      case "daily": {
        // code block
        let arr = data.sort((a, b) => (a.daily > b.daily ? 1 : -1));
        setDataList([...arr]);
        break;
      }
      case "tvl": {
        // code block
        let arr = data.sort((a, b) => (a.TVL > b.TVL ? 1 : -1));
        setDataList([...arr]);
        break;
      }
      case "default": {
        // code block
        let arr = data;
        setDataList([...arr]);
        break;
      }
      default: {
        // code block
        let arr = data;
        setDataList([...arr]);
        break;
      }
    }
  };

  const toggleManage = (idx: number) => {
    if (
      manageList &&
      manageList.find((element: any) => element === idx) !== undefined
    ) {
      let arr = manageList ?? [];
      arr = arr.filter((el: any) => el !== idx);
      setManageList([...arr]);
    } else {
      let arr = manageList ?? [];
      arr.push(idx);
      setManageList([...arr]);
    }
  };

  return (
    <>
      <div
        className="jumbotron row p-3"
        style={{
          background: "transparent",
          border: "1px solid var(--border-color)",
        }}>
        <div className="col-md-4">
          <label className="search-label">Search</label>
          <input
            type="search"
            className="form-control"
            id="search"
            name="search"
            placeholder="Search Pools"
            value={searchString}
            onChange={(event) => {
              setSearchString(event.target.value);
              search(event.target.value);
            }}
          />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2">
          <span>Platform</span>
          <div className="dropdown">
            <select className="select-platform form-control">
              <option>All</option>
              <option>PanCakeSwap</option>
              <option>ApeSwap</option>
              <option>BisSwap</option>
            </select>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2">
          <span>Type</span>
          <div className="dropdown">
            <select
              className="select-platform form-control"
              onChange={(event) => {
                sortByType(event.target.value);
              }}>
              <option value={"all"}>All</option>
              <option value={"Single"}>Single Token</option>
              <option value={"Stable"}>Stable Token</option>
              <option value={"LP"}>LP Token</option>
            </select>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2">
          <span>Asset</span>
          <div className="dropdown">
            <select className="select-platform form-control">
              <option>All</option>
              <option>ADA</option>
              <option>ALPHA</option>
              <option>ATOM</option>
            </select>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2">
          <span>Sort By</span>
          <div className="dropdown">
            <select
              className="select-platform form-control"
              onChange={(event) => {
                sortBy(event.target.value);
              }}>
              <option value={"default"}>Default</option>
              <option value={"name"}>Name</option>
              <option value={"balance"}>Balance</option>
              <option value={"deposited"}>Deposited</option>
              <option value={"yearly"}>Yearly</option>
              <option value={"daily"}>Daily</option>
              <option value={"tvl"}>TVL</option>
            </select>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(dataList)} */}
      {dataList.map((d, idx) => {
        return (
          <React.Fragment key={idx}>
            <div
              className="jumbotron py-3 mb-2 row"
              style={{
                background: "var(--primary-bg-color)",
                border: "2px solid var(--border-color)",
              }}>
              <div className="col-md-3 text-center text-md-left">
                <h3 className="white-text">{d.name}</h3>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="col-sm-4 d-flex justify-content-md-between justify-content-around flex-column flex-md-row">
                    <div className="data-title-heading">
                      Balance <br />
                      <span className="white-text">{d.balance}</span>
                    </div>
                    <div className="data-title-heading">
                      Deposited <br />
                      <span className="white-text">{d.deposited}</span>
                    </div>
                  </div>
                  <div className="col-sm-4 d-flex justify-content-around flex-column flex-md-row">
                    <div className="data-title-heading">
                      Yearly <br />
                      <span className="green-text">{d.yearly}</span>
                    </div>
                    <div className="data-title-heading">
                      Daily <br />
                      <span className="green-text">{d.daily}</span>
                    </div>
                  </div>
                  <div className="col-sm-4 d-flex justify-content-around flex-column flex-md-row">
                    <div className="data-title-heading">
                      TVL <br />
                      <span className="white-text">{d.TVL}</span>
                    </div>
                    <div className="data-title-heading">
                      Pending TENFI <br />
                      <span className="white-text">{d.pendingTenfi}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-2">
                <button
                  className="standard-outline-button d-flex justify-content-center align-items-center"
                  onClick={() => {
                    toggleManage(idx);
                  }}
                  style={{ width: "100%", fontSize: "0.875rem" }}>
                  manage
                </button>
              </div>
              {manageList && manageList.includes(idx) && (
                <div className="row w-100">
                  <div className="col-md-6 col-lg-3 p-2">
                    <div className="border-1 p-2 h-100 d-flex flex-column justify-content-between">
                      <div className="row-1">
                        <span style={{ fontSize: "10px" }}>Wallet</span>
                        <button
                          className="standard-outline-button"
                          style={{ fontSize: "10px", padding: "5px 10px" }}>
                          GET TENFI
                        </button>
                      </div>
                      <div className="row-2">
                        <div className="d-flex">
                          <h4 className="summarized-data-value white-text">
                            0.00
                          </h4>
                          &ensp;
                          <span className="summarized-data-subvalue mt-3">
                            $0.00
                          </span>
                        </div>
                        <div className="row-3">
                          <span className="range-value">0</span>
                          <div className="range-container">
                            <input type="range" id="range" min="0" max="50" />
                            <span className="range-percent">0%</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-100">
                        <button
                          className="standard-outline-button my-2"
                          style={{
                            width: "100%",
                            padding: ".4rem 1rem",
                            fontSize: ".875rem",
                            background: "transparent",
                          }}
                          onClick={() => {
                            console.log("clicked");
                            setShowSuccessModal(true);
                          }}>
                          DEPOSIT TO VAULTS
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 p-2">
                    <div className="border-1 p-2 h-100 d-flex flex-column justify-content-between">
                      <div className="row-1">
                        <span style={{ fontSize: "10px" }}>Vault</span>
                      </div>
                      <div className="row-2">
                        <div className="d-flex">
                          <h4 className="summarized-data-value white-text">
                            0.00
                          </h4>
                          &ensp;
                          <span className="summarized-data-subvalue mt-3">
                            $0.00
                          </span>
                        </div>
                        <div className="row-3">
                          <span className="range-value">0</span>
                          <div className="range-container">
                            <input type="range" id="range" min="0" max="50" />
                            <span className="range-percent">0%</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-100">
                        <button
                          className="standard-outline-button my-2"
                          style={{
                            width: "100%",
                            padding: ".4rem 1rem",
                            fontSize: ".875rem",
                            background: "transparent",
                          }}>
                          WITHDRAW TO WALLET
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 w-100 col-lg-6 p-2">
                    <div className="border-1 p-2 h-100 d-flex flex-column justify-content-between">
                      <div className="d-flex justify-content-between">
                        <span style={{ fontSize: "10px" }}>TENFI pending</span>
                        <button
                          className="standard-outline-button text-light"
                          id="claim-button"
                          style={{ fontSize: "10px", padding: "5px 10px" }}>
                          CLAIM
                        </button>
                      </div>
                      <div
                        className="d-flex align-items-end mb-2"
                        style={{
                          borderBottom: "1px solid var(--border-color)",
                        }}>
                        <h4 className="text-light">0.00</h4>
                        &ensp;
                        <span className="mb-2" style={{ fontSize: "10px" }}>
                          $0.00
                        </span>
                      </div>
                      <div className="row w-100 h-100">
                        {/* <div className="col-row1">
                            <span>Details</span>
                          </div>
                          <div className="col-row2">
                            <span>Asset</span>
                            <span>{d.name}</span>
                          </div>
                          <div className="col-row3">
                            <span>Price</span>
                            <span>$0.01</span>
                          </div>
                          <div className="col-row4">
                            <span>TVL</span>
                            <span className="tvl-span">+${d.TVL}</span>
                          </div>
                          <div className="col-row5">
                            <span>Vault</span>
                            <span>Vault</span>
                          </div>
                          <div className="col-row6">
                            <span>Farm</span>
                            <span>Farm</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col2-row1">
                            <span>APY CALC.</span>
                          </div>
                          <div className="col2-row2">
                            <span>Farm APY</span>
                            <span>0.52% (0.01% daily)</span>
                          </div>
                          <div className="col2-row3">
                            <span>Reward APR</span>
                            <span>53.81% (0.15% daily)</span>
                          </div>
                          <div className="col2-row4">
                            <span>Total</span>
                            <span>54.33% (0.16% daily)</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col-row1">
                            <span>Fees</span>
                          </div>
                          <div className="col-row2">
                            <span>Gas</span>
                            <span>0.30</span>
                          </div>
                          <div className="col-row3">
                            <span>Network</span>
                            <span>0.50%</span>
                          </div>
                          <div className="col-row4">
                            <span>Burn</span>
                            <span>3.00%</span>
                          </div>
                          <div className="col-row5">
                            <span>Deposit</span>
                            <span>0.1%</span>
                          </div>
                          <div className="col-row6">
                            <span>Withdraw</span>
                            <span>0.00%</span>
                          </div>
                        </div> */}
                        <div className="col-md-3">
                          <div className="d-flex flex-column justify-column-between">
                            <div className="mb-2" style={{ fontSize: "10px" }}>
                              Details
                            </div>
                            <div
                              className="list-group"
                              style={{ fontSize: "10px" }}>
                              <div className="b-bottom-1">
                                <div className="d-flex justify-content-between">
                                  <div className="mb-1">Asset</div>
                                  <div className="text-light">{d.name}</div>
                                </div>
                              </div>
                              <div className="b-bottom-1">
                                <div className="d-flex w-100 justify-content-between">
                                  <div className="mb-1">Price</div>
                                  <div className="text-light">$0.01</div>
                                </div>
                              </div>
                              <div className="b-bottom-1">
                                <div className="d-flex w-100 justify-content-between">
                                  <div className="mb-1">TVL</div>
                                  <div className="text-light">${d.TVL}</div>
                                </div>
                              </div>
                              <div className="b-bottom-1">
                                <div className="d-flex w-100 justify-content-between">
                                  <div className="mb-1">Vault</div>
                                  <div className="text-light">Vault</div>
                                </div>
                              </div>
                              <div className="">
                                <div className="d-flex w-100 justify-content-between">
                                  <div className="mb-1">Farm</div>
                                  <div className="text-light">Farm</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex flex-column justify-column-between">
                            <div className="mb-2" style={{ fontSize: "10px" }}>
                              APY CALC.
                            </div>
                            <div
                              className="list-group"
                              style={{ fontSize: "10px" }}>
                              <div className="b-bottom-1">
                                <div className="d-flex justify-content-between">
                                  <div className="mb-1">Farm APY</div>
                                  <div className="text-light">
                                    0.00%{" "}
                                    <span className="text-success">
                                      (0.00% daily)
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="b-bottom-1">
                                <div className="d-flex w-100 justify-content-between">
                                  <div className="mb-1">Reward APR</div>
                                  <div className="text-light">
                                    13.76%{" "}
                                    <span className="text-success">
                                      (0.04% daily)
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="">
                                <div className="d-flex w-100 justify-content-between">
                                  <div className="mb-1">Total</div>
                                  <div className="text-light">
                                    13.76%{" "}
                                    <span className="text-success">
                                      (0.04% daily)
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="d-flex flex-column justify-column-between">
                            <div className="mb-2" style={{ fontSize: "10px" }}>
                              Details
                            </div>
                            <div
                              className="list-group"
                              style={{ fontSize: "10px" }}>
                              <div className="b-bottom-1">
                                <div className="d-flex justify-content-between">
                                  <div className="mb-1">Gas</div>
                                  <div className="text-light">0.00%</div>
                                </div>
                              </div>
                              <div className="b-bottom-1">
                                <div className="d-flex w-100 justify-content-between">
                                  <div className="mb-1">Network</div>
                                  <div className="text-light">0.00%</div>
                                </div>
                              </div>
                              <div className="b-bottom-1">
                                <div className="d-flex w-100 justify-content-between">
                                  <div className="mb-1">Burn</div>
                                  <div className="text-light">3.00%</div>
                                </div>
                              </div>
                              <div className="b-bottom-1">
                                <div className="d-flex w-100 justify-content-between">
                                  <div className="mb-1">Deposit</div>
                                  <div className="text-light">0.1%</div>
                                </div>
                              </div>
                              <div className="">
                                <div className="d-flex w-100 justify-content-between">
                                  <div className="mb-1">Withdraw</div>
                                  <div className="text-light">0.00%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        );
      })}
      {showSuccessModal && (
        <SuccessModal setShowSuccessModal={setShowSuccessModal} />
      )}
    </>
  );
}

export default Table;
