import React from 'react'
import { WorldMap } from '../../../../components/WorldMap/WorldMap'

export const AfricaMap = () => {
    const data = [
        {
            id: 1,
            position: [29.99963312689557, 27.501069372072465],
            questions: [
                {
                    question: "Somali yarim oroli",
                },
                {
                    question: "Kattara botig’i",
                },
                {
                    question: "Kamerun vulqoni",
                },
            ],
            isAnswer: "Kattara botig’i",
            userAnswer: ""
        },
        {
            id: 2,
            position: [24.475027639810246, 24.355118615824107],
            questions: [
                {
                    question: "Liviya cho’li",
                },
                {
                    question: "Tanganika ko’li",
                },
                {
                    question: "Madagaskar oroli",
                },
            ],
            isAnswer: "Liviya cho’li",
            userAnswer: ""
        },
        {
            id: 3,
            position: [20.62655305565271, 33.388390887983135],
            questions: [
                {
                    question: "Liviya cho’li",
                },
                {
                    question: "Nubiya cho’li",
                },
                {
                    question: "Madagaskar oroli",
                },
            ],
            isAnswer: "",
            userAnswer: ""
        },
        {
            id: 4,
            position: [15.912183047360248, 2.4021739013100554],
            questions: [
                {
                    question: "Kamerun vulqoni",
                },
                {
                    question: "Kalaxari",
                },
                {
                    question: "Ansonga menaka qo’riqxonasi",
                },
            ],
            isAnswer: "Ansonga menaka qo’riqxonasi",
            userAnswer: ""
        },
        {
            id: 5,
            position: [4.21716789684936, 9.17314765807799],
            questions: [
                {
                    question: "Namib cho’li",
                },
                {
                    question: "Kamerun vulqoni",
                },
                {
                    question: "Somali yarim oroli",
                },
            ],
            isAnswer: "Kamerun vulqoni",
            userAnswer: ""
        },
        {
            id: 6,
            position: [5.016222062696523, 47.59496729746408],
            questions: [
                {
                    question: "Somali yarim oroli",
                },
                {
                    question: "Namib cho’li",
                },
                {
                    question: "Liviya cho’li",
                },
            ],
            isAnswer: "Somali yarim oroli",
            userAnswer: ""
        },
        {
            id: 7,
            position: [-3.0672531350917858, 37.35412519176683],
            questions: [
                {
                    question: "Namib cho’li",
                },
                {
                    question: "Kamerun vulqoni",
                },
                {
                    question: "Klimanjaro vulqoni",
                },
            ],
            isAnswer: "",
            userAnswer: ""
        },
        {
            id: 8,
            position: [-6.062671682549941, 29.550181950185436],
            questions: [
                {
                    question: "Tanganika ko’li",
                },
                {
                    question: "Madagaskar oroli",
                },
                {
                    question: "Nubiya cho’li",
                },
            ],
            isAnswer: "Tanganika ko’li",
            userAnswer: ""
        },
        {
            id: 9,
            position: [-24.32262307007037, 15.326891884321437],
            questions: [
                {
                    question: "Tanganika ko’li",
                },
                {
                    question: "Namib cho’li",
                },
                {
                    question: "Nubiya cho’li",
                },
            ],
            isAnswer: "Namib cho’li",
            userAnswer: ""
        },
        {
            id: 10,
            position: [-27.2200569527018, 22.712076921953773],
            questions: [
                {
                    question: "Tanganika ko’li",
                },
                {
                    question: "Namib cho’li",
                },
                {
                    question: "Kalaxari",
                },
            ],
            isAnswer: "Kalaxari",
            userAnswer: ""
        },
        {
            id: 11,
            position: [-20.76118251198544, 46.29469688114314],
            questions: [
                {
                    question: "Madagaskar oroli",
                },
                {
                    question: "Somali yarim oroli",
                },
                {
                    question: "Nubiya cho’li",
                },
            ],
            isAnswer: "Madagaskar oroli",
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
