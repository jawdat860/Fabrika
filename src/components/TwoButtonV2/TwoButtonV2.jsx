import { useState } from "react";
import "./TwoButtonV2.css";
import MultiStepForm from "../Pages/MultiStepForm/MultiStepForm";

function TwoButtonV2({ text1, text2 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      {/* Buttons */}
      <button className="genn-Baner-button-v1" onClick={openModal}>
        {text1}
      </button>
      <button className="genn-Baner-button-v2-1" onClick={openModal}>
        {text2}
      </button>

      {/* Modal */}
      {isModalOpen && (
        <MultiStepForm isModalOpen={openModal} closeModal={closeModal}/>
      )}
    </>
  );
}

export default TwoButtonV2;

