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
    text: "Koinotga tegishli asosiy tushunchalar berilgan qatorni ko'rsating!",
    answers: [
      "Olam, metagalaktika, galaktika",
      "Yulduzlar, Quyosh tizimi, sayyoralar",
      "Yo'ldoshlar, asteroidlar, meteorlar, meteoritlar",
      "Barchasi to'g'ri",
    ],
    correct: 3,
    selection: null,
  },
  {
    id: 1,
    text: "Olam vujudga kelishiga asos bo'lgan “Katta portlash” hodisasi necha milliard yil avval sodir bo'lgan?",
    answers: ["8-10", "10-12", "15-20", "15-18"],
    correct: 2,
    selection: null,
  },
  {
    id: 2,
    text: "Galaktikada gaz va chang tumanliklaridan iborat galaktikalar to'plamiga nima deyiladi?",
    answers: ["Metroit", "Metagalaktika", "Olam", "Galaktika"],
    correct: 1,
    selection: null,
  },
  {
    id: 3,
    text: "Yerga eng yaqin bo'lgan galaktika nomi berilgan qatorni ko'rsating!",
    answers: [
      "Ekvatorial",
      "Sombrero galaktikasi",
      "Andromeda galaktikasi",
      "Deva galaktikasi",
    ],
    correct: 2,
    selection: null,
  },
  {
    id: 4,
    text: "Somon yo'li galaktikasida hamma yulduzlar galaktika o'qi atrofida aylanadi. U sekundiga taxminan 250 km tezlik bilan harakat qilib, necha mln. yorug'lik yilida galaktika atrofini bir marta to'liq aylanib chiqadi?",
    answers: ["300", "200", "80", "150"],
    correct: 1,
    selection: null,
  },
  {
    id: 5,
    text: "Yulduzlarning yuzasida harorat necha gradusgacha yetishi mumkin?",
    answers: [
      "5000°C dan 50 000°C gacha",
      "7000°C dan 40 000°C gacha",
      "1000°C dan 60 000°C gacha",
      "3000°C dan 30 000°C gacha",
    ],
    correct: 3,
    selection: null,
  },
  {
    id: 6,
    text: "Yulduzlar tarkibida qaysi moddalar ko'pligi hisobiga energiya va nur hosil bo'ladi?",
    answers: [
      "Geliy va vodorod",
      "Vodorod va azot",
      "Azot va kislorod",
      "Turli xil inert gazlar",
    ],
    correct: 0,
    selection: null,
  },
  {
    id: 7,
    text: "Osmondagi yulduzlar tarqalish miqyosini aniqlashga uringan birinchi astronom kim?",
    answers: [
      "Geminiano Montanari",
      "Edward Pickering",
      "Angelo Secchi",
      "William Herschel",
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

export function UniverseTest() {
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
          <h1 className="intro-title">Koinot Test</h1>
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
