import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions"

export const AustraliaClimate = () => {
    const data = {
        questionsHaveImg: false,
        answersHaveImg: false,
        questions: [
            {
                id: "q1",
                title: "Subekvatorial mintaqa",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q2",
                title: "Ekvatorial mintaqa",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q3",
                title: "Tropikal mintaqa",
                isImage: false,
                img: "",
                answer: "3",
                bgColor: "#eb4d4b"
            },
            {
                id: "q4",
                title: "Subtropik mintaqa",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#eb4d4b"
            },
            {
                id: "q5",
                title: "Mo'tadil mintaqa",
                isImage: false,
                img: "",
                answer: "5",
                bgColor: "#eb4d4b"
            },
        ],
        answers: [
            {
                id: "a1",
                title: "Bu mintaqa uchun arid sharoitning ustunligi xosdir. Bu mintaqaning  sharqiy  qismi, ya’ni dengiz sohili va  Sharqiy Avstraliya tog’lari, faqat shimol va janubi-sharqni hisobga olmaganda, butun yil bo’yi Janubiy Tinch okean maksimumining g’arbiy chekkasi hamda passat shamollari ta’sirida  bo’lib, bir tekis nam iqlimga ega.",
                isImage: false,
                img: "",
                answer: "3",
                bgColor: "#686de0"
            },
            {
                id: "a2",
                title: "O’rtacha oylik harorat  + 24,+28°S oralig’ida o’zgarib turadi, yuqoriga ko’tarilgan sari harorat pasayadi, lekin yil bo’yi bir xilda bo’ladi",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a3",
                title: "Avstraliyaning shimoli, Yangi Gvineyaning janubi va qo’shni mayda orollar kira",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {   
                id: "a4",
                title: "Tasmaniyaning va Yangi Zelandiyaning janubiy qismlari  bu iqlim mintaqaga  kiradi. Bu orollarning iqlim sharoiti juda sernamligi va haroratning bir xilligi bilan farqlanadi.  G”apbiy shamollarning doimiy ta’siri tufayli g’arbiy sohillarda va tog’larning g’arbiy yonbag’irlariga ko’p yog’in tushadi, yoz va qish oylarining haroratidagi farq juda kam, tog’li hududlar bundan mustasno, tog’larda -50, -7°S gacha sovuq bo’ladi",
                isImage: false,
                img: "",
                answer: "5",
                bgColor: "#686de0"
            },
            {
                id: "a5",
                title: "Avstraliyaning chekka janubi, Tasmaniyaning shimoli va Yangi Zelandiyaning Shimoliy oroli  bu mintaqaga  kiradi.",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#686de0"
            },

        ]
    }
    return <>
        <section>
            <div className="container">
                <h2 className="drag-and-drop-title">
                    Avstraliya iqlimi
                </h2>
                <DragDropQuestions data={data}/>
            </div>
        </section>
    </>
}
