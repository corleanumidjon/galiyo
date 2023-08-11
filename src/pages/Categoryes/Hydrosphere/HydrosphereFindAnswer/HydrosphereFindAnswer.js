import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions"

export const HydrosphereFindAnswer = () => {
    const data = {
        questionsHaveImg: false,
        answersHaveImg: false,
        questions: [
            {
                id: "q1",
                title: "Atlantika okeani",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q2",
                title: "Shimoliy muz okeani",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q3",
                title: "Hind okeani",
                isImage: false,
                img: "",
                answer: "3",
                bgColor: "#eb4d4b"
            },
            {
                id: "q4",
                title: "Tinch okeani",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#eb4d4b"
            },
        ],
        answers: [
            {
                id: "a1",
                title: "0'rtacha chuqurligi 3926 m, Shimoldan janubga 12 ming km masofaga cho'zilgan. dengiz transportida dunyo bo'yicha 1-o'rinda turadi, ichki dengizlari eng ko'p",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a2",
                title: "Yeryuzining 1/3 qismini egallagan, O'rtacha chuqurligi 3960 m, dengizlari soni 26 ta, suv tubi vulqonlari bo'yicha l-o'rinda turadi.",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#686de0"
            },
            {
                id: "a3",
                title: "Ikkita materik o'rab turadi, dengizlar soni 10 ta, eng yirik qo'ltig'i - Gudzon , eng yuqori suv ko'tarilishi-Mezen lab",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a4",
                title: "Suv hajmi 282 700 000 km3, eng yuqori suv koMarilishi Kambey qo’ltig’ida 11,9 m, tashiladigan neft hajmi bo’yicha 1-o'rinda turadi, cho'kindi jinslari eng qalin (5,5 km)",
                isImage: false,
                img: "",
                answer: "3",
                bgColor: "#686de0"
            },
        ]
    }
    return <>
        <section>
            <div className="container">
                <DragDropQuestions data={data}/>
            </div>
        </section>
    </> 
}
