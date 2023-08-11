import { ToastContainer, toast } from "react-toastify";
import Crossword from '@jaredreisinger/react-crossword';
import { useEffect, useRef } from "react";
import "./UniverseCrossword.scss";
import 'react-toastify/dist/ReactToastify.css';

export const UniverseCrossword = () => {
    const data = {
		across: {
			1: {
				clue: "Ular quyosh tizimiga kiruvchi qattiq osmon jismlari bo'lib, ularni kichik sayyoralar deyishadi. Ular Quyosh atrofida sayyoralar aylangan tomonga qarab harakat qiladi va ma'lum shaklga ega bo'lmagan va qirrasimon qattiq jismlardir?",
                answer: "ASTEROID",
				row: 2,
				col: 2,
			},
			2: {
				clue: "Atrofimizni urab olgan bepoyon makon va zamonda yastanib yotgan borliq, cheksiz va chegarasiz dunyoni nima deb ataymiz?",
                answer: "OLMA",
				row: 6,
				col: 4,
			},
			3: {
				clue: "Yerga eng yaqin yulduz nomi?",
                answer: "QUYOSH",
				row: 4,
				col: 0,
			},
			4: {
				clue: "Sayyoralarning harakat qonunlari kim tomonidan aniqlangan",
                answer: "KEPLER",
				row: 0,
				col: 7,
			},
		},
		down: {
			5: {
				clue: 'Kepler ta’biri bilan aytganda ular osmonda okeandagi baliq singari suzib yuradi. U uzun sochli degan ma’noni beradi. Gap qaysi osmon jismi haqida ketmoqda?',
				answer: 'KOMETA',
				row: 1,
				col: 7,
			},
			6: {
				clue: 'Galaktikalar tarkibidagi joylashgan bo’lib, o‘zidan yorug’lik va issiqlik chiqarib turadigan, qizigan osmon jismiga nima deb ataladi?',
				answer: 'YULDUZ',
				row: 1,
				col: 1,
			},
			7: {
				clue: 'Yer orbitasi tekisligiga to’g‘ri keluvchi tekislikka nima deb ataladi?',
				answer: 'EKLIPTIKA',
				row: 0,
				col: 11,
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
			<section className='universe-crossword'>
				<div className='container'>
					<div className='universe-crossword-wrapper'>
						<div className='universe-crossword-box'>
							<Crossword
                                ref={crosswordRef}
								data={data}
                                onCorrect={onCorrect}
							/>
						</div>
					</div>
                    <button className='universe-crossword-btn' onClick={() => {
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
