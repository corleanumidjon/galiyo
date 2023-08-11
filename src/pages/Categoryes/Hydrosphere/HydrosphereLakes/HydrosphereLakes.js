import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const HydrosphereLakes = () => {
    const data = [
        {
            id: 1,
            position: [53.222, 107.754],
            questions: [
                {
                    question: "Katta ayiq",
                },
                {
                    question: "Baykal",
                },
                {
                    question: "Marakaybo",
                },
            ],
            isAnswer: "Baykal",
            userAnswer: "",
        },
        {
            id: 2,
            position: [46.541, 74.879],
            questions: [
                {
                    question: "Balqash",
                },
                {
                    question: "Chad",
                },
                {
                    question: "Eyr-nord",
                },
            ],
            isAnswer: "Balqash",
            userAnswer: "",
        },
        {
            id: 3,
            position: [-1, 33.003],
            questions: [
                {
                    question: "Yuqori",
                },
                {
                    question: "Viktoriya",
                },
                {
                    question: "Katta asir",
                },
            ],
            isAnswer: "Viktoriya",
            userAnswer: "",
        },
        {
            id: 4,
            position: [-11.857, 34.585],
            questions: [
                {
                    question: "Katta ayiq",
                },
                {
                    question: "Katta asir",
                },
                {
                    question: "Nyasa",
                },
            ],
            isAnswer: "Nyasa",
            userAnswer: "",
        },
        {
            id: 5,
            position: [15.274, 18.677],
            questions: [
                {
                    question: "Chad",
                },
                {
                    question: "Marakaybo",
                },
                {
                    question: "Baykal",
                },
            ],
            isAnswer: "Chad",
            userAnswer: "",
        },
        {
            id: 6,
            position: [66.002, -121.003],
            questions: [
                {
                    question: "Viktoriya",
                },
                {
                    question: "Katta ayiq",
                },
                {
                    question: "Balqash",
                },
            ],
            isAnswer: "Katta ayiq",
            userAnswer: "",
        },
        {
            id: 7,
            position: [47.651498935993104, -87.3290765269031],
            questions: [
                {
                    question: "Marakaybo",
                },
                {
                    question: "Katta ayiq",
                },
                {
                    question: "Yuqori",
                },
            ],
            isAnswer: "Yuqori",
            userAnswer: "",
        },
        {
            id: 8,
            position: [61.674, -114.126],
            questions: [
                {
                    question: "Katta asir",
                },
                {
                    question: "Nyasa",
                },
                {
                    question: "Katta ayiq",
                },
            ],
            isAnswer: "Katta asir",
            userAnswer: "",
        },
        {
            id: 9,
            position: [-28.3665, 137.3669],
            questions: [
                {
                    question: "Yuqori",
                },
                {
                    question: "Eyr-nord",
                },
                {
                    question: "Nyasa",
                },
            ],
            isAnswer: "Eyr-nord",
            userAnswer: "",
        },
    ]

    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={768} mobileZoom={1.5} mobileCenter={[0, 40]} desktopZoom={2} desktopCenter={[0, 0]} data={data}/>
            </div>
        </section>
    </>
}
