import React from "react";
import "../assets/styles/blockchainList.css";
import { Navbar } from "./Navbar";
import Summary from "./Summary";
import Table from "./table";
import TotalTVL from "./TotalTVL";

export const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container px-auto" style={{marginTop: "100px"}}>
        <TotalTVL />
        <Summary />
        <Table />
      </div>
    </>
  );
};
