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
    text: "Biosferaning birlamchi shakllanishi bundan 3 mlrd yil ilgari qaysi erada sodir bo'lgan?",
    answers: ["Paleozoy", "Kaynazoy", "Arxey", "Proterozoy"],
    correct: 3,
    selection: null,
  },
  {
    id: 1,
    text: "Yer sharida hayot qatlami biosferani birinchi bo'lib ajratgan olim kim?",
    answers: ["V.Vernadskiy", "E.Zyuss", "G.Grigorev", "A.I.Oparin"],
    correct: 1,
    selection: null,
  },
  {
    id: 2,
    text: "Yer yuzasidagi organizmning evalyutsion taraqqiyoti va (hujayra) tuzilishi jihatidan nechta turga bo'linadi?",
    answers: ["3 ta", "2 ta", "6 ta", "4 ta"],
    correct: 3,
    selection: null,
  },
  {
    id: 3,
    text: "Bu organizmlarga yashil o'simliklar kirib, ular geografik muhitda noorganik moddalarni organik maddalarga aylantirib beradi. Fanda ular qanday nomlanadi?",
    answers: ["Bakteriyalar", "Zamburug'lar", "Avtotrof", "Geterotrof"],
    correct: 2,
    selection: null,
  },
  {
    id: 4,
    text: "Tirik organizmlar tog' jinslarining nurashida ishtirok etsa bu qanday nurash deb ataladi?",
    answers: [
      "Kimyoviy nurash",
      "Organik nurash",
      "Fizik nurash",
      "To'g'ri javob yo'q",
    ],
    correct: 1,
    selection: null,
  },
  {
    id: 5,
    text: "Atmosferadagi kislorod necha yilda yangilanadi?",
    answers: ["1000 yilda", "7 yilda", "5800 yilda", "400 yilda"],
    correct: 2,
    selection: null,
  },
  {
    id: 6,
    text: "Tuproqda tirik organizmlarning qoldiqlarining to'planishi natijasida qanday qoramtir organik modda vujudga keladi?",
    answers: ["Gumus", "Temir", "Oltingugurt", "Azot"],
    correct: 0,
    selection: null,
  },
  {
    id: 7,
    text: "Tayyor organik moddalarni iste'mol qilish hisobiga yashovchi organizmlar qaysilar?",
    answers: ["Amyobalar", "Avtotroflar", "Psilofitlar", "Geterotroflar"],
    correct: 3,
    selection: null,
  },
  {
    id: 8,
    text: "Quriqlikdagi biomassalar okeanlardagidan qancha ko'p?",
    answers: ["100 martta", "700 martta", "200 martta", "570 martta"],
    correct: 2,
    selection: null,
  },
  {
    id: 9,
    text: "Quruqlikdagi eng kop biomassa qayerlarda tarqalgan?",
    answers: [
      "Tundra va tayga zonalarida",
      "Ekvatorial va tropik o'rmonlarda",
      "Mo'tadil mintaqa o'rmonlarida",
      "Janubiy tropik mintaqalarda",
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

export function BiosphereTest() {
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
          <h1 className="intro-title">Biosfera Test</h1>
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
