import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions"

export const AtmosphereTrueFalse = () => {
    const data = {
        questionsHaveImg: false,
        answersHaveImg: false,
        questions: [
            {
                id: "q1",
                title: "Atmosferadan Yerni issiqlik taratishiga qarshi yo‘naltirilgan issiqlik  qarshi nurlanish deb  ataladi.",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "q2",
                title: "Yer yuzasi uchun o'rtacha effektiv nurlanish 46 kkal ni tashkil qiladi.",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "q3",
                title: "Yer yuzasidan 1 yilda o'rtacha 1000 mm, jumladan, okean sathidan 1240 mm, quruqlik yuzasidan 480 mm namlik bug’lanadi.",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "q4",
                title: "Iliq havo sovuq havoga nisbatan ko‘p suv bug’ini o‘ziga sig’dira oladi.",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "q5",
                title: "Havo harorati qancha yuqori bo'lsa, bu havo o'zida shuncha ko'p suv bug’ini tutib turishi mumkin.",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "q6",
                title: "Nisbiy namlik bilan suv bug’larining faktik elastikligi orasidagi farq namlik defitsiti deyiladi.",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "q7",
                title: "Atmosferaning quyi qismida 18000 km3 suv bug’i mavjud.",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "q8",
                title: "Suvning suyuq holatdan muz holatiga, kristalga aylanishiga bug'lanish deyiladi. ",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "q9",
                title: "Bug’lanish tabiatda suvning aylanib yurishiga, yog’in hosil bo’lishiga imkon bermaydi.",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "q10",
                title: "To‘yingan havoning to'yinmagan havo holatiga o’tish harorati  shudring nuqtasi deyiladi. ",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "q11",
                title: "Meteorologik stantsiyalarda havoning namligi maxsus termometr asbobi yordamida o’lchanadi.",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
        ],
        answers: [
            {
                id: "a1",
                title: "NoTog'ri",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "a2",
                title: "Tog`ri",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a3",
                title: "NoTog'ri",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "a4",
                title: "Tog`ri",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a5",
                title: "NoTog'ri",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "a6",
                title: "Tog`ri",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a7",
                title: "NoTog'ri",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "a8",
                title: "Tog`ri",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a9",
                title: "NoTog'ri",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "a10",
                title: "Tog`ri",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a11",
                title: "NoTog'ri",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
        ]
    }
    return <>
        <section className="antarctida-answer-separate">
            <div className="container">
                <h2 className="drag-and-drop-title">
                    To’g’ri-noto’g’riga ajratish
                </h2>
                <DragDropQuestions data={data}/>
            </div>
        </section>
    </>
}
