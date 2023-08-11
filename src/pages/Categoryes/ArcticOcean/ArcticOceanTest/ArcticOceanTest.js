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
    text: "Shimoliy Muz okeanining suv hajmi necha km³ni tashkil qiladi?",
    answers: ["38 mln.", "28 mln.", "18 mln.", "5 mln."],
    correct: 2,
    selection: null,
  },
  {
    id: 1,
    text: "Shimoliy Muz okeani dastlab mustaqil okean sifatida kim tomonidan ajratilgan va Giperborey okeani deb nomlangan?",
    answers: ["Strabon", "B.Varenius", "V.Barents", "Yugorskiy Shar"],
    correct: 0,
    selection: null,
  },
  {
    id: 2,
    text: "Shimoliy Muz okeani Atlantika okeanidan necha marta kichik?",
    answers: ["4", "7", "6.35", "5"],
    correct: 1,
    selection: null,
  },
  {
    id: 3,
    text: "Buyuk shimol ekspeditsiyasi qachon amalga oshirilgan?",
    answers: [
      "1878-1879-yillarda",
      "1827-1829-yillarda",
      "1733-1743-yillarda",
      "1893-1896-yillarda",
    ],
    correct: 2,
    selection: null,
  },
  {
    id: 4,
    text: "Shimoliy Muz okeaniga mansub dengiz berilgan qatorni belgilang!",
    answers: [
      "Levant, Egey, Norvegiya",
      "Kara, Bofort, Grenlandiya",
      "Boltiq, Irlandiya, Kara",
      "Pirrey, Adriatika, Qizil",
    ],
    correct: 1,
    selection: null,
  },
  {
    id: 5,
    text: "Quyidagi qo'ltiqlardan qaysi biri Shimoliy Muz okeaniga tegishli?",
    answers: ["Saturn", "Venera", "Neptun", "Yupiter"],
    correct: 3,
    selection: null,
  },
  {
    id: 6,
    text: "Qaysi sayyora qadimiy rimliklarning vaqt va hosil xudosi nomi bilan atalgan?",
    answers: ["Ob", "Mezen", "Amundsen", "Barchasi to'g'ri"],
    correct: 3,
    selection: null,
  },
  {
    id: 7,
    text: "Shimoliy Muz okeani ekvatoriyasidagi tog' tizmalari ko'rsatilgan qatorni ko'rsating!",
    answers: [
      "Mendeleyev tizmasi",
      "Lomonosov tizmasi",
      "Gekkel tizmasi",
      "Barchasi to'g'ri",
    ],
    correct: 3,
    selection: null,
  },
  {
    id: 8,
    text: "Alfa platosi okeanning qaysi qismida joylashgan?",
    answers: [
      "Kara dengizi shimolida",
      "Laptevlar dengizida",
      "Grendlandiya va Elsmir orollariga yaqin joyda",
      "Chukotka dengizidan shimol tomonda",
    ],
    correct: 2,
    selection: null,
  },
  {
    id: 9,
    text: "Suv sathidan 25 m chuqurlikkacha bo'lgan qatlamda suvning sho'rligi qancha bo'ladi?",
    answers: ["25-29 %o", "32 %o", "15-19 %o", "23 %o"],
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

export function ArcticOceanTest() {
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
          <h1 className="intro-title">Shimoliy Muz okeani Test</h1>
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
