import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const NorthAmericaIslands = () => {
    const data = [
        {
            id: 1,
            position: [79.8333, -78],
            questions: [
                {
                    question: "Baffin Yeri oroli",
                },
                {
                    question: "Elsmir oroli",
                },
                {
                    question: "Kadyak oroli",
                },
            ],
            isAnswer: "Elsmir oroli",
            userAnswer: ""
        },
        {
            id: 2,
            position: [75.133, -87.85],
            questions: [
                {
                    question: "Viktoriya oroli",
                },
                {
                    question: "Devon oroli",
                },
                {
                    question: "Gaiti oroli",
                },
            ],
            isAnswer: "Devon oroli",
            userAnswer: ""
        },
        {
            id: 3,
            position: [73, -121.5],
            questions: [
                {
                    question: "Banks oroli",
                },
                {
                    question: "Saugempton oroli",
                },
                {
                    question: "Kuba oroli",
                },
            ],
            isAnswer: "Banks oroli",
            userAnswer: ""
        },
        {
            id: 4,
            position: [71, -110],
            questions: [
                {
                    question: "Nyufaundlend oroli",
                },
                {
                    question: "Viktoriya oroli",
                },
                {
                    question: "Elsmir oroli",
                },
            ],
            isAnswer: "Viktoriya oroli",
            userAnswer: ""
        },
        {
            id: 5,
            position: [69, -72],
            questions: [
                {
                    question: "Banks oroli",
                },
                {
                    question: "Aleut orollari",
                },
                {
                    question: "Baffin Yeri oroli",
                },
            ],
            isAnswer: "Baffin Yeri",
            userAnswer: ""
        },
        {
            id: 6,
            position: [64.5, -84.5],
            questions: [
                {
                    question: "Saugempton oroli",
                },
                {
                    question: "Elsmir oroli",
                },
                {
                    question: "Qirolicha Sharlotta orollari",
                },
            ],
            isAnswer: "Saugempton oroli",
            userAnswer: ""
        },
        {
            id: 7,
            position: [48.5664, -55.7772],
            questions: [
                {
                    question: "Baffin Yeri oroli",
                },
                {
                    question: "Nyufaundlend oroli",
                },
                {
                    question: "Banks oroli",
                },
            ],
            isAnswer: "Nyufaundlend oroli",
            userAnswer: ""
        },
        {
            id: 8,
            position: [22, -79],
            questions: [
                {
                    question: "Devon oroli",
                },
                {
                    question: "Kadyak oroli",
                },
                {
                    question: "Kuba oroli",
                },
            ],
            isAnswer: "Kuba oroli",
            userAnswer: ""
        },
        {
            id: 9,
            position: [19.0011, -70.6668],
            questions: [
                {
                    question: "Gaiti oroli",
                },
                {
                    question: "Saugempton oroli",
                },
                {
                    question: "Viktoriya oroli",
                },
            ],
            isAnswer: "Gaiti oroli",
            userAnswer: ""
        },
        {
            id: 10,
            position: [52.71809902283284, -131.91103823319884],
            questions: [
                {
                    question: "Viktoriya oroli",
                },
                {
                    question: "Qirolicha Sharlotta orollari",
                },
                {
                    question: "Kuba oroli",
                },
            ],
            isAnswer: "Qirolicha Sharlotta orollari",
            userAnswer: ""
        },
        {
            id: 11,
            position: [57.4667, -153.4333],
            questions: [
                {
                    question: "Saugempton oroli",
                },
                {
                    question: "Banks oroli",
                },
                {
                    question: "Kadyak oroli",
                },
            ],
            isAnswer: "Kadyak oroli",
            userAnswer: ""
        },
        {
            id: 12,
            position: [52, -174],
            questions: [
                {
                    question: "Aleut orollari",
                },
                {
                    question: "Kuba oroli",
                },
                {
                    question: "Baffin Yeri oroli",
                },
            ],
            isAnswer: "Aleut orollari",
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
