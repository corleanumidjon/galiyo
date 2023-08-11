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
    text: "Titikaka ko'li necha metr balandlikda joylashgan?",
    answers: ["6960 m", "5897 m", "4058 m", "3810 m"],
    correct: 3,
    selection: null,
  },
  {
    id: 1,
    text: "Iguasu sharsharasi qaysi daryoda joylashgan?",
    answers: ["Parana", "Orinoko", "Paragvay", "San-Fransisko"],
    correct: 0,
    selection: null,
  },
  {
    id: 2,
    text: "La-Plata qo'ltig'i materikning qaysi tarafida joylashgan?",
    answers: ["G'arbida", "Janubida", "Shimoli-Sharqida", "Janubi-Sharqida"],
    correct: 3,
    selection: null,
  },
  {
    id: 3,
    text: "Materikda pampalar nechanchi kengliklar orasida joylashgan?",
    answers: ["10-20° j.k", "30-40° j.k", "50-60° j.k", "0-10° j.k"],
    correct: 1,
    selection: null,
  },
  {
    id: 4,
    text: "Orollarda joylashgan qo'riqxona nomi keltirilgan qatorni belgilang?",
    answers: ["Alberto-Agestini", "Lanin", "Islas-Guaytekas", "Los-Glasyares"],
    correct: 2,
    selection: null,
  },
  {
    id: 5,
    text: "Patagoniya materikning qaysi qismida joylashgan?",
    answers: [
      "Braziliya yassitog'ligidan g'arbda",
      "La-Plata pasttekisligidan janubda",
      "Gviana yassitog'ligidan shimolda",
      "Amazonka pasttekisligining sharqida",
    ],
    correct: 1,
    selection: null,
  },
  {
    id: 6,
    text: "Gviana iliq oqimi materikning qaysi tomonida haraklanadi?",
    answers: ["Janubida", "Janubi-G'arbida", "Shimoli-Sharqida", "Sharqida"],
    correct: 2,
    selection: null,
  },
  {
    id: 7,
    text: "Materikning janubida joylashgan bo'g'ozni ko'rsating!",
    answers: ["Gudzon", "Yukatan", "Bering", "Magellan"],
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

export function SouthAmericaTest() {
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
          <h1 className="intro-title">Janubiy Amerika Test</h1>
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
