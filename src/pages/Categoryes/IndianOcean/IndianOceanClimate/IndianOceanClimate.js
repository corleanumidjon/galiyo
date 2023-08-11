import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions"

export const IndianOceanClimate = () => {
    const data = {
        questionsHaveImg: false,
        answersHaveImg: false,
        questions: [
            {
                id: "q1",
                title: "Hind okeanining shimoliy qismi ",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q2",
                title: "Eng kam  yog'in(100mm)",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q3",
                title: "Eng ko'p yog'in (3000mm)",
                isImage: false,
                img: "",
                answer: "3",
                bgColor: "#eb4d4b"
            },
            {
                id: "q4",
                title: "2000-3000 mm yog'in",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#eb4d4b"
            },
            {
                id: "q5",
                title: "Fors qo'ltig'i",
                isImage: false,
                img: "",
                answer: "5",
                bgColor: "#eb4d4b"
            },
            {
                id: "q6",
                title: "Qizil dengizi",
                isImage: false,
                img: "",
                answer: "6",
                bgColor: "#eb4d4b"
            },
        ],
        answers: [
            {
                id: "a1",
                title: "Sho'rligi 39-40‰",
                isImage: false,
                img: "",
                answer: "5",
                bgColor: "#686de0"
            },
            {
                id: "a2",
                title: "Sho'rligi 41-42‰",
                isImage: false,
                img: "",
                answer: "6",
                bgColor: "#686de0"
            },
            {
                id: "a3",
                title: "Arabiston dengizining sharqiga yog'adi.",
                isImage: false,
                img: "",
                answer: "3",
                bgColor: "#686de0"
            },
            {
                id: "a4",
                title: "Ekvator yoniga yog'adi",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#686de0"
            },
            {
                id: "a5",
                title: "Arabiston dengizining g'arbida yog'adi.",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a6",
                title: "Musson iqlim xarakterli va harorati yozda +25 o,+27°S",
                isImage: false,
                img: "",
                answer: "1",
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
