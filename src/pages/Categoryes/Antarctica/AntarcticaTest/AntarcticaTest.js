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
    text: "Antarktidaning maydoni necha km²?",
    answers: ["12 mln", "14 mln", "13 mln", "5 mln"],
    correct: 1,
    selection: null,
  },
  {
    id: 1,
    text: "Eng yirik shelf muzligi okeanning qaysi dengizning janubiy yarmini qoplagan?",
    answers: ["Ueddell", "Ross", "Bellinsgauzen", "Lazerov"],
    correct: 2,
    selection: null,
  },
  {
    id: 2,
    text: "Muz bosmagan maydon materik maydonining necha %ini egallaydi?",
    answers: ["0,8 %", "0,2 %", "0,5 %", "0,6 %"],
    correct: 1,
    selection: null,
  },
  {
    id: 3,
    text: "Materik muzining umumiy hajmi qanchani tashkil qiladi?",
    answers: ["11 mln km³", "62 mln km³", "32 mln km³", "24 mln km³"],
    correct: 3,
    selection: null,
  },
  {
    id: 4,
    text: "Antarktidaning eng baland cho'qqisi qaysi?",
    answers: ["Erebus", "Vinson tog'i", "Ballen", "Terror"],
    correct: 0,
    selection: null,
  },
  {
    id: 5,
    text: "Antarktidani o'rganishga kimlar boshchiligidagi ekspeditsiyalar tashrif buyurgan?",
    answers: [
      "F. Bellingsgauzen va M.Lazerov",
      "R.Amundsen",
      "R.Skott",
      "Barchasi to'g'ri",
    ],
    correct: 3,
    selection: null,
  },
  {
    id: 6,
    text: "Antarktida yarim oroli materikni qaysi qismida joylashgan?",
    answers: ["Janubida", "Vostok ilmiy stansiyasida", "G'arbida", "Sharqida"],
    correct: 2,
    selection: null,
  },
  {
    id: 7,
    text: "Janubiy qutbga birinchi bo'lib kimlar yetib borishadi?",
    answers: [
      "Vasko da Gama",
      "R.Amundsen va R.Skot",
      "F.Ch.Bellinsgauzen va M.P.Lazarev",
      "Bering va Chirikovlar",
    ],
    correct: 1,
    selection: null,
  },
  {
    id: 8,
    text: "Materikda yanvarning o'rtacha harorati necha gradusni tashkil etadi?",
    answers: ["-89,2°C", "-60°C, -70°C", "-52°C", "-20°C"],
    correct: 3,
    selection: null,
  },
  {
    id: 9,
    text: "Materikda yiliga 340 kunlab qanday jarayon sodir bo'ladi?",
    answers: [
      "Qorbo'ronlari",
      "Yomg'irli davr",
      "Qutb tuni",
      "Quyoshli kunlar",
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

export function AntarcticaTest() {
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
          <h1 className="intro-title">Antarktida Test</h1>
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
