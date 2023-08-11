import { WorldMap } from '../../../../components/WorldMap/WorldMap'

export const IndianOceanSea = () => {
    const data = [
        {
            id: 1,
            position: [22.469311937385726, 47.0080839277466],
            questions: [
                {
                    question: "Dyurvill",
                },
                {
                    question: "Arabiston",
                },
                {
                    question: "Kosmonavtlar",
                },
            ],
            isAnswer: "Arabiston",
            userAnswer: ""
        },
        {
            id: 2,
            position: [17.175418064572256, 40.7950544815214],
            questions: [
                {
                    question: "Qizil dengiz",
                },
                {
                    question: "Timor",
                },
                {
                    question: "Riser-Larsen",
                },
            ],
            isAnswer: "Qizil dengiz",
            userAnswer: ""
        },
        {
            id: 3,
            position: [12.5, 92.75],
            questions: [
                {
                    question: "Mauson",
                },
                {
                    question: "Andaman",
                },
                {
                    question: "Kosmonavtlar",
                },
            ],
            isAnswer: "Andaman",
            userAnswer: ""
        },
        {
            id: 4,
            position: [-9.153092987215691, 136.2442714923854],
            questions: [
                {
                    question: "Mauson",
                },
                {
                    question: "Hamdo’stlik",
                },
                {
                    question: "Arafur",
                },
            ],
            isAnswer: "Arafur",
            userAnswer: ""
        },
        {
            id: 5,
            position: [-9.2258, 124.9369],
            questions: [
                {
                    question: "Timor",
                },
                {
                    question: "Arabiston",
                },
                {
                    question: "Deyvis",
                },
            ],
            isAnswer: "Timor",
            userAnswer: ""
        },
        {
            id: 6,
            position: [-66.69417152695385, 140.00225677574738],
            questions: [
                {
                    question: "Qizil dengiz",
                },
                {
                    question: "Dyurvill",
                },
                {
                    question: "Riser-Larsen",
                },
            ],
            isAnswer: "Dyurvill",
            userAnswer: ""
        },
        {
            id: 7,
            position: [-67.602746, 62.873726],
            questions: [
                {
                    question: "Andaman",
                },
                {
                    question: "Dyurvill",
                },
                {
                    question: "Mauson",
                },
            ],
            isAnswer: "Mauson",
            userAnswer: ""
        },
        {
            id: 8,
            position: [-68.57830901201012, 77.86387487262236],
            questions: [
                {
                    question: "Deyvis",
                },
                {
                    question: "Kosmonavtlar",
                },
                {
                    question: "Arafur",
                },
            ],
            isAnswer: "Deyvis",
            userAnswer: ""
        },
        {
            id: 9,
            position: [-66.9, 142.666667],
            questions: [
                {
                    question: "Timor",
                },
                {
                    question: "Hamdo’stlik",
                },
                {
                    question: "Andaman",
                },
            ],
            isAnswer: "Hamdo’stlik",
            userAnswer: ""
        },
        {
            id: 10,
            position: [-65, 45],
            questions: [
                {
                    question: "Mauson",
                },
                {
                    question: "Kosmonavtlar",
                },
                {
                    question: "Dyurvill",
                },
            ],
            isAnswer: "Kosmonavtlar",
            userAnswer: ""
        },
        {
            id: 11,
            position: [-68, 22],
            questions: [
                {
                    question: "Arabiston",
                },
                {
                    question: "Riser-Larsen",
                },
                {
                    question: "Arafur",
                },
            ],
            isAnswer: "Riser-Larsen",
            userAnswer: ""
        },
    ]

    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={768} mobileZoom={2.3} mobileCenter={[-35, 80]} desktopZoom={2.8} desktopCenter={[-34, 80]} data={data}/>
            </div>
        </section>
    </>
}
