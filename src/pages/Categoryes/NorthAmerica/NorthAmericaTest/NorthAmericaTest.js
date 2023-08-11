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
    text: "Shimoliy Amerikaning atrofidagi orollarisiz maydoni qancha?",
    answers: ["14.8 mln km²", "30.3 mln km²", "24.2 mln km²", "20.36 mln km²"],
    correct: 3,
    selection: null,
  },
  {
    id: 1,
    text: "Shimoliy Amerikaning shimoldagi eng chekka nuqtasi Myorchison burni (71°50' sh.k.) qaysi yarim orolda joylashgan?",
    answers: [
      "Asuero yarim orolida",
      "Labrador yarim orolida",
      "Butiya yarim orolida",
      "Alyaska yarim orolida",
    ],
    correct: 2,
    selection: null,
  },
  {
    id: 2,
    text: "Materikning sharqiy chekka nuqtasini belgilang!",
    answers: [
      "Maryato burni",
      "Sent-Charlz burni",
      "Myorchison burni",
      "Uels Shahzodasi burni",
    ],
    correct: 1,
    selection: null,
  },
  {
    id: 3,
    text: "Meksika qo'ltig'ining maydoni qancha?",
    answers: ["3 mln km²", "1 mln km²", "1.5 mln km²", "2.5 mln km²"],
    correct: 2,
    selection: null,
  },
  {
    id: 4,
    text: "1492-1503 yillarda kim boshchiligidagi ekspeditsiya Amerika qit'asiga tashrif buyuradi?",
    answers: ["A.Makkenzi", "X.Kolumb", "G.Gudzon", "Erik Raudi"],
    correct: 1,
    selection: null,
  },
  {
    id: 5,
    text: "Alyaskadagi rus mulklari Amerika Qo'shma Shtatlariga qachon sotib yuboriladi?",
    answers: ["1876-yilda", "1865-yilda", "1914-yilda", "1867-yilda"],
    correct: 3,
    selection: null,
  },
  {
    id: 6,
    text: "Platforma materikning necha % hududini egallagan?",
    answers: ["75 %", "30 %", "40 %", "65 %"],
    correct: 0,
    selection: null,
  },
  {
    id: 7,
    text: "Shimoliy Amerikaning materik muzliklari nomi berilgan qatorni ko'rsating?",
    answers: ["Nebraska", "Kanzas", "Illinoys", "Barchasi to'g'ri"],
    correct: 3,
    selection: null,
  },
  {
    id: 8,
    text: "Hozirda tektonik harakatlar natijasida materikning qaysi qismida ko'tarilish (o'sish) hodisasi yuz bermoqda?",
    answers: [
      "Meksikabo'yi pastekisligida",
      "Vankuver oroli bilan Kaliforniya yarim oroli oralig'ida",
      "Kanada qalqonining janubiy qismida",
      "Michigan ko'li atrofida",
    ],
    correct: 2,
    selection: null,
  },
  {
    id: 9,
    text: "Shimoliy Amerikaning o'rtacha balandligi g'arbda necha metrga yetadi?",
    answers: ["200-300 m", "1700 m", "560 m", "729 m"],
    correct: 1,
    selection: null,
  },
  {
    id: 10,
    text: "Markaziy tekisliklar qayerda joylashgan?",
    answers: [
      "Appalachi tog'ining sharqida",
      "Missuri vodiysining janubida",
      "Qoyali tog'larning g'arbida",
      "Lavrentiy platosidan janubda",
    ],
    correct: 3,
    selection: null,
  },
  {
    id: 11,
    text: "Kordilyera tog' tizmasining umumiy uzunligi qancha?",
    answers: ["18000 km", "9700 km", "2300 km", "6000 km"],
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

export function NorthAmericaTest() {
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
          <h1 className="intro-title">Shimoliy Amerika Test</h1>
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
