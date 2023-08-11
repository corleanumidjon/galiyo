import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const AntarcticaNomenclature = () => {
    const data = [
        {
            id: 1,
            position: [-80.31703189412458, -160.18571847707693],
            questions: [
                {
                    question: "Viktoriya yeri",
                },
                {
                    question: "Qirolicha Mod yeri",
                },
                {
                    question: "Elsuert yeri",
                },
            ],
            isAnswer: "Qirolicha Mod yeri",
            userAnswer: ""
        },
        {
            id: 2,
            position: [-81.49999418788863, -174.99997321079692],
            questions: [
                {
                    question: "Ronne shelf muzligi",
                },
                {
                    question: "Sovetskoye platosi",
                },
                {
                    question: "Uilks yeri",
                },
            ],
            isAnswer: "Ronne shelf muzligi",
            userAnswer: ""
        },
        {
            id: 3,
            position: [-78.16672541208227, 22.827661232374687],
            questions: [
                {
                    question: "Ross shelf muzligi",
                },
                {
                    question: "Antarktida yarim oroli",
                },
                {
                    question: "Qirolicha Mod yeri",
                },
            ],
            isAnswer: "Antarktida yarim oroli",
            userAnswer: ""
        },
        {
            id: 4,
            position: [-75.633, -80.002],
            questions: [
                {
                    question: "Sovetskoye platosi",
                },
                {
                    question: "Ross shelf muzligi",
                },
                {
                    question: "Elsuert yeri",
                },
            ],
            isAnswer: "Elsuert yeri",
            userAnswer: ""
        },
        {
            id: 5,
            position: [-79.99806422062473, 84.98934178736825],
            questions: [
                {
                    question: "Sovetskoye platos",
                },
                {
                    question: "Vostok ilmiy stansiyasi",
                },
                {
                    question: "Antarktida yarim oroli",
                },
            ],
            isAnswer: "Sovetskoye platos",
            userAnswer: ""
        },
        {
            id: 6,
            position: [-79.9999, -119.9999],
            questions: [
                {
                    question: "Elsuert yeri",
                },
                {
                    question: "Meri Berd Yeri",
                },
                {
                    question: "Uilks yeri",
                },
            ],
            isAnswer: "Meri Berd Yeri",
            userAnswer: ""
        },
        {
            id: 7,
            position: [-81.5000259043096, -174.99993029545445],
            questions: [
                {
                    question: "Sovetskoye platosi",
                },
                {
                    question: "Vostok ilmiy stansiyasi",
                },
                {
                    question: "Ross shelf muzligi",
                },
            ],
            isAnswer: "Ross shelf muzligi",
            userAnswer: ""
        },
        {
            id: 8,
            position: [-78.46449361617142, 106.83390927017285],
            questions: [
                {
                    question: "Vostok ilmiy stansiyasi",
                },
                {
                    question: "Ronne shelf muzligi",
                },
                {
                    question: "Qirolicha Mod yeri",
                },
            ],
            isAnswer: "Vostok ilmiy stansiyasi",
            userAnswer: ""
        },
        {
            id: 9,
            position: [-69, 119.9999],
            questions: [
                {
                    question: "Sovetskoye platosi",
                },
                {
                    question: "Uilks yeri",
                },
                {
                    question: "Antarktida yarim oroli",
                },
            ],
            isAnswer: "Uilks yeri",
            userAnswer: ""
        },
        {
            id: 10,
            position: [-71.2499, 163],
            questions: [
                {
                    question: "Meri Berd Yeri",
                },
                {
                    question: "Viktoriya yeri",
                },
                {
                    question: "Elsuert yeri",
                },
            ],
            isAnswer: "Viktoriya yeri",
            userAnswer: ""
        },
    ]
    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={768} mobileZoom={1} mobileCenter={[-72.27010313655646, 53.0244730003051]} desktopZoom={2} desktopCenter={[-72.27010313655646, 53.0244730003051]} data={data}/>
            </div>
        </section>
    </>
}
