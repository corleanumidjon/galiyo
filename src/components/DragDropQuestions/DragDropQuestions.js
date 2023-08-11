import React, { useState } from 'react';
import "./DragDropQuestions.scss"

export const DragDropQuestions = ({data}) => {

	const [questions, setQuestions] = useState([...data.questions]);

	const [answers, setAnswers] = useState([...data.answers]);



	const handleDragStart = (event, itemId) => {
		event.dataTransfer.setData('id', itemId);
	};

    const handleDrop = (event, targetItem) => {
        let itemId = event.dataTransfer.getData('id');

        let dragItem = {}

        
        if(itemId.split("")[0] == "q") {
            dragItem = questions.find(item => item.id == itemId)
        }
        else if(itemId.split("")[0] == "a") {
            dragItem = answers.find(item => item.id == itemId)
        }
        
        if (dragItem.answer == targetItem.answer && itemId?.split("")[0] != targetItem.id?.split("")[0]) {
            if(itemId.split("")[0] == "q") {
                setQuestions((prevQuestions) => prevQuestions.filter((question) => question.id !== itemId));
                setAnswers((prevAnswers) => prevAnswers.filter((answers) => answers.id !== targetItem.id));
            }
            else if(itemId.split("")[0] == "a") {
                setQuestions((prevQuestions) => prevQuestions.filter((question) => question.id !== targetItem.id));
                setAnswers((prevAnswers) => prevAnswers.filter((answers) => answers.id !== itemId));
            }
        } else {
        }
    };

	const renderItems = (items) => {
		return items.map((item, i) => (
			<li
                className='drag-drop-card'
				key={i}
				data-id={item.id}
				draggable
				onDragStart={(event) => handleDragStart(event, item.id)}
				onDrop={(event) => handleDrop(event, item)}
				onDragOver={(event) => event.preventDefault()}
				style={{
					backgroundColor: item.bgColor,
				}}
			>
                {item.isImage ? <>
                    <img className='drag-drop-img' src={item.img} alt="Image" />
                </> : <>
                    <p className='drag-drop-text'>
                        {item.title}
                    </p>
                </>}
			</li>
		));
	};


	return (
        questions.length == 0 && answers.length == 0 ? <>
            <h2 className="drag-drop-win-text">
                Barchasini to'g'ri topdingiz!!
            </h2>

            <button className='drag-drop-again-btn' onClick={() => {
                    setQuestions([...data.questions]);
                    setAnswers([...data.answers]);
            }}></button>
        </>  : <div className='drag-drop-wrapper'>
            <ul className={`drag-drop-box ${data.questionsHaveImg ? "have-img" : ""}`}>
                {renderItems(questions)}
            </ul>
            <ul className={`drag-drop-box ${data.answersHaveImg ? "have-img" : ""}`}>
                {renderItems(answers)}
            </ul>
        </div>
	);
};
