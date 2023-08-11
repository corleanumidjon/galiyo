import africaForestImg from "../../../../assets/images/africa-forest.jpeg";
import africaAntilopsImg from "../../../../assets/images/africa-antilops.jpeg";
import camelsImg from "../../../../assets/images/camels.jpeg";
import africaForest2Img from "../../../../assets/images/africa-forest-2.jpg";
import africaElephansImg from "../../../../assets/images/africa-elephans.jpeg";
import deerInForestImg from "../../../../assets/images/deer-in-forest.jpeg";
import africaSnakeImg from "../../../../assets/images/africa-snake.jpg";
import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions";

export const AfricaLiveZones = () => {
    const data = {
        questionsHaveImg: true,
        answersHaveImg: false,
        questions: [
            {
                id: "q1",
                title: "",
                isImage: true,
                img: africaForestImg,
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q2",
                title: "",
                isImage: true,
                img: africaAntilopsImg,
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q3",
                title: "",
                isImage: true,
                img: camelsImg,
                answer: "3",
                bgColor: "#eb4d4b"
            },
            {
                id: "q4",
                title: "",
                isImage: true,
                img: africaForest2Img,
                answer: "4",
                bgColor: "#eb4d4b"
            },
            {
                id: "q5",
                title: "",
                isImage: true,
                img: africaElephansImg,
                answer: "5",
                bgColor: "#eb4d4b"
            },
            {
                id: "q6",
                title: "",
                isImage: true,
                img: deerInForestImg,
                answer: "6",
                bgColor: "#eb4d4b"
            },
            {
                id: "q7",
                title: "",
                isImage: true,
                img: africaSnakeImg,
                answer: "7",
                bgColor: "#eb4d4b"
            },
        ],
        answers: [
            {
                id: "a1",
                title: "Sernam ekvatorial o'rmonlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a2",
                title: "Chalacho’llar va cho'llar",
                isImage: false,
                img: "",
                answer: "3",
                bgColor: "#686de0"
            },
            {
                id: "a3",
                title: "Sernam ekvatorial o’rmonlarda yashovchi hayvonlar",
                isImage: false,
                img: "",
                answer: "6",
                bgColor: "#686de0"
            },
            {
                id: "a4",
                title: "Chalacho’llar va cho’llarda yashovchi hayvonlar",
                isImage: false,
                img: "",
                answer: "7",
                bgColor: "#686de0"
            },
            {
                id: "a5",
                title: "Qattiq bargli doimiy yashil o’rmonlar va butazorlar",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#686de0"
            },
            {
                id: "a6",
                title: "Savannada yashovchi hayvonlar",
                isImage: false,
                img: "",
                answer: "5",
                bgColor: "#686de0"
            },
            {
                id: "a7",
                title: "Savannalar",
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
