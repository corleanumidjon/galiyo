import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions"

export const PacificOceanCombineAnswers = () => {
    const data = {
        questionsHaveImg: false,
        answersHaveImg: false,
        questions: [
            {
                id: "q1",
                title: "Alyaska",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q2",
                title: "Kaliforniya",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q3",
                title: "Peru",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q4",
                title: "Kurasio",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q5",
                title: "G'arbiy Shamollar",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q6",
                title: "Janubiy Passat",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q7",
                title: "Shimoly Passat",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q8",
                title: "Shimoliy Tinch okean",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q9",
                title: "Sharqiy Avstraliya",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
        ],
        answers: [
            {
                id: "a1",
                title: "Iliq oqimlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a2",
                title: "Sovuq oqimlar",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a3",
                title: "Iliq oqimlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a4",
                title: "Iliq oqimlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a5",
                title: "Iliq oqimlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a6",
                title: "Sovuq oqimlar",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a7",
                title: "Iliq oqimlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a8",
                title: "Sovuq oqimlar",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a9",
                title: "Iliq oqimlar",
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
                <h2 className="drag-and-drop-title">
                    Tinch okeanidagi oqimlarni ajrating.
                </h2>
                <DragDropQuestions data={data}/>
            </div>
        </section>
    </>
}
