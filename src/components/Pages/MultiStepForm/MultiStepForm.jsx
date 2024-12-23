import React, { useState } from "react";
import "./MultiStepForm.css"; // Ensure to include your CSS styles
import kitchenico from "../../../assets/images/ico/menu/kuhna-1-b.svg";
import kitchenicoW from "../../../assets/images/ico/menu/kuhna-2-w.svg";
import shkadico from "../../../assets/images/ico/menu/skaf-2-b.svg";
import shkaficow from "../../../assets/images/ico/menu/skaf-1-w.svg";
import prihozaia from "../../../assets/images/ico/menu/prihozaia-1-b.svg";
import prihozaiaw from "../../../assets/images/ico/menu/prihozaia-2-w.svg";
import zona from "../../../assets/images/ico/menu/r-zona-1-b.svg";
import zonaw from "../../../assets/images/ico/menu/r-zona-2-w.svg";
import nextb from "../../../assets/images/ico/Buttons/next-1.svg";
import nextw from "../../../assets/images/ico/Buttons/next-2.svg";
const MultiStepForm = ({ isModalOpen, closeModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    product: [],
    layout: "",
    dimensions: { width: "", height: "", depth: "" },
    materials: "",
    callback: { name: "", phone: "" },
  });
  const [error, setError] = useState(""); // To store error messages

  // Handle navigation
  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
      setError(""); // Clear errors when proceeding
    }
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Update form data
  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      ...field,
    }));
  };

  // Validate form for each step
  const validateStep = () => {
    if (currentStep === 1 && formData.product.length === 0) {
      setError("Пожалуйста, выберите хотя бы одно изделие.");
      return false;
    }
    if (
      currentStep === 2 &&
      (!formData.dimensions.width ||
        !formData.dimensions.height ||
        !formData.dimensions.depth)
    ) {
      setError("Пожалуйста, укажите размеры.");
      return false;
    }
    if (currentStep === 3 && !formData.materials) {
      setError("Пожалуйста, укажите материалы.");
      return false;
    }
    if (currentStep === 4 && !formData.callback.phone) {
      setError("Пожалуйста, укажите ваш номер телефона.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateStep()) {
      // Perform form submission (e.g., send data to the server or display it)
      console.log("Form Submitted Successfully", formData);

      // Close the modal after submission
      closeModal();

      // Reset form data if needed
      setFormData({
        product: [],
        layout: "",
        dimensions: { width: "", height: "", depth: "" },
        materials: "",
        callback: { name: "", phone: "" },
      });

      // Optionally reset the current step to the first step if you want the form to restart
      setCurrentStep(1);
    }
  };

  // Step content rendering
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="ModelWindow-1-step1">
            <h2 className="ModelWindow-1">Какое изделие вы хотите заказать?</h2>
            <div className="ModelWindow-4">
              <div
                className={`product-option ${
                  formData.product.includes("Кухня") ? "selected" : ""
                }`}
                onClick={() => handleProductSelection("Кухня")}
              >
                <div>
                  <img
                    src={
                      !formData.product.includes("Кухня")
                        ? kitchenico
                        : kitchenicoW
                    }
                    alt="kitchenico"
                  />
                </div>
                <div className="product-option-text">Кухня</div>
              </div>
              <div
                className={`product-option ${
                  formData.product.includes("Шкаф") ? "selected" : ""
                }`}
                onClick={() => handleProductSelection("Шкаф")}
              >
                <div>
                  <img
                    src={
                      !formData.product.includes("Шкаф") ? shkadico : shkaficow
                    }
                    alt="kitchenico"
                  />
                </div>
                <div className="product-option-text"> Шкаф</div>
              </div>
              <div
                className={`product-option ${
                  formData.product.includes("Гардеробная") ? "selected" : ""
                }`}
                onClick={() => handleProductSelection("Гардеробная")}
              >
                <div>
                  <img
                    src={
                      !formData.product.includes("Гардеробная")
                        ? prihozaia
                        : prihozaiaw
                    }
                    alt="kitchenico"
                  />
                </div>
                <div className="product-option-text">Гардеробная</div>
              </div>
              <div
                className={`product-option ${
                  formData.product.includes("Рабочая зона") ? "selected" : ""
                }`}
                onClick={() => handleProductSelection("Рабочая зона")}
              >
                <div>
                  <img
                    src={
                      !formData.product.includes("Рабочая зона") ? zona : zonaw
                    }
                    alt="zone"
                  />
                </div>
                <div className="product-option-text"> Рабочая зона</div>
              </div>
              <div
                className={` product-option-other product-option ${
                  formData.product.includes("Другое") ? "selected" : ""
                }`}
                onClick={() => handleProductSelection("Другое")}
              >
                <div className="product-option-text"> Другое</div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <>
            <h2 className="ModelWindow-1">Есть ли размеры?</h2>
            <div>
              <input
                type="text"
                placeholder="Ширина"
                value={formData.dimensions.width}
                onChange={(e) =>
                  updateFormData({
                    dimensions: {
                      ...formData.dimensions,
                      width: e.target.value,
                    },
                  })
                }
              />
              <input
                type="text"
                placeholder="Высота"
                value={formData.dimensions.height}
                onChange={(e) =>
                  updateFormData({
                    dimensions: {
                      ...formData.dimensions,
                      height: e.target.value,
                    },
                  })
                }
              />
              <input
                type="text"
                placeholder="Глубина"
                value={formData.dimensions.depth}
                onChange={(e) =>
                  updateFormData({
                    dimensions: {
                      ...formData.dimensions,
                      depth: e.target.value,
                    },
                  })
                }
              />
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h2 className="ModelWindow-1">Из каких материалов?</h2>
            <input
              type="text"
              placeholder="Введите материалы"
              value={formData.materials}
              onChange={(e) => updateFormData({ materials: e.target.value })}
            />
          </>
        );

      case 4:
        return (
          <>
            <h2 className="ModelWindow-1">Ваши данные для связи</h2>
            <input
              type="text"
              placeholder="Ваше имя"
              value={formData.callback.name}
              onChange={(e) =>
                updateFormData({
                  callback: { ...formData.callback, name: e.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="Ваш телефон"
              value={formData.callback.phone}
              onChange={(e) =>
                updateFormData({
                  callback: { ...formData.callback, phone: e.target.value },
                })
              }
            />
          </>
        );

      default:
        return <h2 className="ModelWindow-1">Форма завершена! Спасибо!</h2>;
    }
  };

  // Handle product selection (toggle selection of products)
  const handleProductSelection = (product) => {
    const isSelected = formData.product.includes(product);
    if (isSelected) {
      setFormData((prev) => ({
        ...prev,
        product: prev.product.filter((item) => item !== product),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        product: [...prev.product, product],
      }));
    }
  };

  // Calculate the width for the progress bar based on the current step
  const progressWidth = (currentStep - 1) * 33.33; // Each step is roughly 33.33% of the total width

  return (
    isModalOpen && (
      <div id="ModelWindow" className="overlay">
        <div className="conteniner gemm-ModelWindow">
          <button className="close" onClick={closeModal}>
            ×
          </button>
          <div className="step-content">{renderStep()}</div>
          {error && <p className="error-message">{error}</p>}
          <div className="ModelWindow-44">
            <div className="progress-bar-container">
              <div
                className="progress-tape"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>
            {currentStep === 4 ? (
              <button className="ModelWindow-6" onClick={handleSubmit}>
                Отправить
              </button>
            ) : (
              <div className="ModelWindow-44-buttonContainer">
                <button className="ModelWindow-button-5" onClick={prevStep}>
                  <img src={nextw} />
                </button>
                <button className="ModelWindow-button-6" onClick={nextStep}>
                  <img src={nextb} />
                </button>
              </div>
            )}
          </div>

          {/* Progress Tape at the bottom */}
        </div>
      </div>
    )
  );
};

export default MultiStepForm;
