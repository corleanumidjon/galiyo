import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const NorthAmericaHydrography = () => {
    const data = [
        {
            id: 1,
            position: [62.5986, -164.8001],
            questions: [
                {
                    question: "Nelson",
                },
                {
                    question: "Yukon daryosi",
                },
                {
                    question: "Nikaragua ko’li",
                },
            ],
            isAnswer: "Yukon daryosi",
            userAnswer: ""
        },
        {
            id: 2,
            position: [69.1978, -135.022],
            questions: [
                {
                    question: "Vinnepeg ko’li",
                },
                {
                    question: "Makkenzi daryosi",
                },
                {
                    question: "Yuqori ko’li",
                },
            ],
            isAnswer: "Makkenzi daryosi4",
            userAnswer: ""
        },
        {
            id: 3,
            position: [66.002, -121.003],
            questions: [
                {
                    question: "Katta Ayiq ko’li",
                },
                {
                    question: "Vinnepeg ko’li",
                },
                {
                    question: "Guron ko’li",
                },
            ],
            isAnswer: "Katta Ayiq ko’li",
            userAnswer: ""
        },
        {
            id: 4,
            position: [59.267, -109.468],
            questions: [
                {
                    question: "Missuri daryosi",
                },
                {
                    question: "Atabaska ko’li",
                },
                {
                    question: "Kolumbiya daryosi",
                },
            ],
            isAnswer: "Atabaska ko’li",
            userAnswer: ""
        },
        {
            id: 5,
            position: [57.0421, -92.5485],
            questions: [
                {
                    question: "Rio-Grande daryosi",
                },
                {
                    question: "Atabaska ko’li",
                },
                {
                    question: "Nelson",
                },
            ],
            isAnswer: "Nelson",
            userAnswer: ""
        },
        {
            id: 6,
            position: [52.1167, -97.2499],
            questions: [
                {
                    question: "Vinnepeg ko’li",
                },
                {
                    question: "Yuqori ko’li",
                },
                {
                    question: "Nikaragua ko’li",
                },
            ],
            isAnswer: "Vinnepeg ko’li",
            userAnswer: ""
        },
        {
            id: 7,
            position: [54.0966, -64.0112],
            questions: [
                {
                    question: "Guron ko’li",
                },
                {
                    question: "Smolvud suv ombori",
                },
                {
                    question: "Kolorado daryosi",
                },
            ],
            isAnswer: "Smolvud suv ombori",
            userAnswer: ""
        },
        {
            id: 8,
            position: [72, -94.56],
            questions: [
                {
                    question: "Yukon daryosi",
                },
                {
                    question: "Myorchison burni",
                },
                {
                    question: "Katta Ayiq ko’li",
                },
            ],
            isAnswer: "Myorchison burni",
            userAnswer: ""
        },
        {
            id: 9,
            position: [48.0001, -87],
            questions: [
                {
                    question: "Yuqori ko’li",
                },
                {
                    question: "Smolvud suv ombori",
                },
                {
                    question: "Rio-Grande daryosi",
                },
            ],
            isAnswer: "Yuqori ko’li",
            userAnswer: ""
        },
        {
            id: 10,
            position: [45.0001, -81.9999],
            questions: [
                {
                    question: "Smolvud suv ombori",
                },
                {
                    question: "Guron ko’li",
                },
                {
                    question: "Nikaragua ko’li",
                },
            ],
            isAnswer: "Guron ko’li",
            userAnswer: ""
        },
        {
            id: 11,
            position: [38.8136, -90.1198],
            questions: [
                {
                    question: "Makkenzi daryosi",
                },
                {
                    question: "Kolumbiya daryosi",
                },
                {
                    question: "Missuri daryosi",
                },
            ],
            isAnswer: "Missuri daryosi",
            userAnswer: ""
        },
        {
            id: 12,
            position: [31.8156, -114.804],
            questions: [
                {
                    question: "Kolorado daryosi",
                },
                {
                    question: "Kolumbiya daryosi",
                },
                {
                    question: "Atabaska ko’li",
                },
            ],
            isAnswer: "Kolorado daryosi",
            userAnswer: ""
        },
        {
            id: 13,
            position: [25.9563, -97.1452],
            questions: [
                {
                    question: "Rio-Grande daryosi",
                },
                {
                    question: "Yuqori ko’li",
                },
                {
                    question: "Atabaska ko’li",
                },
            ],
            isAnswer: "Rio-Grande daryosi",
            userAnswer: ""
        },
        {
            id: 14,
            position: [11.625, -85.353],
            questions: [
                {
                    question: "Nikaragua ko’li",
                },
                {
                    question: "Yuqori ko’li",
                },
                {
                    question: "Makkenzi daryosi",
                },
            ],
            isAnswer: "Nikaragua ko’li",
            userAnswer: ""
        },
    ]
    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={600} mobileZoom={2} mobileCenter={[54.1410478173089, -108.3436622523309]} desktopZoom={3} desktopCenter={[54.1410478173089, -108.3436622523309]} data={data}/>
            </div>
        </section>
    </>
}
