import React, { useState } from "react";
import data from "../../data.json";
import "../../assets/styles/blockchainList.css";
import { json } from "stream/consumers";

function Table() {
  const [dataList, setDataList] = useState(data);
  const [manageList, setManageList] = useState<any>([]);
  const [searchString, setSearchString] = useState();

  const search = (searchElement: string) => {
    let arr: any = [];
    data.map((d) => {
      if (d.name.toLowerCase().includes(searchElement.toLowerCase())) {
        arr.push(d);
      }
    });
    setDataList(arr);
  };

  const sortByType = (type: string) => {
    let arr: any = [];
    if (type == "all") {
      arr = data;
    } else {
      data.map((d) => {
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
        className="jumbotron py-3"
        style={{
          background: "transparent",
          border: "2px solid var(--border-color)",
        }}>
        <div className="sort-fields">
          <div className="search-container">
            <label className="search-label">Search</label>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search Pools"
              value={searchString}
              onChange={(event) => {
                search(event.target.value);
              }}
            />
          </div>
          <div className="dropdown-container">
            <span>Platform</span>
            <div className="dropdown">
              <select className="select-platform">
                <option>All</option>
                <option>PanCakeSwap</option>
                <option>ApeSwap</option>
                <option>BisSwap</option>
              </select>
            </div>
          </div>
          <div className="dropdown-container">
            <span>Type</span>
            <div className="dropdown">
              <select
                className="select-platform"
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
          <div className="dropdown-container">
            <span>Asset</span>
            <div className="dropdown">
              <select className="select-platform">
                <option>All</option>
                <option>ADA</option>
                <option>ALPHA</option>
                <option>ATOM</option>
              </select>
            </div>
          </div>
          <div className="dropdown-container">
            <span>Sort By</span>
            <div className="dropdown">
              <select
                className="select-platform"
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
              <div className="col-md-2">
                <button
                  className="standard-outline-button"
                  onClick={() => {
                    toggleManage(idx);
                  }}
                  style={{ width: "100%" }}>
                  manage
                </button>
              </div>
              {manageList && manageList.includes(idx) && (
                <div className="expanded-containers">
                  <div className="first-container">
                    <div className="row-1">
                      <span>Wallet</span>
                      <div className="get-button">
                        <button
                          className="standard-outline-button"
                          style={{ width: "100%" }}>
                          GET TENFI
                        </button>
                      </div>
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
                    <div className="row-4">
                      <button
                        className="standard-outline-button"
                        style={{ width: "100%" }}>
                        DEPOSIT TO VAULTS
                      </button>
                    </div>
                  </div>
                  <div className="second-container">
                    <div className="row-1">
                      <span>Vault</span>
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
                    <div className="row-4">
                      <button
                        className="standard-outline-button"
                        style={{ width: "100%" }}>
                        WITHDRAW TO WALLET
                      </button>
                    </div>
                  </div>
                  <div className="third-container">
                    <div className="row-1">
                      <span>TENFI pending</span>
                      <div className="get-button">
                        <button
                          className="standard-outline-button"
                          id="claim-button"
                          style={{ width: "100%" }}>
                          CLAIM
                        </button>
                      </div>
                    </div>
                    <div className="third-con-row2">
                      <div className="col1">
                        <div className="col-row1">
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
                          <span>$+{d.TVL}</span>
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
                      <div className="col2">
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
                      <div className="col1">
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
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Table;