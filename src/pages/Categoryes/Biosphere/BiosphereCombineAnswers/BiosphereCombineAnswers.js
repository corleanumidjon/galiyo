import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions"

export const BiosphereCombineAnswers = () => {
    const data = {
        questionsHaveImg: false,
        answersHaveImg: false,
        questions: [
            {
                id: "q1",
                title: "Tundra tuproqlari",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#eb4d4b"
            },
            {
                id: "q2",
                title: "Podzol tuproqlar",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#eb4d4b"
            },
            {
                id: "q3",
                title: "Laterit (qizil-sariq) tuproqlar ",
                isImage: false,
                img: "",
                answer: "3",
                bgColor: "#eb4d4b"
            },
            {
                id: "q4",
                title: "Qora tuproqlar",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#eb4d4b"
            },
            {
                id: "q5",
                title: "Kashtan tuproq",
                isImage: false,
                img: "",
                answer: "5",
                bgColor: "#eb4d4b"
            },
            {
                id: "q6",
                title: "Sur- qo'ng'ir ",
                isImage: false,
                img: "",
                answer: "6",
                bgColor: "#eb4d4b"
            },
        ],
        answers: [
            {
                id: "a1",
                title: "Bu tuproq turi Yevrosiyoning, Shimoliy Amerikaning o‘rmonlar egallagan hududlarida keng tarqalgan bo’lib, janubiy yarim sharda kam tarqalgan. Igna bargli o'rmonlar tarqalgan yerlarda, sernam va suvda eriydigan moddalar tuproqning pastki qatlamiga tushib ketadi va natijada ……….. tuproqlar vujudga keladi.",
                isImage: false,
                img: "",
                answer: "2",
                bgColor: "#686de0"
            },
            {
                id: "a2",
                title: "Arktika va tundra mintaqasida joylashib, issiqlik yetishmasligi, bug’lanish kam, namlik ko'p, vegitatsiya davri qisqa bo’lganligi tufayli gleyli va torfli-botqoq tuproqlar tarqalgan",
                isImage: false,
                img: "",
                answer: "1",
                bgColor: "#686de0"
            },
            {
                id: "a3",
                title: "Quruqlikning cho’l mavjud bo’lgan hududlarda, ayniqsa O’rta Osiyoning tekislik qismida harorat yuqori, yog’in kam, potensial bug’lanish ko‘p, o‘simliklar siyrak bo’lgan qumli hududlarda joylashgan",
                isImage: false,
                img: "",
                answer: "6",
                bgColor: "#686de0"
            },
            {
                id: "a4",
                title: "Chala cho’l zonasida oddiy qora tuproqli hududning janubiy qismida joylashgan. O’simliklar, xususan, betaga-shuvoq jamoasi joylashgan",
                isImage: false,
                img: "",
                answer: "5",
                bgColor: "#686de0"
            },
            {
                id: "a5",
                title: "Dasht zonasida sharoit optimal bo’lganligi uchun donador, chirindi miqdori ko‘p, chirindi qatlami qalin bo'lgan  tuproqlar shakllanadi",
                isImage: false,
                img: "",
                answer: "4",
                bgColor: "#686de0"
            },
            {
                id: "a6",
                title: "Sayyoramizning sernam subtropik va ekvatorial mintaqalarida tarqalgan buladi. ",
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
