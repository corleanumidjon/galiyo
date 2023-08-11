import { ToastContainer, toast } from "react-toastify";
import Crossword from '@jaredreisinger/react-crossword';
import { useEffect, useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import "./SunSystemCrossword.scss"
export const SunSystemCrossword = () => {
    const data = {
		across: {
            1: {
				clue: "Quyosh to'la tutilganda qoraygan doiraning eng chekkasida och qizil yog‘du ko‘rinadi. Ana shu yog'du qanday nomlanadi?",
                answer: "XRAMOSFERA",
				row: 1,
				col: 2,
			},
            2: {
				clue: "Olimlar Quyosh tizimini ikki faslga ajratadi, birinchisi qulay, ikkinchi fasl qanday nomlanadi?",
                answer: "NOQULAY",
				row: 3,
				col: 5,
			},
            3: {
				clue: "Quyoshda vodorod nimaga aylanib, uzluksiz yadro reaksiyasi sodir bo'lishi oqibatida markazdagi issiqlik energiyasi tashqariga otilib chiqishiga sabab bo'ladi?",
                answer: "GELIY",
				row: 6,
				col: 5,
			},
		},
		down: {
            4: {
				clue: "Quyoshning o'ta qizigan, ustki ko'rinishi notekis, gazsimon moddalar mavjud bo'lgan, yorug'lik tarqatuvchi yuzasi nima deb ataladi?",
                answer: "FOTOSFERA",
				row: 0,
				col: 6,
			},
            5: {
				clue: "Quyoshning markazi bo'lib, unda bosim va harorat juda yuqori, u deyarli ko'zga ko'rinmaydigan va harakatsiz, o'ta yuqori haroratga ega bo'lgan gazlardan iborat bo'ladi. Yuqorida quyoshning qaysi qismi haqida gapirilmoqda?",
                answer: "YADRO",
				row: 3,
				col: 11,
			},
            6: {
				clue: "Issiqlikni nur yordamida tashilish oblastining tepasida joylashgan oblast bo'lib, u konvektiv holatdagi ko'zga ko'rinmaydigan gazlardan iborat bo'ladi. Gap quyoshning qaysi oblasti haqida ketmoqda?",
                answer: "KONVEKTIV",
				row: 0,
				col: 0,
			},
		},
	};

    const crosswordRef = useRef()

    const onCorrect = (direction, number, answer) => {
        toast.success(`№${number} Sovolga tog'ri jovob berdingiz!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        toast()
	};

    useEffect(() => {
        crosswordRef.current.reset()
    }, []);
	return (
		<>
			<section className='sun-system-crossword'>
				<div className='container'>
					<div className='sun-system-crossword-wrapper'>
						<div className='sun-system-crossword-box'>
							<Crossword
                                ref={crosswordRef}
								data={data}
                                onCorrect={onCorrect}
							/>
						</div>
					</div>
                    <button className='sun-system-crossword-btn' onClick={() => {
                        if(crosswordRef.current.isCrosswordCorrect()) {
                            toast.success(`Tabrikliman barcha sovollarga tog'ri jovob berdinhiz!`, {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                });
                            toast()
                        }
                        else {
                            toast.error(`Krossvordni ohirgacha qilinmadi!!`, {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                });
                            toast()
                        }
                    }}>Krossvordni tekshirish</button>
				</div>
			</section>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            <ToastContainer />
		</>
	);
}


// YADRO 
// KONVEKTIV  
// FOTOSFERA 
// XRAMOSFERA 
// NOQULAY 
// GELIY 