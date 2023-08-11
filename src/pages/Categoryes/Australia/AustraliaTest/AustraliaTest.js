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
    text: "Avstraliya iqlimiga nima ko'proq ta'sir qiladi?",
    answers: [
      "Atmosfera sirkulyatsiyasi",
      "Yog'ingarchilikning ko'pligi",
      "Quruq ob-havo",
      "Mavsumiy iqlim o'zgarishi",
    ],
    correct: 0,
    selection: null,
  },
  {
    id: 1,
    text: "Tasmaniya va Yangi Zellandiya orollari 1 sm² yuzaga necha kkal. radiatsiya oladi?",
    answers: ["180 kkal", "160 kkal", "150 kkal", "120 kkal"],
    correct: 3,
    selection: null,
  },
  {
    id: 2,
    text: "Avstraliya materigi va atrofidagi orollarda nechta tabiat mintaqasi shakllangan?",
    answers: ["3 ta", "5 ta", "8 ta", "2 ta"],
    correct: 1,
    selection: null,
  },
  {
    id: 3,
    text: "Avstraliya materigida qaysi iqlim mintaqasi katta masofani egallaydi?",
    answers: ["Ekvatorial", "Subekvatorial", "Tropic", "Subtropic"],
    correct: 2,
    selection: null,
  },
  {
    id: 4,
    text: "Tasmaniya va Yangi Zellandiya orolining janubiy qismlari qaysi iqlim mintaqasiga to'g'ri keladi?",
    answers: ["Subtropic", "Mo'tadil", "Subekvatorial", "Tropic"],
    correct: 3,
    selection: null,
  },
  {
    id: 5,
    text: "Ekvatorial mintaqada o'rtacha oylik harorat necha gradusni tashkil qiladi?",
    answers: ["+24°C, +28°C", "+20°C, +24°C", "+18°C, +20°C", "+5°C, +10°C"],
    correct: 0,
    selection: null,
  },
  {
    id: 6,
    text: "Materikning ichki hududlarida butun yil bo'yi kontinental tropik havo hukmron va yillik yog'in miqdori necha mmdan oshmaydi?",
    answers: ["400 mm", "150 mm", "100 mm", "250 mm"],
    correct: 1,
    selection: null,
  },
  {
    id: 7,
    text: "Materikning shimoli-g'arbida qanday plato joylashgan?",
    answers: ["Gibson", "Kimberli", "Freyzer", "Nallarbol"],
    correct: 1,
    selection: null,
  },
  {
    id: 8,
    text: "Materik markazida qanday tog'lar ko'tarilgan?",
    answers: [
      "Barrington tepalari",
      "Freyzer tog'ligi",
      "Darling tizmasi",
      "Makdonell va Masgreiv",
    ],
    correct: 2,
    selection: null,
  },
  {
    id: 9,
    text: "Materikning g'arbida joylashgan cho'llarni ko'rsating!",
    answers: ["Katta Qumli cho'l", "Viktoriya", "Gibson", "Barchasi to'g'ri"],
    correct: 3,
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

export function AustraliaTest() {
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
          <h1 className="intro-title">Avstraliya Test</h1>
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
