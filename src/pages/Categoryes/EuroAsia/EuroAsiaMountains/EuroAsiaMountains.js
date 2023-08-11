import React from 'react'
import { WorldMap } from '../../../../components/WorldMap/WorldMap'

export const EuroAsiaMountains = () => {
    const data = [
        {
            id: 1,
            position: [46.0167, 11.1833],
            questions: [
                {
                    question: "Alp",
                },
                {
                    question: "Skandinaviya",
                },
                {
                    question: "Karpat",
                },
            ],
            isAnswer: "Alp",
            userAnswer: ""
        },
        {
            id: 2,
            position: [64.7797, 14.7609],
            questions: [
                {
                    question: "Karpat",
                },
                {
                    question: "Skandinaviya",
                },
                {
                    question: "Kavkaz",
                },
            ],
            isAnswer: "Skandinaviya",
            userAnswer: ""
        },
        {
            id: 3,
            position: [47, 25.5],
            questions: [
                {
                    question: "Kavkaz",
                },
                {
                    question: "Karpat",
                },
                {
                    question: "Ural",
                },
            ],
            isAnswer: "Karpat",
            userAnswer: ""
        },
        {
            id: 4,
            position: [42.5, 45],
            questions: [
                {
                    question: "Kavkaz",
                },
                {
                    question: "Ural",
                },
                {
                    question: "O’rta Sibir yassitog’ligi",
                },
            ],
            isAnswer: "Kavkaz",
            userAnswer: ""
        },
        {
            id: 5,
            position: [60, 60],
            questions: [
                {
                    question: "O’rta Sibir yassitog’ligi",
                },
                {
                    question: "Verxoyansk tizmasi",
                },
                {
                    question: "Ural",
                },
            ],
            isAnswer: "Ural",
            userAnswer: ""
        },
        {
            id: 6,
            position: [64, 103],
            questions: [
                {
                    question: "Verxoyansk tizmasi",
                },
                {
                    question: "O’rta Sibir yassitog’ligi",
                },
                {
                    question: "Oltoy tizmasi",
                },
            ],
            isAnswer: "O’rta Sibir yassitog’ligi",
            userAnswer: ""
        },
        {
            id: 7,
            position: [67.003, 129.001],
            questions: [
                {
                    question: "Verxoyansk tizmasi",
                },
                {
                    question: "Oltoy tizmasi",
                },
                {
                    question: "Katta Xingan",
                },
            ],
            isAnswer: "Verxoyansk tizmasi",
            userAnswer: ""
        },
        {
            id: 8,
            position: [39.6667, 72],
            questions: [
                {
                    question: "Katta Xingan",
                },
                {
                    question: "Tyanshan",
                },
                {
                    question: "Oltoy tizmasi",
                },
            ],
            isAnswer: "Oltoy tizmasi",
            userAnswer: ""
        },
        {
            id: 9,
            position: [47.025, 120.059],
            questions: [
                {
                    question: "Hindiqush",
                },
                {
                    question: "Katta Xingan",
                },
                {
                    question: "Tyanshan",
                },
            ],
            isAnswer: "Katta Xingan",
            userAnswer: ""
        },
        {
            id: 10,
            position: [42.0333, 80.1333],
            questions: [
                {
                    question: "Tyanshan",
                },
                {
                    question: "Hindiqush",
                },
                {
                    question: "Eron tog’ligi",
                },
            ],
            isAnswer: "Tyanshan",
            userAnswer: ""
        },
        {
            id: 11,
            position: [39.002, 35.002],
            questions: [
                {
                    question: "Eron tog’ligi",
                },
                {
                    question: "Kunlun",
                },
                {
                    question: "Hindiqush",
                },
            ],
            isAnswer: "Hindiqush",
            userAnswer: ""
        },
        {
            id: 12,
            position: [32.0023, 57.9996],
            questions: [
                {
                    question: "Kunlun",
                },
                {
                    question: "Eron tog’ligi",
                },
                {
                    question: "Himolay",
                },
            ],
            isAnswer: "Eron tog’ligi",
            userAnswer: ""
        },
        {
            id: 13,
            position: [37.9, 92.6167],
            questions: [
                {
                    question: "Kunlun",
                },
                {
                    question: "Himolay",
                },
                {
                    question: "Dekan yassitog’ligi",
                },
            ],
            isAnswer: "Kunlun",
            userAnswer: ""
        },
        {
            id: 14,
            position: [28.835, 83.386],
            questions: [
                {
                    question: "Dekan yassitog’ligi",
                },
                {
                    question: "Alp",
                },
                {
                    question: "Himolay",
                },
            ],
            isAnswer: "Himolay",
            userAnswer: ""
        },
        {
            id: 15,
            position: [14, 77],
            questions: [
                {
                    question: "Alp",
                },
                {
                    question: "Dekan yassitog’ligi",
                },
                {
                    question: "Skandinaviya",
                },
            ],
            isAnswer: "Dekan yassitog’ligi",
            userAnswer: ""
        },
    ]
    return <>
        <section>
            <div className="container">
                <WorldMap mileSize={768} mileZoom={1} mileCenter={[41.756095694830215, 73.73231043612046]} desktopZoom={2} desktopCenter={[41.756095694830215, 73.73231043612046]} data={data}/>
            </div>
        </section>
    </>
}