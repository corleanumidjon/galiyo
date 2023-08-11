import { DragDropQuestions } from "../../../../components/DragDropQuestions/DragDropQuestions";

export const AtlanticNatureZones = () => {
    const data = {
		questionsHaveImg: false,
		answersHaveImg: false,
		questions: [
			{
				id: "q1",
				title: "Ekvatorial zona",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#eb4d4b",
			},
			{
				id: "q2",
				title: "Subtropik va tropik zona",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#eb4d4b",
			},
			{
				id: "q3",
				title: "Sargosso dengizi",
				isImage: false,
				img: "",
				answer: "3",
				bgColor: "#eb4d4b",
			},
			{
				id: "q4",
				title: "Shimoliy mo`tadil zona",
				isImage: false,
				img: "",
				answer: "4",
				bgColor: "#eb4d4b",
			},
			{
				id: "q5",
				title: "Qutbyoni zonasi",
				isImage: false,
				img: "",
				answer: "5",
				bgColor: "#eb4d4b",
			},
		],
		answers: [
			{
				id: "a1",
				title: "Sho’rligi 37‰ga teng, harorati yuqori qishda+23°S va yozda +28°S ni tashkil etib, suvida plankton kam bo’lib,okeanshunoslar bunday joylarni moviy okean cho’llari deb atashadi.",
				isImage: false,
				img: "",
				answer: "3",
				bgColor: "#686de0",
			},
			{
				id: "a2",
				title: "Diatom va aysberg yotqiziqlari hukmronlik qiladi.",
				isImage: false,
				img: "",
				answer: "5",
				bgColor: "#686de0",
			},
			{
				id: "a3",
				title: "Terrigen yotqiziqlar bilan bir qatorda ohakli faraminifer loyqasi ham uchraydi,  bu loyqa Shimoliy Atlantika iliq oqimi  ta’sirida hosil bo’ladi.",
				isImage: false,
				img: "",
				answer: "4",
				bgColor: "#686de0",
			},
			{
				id: "a4",
				title: "Yillik yog’in miqdori 1770 mm ga va suvning o’rtacha sho’rligi 35 ‰ ga teng.",
				isImage: false,
				img: "",
				answer: "1",
				bgColor: "#686de0",
			},
			{
				id: "a5",
				title: "Yog’in miqdori kam va  bug’lanish miqdori ko’p bo’lganligi tufayli suvining sho’rligi 37,25‰gacha ko’tariladi.",
				isImage: false,
				img: "",
				answer: "2",
				bgColor: "#686de0",
			},
		],
	};
    return <>
        <section>
            <div className="container">
                <DragDropQuestions data={data}/>
            </div>
        </section>
    </>
}
