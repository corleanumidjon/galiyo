import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions"

export const ArcticOceanCurrents = () => {
    const data = {
        questionsHaveImg: false,
        answersHaveImg: false,
        questions: [
            {
                id: "q1",
                title: "Norvegiya oqimi",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q2",
                title: "G’arbiy grenlandiya oqimi",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q3",
                title: "Alyaska oqimi",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q4",
                title: "Transarktika oqimi",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q5",
                title: "Sharqiy grenlandiya oqimi",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q6",
                title: "Sharqiy antisiklon aylanma harakati",
                isImage: false,
                img: "",
                answer: "2",
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
                title: "Iliq oqimlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a3",
                title: "Sovuq oqimlar",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a4",
                title: "Sovuq oqimlar",
                isImage: false,
                img: "",
                answer: "2",
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
