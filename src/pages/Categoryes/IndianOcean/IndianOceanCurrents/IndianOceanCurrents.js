import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions"

export const IndianOceanCurrents = () => {
    const data = {
        questionsHaveImg: false,
        answersHaveImg: false,
        questions: [
            {
                id: "q1",
                title: "Iliq oqimlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q2",
                title: "Sovuq oqimlar",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q3",
                title: "Iliq oqimlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q4",
                title: "Sovuq oqimlar",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q5",
                title: "Iliq oqimlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q6",
                title: "Sovuq oqimlar",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q7",
                title: "Iliq oqimlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
        ],
        answers: [
            {
                id: "a1",
                title: "Musson",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a2",
                title: "Somali",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a3",
                title: "Janubiy Passat",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a4",
                title: "G'arbiy shamollar",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a5",
                title: "Igna burni",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a6",
                title: "G'arbiy Avstralia",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a7",
                title: "Mozambik",
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
