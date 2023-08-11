import React, { useRef, useState, useEffect } from "react";
import {
  Question,
  Results,
  useCounter,
} from "../../../../components/Test/test";
import { useNavigate } from "react-router-dom";
import "../../../../styles/tests.scss";

const questions = [
  {
    id: 0,
    text: "Atmosfera tarkibida kislorod necha foizni tashkil etadi?",
    answers: ["20,93 %", "78,08 %", "0,93 %", "0,03 %"],
    correct: 0,
    selection: null,
  },
  {
    id: 1,
    text: "Atmosferaning umumiy massasida suv bug'lari qancha km³ni tashkil etadi?",
    answers: ["15 ming", "20 ming", "18 ming", "13 ming"],
    correct: 3,
    selection: null,
  },
  {
    id: 2,
    text: "Atmosfera massasining 80%i atmosfera qatlamlarining qaysi birida to'plangan?",
    answers: ["Termosfera", "Troposfera", "Stratosfera", "Biosfera"],
    correct: 1,
    selection: null,
  },
  {
    id: 3,
    text: "Tropopuazaning qalinligi necha kmni tashkil qiladi?",
    answers: ["3 km", "4 km", "1 km", "2 km"],
    correct: 2,
    selection: null,
  },
  {
    id: 4,
    text: "Stratosferada atmosferaning necha % massasi to'plangan?",
    answers: ["30 %", "15 %", "20 %", "10 %"],
    correct: 3,
    selection: null,
  },
  {
    id: 5,
    text: "Atmosferaning qaysi qatlami Quyoshning rentgen nurlarini yutib qoladi va shu bilan Yer yuzidagi hayotni uning zararli ta'siridan saqlaydi?",
    answers: ["Ionosfera", "Troposfera", "Ekzosfera", "Mezosfera"],
    correct: 0,
    selection: null,
  },
  {
    id: 6,
    text: "Atmosferaning qaysi qatlami asosan geliy va vodoroddan iborat?",
    answers: ["Mezosfera", "Termosfera", "Ionosfera", "Ekzosfera"],
    correct: 3,
    selection: null,
  },
  {
    id: 7,
    text: "Havo massalarini bir-biridan ajratib turadigan shartli yuzaga nima deyiladi?",
    answers: [
      "Konvektiv oqim",
      "Atmosfera frontlari",
      "Front chizig'i",
      "Havo massalari",
    ],
    correct: 1,
    selection: null,
  },
  {
    id: 8,
    text: "Ionosferaning 80 km dan 300 km gacha balandlikda bo'lgan quyi qismi nima deb ataladi?",
    answers: ["Tropopuaza", "Ekzosfera", "Termosfera", "Termopuza"],
    correct: 2,
    selection: null,
  },
  {
    id: 9,
    text: "Ekzosferada harorat taxminan qanchagacha ko'tariladi?",
    answers: ["1500°C", "1900°-2000°C", "1400°C, 1900°C", "220°C, 240°C"],
    correct: 1,
    selection: null,
  },
];

<useCounter />;

<Question />;

<Results />;

function QuestionCorrection({ wrong, correct, empty }) {
  return (
    <div className="correction">
      {questions.map((question) => {
        return (
          <Question
            hasButton={false}
            markSelection={question.selection}
            showAnswer={true}
            data={question}
          />
        );
      })}
    </div>
  );
}

export function AtmosphereTest() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameSize, setGameSize] = useState({});
  const totalQuestion = questions.length - 1;
  const gameRef = useRef(null);
  const gameOverlayRef = useRef(null);

  const navigate = useNavigate();

  const question = useCounter(0);
  const correct = useCounter(0);
  const wrong = useCounter(0);
  const empty = useCounter(0);

  const handleNewQuestionClick = (selectedValue, currQuestion) => {
    if (totalQuestion >= question.value) {
      if (selectedValue === currQuestion.correct) {
        correct.add();
      } else if (
        selectedValue !== null &&
        selectedValue !== currQuestion.correct
      ) {
        wrong.add();
      } else {
        empty.add();
      }
      questions[currQuestion.id].selection = selectedValue;
      question.add();
    }
  };

  const resetSelection = () => {
    questions.forEach((q) => (q.selection = null));
  };

  const handleRestartClick = () => {
    setGameFinished(false);
    setGameStarted(false);
    resetSelection();
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
  };

  const indicatorBg = (index) => {
    if (question.value > index) {
      return "#fff";
    } else if (question.value === index) {
      return "#29b5d5";
    } else {
      return "rgba(255,255,255,.2)";
    }
  };

  useEffect(() => {
    if (gameStarted) {
      document.body.classList.add("game-started");
    } else {
      document.body.classList.remove("game-started");
    }
  }, [gameStarted]);

  useEffect(() => {
    if (question.value > totalQuestion) {
      gameRef.current.scrollTop = 0;
    }
  }, [question.value]);

  return (
    <div
      className="game"
      ref={gameRef}
      data-game-started={gameStarted ? true : null}
      data-game-finished={question.value > totalQuestion ? true : null}>
      <div className="intro">
        <div className="intro-inner">
          <h1 className="intro-title">Atmosfera Test</h1>
          {!gameStarted && (
            <>
              <p className="intro-desc">
                {`Test ${questions.length} ta savoldan iborat bo'lib, vaqt chegarasi yo'q.`}
              </p>
              <div className="intro-box">
                <button
                  className="intro-button"
                  onClick={() => setGameStarted(true)}>
                  Boshlash
                </button>
                <button className="intro-button" onClick={() => navigate("/")}>
                  Chiqish
                </button>
              </div>
            </>
          )}
          {gameStarted && (
            <div className="indicator">
              {questions.map((q, index) => {
                return (
                  <span
                    className="indicator-item"
                    style={{
                      backgroundColor: indicatorBg(index),
                    }}
                  />
                );
              })}
            </div>
          )}
          <Results
            wrong={wrong.value}
            correct={correct.value}
            empty={empty.value}
          />
          <button
            className="restart-button"
            onClick={() => handleRestartClick()}>
            Qayta Boshlash
          </button>
        </div>
      </div>
      <div className="game-area">
        {questions[question.value] && (
          <Question
            data={questions[question.value]}
            buttonText={
              question.value !== totalQuestion ? "Keyingi savol" : "Yakunlash"
            }
            onQuestionButtonClick={handleNewQuestionClick}
          />
        )}
        {!questions[question.value] && (
          <>
            <QuestionCorrection data={questions} />
          </>
        )}
      </div>
    </div>
  );
}
