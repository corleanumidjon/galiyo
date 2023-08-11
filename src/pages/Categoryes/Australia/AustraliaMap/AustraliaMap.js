import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const AustraliaMap = () => {
    const data = [
        {
            id: 1,
            position: [-5.299, 141.592],
            questions: [
                {
                    question: "Murrey daryosi",
                },
                {
                    question: "Yangi Gvineya oroli",
                },
                {
                    question: "Tasmaniya oroli",
                },
            ],
            isAnswer: "Yangi Gvineya oroli",
            userAnswer: ""
        },
        {
            id: 2,
            position: [-29.1522, 129.2597],
            questions: [
                {
                    question: "Buyuk Viktoriya cho'li",
                },
                {
                    question: "Bass bo’gizi",
                },
                {
                    question: "Arnemlend yarimoroli",
                },
            ],
            isAnswer: "Buyuk Viktoriya cho'li",
            userAnswer: ""
        },
        {
            id: 3,
            position: [-20, 125],
            questions: [
                {
                    question: "Tasmaniya oroli",
                },
                {
                    question: "Buyuk qumli cho'li",
                },
                {
                    question: "Kossyushko cho`qqisi",
                },
            ],
            isAnswer: "Buyuk qumli cho'li",
            userAnswer: ""
        },
        {
            id: 4,
            position: [-28.3665, 137.3669],
            questions: [
                {
                    question: "Tasmaniya dengizi",
                },
                {
                    question: "Katta Avstraliya qo’ltig’i",
                },
                {
                    question: "Eyr-Nord ko’li",
                },
            ],
            isAnswer: "Eyr-Nord ko’li",
            userAnswer: ""
        },
        {
            id: 5,
            position: [-35.5586, 138.8799],
            questions: [
                {
                    question: "Murrey daryosi",
                },
                {
                    question: "Bass bo’giz",
                },
                {
                    question: "Arnemlend yarimoroli",
                },
            ],
            isAnswer: "Murrey daryosi",
            userAnswer: ""
        },
        {
            id: 6,
            position: [-25, 147],
            questions: [
                {
                    question: "Kossyushko cho`qqisi",
                },
                {
                    question: "Katta suv ayirg’ich tizmasi",
                },
                {
                    question: "Buyuk Viktoriya cho'li",
                },
            ],
            isAnswer: "Katta suv ayirg’ich tizmasi",
            userAnswer: ""
        },
        {
            id: 7,
            position: [-36.45, 148.266667],
            questions: [
                {
                    question: "Eyr-Nord ko’li",
                },
                {
                    question: "Yangi zelandiya oroli",
                },
                {
                    question: "Kossyushko cho`qqisi",
                },
            ],
            isAnswer: "Kossyushko cho`qqisi",
            userAnswer: ""
        },
        {
            id: 8,
            position: [-33, 130],
            questions: [
                {
                    question: "Katta Avstraliya qo’ltig’i",
                },
                {
                    question: "Buyuk qumli cho'li",
                },
                {
                    question: "Tasmaniya dengizi",
                },
            ],
            isAnswer: "Katta Avstraliya qo’ltig’i",
            userAnswer: ""
        },
        {
            id: 9,
            position: [-40.282024277192015, 145.9562832794172],
            questions: [
                {
                    question: "Buyuk Viktoriya cho'li",
                },
                {
                    question: "Bass bo’gizi",
                },
                {
                    question: "Kossyushko cho`qqisi",
                },
            ],
            isAnswer: "Bass bo’gizi",
            userAnswer: ""
        },
        {
            id: 10,
            position: [-41.998, 147.003],
            questions: [
                {
                    question: "Katta suv ayirg’ich tizmasi",
                },
                {
                    question: "Marjon dengizi",
                },
                {
                    question: "Tasmaniya oroli",
                },
            ],
            isAnswer: "Tasmaniya oroli",
            userAnswer: ""
        },
        {
            id: 11,
            position: [-37.296, 160.525],
            questions: [
                {
                    question: "Tasmaniya dengizi",
                },
                {
                    question: "Arnemlend yarimoroli",
                },
                {
                    question: "Kossyushko cho`qqisi",
                },
            ],
            isAnswer: "Tasmaniya dengizi",
            userAnswer: ""
        },
        {
            id: 12,
            position: [-41.578, 173.046],
            questions: [
                {
                    question: "Yangi zelandiya oroli",
                },
                {
                    question: "Bass bo’gizi",
                },
                {
                    question: "Yangi Gvineya oroli",
                },
            ],
            isAnswer: "Yangi zelandiya oroli",
            userAnswer: ""
        },
        {
            id: 13,
            position: [-12.7299, 134.5901],
            questions: [
                {
                    question: "Katta Avstraliya qo’ltig’i",
                },
                {
                    question: "Arnemlend yarimoroli",
                },
                {
                    question: "Yangi Gvineya oroli",
                },
            ],
            isAnswer: "Arnemlend yarimoroli",
            userAnswer: ""
        },
    ]
    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={640} mobileZoom={3} mobileCenter={[-25.05383133916392, 148.26177403596506]} desktopZoom={4} desktopCenter={[-25.05383133916392, 148.26177403596506]} data={data}/>
            </div>
        </section>
    </>
}
