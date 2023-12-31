import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions"

export const AtlanticAdaptation = () => {
    const data = {
		questionsHaveImg: false,
		answersHaveImg: false,
		questions: [
			{
				id: "q1",
				title: "Sharqiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#eb4d4b",
			},
			{
				id: "q2",
				title: "G'arbiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#eb4d4b",
			},
			{
				id: "q3",
				title: "Sharqiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#eb4d4b",
			},
			{
				id: "q4",
				title: "G'arbiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#eb4d4b",
			},
			{
				id: "q5",
				title: "Sharqiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#eb4d4b",
			},
			{
				id: "q6",
				title: "G'arbiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#eb4d4b",
			},
			{
				id: "q7",
				title: "Sharqiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#eb4d4b",
			},
			{
				id: "q8",
				title: "G'arbiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#eb4d4b",
			},
			{
				id: "q9",
				title: "Sharqiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#eb4d4b",
			},
			{
				id: "q10",
				title: "G'arbiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#eb4d4b",
			},
			{
				id: "q11",
				title: "Sharqiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#eb4d4b",
			},
			{
				id: "q12",
				title: "G'arbiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#eb4d4b",
			},
			{
				id: "q13",
				title: "Sharqiy atlantika botiqlari",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#eb4d4b",
			},
		],
		answers: [
			{
				id: "a1",
				title: "Labrador (4180 m),",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#686de0",
			},
			{
				id: "a2",
				title: "G’arbiy Yevropa (5668 m)",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#686de0",
			},
			{
				id: "a3",
				title: "Nyufaunlend (4685 m)",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#686de0",
			},
			{
				id: "a4",
				title: "Kanar (6501 m)",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#686de0",
			},
			{
				id: "a5",
				title: "Shimoliy Amerika (6594 m)",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#686de0",
			},
			{
				id: "a6",
				title: "Yashil burun (7297 m)",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#686de0",
			},
			{
				id: "a7",
				title: "Gviana (4830 m)",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#686de0",
			},
			{
				id: "a8",
				title: "Leone (6040 m)",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#686de0",
			},
			{
				id: "a9",
				title: "Braziliya (6059 m)",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#686de0",
			},
			{
				id: "a10",
				title: "Gvineya (5215 m)",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#686de0",
			},
			{
				id: "a11",
				title: "Argentina(6212 m)",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#686de0",
			},
			{
				id: "a12",
				title: "Angola (5699 m)",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#686de0",
			},
			{
				id: "a13",
				title: "Kap (5457 m)",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#686de0",
			},
		],
	};
    return <>
        <section>
            <div className="container">
                <h2 className="drag-and-drop-title">
                    Avstraliya iqlimi
                </h2>
                <DragDropQuestions data={data}/>
            </div>
        </section>
    </>
}

