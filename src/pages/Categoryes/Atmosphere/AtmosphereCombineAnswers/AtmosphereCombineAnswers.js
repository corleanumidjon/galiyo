import planetsImg from "../../../../assets/images/planets.jpg"
import MeteorsMeteoritesImg from "../../../../assets/images/Meteors-meteorites.jpg"
import GalaxyImg from "../../../../assets/images/Galaxy.jpg"
import CometsImg from "../../../../assets/images/Comets.jpg"
import AsteroidsImg from "../../../../assets/images/Asteroids.jpg"
import SunImg from "../../../../assets/images/sun.jpg"
import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions"

export const AtmosphereCombineAnswers = () => {
    const data = {
        questionsHaveImg: false,
        answersHaveImg: true,
        questions: [
            {
                id: "q1",
                title: "Asteroidlar",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q2",
                title: "Sayyoralar ",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q3",
                title: "Quyosh",
                isImage: false,
                img: "",
                answer: "3",
                bgColor: "#eb4d4b"
            },
            {
                id: "q4",
                title: "Meteor va meteoritlar",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#eb4d4b"
            },
            {
                id: "q5",
                title: "Gallaktika",
                isImage: false,
                img: "",
                answer: "5",
                bgColor: "#eb4d4b"
            },
            {
                id: "q6",
                title: "Kometalar",
                isImage: false,
                img: "",
                answer: "6",
                bgColor: "#eb4d4b"
            },
        ],
        answers: [
            {
                id: "a1",
                title: "",
                isImage: true,
                img: SunImg,
                answer: "3",
                bgColor: "#686de0"
            },
            {
                id: "a2",
                title: "",
                isImage: true,
                img: AsteroidsImg,
                answer: "6",
                bgColor: "#686de0"
            },
            {
                id: "a3",
                title: "",
                isImage: true,
                img: planetsImg,
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a4",
                title: "",
                isImage: true,
                img: MeteorsMeteoritesImg,
                answer: "4",
                bgColor: "#686de0"
            },
            {
                id: "a5",
                title: "",
                isImage: true,
                img: GalaxyImg,
                answer: "5",
                bgColor: "#686de0"
            },
            {
                id: "a6",
                title: "",
                isImage: true,
                img: CometsImg,
                answer: "1",
                bgColor: "#686de0"
            },
        ]
    }
    return <>
        <section className='atmosphere-combine-answers'>
            <div className="container">
                <DragDropQuestions data={data}/>
            </div>
        </section>
    </>
}
