import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* //* STEPBUTTON CHILDREN PROP */}
          {/* //! STEPBUTTON CHILDREN PROP */}
          <StepMessage kadam={step}> {messages[step - 1]} </StepMessage>

          {/* <p className="message">
            Step {step} : {messages[step - 1]}
          </p> */}

          <div className="buttons">
            <Buttons
              bgColor="#7950f2"
              textColor="#fff"
              onDabao={handlePrevious}
            >
              <span>👈</span>Previous
            </Buttons>
            <Buttons bgColor="#7950f2" textColor="#fff" onDabao={handleNext}>
              Next<span>👉</span>
            </Buttons>
          </div>
        </div>
      )}
    </>
  );
}

//* USE OF CHILDREN PROP
//! USE OF CHILDREN PROP
//? USE OF CHILDREN PROP

function StepMessage({ kadam, children }) {
  return (
    <p className="message">
      Step {kadam} : {children}
    </p>
  );
}
//* USE OF CHILDREN PROP

//! USE OF CHILDREN PROP

//? USE OF CHILDREN PROP

function Buttons({ bgColor, textColor, onDabao, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onDabao}
    >
      {children}
    </button>
  );
}

export default App;
