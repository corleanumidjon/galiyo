import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "../../styles/tests.scss";

export function useCounter(initialState) {
  const [value, setValue] = useState(initialState);
  const reset = () => setValue(0);
  const add = () => setValue((value) => (value += 1));
  return { value, add, reset };
}

export function Question({
  data,
  buttonText,
  hasButton = true,
  onQuestionButtonClick,
  showAnswer = false,
  markSelection = null,
}) {
  const [answer, setAnswer] = useState(null);
  const parseValue = (value) => (value ? parseInt(value.split("-")[1]) : null);
  const questionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      questionRef.current.querySelector(".question-text"),
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
      }
    );
    gsap.fromTo(
      questionRef.current.querySelectorAll("li"),
      {
        opacity: 0,
        x: 40,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
      }
    );
  }, [data]);

  return (
    <div className="question" ref={questionRef}>
      <div className="question-inner">
        <h2 className="question-text">{data.text}</h2>
        <ul className="question-answers">
          {data.answers.map((text, index) => {
            const value = `q${data.id}-${index}`;
            return (
              <li
                className={
                  index === data.correct && showAnswer ? "is-true" : ""
                }
                data-selected={markSelection === index ? true : null}>
                <input
                  type="radio"
                  name={`q_${data.id}`}
                  value={value}
                  id={value}
                  onChange={(e) => setAnswer(e.target.value)}
                  checked={
                    !showAnswer ? answer === value : markSelection === index
                  }
                />
                <label className="question-answer" htmlFor={value}>
                  {text}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      {hasButton && (
        <button
          className="question-button"
          onClick={() => onQuestionButtonClick(parseValue(answer), data)}>
          {buttonText}
        </button>
      )}
    </div>
  );
}

export function Results({ wrong, correct, empty }) {
  return (
    <div className="result">
      <div className="result-item is-correct">
        <span className="result-count">{correct}</span>
        <span className="result-text">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="css-i6dzq1"
            viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01 9 11.01"></path>
          </svg>
          TO'G'RI
        </span>
      </div>
      <div className="result-item is-wrong">
        <span className="result-count">{wrong}</span>
        <span className="result-text">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="css-i6dzq1"
            viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M15 9L9 15"></path>
            <path d="M9 9L15 15"></path>
          </svg>
          NOTO'G'RI
        </span>
      </div>
      <div className="result-item is-empty">
        <span className="result-count">{empty}</span>
        <span className="result-text">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="css-i6dzq1"
            viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 12L16 12"></path>
          </svg>
          BO'SH
        </span>
      </div>
    </div>
  );
}
