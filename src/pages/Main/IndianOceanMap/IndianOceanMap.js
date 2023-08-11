import "./IndianOceanMap.scss";
import 'leaflet/dist/leaflet.css';
import { WorldMap } from "../../../components/WorldMap/WorldMap";

export const IndianOceanMap = () => {
    const data = [
        {
            id: 1,
            position: [18.7, 72.9],
            questions: [
                {
                    question: "Kambey qo’ltig’i",
                },
                {
                    question: "Madagaskar oroli",
                },
                {
                    question: "Kergelen tizmasi va orollari",
                },
            ],
            isAnswer: "Kambey qo’ltig’i",
            userAnswer: ""
        },
        {
            id: 2,
            position: [13, 46.5],
            questions: [
                {
                    question: "Katta Zond cho’kmasi",
                },
                {
                    question: "Adan qo’ltig’i",
                },
                {
                    question: "Janubiy Avstraliya soyligi",
                },
            ],
            isAnswer: "Adan qo’ltig’i",
            userAnswer: ""
        },
        {
            id: 3,
            position: [14.5, 87.5],
            questions: [
                {
                    question: "Maskaren orollari",
                },
                {
                    question: "Bengaliya qo’ltig’i",
                },
                {
                    question: "Kosmonavtlar dengizi",
                },
            ],
            isAnswer: "Bengaliya qo’ltig’i",
            userAnswer: ""
        },
        {
            id: 4,
            position: [-5, 79],
            questions: [
                {
                    question: "Kambey qo’ltig’i",
                },
                {
                    question: "Mozmbik soyligi",
                },
                {
                    question: "Markaziy soylik",
                },
            ],
            isAnswer: "Markaziy soylik",
            userAnswer: ""
        },
        {
            id: 5,
            position: [-5, 99],
            questions: [
                {
                    question: "Katta Zond cho’kmasi",
                },
                {
                    question: "Adan qo’ltig’i",
                },
                {
                    question: "Kergelen tizmasi va orollari",
                },
            ],
            isAnswer: "Katta Zond cho’kmasi",
            userAnswer: ""
        },
        {
            id: 6,
            position: [-20, 46.5],
            questions: [
                {
                    question: "Markaziy soylik",
                },
                {
                    question: "Madagaskar oroli",
                },
                {
                    question: "Mozmbik soyligi",
                },
            ],
            isAnswer: "Madagaskar oroli",
            userAnswer: ""
        },
        {
            id: 7,
            position: [-21, 55.5],
            questions: [
                {
                    question: "Janubiy Avstraliya soyligi",
                },
                {
                    question: "Katta Zond cho’kmasi",
                },
                {
                    question: "Maskaren orollari",
                },
            ],
            isAnswer: "Maskaren orollari",
            userAnswer: ""
        },
        {
            id: 8,
            position: [-23, 35.8],
            questions: [
                {
                    question: "Mozmbik soyligi",
                },
                {
                    question: "Kambey qo’ltig’i",
                },
                {
                    question: "Markaziy soylik",
                },
            ],
            isAnswer: "Mozmbik soyligi",
            userAnswer: ""
        },
        {
            id: 9,
            position: [-32.7, 125],
            questions: [
                {
                    question: "Maskaren orollari",
                },
                {
                    question: "Janubiy Avstraliya soyligi",
                },
                {
                    question: "Kergelen tizmasi va orollari",
                },
            ],
            isAnswer: "Janubiy Avstraliya soyligi",
            userAnswer: ""
        },
        {
            id: 10,
            position: [-49.2, 69.2],
            questions: [
                {
                    question: "Bengaliya qo’ltig’i",
                },
                {
                    question: "Kergelen tizmasi va orollari",
                },
                {
                    question: "Markaziy soylik",
                },
            ],
            isAnswer: "Kergelen tizmasi va orollari",
            userAnswer: ""
        },
        {
            id: 11,
            position: [-66, 47],
            questions: [
                {
                    question: "Madagaskar oroli",
                },
                {
                    question: "Kosmonavtlar dengizi",
                },
                {
                    question: "Adan qo’ltig’i",
                },
            ],
            isAnswer: "Kosmonavtlar dengizi",
            userAnswer: ""
        },
        // {
        //     id: 11,
        //     position: [-5, 99],
        //     questions: [
        //         {
        //             question: "",
        //         },
        //         {
        //             question: "",
        //         },
        //         {
        //             question: "",
        //         },
        //     ],
        //     isAnswer: "",
        //     userAnswer: ""
        // },
    ]

    return (
        <section>
            <div className="container">
                <WorldMap mobileSize={768} mobileZoom={2.5} mobileCenter={[-35, 80]} desktopZoom={2.8} desktopCenter={[-34, 80]} data={data}/>
            </div>
        </section>
    );
}
