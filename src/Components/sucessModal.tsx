import React from "react";
import "../assets/styles/successModal.css";
// import Success from "../assets/images/success.png";
import { useHistory } from "react-router-dom";

interface Props {
  setShowSuccessModal: any;
}
const SuccessModal: React.FC<Props> = (props) => {
  const history = useHistory();
  const closeBankModal = () => {
    console.log("clicked");
    history.push(`/`);
    window.location.reload();
  };

  console.log("called");

  return (
    <>
      <div
        className="bank-modal-background"
        onClick={() => {
          closeBankModal();
        }}>
        <div className="card-success-modal-container">
          <h3 className="card-done-mssg">Succesfully linked your card</h3>
          {/* <div
          className="card-success-modal-image"
          style={{ backgroundImage: Success }}></div> */}
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
