import { WorldMap } from "../../../components/WorldMap/WorldMap"

export const Seas = () => {
    const data = [
        {
            id: 1,
            position: [-0.09410224978382431, -105.11136880166559],
            questions: [
                {
                    question: "Tinch okeani",
                },
                {
                    question: "Atlantika okeani",
                },
                {
                    question: "Hind okeani",
                },
            ],
            isAnswer: "Tinch okeani",
            userAnswer: "",
        },
        {
            id: 2,
            position: [43.37000684563782, 33.88230197493571],
            questions: [
                {
                    question: "Shimoliy dengiz",
                },
                {
                    question: "Qora dengiz",
                },
                {
                    question: "O'rta Yer dengizi",
                },
            ],
            isAnswer: "Qora dengiz",
            userAnswer: "",
        },
        {
            id: 3,
            position: [13.461682516120808, 63.95316264601397],
            questions: [
                {
                    question: "Karib dengizi",
                },
                {
                    question: "Sariq dengiz",
                },
                {
                    question: "Arabiston dengizi",
                },
            ],
            isAnswer: "Arabiston dengizi",
            userAnswer: "",
        },
        {
            id: 4,
            position: [40.56288781501415, 132.65336411136064],
            questions: [
                {
                    question: "Boltiq dengizi",
                },
                {
                    question: "Qizil dengiz",
                },
                {
                    question: "Yapon dengizi",
                },
            ],
            isAnswer: "Yapon dengizi",
            userAnswer: "",
        },
        {
            id: 5,
            position: [55.84263096087329, 4.479426344315197],
            questions: [
                {
                    question: "Tinch okeani",
                },
                {
                    question: "Shimoliy dengiz",
                },
                {
                    question: "Karib dengizi",
                },
            ],
            isAnswer: "Shimoliy dengiz",
            userAnswer: "",
        },
        {
            id: 6,
            position: [33.67589781890851, -36.94725987251808],
            questions: [
                {
                    question: "Atlantika okeani",
                },
                {
                    question: "Qora dengiz",
                },
                {
                    question: "Sariq dengiz",
                },
            ],
            isAnswer: "Atlantika okeani",
            userAnswer: "",
        },
        {
            id: 7,
            position: [35.42698404439596, 17.45446868913903],
            questions: [
                {
                    question: "Hind okeani",
                },
                {
                    question: "O'rta Yer dengizi",
                },
                {
                    question: "Arab dengizi",
                },
            ],
            isAnswer: "O'rta Yer dengizi",
            userAnswer: "",
        },
        {
            id: 8,
            position: [20.366264489476453, 38.56598447021472],
            questions: [
                {
                    question: "Tinch okeani",
                },
                {
                    question: "Boltiq dengizi",
                },
                {
                    question: "Qizil dengiz",
                },
            ],
            isAnswer: "Qizil dengiz",
            userAnswer: "",
        },
        {
            id: 9,
            position: [15.338333927291034, -75.87174266813096],
            questions: [
                {
                    question: "Hind okeani",
                },
                {
                    question: "Qora dengiz",
                },
                {
                    question: "Karib dengizi",
                },
            ],
            isAnswer: "Karib dengizi",
            userAnswer: "",
        },
        {
            id: 10,
            position: [35.503962204572765, 123.85706198515162],
            questions: [
                {
                    question: "O'rta Yer dengizi",
                },
                {
                    question: "Sariq dengiz",
                },
                {
                    question: "Boltiq dengizi",
                },
            ],
            isAnswer: "Sariq dengiz",
            userAnswer: "",
        },
        {
            id: 11,
            position: [58.53026195227885, 20.009223174103287],
            questions: [
                {
                    question: "Arab dengizi",
                },
                {
                    question: "Boltiq dengizi",
                },
                {
                    question: "Yapon dengizi",
                },
            ],
            isAnswer: "Boltiq dengizi",
            userAnswer: "",
        },
        {
            id: 12,
            position: [-14.922045619460105, 77.73400997132002],
            questions: [
                {
                    question: "Hind okeani",
                },
                {
                    question: "Karib dengizi",
                },
                {
                    question: "Yapon dengizi",
                },
            ],
            isAnswer: "Hind okeani",
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
