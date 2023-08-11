import { DepartmentCard } from "../../../components/DepartmentCard/DepartmentCard"
import TextInformation1 from "../../../assets/docs/Text-information/1. Quyosh.docx"
import TextInformation2 from "../../../assets/docs/Text-information/2. Merkuriy.docx"
import TextInformation3 from "../../../assets/docs/Text-information/3. Venera.docx"
import TextInformation4 from "../../../assets/docs/Text-information/4. Yer.docx"
import TextInformation5 from "../../../assets/docs/Text-information/5. Mars.docx"
import TextInformation6 from "../../../assets/docs/Text-information/6. Yupiter.docx"
import TextInformation7 from "../../../assets/docs/Text-information/7. Saturn.docx"
import TextInformation8 from "../../../assets/docs/Text-information/8. Uran.docx"
import TextInformation9 from "../../../assets/docs/Text-information/9. Neptun.docx"

export const TextInformation = () => {
    const data = [
        {
            title: "Quyosh",
            link: TextInformation1,
        },
        {
            title: "Merkuriy",
            link: TextInformation2,
        },
        {
            title: "Venera",
            link: TextInformation3,
        },
        {
            title: "Yer",
            link: TextInformation4,
        },
        {
            title: "Mars",
            link: TextInformation5,
        },
        {
            title: "Yupiter",
            link: TextInformation6,
        },
        {
            title: "Saturn",
            link: TextInformation7,
        },
        {
            title: "Uran",
            link: TextInformation8,
        },
        {
            title: "Neptun",
            link: TextInformation9,
        },
    ]
    return <>
        <section>
            <div className="container">
                <ul className="department-list">
                    {data.map((item, i) => (
                        <li className="department-item" key={i}>
                            <DepartmentCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}