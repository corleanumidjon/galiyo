import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions"

export const HydrosphereFindSuitable = () => {
    const data = {
        questionsHaveImg: false,
        answersHaveImg: false,
        questions: [
            {
                id: "q1",
                title: "Tektonik botiqda va tektonik yoriqda joylashgan ko'llar :",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q2",
                title: "Vulqonik va zilzila oqibatida vujudga kelgan to ‘siq ya’ni to'g'on ко'llar",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q3",
                title: "Antropogen ko'llar",
                isImage: false,
                img: "",
                answer: "3",
                bgColor: "#eb4d4b"
            },
            {
                id: "q4",
                title: "Morena va liman ko'llari",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#eb4d4b"
            },
            {
                id: "q5",
                title: "Tektonik botiqda va tektonik yoriqda joylashgan ko'llar",
                isImage: false,
                img: "",
                answer: "5",
                bgColor: "#eb4d4b"
            },
            {
                id: "q6",
                title: "Antropogen ko'llar",
                isImage: false,
                img: "",
                answer: "6",
                bgColor: "#eb4d4b"
            },
        ],
        answers: [
            {
                id: "a1",
                title: "Kaspiy, Viktoriya, Issiqko’l, Baykal, Tanganika, Nyasa. Balxash",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a2",
                title: "Asvon. Bratsk. Chordara, Chorvoq, Kattaqo'rgon",
                isImage: false,
                img: "",
                answer: "3",
                bgColor: "#686de0"
            },
            {
                id: "a3",
                title: "Ilmen, Pskov, Iskandar ko’l, Marakaybo",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#686de0"
            },
            {
                id: "a4",
                title: "Kroniki, Kuril ko’llari, Sarez",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a5",
                title: "Kaspiy, Viktoriya",
                isImage: false,
                img: "",
                answer: "5",
                bgColor: "#686de0"
            },
            {
                id: "a6",
                title: "Chordara, Chorvoq",
                isImage: false,
                img: "",
                answer: "6",
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
