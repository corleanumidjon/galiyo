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
    text: "Tinch okeanining maydoni yer yuzining qancha qismini egallaydi?",
    answers: ["38 %", "29 %", "30 %", "21 %"],
    correct: 1,
    selection: null,
  },
  {
    id: 1,
    text: "Okean g'arbdan sharqqa necha km masofaga cho'zilgan?",
    answers: ["9 000 km", "7 500 km", "20 000 km", "16 000 km"],
    correct: 2,
    selection: null,
  },
  {
    id: 2,
    text: "Tinch okeaniga tegishli okeanlar berilgan qatorni keltiring!",
    answers: [
      "Marmar, Qora, Azov",
      "Ioni, Levant, Egey",
      "O'rta yer, Pirrey, Adriatika",
      "Sulu, Sulavesi, Yava, Bali",
    ],
    correct: 3,
    selection: null,
  },
  {
    id: 3,
    text: "Tinch okean qirg'oqlari atrofida va orollarida nechtadan ortiq davlatlar joylashgan?",
    answers: ["50", "100", "80", "20"],
    correct: 0,
    selection: null,
  },
  {
    id: 4,
    text: "Tinch okeanida yirik va mayda orollar boshqa okeanlarga nisbatan juda keng tarqalgan bo'lib, ularning soni taxminan qancha?",
    answers: ["1 000", "6 000", "5 000", "10 000"],
    correct: 3,
    selection: null,
  },
  {
    id: 5,
    text: "Tinch okean suvining o'rtacha sho'rligi qancha?",
    answers: ["34,6 %o", "35,5 %o", "17,9 %o", "35 %o"],
    correct: 1,
    selection: null,
  },
  {
    id: 6,
    text: "Sovuq oqim ko'rsatilgan qatorni ko'rsating!",
    answers: ["Kurasio", "Alyaska", "Kaliforniya", "Shimoliy Tinch okean"],
    correct: 2,
    selection: null,
  },
  {
    id: 7,
    text: "Quyidagi cho'kmalarni chuqurligi bo'yicha tartib bilan joylashtiring! \n 1) Volkano, 2) Mariana, 3) Filippin, 4) Tonga, 5) Kermadek",
    answers: [
      "5, 4, 1, 3, 2",
      "2, 4, 3, 5, 1",
      "1, 3, 2, 5, 4",
      "1, 2, 3, 4, 5",
    ],
    correct: 1,
    selection: null,
  },
  {
    id: 8,
    text: "Tinch okeani havzasiga kiruvchi orollar guruhini belgilang!",
    answers: [
      "Feniks, Samoa, Kuk",
      "Tuamatu, Fidji, Gilbert",
      "Gavayi, Marshall, Layn",
      "Barchasi to'g'ri",
    ],
    correct: 3,
    selection: null,
  },
  {
    id: 9,
    text: "Tinch okeaniga “Tinch” nomining berilishi qaysi sayohatchining davriga to'g'ri keladi?",
    answers: ["X.Kolumb", "U.John", "F.Magellan", "J.Kuk"],
    correct: 2,
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

export function PacificOceanTest() {
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
          <h1 className="intro-title">Tinch okeani Test</h1>
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
