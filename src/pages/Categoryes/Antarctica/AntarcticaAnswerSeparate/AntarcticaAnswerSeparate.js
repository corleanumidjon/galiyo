import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions";

import AntarcticaBearImg from "../../../../assets/images/white-bear.jpeg"
import AntarcticaSnakeImg from "../../../../assets/images/africa-snake.jpg"
import AntarcticaDolphinImg from "../../../../assets/images/white-dolphin.jpg"
import AntarcticaPenguinsImg from "../../../../assets/images/penguins.jpg"
import AntarcticaDeerImg from "../../../../assets/images/deer-in-forest.jpeg"
import AntarcticaSealImg from "../../../../assets/images/seal.jpg"
import AntarcticaBird2Img from "../../../../assets/images/antarctica-bird-2.jpg"
import AntarcticaTurtleImg from "../../../../assets/images/turtle.jpg"
import AntarcticaBirdImg from "../../../../assets/images/antarctica-bird.jpg"
import AntarcticaFishImg from "../../../../assets/images/antarctica-fish.jpg"

export const AntarcticaAnswerSeparate = () => {
    const data = {
        questionsHaveImg: true,
        answersHaveImg: false,
        questions: [
            {
                id: "q1",
                title: "",
                isImage: true,
                img: AntarcticaBearImg,
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "q2",
                title: "",
                isImage: true,
                img: AntarcticaSnakeImg,
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "q3",
                title: "",
                isImage: true,
                img: AntarcticaDolphinImg,
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "q4",
                title: "",
                isImage: true,
                img: AntarcticaPenguinsImg,
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "q5",
                title: "",
                isImage: true,
                img: AntarcticaDeerImg,
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "q6",
                title: "",
                isImage: true,
                img: AntarcticaSealImg,
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "q7",
                title: "",
                isImage: true,
                img: AntarcticaBird2Img,
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "q8",
                title: "",
                isImage: true,
                img: AntarcticaTurtleImg,
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "q9",
                title: "",
                isImage: true,
                img: AntarcticaBirdImg,
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "q10",
                title: "",
                isImage: true,
                img: AntarcticaFishImg,
                answer: "1",
                bgColor: "#686de0"
            },
        ],
        answers: [
            {
                id: "a1",
                title: "Mansub",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a2",
                title: "Mansub emas",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "a3",
                title: "Mansub",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a4",
                title: "Mansub",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a5",
                title: "Mansub",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a6",
                title: "Mansub emas",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "a7",
                title: "Mansub",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a8",
                title: "Mansub emas",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "a9",
                title: "Mansub",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a10",
                title: "Mansub",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
        ]
    }
    return <>
        <section className="antarctida-answer-separate">
            <div className="container">
                <h2 className="drag-and-drop-title">
                    Bunda materikka xos bo'lgan hayvonot olami ajratib olinsin.
                </h2>
                <DragDropQuestions data={data}/>
            </div>
        </section>
    </>
}
