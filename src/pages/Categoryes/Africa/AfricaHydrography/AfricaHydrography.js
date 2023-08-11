import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const AfricaHydrography = () => {
    const data = [
        {
            id: 1,
            position: [23.692136675794767, 32.927540568429194],
            questions: [
                {
                    question: "Kongo daryosi",
                },
                {
                    question: "Nil daryosi",
                },
                {
                    question: "Viktoriya sharsharasi",
                },
            ],
            isAnswer: "Nil daryosi",
            userAnswer: ""
        },
        {
            id: 2,
            position: [15.61182417575863, -13.226975102827586],
            questions: [
                {
                    question: "Senegal daryosi",
                },
                {
                    question: "Nyasa ko’li",
                },
                {
                    question: "Zambezi daryosi",
                },
            ],
            isAnswer: "Senegal daryosi",
            userAnswer: ""
        },
        {
            id: 3,
            position: [6.5306495671829445, -0.034095832295121205],
            questions: [
                {
                    question: "Shari daryosi",
                },
                {
                    question: "Volta suv ombori",
                },
                {
                    question: "Limpopo daryosi",
                },
            ],
            isAnswer: "Volta suv ombori",
            userAnswer: ""
        },
        {
            id: 4,
            position: [14.23327825242629, -4.509413403983506],
            questions: [
                {
                    question: "Viktoriya ko’li",
                },
                {
                    question: "Oranj daryosi",
                },
                {
                    question: "Niger daryosi",
                },
            ],
            isAnswer: "Niger daryosi",
            userAnswer: ""
        },
        {
            id: 5,
            position: [10.636007504758608, 16.36255411572889],
            questions: [
                {
                    question: "Shari daryosi",
                },
                {
                    question: "Nil daryosi",
                },
                {
                    question: "Volta suv ombori",
                },
            ],
            isAnswer: "Shari daryosi",
            userAnswer: ""
        },
        {
            id: 6,
            position: [-0.6040527154653864, 17.668467922110047],
            questions: [
                {
                    question: "Nyasa ko’li",
                },
                {
                    question: "Kongo daryosi",
                },
                {
                    question: "Limpopo daryosi",
                },
            ],
            isAnswer: "Kongo daryosi",
            userAnswer: ""
        },
        {
            id: 7,
            position: [-1.0637572679203144, 32.813326394670575],
            questions: [
                {
                    question: "Viktoriya sharsharasi",
                },
                {
                    question: "Shari daryosi",
                },
                {
                    question: "Viktoriya ko’li",
                },
            ],
            isAnswer: "Viktoriya ko’li",
            userAnswer: ""
        },
        {
            id: 8,
            position: [-11.66441809164257, 34.57401889208988],
            questions: [
                {
                    question: "Nyasa ko’li",
                },
                {
                    question: "Senegal daryosi",
                },
                {
                    question: "Limpopo daryosi",
                },
            ],
            isAnswer: "Nyasa ko’li",
            userAnswer: ""
        },
        {
            id: 9,
            position: [-17.92546311197591, 25.858148646966665],
            questions: [
                {
                    question: "Volta suv ombori",
                },
                {
                    question: "Viktoriya sharsharasi",
                },
                {
                    question: "Viktoriya ko’li",
                },
            ],
            isAnswer: "Viktoriya sharsharasi",
            userAnswer: ""
        },
        {
            id: 10,
            position: [-15.657063154554457, 29.607467061709162],
            questions: [
                {
                    question: "Niger daryosi",
                },
                {
                    question: "Zambezi daryosi",
                },
                {
                    question: "Oranj daryosi",
                },
            ],
            isAnswer: "Zambezi daryosi",
            userAnswer: ""
        },
        {
            id: 11,
            position: [-22.350688136179553, 30.3079043729731],
            questions: [
                {
                    question: "Shari daryosi",
                },
                {
                    question: "Limpopo daryosi",
                },
                {
                    question: "Zambezi daryosi",
                },
            ],
            isAnswer: "Limpopo daryosi",
            userAnswer: ""
        },
        {
            id: 12,
            position: [-28.845963097231902, 18.770332641897173],
            questions: [
                {
                    question: "Kongo daryosi",
                },
                {
                    question: "Oranj daryosi",
                },
                {
                    question: "Nyasa ko’li",
                },
            ],
            isAnswer: "Oranj daryosi",
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
