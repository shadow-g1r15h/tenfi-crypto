import React from "react";
import "../assets/styles/successModal.css";
import Success from "../assets/images/success.png";
import { useHistory } from "react-router-dom";

interface Props {
  setShowSuccessModal: any;
}
const SuccessModal: React.FC<Props> = (props) => {
  const history = useHistory();
  const closeBankModal = () => {
    history.push(`/`);
  };

  console.log("called");

  return (
    <>
      <div
        className="bank-modal-background"
        onClick={() => {
          closeBankModal();
        }}></div>
      <div className="card-success-modal-container">
        <h3 className="card-done-mssg">Succesfully linked your card</h3>
        <div
          className="card-success-modal-image"
          style={{ backgroundImage: Success }}></div>
        <div>
          <span>Deposited to Vault Successfully</span>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
