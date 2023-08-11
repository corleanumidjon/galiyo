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
    text: "Quyosh tizimidagi sayyoralar nechta guruhga bo'linadi?",
    answers: ["2 ta", "3 ta", "4 ta", "5 ta"],
    correct: 0,
    selection: null,
  },
  {
    id: 1,
    text: "Quyosh tizimidagi kichik ichki sayyoralar guruhiga kiruvchi sayyoralar berilgan qatorni belgilang!",
    answers: [
      "Saturn, Yupiter, Uran",
      "Merkuriy, Venera, Yer",
      "Venera, Mars, Neptun",
      "Merkuriy, Neptun, Mars",
    ],
    correct: 1,
    selection: null,
  },
  {
    id: 2,
    text: "Quyosh tizimidagi katta tashqi sayyoralar guruhiga kiruvchi sayyoralar berilgan qatorni belgilang!",
    answers: [
      "Merkuriy, Neptun, Mars",
      "Venera, Mars, Neptun",
      "Saturn, Yupiter, Uran",
      "Pluton, Mars, Neptun",
    ],
    correct: 2,
    selection: null,
  },
  {
    id: 3,
    text: "Merkuriyning og'irligi yernikidan qancha barobar kam?",
    answers: ["30", "40", "10", "20"],
    correct: 3,
    selection: null,
  },
  {
    id: 4,
    text: "Sayyoralar ichida qaysi sayyora eng yorug' hisoblanib, uni oddiy ko'z bilan ham ko'rsa bo'ladi?",
    answers: ["Venera", "Yupiter", "Yer", "Uran"],
    correct: 0,
    selection: null,
  },
  {
    id: 5,
    text: "Quyosh tizimidagi eng katta sayyora berilgan qatorni ko'rsating!",
    answers: ["Venera", "Neptun", "Saturn", "Yupiter"],
    correct: 3,
    selection: null,
  },
  {
    id: 6,
    text: "Qaysi sayyora qadimiy rimliklarning vaqt va hosil xudosi nomi bilan atalgan?",
    answers: ["Merkuriy", "Mars", "Saturn", "Neptun"],
    correct: 2,
    selection: null,
  },
  {
    id: 7,
    text: "Uran sayyorasi nechanchi yilda kashf etilgan?",
    answers: ["1890-yilda", "1781-yilda", "1791-yilda", "1960-yilda"],
    correct: 1,
    selection: null,
  },
  {
    id: 8,
    text: "Quyosh atrofida 165 yer yilida bir marta aylanib chiqadi. U ammiak (74%) va og'ir metallardan (26%) iborat, degan taxmin mavjud. U Quyoshdan kam energiya olganligi sababli yuzasida harorat -292°C. Uning 14 ta yo'ldoshi bor. Ulardan biri Triton gap qaysi sayyora haqida ketmoqda?",
    answers: ["Pluton", "Saturn", "Mars", "Neptun"],
    correct: 3,
    selection: null,
  },
  {
    id: 9,
    text: "Pluton nechanchi yil kashf qilingan va uning nechta yo'ldoshi bor?",
    answers: [
      "1960-yil, 1 ta yo'ldosh",
      "1690-yil, 2 ta yo'ldosh",
      "1865-yil, 12 ta yo'ldosh",
      "1781-yil, 15 ta yo'ldosh",
    ],
    correct: 0,
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

export function SunSystemTest() {
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
          <h1 className="intro-title">Quyosh sistemasi Test</h1>
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
