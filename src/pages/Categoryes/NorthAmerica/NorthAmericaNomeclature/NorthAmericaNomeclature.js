import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const NorthAmericaNomeclature = () => {
    const data = [
        {
            id: 1,
            position: [63.3333, -150.5],
            questions: [
                {
                    question: "Labrador yarim oroli",
                },
                {
                    question: "Denali milliy bog’i",
                },
                {
                    question: "Kalorado daryosi",
                },
            ],
            isAnswer: "Denali milliy bog’i",
            userAnswer: ""
        },
        {
            id: 2,
            position: [71, -110],
            questions: [
                {
                    question: "Florida yarim oroli",
                },
                {
                    question: "Viktoriya oroli",
                },
                {
                    question: "Gudzon qo’ltig’i",
                },
            ],
            isAnswer: "Viktoriya oroli",
            userAnswer: ""
        },
        {
            id: 3,
            position: [72, -94.56],
            questions: [
                {
                    question: "Myorchison burni",
                },
                {
                    question: "Yukatan yarim oroli",
                },
                {
                    question: "Rio-Grande daryosi",
                },
            ],
            isAnswer: "Myorchison burni",
            userAnswer: ""
        },
        {
            id: 4,
            position: [61.674, -114.126],
            questions: [
                {
                    question: "Gleysher milliy bog’i",
                },
                {
                    question: "Katta Asir Qullar ko’li",
                },
                {
                    question: "Florida yarim oroli",
                },
            ],
            isAnswer: "Katta Asir Qullar ko’li",
            userAnswer: ""
        },
        {
            id: 5,
            position: [60.0001, -84.9998],
            questions: [
                {
                    question: "Labrador yarim oroli",
                },
                {
                    question: "Rio-Grande daryosi",
                },
                {
                    question: "Gudzon qo’ltig’i",
                },
            ],
            isAnswer: "Gudzon qo’ltig’i",
            userAnswer: ""
        },
        {
            id: 6,
            position: [53.3, -66.55],
            questions: [
                {
                    question: "Labrador yarim oroli",
                },
                {
                    question: "Markaziy tekisliklar",
                },
                {
                    question: "Viktoriya oroli",
                },
            ],
            isAnswer: "Labrador yarim oroli",
            userAnswer: ""
        },
        {
            id: 7,
            position: [48.6833, -113.7167],
            questions: [
                {
                    question: "Gudzon qo’ltig’i",
                },
                {
                    question: "Gleysher milliy bog’i",
                },
                {
                    question: "Florida yarim oroli",
                },
            ],
            isAnswer: "Gleysher milliy bog’i",
            userAnswer: ""
        },
        {
            id: 8,
            position: [45.0001, -84.0001],
            questions: [
                {
                    question: "Yukatan yarim oroli",
                },
                {
                    question: "Myorchison burni",
                },
                {
                    question: "Buyuk ko’llar",
                },
            ],
            isAnswer: "Buyuk ko’llar",
            userAnswer: ""
        },
        {
            id: 9,
            position: [49.64, -98.29],
            questions: [
                {
                    question: "Markaziy tekisliklar",
                },
                {
                    question: "Gudzon qo’ltig’i",
                },
                {
                    question: "Gleysher milliy bog’i",
                },
            ],
            isAnswer: "Markaziy tekisliklar",
            userAnswer: ""
        },
        {
            id: 10,
            position: [31.8156, -114.804],
            questions: [
                {
                    question: "Labrador yarim oroli",
                },
                {
                    question: "Kalorado daryosi",
                },
                {
                    question: "Myorchison burni",
                },
            ],
            isAnswer: "Kalorado daryosi",
            userAnswer: ""
        },
        {
            id: 11,
            position: [25.9563, -97.1452],
            questions: [
                {
                    question: "Katta Asir Qullar ko’li",
                },
                {
                    question: "Buyuk ko’llar",
                },
                {
                    question: "Rio-Grande daryosi",
                },
            ],
            isAnswer: "Rio-Grande daryosi",
            userAnswer: ""
        },
        {
            id: 12,
            position: [28.0011, -81.4993],
            questions: [
                {
                    question: "Florida yarim oroli",
                },
                {
                    question: "Kalorado daryosi",
                },
                {
                    question: "Denali milliy bog’i",
                },
            ],
            isAnswer: "Florida yarim oroli",
            userAnswer: ""
        },
        {
            id: 13,
            position: [18.8451, -89.1256],
            questions: [
                {
                    question: "Yukatan yarim oroli",
                },
                {
                    question: "Kalorado daryosi",
                },
                {
                    question: "Katta Asir Qullar ko’li",
                },
            ],
            isAnswer: "Yukatan yarim oroli",
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

