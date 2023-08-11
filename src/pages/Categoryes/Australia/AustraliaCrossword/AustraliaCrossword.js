import { ToastContainer, toast } from "react-toastify";
import Crossword from '@jaredreisinger/react-crossword';
import { useEffect, useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import './AustraliaCrossword.scss';

export const AustraliaCrossword = () => {
    const data = {
		across: {
			1: {
				clue: "G'arbiy Avstraliya yassi tog'ligidagi cho'l hududlarida, qisman markaziy tekislikda ham katta maydonlarni …………………..deb ataladigan cho'llar egallagan. Avstraliyada bular tarkibiga ikki o'simlik avlodlariga mansub bo'lgan qattiq bargli g'allagullilar kiritiladi.",
                answer: "SPINIFEKS",
				row: 0,
				col: 1,
			},
			2: {
				clue: "Avstraliya uchun endemik hayvonni ayting?",
                answer: "KENGURU",
				row: 5,
				col: 0,
			},
			3: {
				clue: "Avstraliyaning qoyalar orasida va butazorlarida yashovchi kenguru turi ayting?",
                answer: "VALLABI",
				row: 3,
				col: 7,
			},
		},
		down: {
            4: {
				clue: "Avstraliyada tikanli butalar o'sgan chakalakzorlardan yoki qalin mayda bargli daraxtzorlardan iborat, ko'proq akatsiya va evkaliptlar o'sadigan joylar nima deb ataladi?",
                answer: "SKREB",
				row: 2,
				col: 2,
			},
            5: {
				clue: "Avstraliyaga xos endemik o'simlikni nomini ayting?",
                answer: "EVKALIPT",
				row: 0,
				col: 8,
			},
            6: {
				clue: "Bu hayvon o’rdakburun kabi bolasini tuxumdan ochadi va asosan chumolilar bilan oziqlanadi, bu qaysi hayvon?",
                answer: "YEXIDNA",
				row: 0,
				col: 13,
			},
            7: {
				clue: "Bu kaltakesagning tanasida tikanga o'xshash maxsus o'simtalari bo'lib, ular havodan namni qabul oladi, qurg'oqchilik iqlimiga moslashgan bo'ladi, bu kaltakesag qanday nomlanadi?",
                answer: "MOLOX",
				row: 1,
				col: 10,
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
			<section className='australia-crossword'>
				<div className='container'>
					<div className='australia-crossword-wrapper'>
						<div className='australia-crossword-box'>
							<Crossword
                                ref={crosswordRef}
								data={data}
                                onCorrect={onCorrect}
							/>
						</div>
					</div>
                    <button className='australia-crossword-btn' onClick={() => {
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