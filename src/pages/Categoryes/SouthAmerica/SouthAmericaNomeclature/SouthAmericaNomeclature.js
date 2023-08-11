import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const SouthAmericaNomeclature = () => {
    const data = [
        {
            id: 1,
            position: [8.619, -60.7055],
            questions: [
                {
                    question: "Manu milliy bog’i",
                },
                {
                    question: "Orinoko pasttekisligi",
                },
                {
                    question: "Olovli yer oroli",
                },
            ],
            isAnswer: "Orinoko pasttekisligi",
            userAnswer: ""
        },
        {
            id: 2,
            position: [5.1433, -60.7625],
            questions: [
                {
                    question: "Gviana yassitog’ligi",
                },
                {
                    question: "Patagoniya",
                },
                {
                    question: "Folklend oroli",
                },
            ],
            isAnswer: "Gviana yassitog’ligi",
            userAnswer: ""
        },
        {
            id: 3,
            position: [-1.4693, -78.8175],
            questions: [
                {
                    question: "La-Plata pasttekisligi",
                },
                {
                    question: "Chimboroso tog’i",
                },
                {
                    question: "Madeyra irmog’i",
                },
            ],
            isAnswer: "Chimboroso tog’i",
            userAnswer: ""
        },
        {
            id: 4,
            position: [-79.0864, -178.2653],
            questions: [
                {
                    question: "Gviana yassitog’ligi",
                },
                {
                    question: "Ross shelf muzligi",
                },
                {
                    question: "Folklend oroli",
                },
            ],
            isAnswer: "Ross shelf muzligi",
            userAnswer: ""
        },
        {
            id: 5,
            position: [-11.8566, -71.7212],
            questions: [
                {
                    question: "Manu milliy bog’i",
                },
                {
                    question: "Patagoniya",
                },
                {
                    question: "Braziliya yassitog’ligi",
                },
            ],
            isAnswer: "Manu milliy bog’i",
            userAnswer: ""
        },
        {
            id: 6,
            position: [-22.467, -45],
            questions: [
                {
                    question: "Chimboroso tog’i",
                },
                {
                    question: "Braziliya yassitog’ligi",
                },
                {
                    question: "Orinoko pasttekisligi",
                },
            ],
            isAnswer: "Braziliya yassitog’ligi",
            userAnswer: ""
        },
        {
            id: 7,
            position: [-32, -60],
            questions: [
                {
                    question: "Chimboroso tog’i",
                },
                {
                    question: "Madeyra irmog’i",
                },
                {
                    question: "La-Plata pasttekisligi",
                },
            ],
            isAnswer: "La-Plata pasttekisligi",
            userAnswer: ""
        },
        {
            id: 8,
            position: [-42.81807837601478, -68.40848449544278],
            questions: [
                {
                    question: "Patagoniya",
                },
                {
                    question: "Manu milliy bog’i",
                },
                {
                    question: "La-Plata pasttekisligi",
                },
            ],
            isAnswer: "Patagoniya",
            userAnswer: ""
        },
        {
            id: 9,
            position: [-1.4693, -78.8175],
            questions: [
                {
                    question: "Gviana yassitog’ligi",
                },
                {
                    question: "Chimboroso tog’i",
                },
                {
                    question: "Antarktida yarim oroli",
                },
            ],
            isAnswer: "Chimboroso tog’i",
            userAnswer: ""
        },
        {
            id: 10,
            position: [-51.754, -59.008],
            questions: [
                {
                    question: "La-Plata pasttekisligi",
                },
                {
                    question: "Folklend oroli",
                },
                {
                    question: "Chimboroso tog’i",
                },
            ],
            isAnswer: "Folklend oroli",
            userAnswer: ""
        },
    ]
    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={430} mobileZoom={2} mobileCenter={[-15.631644966296449, -56.982702790478875]} desktopZoom={3} desktopCenter={[-15.631644966296449, -56.982702790478875]} data={data}/>
            </div>
        </section>
    </>
}
