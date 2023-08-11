import React, { useRef, useState, useEffect } from 'react';
import {
	Question,
	Results,
	useCounter,
} from '../../../../components/Test/test';
import { useNavigate } from 'react-router-dom';
import '../../../../styles/tests.scss';

const questions = [
	{
		id: 0,
		text: "Azimut qaysi tildan olingan va qanday ma'noni bildiradi?",
		answers: [
			"Yunoncha-yo'nalish",
			"Arabcha-yo'l",
			'Arabcha-taraf, tomon',
			'Arabcha-joyni tasvirlayman',
		],
		correct: 1,
		selection: null,
	},
	{
		id: 1,
		text: "Azimut necha xil bo'ladi?",
		answers: ['10 xil', '5 xil', '2 xil', '4 xil'],
		correct: 2,
		selection: null,
	},
	{
		id: 2,
		text: "Azimutga berilgan ta'riflardan qaysi biri to'g'ri?",
		answers: [
			"Burchaklari shimol yo'nalishidan soat millari harakat yo'nalishi bo'ylab 0° dan 360° gacha hisoblanadi",
			"U graduslarda o'lchanadi",
			"Shimol yo'nalishi bilan biror predmet yo'nalishi orasida hosil bo'lgan burchak",
			"Barchasi to'g'ri",
		],
		correct: 3,
		selection: null,
	},
	{
		id: 3,
		text: "360° azimut ufq(gorizont)ning qaysi yo'nalish(tomon)iga mos kelishini aniqlang!",
		answers: ['Sharq', 'Shimol', "Shimoli-g'arb", "G'arb"],
		correct: 1,
		selection: null,
	},
	{
		id: 4,
		text: "135° gradus azimut ufq(gorizont)ning qaysi yo'nalish(tomon)iga mos kelishini aniqlang!",
		answers: ['Shimoli-sharq', 'Janubi-sharq', "Janubi-g'arb", "G'arb"],
		correct: 0,
		selection: null,
	},
];

<useCounter />;

<Question />;

<Results />;

function QuestionCorrection({ wrong, correct, empty }) {
	return (
		<div className='correction'>
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

export function AzimuthTest() {
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
			return '#fff';
		} else if (question.value === index) {
			return '#29b5d5';
		} else {
			return 'rgba(255,255,255,.2)';
		}
	};

	useEffect(() => {
		if (gameStarted) {
			document.body.classList.add('game-started');
		} else {
			document.body.classList.remove('game-started');
		}
	}, [gameStarted]);

	useEffect(() => {
		if (question.value > totalQuestion) {
			gameRef.current.scrollTop = 0;
		}
	}, [question.value]);

	return (
		<div
			className='game'
			ref={gameRef}
			data-game-started={gameStarted ? true : null}
			data-game-finished={question.value > totalQuestion ? true : null}
		>
			<div className='intro'>
				<div className='intro-inner'>
					<h1 className='intro-title'>Azimut Test</h1>
					{!gameStarted && (
						<>
							<p className='intro-desc'>
								{`Test ${questions.length} ta savoldan iborat bo'lib, vaqt chegarasi yo'q.`}
							</p>
							<div className='intro-box'>
								<button
									className='intro-button'
									onClick={() => setGameStarted(true)}
								>
									Boshlash
								</button>
								<button
									className='intro-button'
									onClick={() => navigate('/')}
								>
									Chiqish
								</button>
							</div>
						</>
					)}
					{gameStarted && (
						<div className='indicator'>
							{questions.map((q, index) => {
								return (
									<span
										className='indicator-item'
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
						className='restart-button'
						onClick={() => handleRestartClick()}
					>
						Qayta Boshlash
					</button>
				</div>
			</div>
			<div className='game-area'>
				{questions[question.value] && (
					<Question
						data={questions[question.value]}
						buttonText={
							question.value !== totalQuestion
								? 'Keyingi savol'
								: 'Yakunlash'
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
