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
    text: "Strabon davrida Atlantika okeani kartalarda qanday nom bilan tasvirlangan?",
    answers: [
      "Mudhish dengiz",
      "Qorong'ulik dengizi",
      "G'arbiy okean",
      "Gaditan dengizi",
    ],
    correct: 2,
    selection: null,
  },
  {
    id: 1,
    text: "Eramizdan oldingi IV asrda Shimoliy Atlantika bo'ylab suzishni amalga oshirgan va suzish paytida bir qator hududlarning kengliklarini aniqlagan, suvning ko'tarilish jarayonini o'rganib, uning sababini Oy bilan Quyoshning o'ziga tortish qonuniga bog'liq ekanini birinchi bo'lib isbotlab bergan tarixiy shaxs kim?",
    answers: ["Aristotel", "Geradot", "Strabon", "Pifey"],
    correct: 3,
    selection: null,
  },
  {
    id: 2,
    text: "Atlantika okeani nomi birinchi bor 1507-yilda kim tomonidan tuzilgan kartalarda berilgan?",
    answers: ["Vald Zemyuller", "A.R.Beruniy", "Eratosfen", "Merkator"],
    correct: 0,
    selection: null,
  },
  {
    id: 3,
    text: "1519-1523 yillarda kim o'zining dunyo bo'ylab qilgan sayohati paytida Atlantika okeanini kesib o'tgan?",
    answers: ["I.F.Kruzenshtern", "Vasko da Gama", "F.Magellan", "J.Kuk"],
    correct: 2,
    selection: null,
  },
  {
    id: 4,
    text: "Atlantika okeaniga mansub dengizlar berilgan qatorni belgilang!",
    answers: [
      "Pirrey, Adriatika, Qizil",
      "Sargasso, Baffin, Labrador",
      "Levant, Egey, Norvegiya",
      "Boltiq, Irlandiya, Kara",
    ],
    correct: 1,
    selection: null,
  },
  {
    id: 5,
    text: "Quyidagi qo'ltiqlardan qaysi biri Atlantika okeaniga tegishli?",
    answers: ["Meksika", "Gudzon", "Avliyo Lavrentiy", "Barchasi to'g'ri"],
    correct: 0,
    selection: null,
  },
  {
    id: 6,
    text: "Atlantika okeani ekvatoriyasidagi vulkanik orollar ko'rsatilgan qatorni ko'rsating!",
    answers: [
      "Madeyra, Yashil burun, Asenshen",
      "Bermud, Yan-Maen, Azor",
      "San-Paulu, Vozneseniya, Avliyo Yelena",
      "Barchasi to'g'ri",
    ],
    correct: 3,
    selection: null,
  },
  {
    id: 7,
    text: "Atlantika okeanida juda chuqur suv osti cho'kmalari ham mavjud bo'lib, 8428 m chuqurlikdagi cho'kmaning nomi to'g'ri berilgan qatorni toping!",
    answers: ["Argentina", "Puerto-Riko", "Janubiy Sanichev", "Freyzer"],
    correct: 2,
    selection: null,
  },
  {
    id: 8,
    text: "Shimoliy Atlantikaga Shimoliy Muz okeanidan har yili necha km³ muz oqib keladi?",
    answers: ["1000 km³", "5000 km³", "10000 km³", "20000 km³"],
    correct: 3,
    selection: null,
  },
  {
    id: 9,
    text: "Atlantika okeanidagi iliq oqim berilgan qatorni belgilang!",
    answers: [
      "Golfstrim, Kanar",
      "Braziliya, Gviana",
      "Bengala, Gvineya",
      "Folklend, Antil",
    ],
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

export function AtlanticOceanTest() {
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
          <h1 className="intro-title">Atlantika okeani Test</h1>
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
