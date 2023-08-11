import Crossword from '@jaredreisinger/react-crossword';
import "./AtmosphereCrossword.scss"
import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AtmosphereCrossword = () => {
	const data = {
		across: {
			1: {
				clue: 'Havoning Yer yuzasidan qaytgan issiqlik hisobiga isishi troposferada ko‘tarilma va pastlama havo oqimlarini vujudga keltiradi. Bunday oqimlar …………….oqimlar deb ataladi?',
				answer: 'KONVEKTIV',
				row: 0,
				col: 3,
			},
			2: {
				clue: 'Atmosferaning qaysi qatlami 55-60 km gacha ko‘tariladi?',
				answer: 'STRATOSFERA',
				row: 2,
				col: 3,
			},
			3: {
				clue: 'Termosfera bilan ekzosfera orasidagi o‘tkinchi qatlam qanday nomlanadi?',
				answer: 'TERMOPUZA',
				row: 6,
				col: 4,
			},
		},
		down: {
			4: {
				clue: 'Troposfera bilan stratosfera oralig’ida qanaqa oraliq qatlam joylashgan?',
				answer: 'TROPOPUAZA',
				row: 0,
				col: 0,
			},
			5: {
				clue: 'Atmosferaning qaysi qatlamida harorat - 90°C gacha pasayadi va kumushsimon bulutlar hosil bo’ladi?',
				answer: 'MEZOSFERA',
				row: 0,
				col: 2,
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
			<section className='atmosphere-crossword'>
				<div className='container'>
					<div className='atmosphere-crossword-wrapper'>
						<div className='atmosphere-crossword-box'>
							<Crossword
                                ref={crosswordRef}
								data={data}
                                onCorrect={onCorrect}
							/>
						</div>
					</div>
                    <button className='atmosphere-crossword-btn' onClick={() => {
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
                {/* Same as */}
            <ToastContainer />
		</>
	);
}
