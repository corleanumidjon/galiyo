import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const AntarcticaSeaMap = () => {
    const data = [
        {
            id: 1,
            position: [-74.9999, -45],
            questions: [
                {
                    question: "Deyvis dengizi",
                },
                {
                    question: "Ueddell dengizi",
                },
                {
                    question: "Ross dengizi",
                },
            ],
            isAnswer: "Ueddell dengizi",
            userAnswer: ""
        },
        {
            id: 2,
            position: [-67.9999, 5.0002],
            questions: [
                {
                    question: "Lazerov dengizi",
                },
                {
                    question: "Amundsen dengizi",
                },
                {
                    question: "Dyurvill dengizi",
                },
            ],
            isAnswer: "Lazerov dengizi",
            userAnswer: ""
        },
        {
            id: 3,
            position: [-65.9999, 70.0001],
            questions: [
                {
                    question: "Mauson dengizi",
                },
                {
                    question: "Hamdo’stlik dengizi",
                },
                {
                    question: "Bellinsgauzen dengizi",
                },
            ],
            isAnswer: "Hamdo’stlik dengizi",
            userAnswer: ""
        },
        {
            id: 4,
            position: [-65.9999, 91.9999],
            questions: [
                {
                    question: "Ueddell dengizi",
                },
                {
                    question: "Dyurvill dengizi",
                },
                {
                    question: "Deyvis dengizi",
                },
            ],
            isAnswer: "Deyvis dengizi",
            userAnswer: ""
        },
        {
            id: 5,
            position: [-64, 105.0001],
            questions: [
                {
                    question: "Mauson dengizi",
                },
                {
                    question: "Hamdo’stlik dengizi",
                },
                {
                    question: "Amundsen dengizi",
                },
            ],
            isAnswer: "Mauson dengizi",
            userAnswer: ""
        },
        {
            id: 6,
            position: [-64.9999, 140.0002],
            questions: [
                {
                    question: "Amundsen dengizi",
                },
                {
                    question: "Dyurvill dengizi",
                },
                {
                    question: "Ueddell dengizi",
                },
            ],
            isAnswer: "Dyurvill dengizi",
            userAnswer: ""
        },
        {
            id: 7,
            position: [-77, -175.9999],
            questions: [
                {
                    question: "Deyvis dengizi",
                },
                {
                    question: "Dyurvill dengizi",
                },
                {
                    question: "Ross dengizi",
                },
            ],
            isAnswer: "Ross dengizi",
            userAnswer: ""
        },
        {
            id: 8,
            position: [-73, -109.9999],
            questions: [
                {
                    question: "Amundsen dengizi",
                },
                {
                    question: "Hamdo’stlik dengizi",
                },
                {
                    question: "Dyurvill dengizi",
                },
            ],
            isAnswer: "Amundsen dengizi",
            userAnswer: ""
        },
        {
            id: 9,
            position: [-70.9999, -84.9998],
            questions: [
                {
                    question: "Bellinsgauzen dengizi",
                },
                {
                    question: "Ronne shelf muzligi",
                },
                {
                    question: "Ueddell dengizi",
                },
            ],
            isAnswer: "Bellinsgauzen dengizi",
            userAnswer: ""
        },
    ]
    // Ueddell dengizi
    // Lazerov dengizi
    // Hamdo’stlik dengizi
    // Deyvis dengizi
    // Mauson dengizi
    // Dyurvill dengizi
    // Ross dengizi
    // Amundsen dengizi
    
    // Bellinsgauzen dengizi
    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={768} mobileZoom={1} mobileCenter={[-72.27010313655646, 0.0244730003051]} desktopZoom={2} desktopCenter={[-72.27010313655646, 0.0244730003051]} data={data}/>
            </div>
        </section>
    </>
}
