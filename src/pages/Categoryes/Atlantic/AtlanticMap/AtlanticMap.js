import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const AtlanticMap = () => {
    const data = [
        {
            id: 1,
            position: [54, -5],
            questions: [
                {
                    question: "Britaniya orollari",
                },
                {
                    question: "Azor orollari",
                },
                {
                    question: "Bermud orollari",
                },
            ],
            isAnswer: "Britaniya orollari",
            userAnswer: ""
        },
        {
            id: 2,
            position: [38.6, -27.9833],
            questions: [
                {
                    question: "Bermud orollari",
                },
                {
                    question: "Azor orollari",
                },
                {
                    question: "Gaiti roli",
                },
            ],
            isAnswer: "Azor orollari",
            userAnswer: ""
        },
        {
            id: 3,
            position: [32.3169, -64.7502],
            questions: [
                {
                    question: "Gaiti roli",
                },
                {
                    question: "Bermud orollari",
                },
                {
                    question: "Yashil burun orollari",
                },
            ],
            isAnswer: "Bermud orollari",
            userAnswer: ""
        },
        {
            id: 4,
            position: [19.101, -72.331],
            questions: [
                {
                    question: "Gaiti roli",
                },
                {
                    question: "Braziliya soyligi",
                },
                {
                    question: "Kap soyligi",
                },
            ],
            isAnswer: "Gaiti roli",
            userAnswer: ""
        },
        {
            id: 5,
            position: [15.091, -23.634],
            questions: [
                {
                    question: "Gvineya qo’ltig’i",
                },
                {
                    question: "Braziliya soyligi",
                },
                {
                    question: "Yashil burun orollari",
                },
            ],
            isAnswer: "Yashil burun orollari",
            userAnswer: ""
        },
        {
            id: 6,
            position: [2.3955, 6.4066],
            questions: [
                {
                    question: "Braziliya soyligi",
                },
                {
                    question: "Gvineya qo’ltig’i",
                },
                {
                    question: "Kap soyligi",
                },
            ],
            isAnswer: "Gvineya qo’ltig’i",
            userAnswer: ""
        },
        {
            id: 7,
            position: [-9.99, -54.998],
            questions: [
                {
                    question: "Braziliya soyligi",
                },
                {
                    question: "Folklend (malvin) orollari",
                },
                {
                    question: "Kap soyligi",
                },
            ],
            isAnswer: "Braziliya soyligi",
            userAnswer: ""
        },
        {   
            id: 8,
            position: [-36.5959, -7],
            questions: [
                {
                    question: "Folklend (malvin) orollari",
                },
                {
                    question: "Weddell dengizi",
                },
                {
                    question: "Kap soyligi",
                },
            ],
            isAnswer: "Kap soyligi",
            userAnswer: ""
        },
        {
            id: 9,
            position: [-51.747, -59.008],
            questions: [
                {
                    question: "Weddell dengizi",
                },
                {
                    question: "Folklend (malvin) orollari",
                },
                {
                    question: "Britaniya orollari",
                },
            ],
            isAnswer: "Folklend (malvin) orollari",
            userAnswer: ""
        },
        {
            id: 10,
            position: [-74.9999, -44.9998],
            questions: [
                {
                    question: "Weddell dengizi",
                },
                {
                    question: "Azor orollari",
                },
                {
                    question: "Bermud orollari",
                },
            ],
            isAnswer: "Weddell dengizi",
            userAnswer: ""
        },
    ]
    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={640} mobileZoom={2} mobileCenter={[-18.918969855646257, -29.260621474276064]} desktopZoom={2} desktopCenter={[-18.918969855646257, -29.260621474276064]} data={data}/>
            </div>
        </section>
    </>
}