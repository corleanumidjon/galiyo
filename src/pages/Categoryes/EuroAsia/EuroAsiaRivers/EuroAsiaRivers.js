import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const EuroAsiaRivers = () => {
    const data = [
        {
            id: 1,
            position: [51.7966, 3.8486],
            questions: [
                {
                    question: "Reyn",
                },
                {
                    question: "Hind",
                },
                {
                    question: "Dunay",
                },
            ],
            isAnswer: "Reyn",
            userAnswer: ""
        },
        {
            id: 2,
            position: [45.2221, 29.7434],
            questions: [
                {
                    question: "Volga",
                },
                {
                    question: "Dunay",
                },
                {
                    question: "Furot",
                },
            ],
            isAnswer: "Dunay",
            userAnswer: ""
        },
        {
            id: 3,
            position: [45.6974, 47.8626],
            questions: [
                {
                    question: "Hind",
                },
                {
                    question: "Volga",
                },
                {
                    question: "Amudaryo",
                },
            ],
            isAnswer: "Volga",
            userAnswer: ""
        },
        {
            id: 4,
            position: [31.0045, 47.4421],
            questions: [
                {
                    question: "Furot",
                },
                {
                    question: "Sirdaryo",
                },
                {
                    question: "Amudaryo",
                },
            ],
            isAnswer: "Furot",
            userAnswer: ""
        },
        {
            id: 5,
            position: [23.9864, 67.4368],
            questions: [
                {
                    question: "Volga",
                },
                {
                    question: "Furot",
                },
                {
                    question: "Hind",
                },
            ],
            isAnswer: "Hind",
            userAnswer: ""
        },
        {
            id: 6,
            position: [44.1084, 59.6812],
            questions: [
                {
                    question: "Sirdaryo",
                },
                {
                    question: "Amudaryo",
                },
                {
                    question: "Ob",
                },
            ],
            isAnswer: "Amudaryo",
            userAnswer: ""
        },
        {
            id: 7,
            position: [46.1543, 60.8735],
            questions: [
                {
                    question: "Sirdaryo",
                },
                {
                    question: "Yenisey",
                },
                {
                    question: "Lena",
                },
            ],
            isAnswer: "Sirdaryo",
            userAnswer: ""
        },
        {
            id: 8,
            position: [66.787, 68.9564],
            questions: [
                {
                    question: "Kolima",
                },
                {
                    question: "Amur",
                },
                {
                    question: "Ob",
                },
            ],
            isAnswer: "Ob",
            userAnswer: ""
        },
        {
            id: 9,
            position: [69.6111, 84.5443],
            questions: [
                {
                    question: "Xuanxe",
                },
                {
                    question: "Yenisey",
                },
                {
                    question: "Yanszi",
                },
            ],
            isAnswer: "Yenisey",
            userAnswer: ""
        },
        {
            id: 10,
            position: [72.4119, 126.6847],
            questions: [
                {
                    question: "Lena",
                },
                {
                    question: "Mekong",
                },
                {
                    question: "Gang",
                },
            ],
            isAnswer: "Lena",
            userAnswer: ""
        },
        {
            id: 11,
            position: [69.5515, 161.3641],
            questions: [
                {
                    question: "Reyn",
                },
                {
                    question: "Dunay",
                },
                {
                    question: "Kolima",
                },
            ],
            isAnswer: "Kolima",
            userAnswer: ""
        },
        {
            id: 12,
            position: [52.9911, 141.0466],
            questions: [
                {
                    question: "Volga",
                },
                {
                    question: "Amur",
                },
                {
                    question: "Furot",
                },
            ],
            isAnswer: "Amur",
            userAnswer: ""
        },
        {
            id: 13,
            position: [45.3149, 16.7785],
            questions: [
                {
                    question: "Xuanxe",
                },
                {
                    question: "Hind",
                },
                {
                    question: "Amudaryo",
                },
            ],
            isAnswer: "Xuanxe",
            userAnswer: ""
        },
        {
            id: 14,
            position: [31.3936, 121.9833],
            questions: [
                {
                    question: "Gang",
                },
                {
                    question: "Yenisey",
                },
                {
                    question: "Yanszi",
                },
            ],
            isAnswer: "Yanszi",
            userAnswer: ""
        },
        {
            id: 15,
            position: [10.1948, 106.7432],
            questions: [
                {
                    question: "Yanszi",
                },
                {
                    question: "Mekong",
                },
                {
                    question: "Xuanxe",
                },
            ],
            isAnswer: "Mekong",
            userAnswer: ""
        },
    ]
    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={768} mobileZoom={1} mobileCenter={[41.756095694830215, 73.73231043612046]} desktopZoom={2} desktopCenter={[41.756095694830215, 73.73231043612046]} data={data}/>
            </div>
        </section>
    </>
}
