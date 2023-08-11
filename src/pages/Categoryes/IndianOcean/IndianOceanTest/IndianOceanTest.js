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
    text: "Hind okeani ekvatoriyasining maydoni necha km²ga teng?",
    answers: ["90 mln.", "76.2 mln.", "180 mln.", "78.2 mln."],
    correct: 1,
    selection: null,
  },
  {
    id: 1,
    text: "XV asrda yashab o'tgan qaysi xitoylik Hind okeaniga yetti marta katta ekspeditsiya uyushtiradi?",
    answers: ["Chjan Syan", "A. Nikitin", "Chjen Xe", "Syuan Szan"],
    correct: 2,
    selection: null,
  },
  {
    id: 2,
    text: "`Uch dengiz osha` kitobining muallifi kim?",
    answers: ["Jeyms Kuk", "Vasko da Gama", "Myunster", "Afanasiy Nikitin"],
    correct: 3,
    selection: null,
  },
  {
    id: 3,
    text: "Hind okeani birinchi marta 1555 yilda kimning kartasida o'z o'rnini egallaydi?",
    answers: ["Vasko da Gama", "Myunster", "Jeyms Kuk", "Uayvil Tomson"],
    correct: 0,
    selection: null,
  },
  {
    id: 4,
    text: "Hind okeanini kompleks o'rganish nechanchi asrda boshlanadi?",
    answers: ["XVI asrda", "XVIII asrda", "XV asrda", "XIX asrning oxirida"],
    correct: 2,
    selection: null,
  },
  {
    id: 5,
    text: "Hind okeani haqidagi 50 jildlik (30000 bet) ilmiy to'plam qaysi ekspeditsiya a'zolari tomonidan to'plandi va nashr qilindi?",
    answers: [
      "`Dmitriy Mendeleev`, rus ekspeditsiyasi",
      "`Chellenjer` kemasi, ingliz ekspeditsiyasi",
      "`Vityaz` kemasi, ingliz ekspeditsiyasi",
      "`Valdiviya` kemasi, nemis ekspeditsiyasi",
    ],
    correct: 1,
    selection: null,
  },
  {
    id: 6,
    text: "1900-yilda Hind okeanining batimetrik kartasini kim tuzadi?",
    answers: ["Uayvil Tomson", "Jeyms Kuk", "G.Shott", "Ch.Darvin"],
    correct: 2,
    selection: null,
  },
  {
    id: 7,
    text: "Hind okeani osti tog' tizmasi berilgan qatorni keltiring!",
    answers: [
      "Arabiston-Hind tog' tizmasi",
      "G'arbiy Hind tog' tizmasi",
      "Sharqiy Hind tog' tizmasi",
      "Barchasi to'g'ri",
    ],
    correct: 3,
    selection: null,
  },
  {
    id: 8,
    text: "Hind okeanidagi vulkanik orollar berilgan qatorni ko'rsating!",
    answers: [
      "Maskaren, Komor",
      "Tasmaniya, Shri-Lanka",
      "Makdonell va Masgreiv",
      "Andaman, Nikobar",
    ],
    correct: 1,
    selection: null,
  },
  {
    id: 9,
    text: "Hind okeani suv osti yoriqlari berilgan qatorni ko'rsating!",
    answers: [
      "Amsterdam, Tasmanov",
      "Ouen, Mavrikiya, Prins-Eduard",
      "Diamantin, Ob",
      "Barchasi to'g'ri",
    ],
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

export function IndianOceanTest() {
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
          <h1 className="intro-title">Hind okeani Test</h1>
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
