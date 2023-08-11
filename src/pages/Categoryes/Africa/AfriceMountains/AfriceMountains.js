import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const AfriceMountains = () => {
    const data = [
        {
            id: 1,
            position: [31.839271423667284, -4.103533058974441],
            questions: [
                {
                    question: "Vostok ilmiy stansiyasi",
                },
                {
                    question: "Ronne shelf muzligi",
                },
                {
                    question: "Atlas tog'ti",
                },
            ],
            isAnswer: "Atlas tog'ti",
            userAnswer: ""
        },
        {
            id: 2,
            position: [23.22990738777844, 5.560437200220968],
            questions: [
                {
                    question: "Axaggar tog'ligi",
                },
                {
                    question: "Ronne shelf muzligi",
                },
                {
                    question: "Atlas tog'ti",
                },
            ],
            isAnswer: "Axaggar tog'ligi",
            userAnswer: ""
        },
        {
            id: 3,
            position: [20.608749514850473, 17.78272063764119],
            questions: [
                {
                    question: "Axaggar tog'ligi",
                },
                {
                    question: "Tibesti tog’ligi",
                },
                {
                    question: "Atlas tog'ti",
                },
            ],
            isAnswer: "Tibesti tog’ligi",
            userAnswer: ""
        },
        {
            id: 4,
            position: [6.394463638622199, 29.95120444582681],
            questions: [
                {
                    question: "Axaggar tog’ligi",
                },
                {
                    question: "Tibesti tog’ligi",
                },
                {
                    question: "Darfur tog’ligi",
                },
            ],
            isAnswer: "Darfur tog’ligi",
            userAnswer: ""
        },
        {
            id: 5,
            position: [12.528344878032781, 41.38610475835092],
            questions: [
                {
                    question: "Efiopiya tog’ligi",
                },
                {
                    question: "Tibesti tog’ligi",
                },
                {
                    question: "Darfur tog’ligi",
                },
            ],
            isAnswer: "Efiopiya tog’ligi",
            userAnswer: ""
        },
        {
            id: 6,
            position: [0.3845234177770131, 29.87326836123391],
            questions: [
                {
                    question: "Efiopiya tog’ligi",
                },
                {
                    question: "Margeritta cho’qqisi",
                },
                {
                    question: "Darfur tog’ligi",
                },
            ],
            isAnswer: "Margeritta cho’qqisi",
            userAnswer: ""
        },
        {
            id: 7,
            position: [-0.0332558269301781, 36.56126213216119],
            questions: [
                {
                    question: "Sharqiy Afrika Yassitog’ligi",
                },
                {
                    question: "Margeritta cho’qqisi",
                },
                {
                    question: "Darfur tog’ligi",
                },
            ],
            isAnswer: "Sharqiy Afrika Yassitog’ligi",
            userAnswer: ""
        },
        {
            id: 8,
            position: [-29.468680063046452, 29.271310644342822],
            questions: [
                {
                    question: "Efiopiya tog’ligi",
                },
                {
                    question: "Margeritta cho’qqisi",
                },
                {
                    question: "Drakon tog’ligi",
                },
            ],
            isAnswer: "Drakon tog’ligi",
            userAnswer: ""
        },
        {
            id: 9,
            position: [-33.912459355727314, 20.57279947512997],
            questions: [
                {
                    question: "Kap tog’lari",
                },
                {
                    question: "Margeritta cho’qqisi",
                },
                {
                    question: "Darfur tog’ligi",
                },
            ],
            isAnswer: "Kap tog’lari",
            userAnswer: ""
        },
    ]
    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={768} mobileZoom={3} mobileCenter={[0.0287172652303125, 24.411076883411692]} desktopZoom={3.8} desktopCenter={[0.0287172652303125, 24.411076883411692]} data={data}/>
            </div>
        </section>
    </>
}
