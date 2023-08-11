import { DepartmentCard } from "../../../components/DepartmentCard/DepartmentCard"
import AnnotatedDictionary1 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at -A harfi.docx"
import AnnotatedDictionary2 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- B harfi.docx"
import AnnotatedDictionary3 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- D harfi.docx"
import AnnotatedDictionary4 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- E harfi.docx"
import AnnotatedDictionary5 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- F harfi.docx"
import AnnotatedDictionary6 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- G harfi.docx"
import AnnotatedDictionary7 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- H harfi.docx"
import AnnotatedDictionary8 from "../../../assets/docs/Annotated-dictionary/Izohli lug'a- I harfi.docx"
import AnnotatedDictionary9 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- J harfi.docx"
import AnnotatedDictionary10 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- K harfi.docx"
import AnnotatedDictionary11 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- L harfi.docx"
import AnnotatedDictionary12 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- M harfi.docx"
import AnnotatedDictionary13 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- N harfi.docx"
import AnnotatedDictionary14 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- O harfi.docx"
import AnnotatedDictionary15 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- P harfi.docx"
import AnnotatedDictionary16 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- Q harfi.docx"
import AnnotatedDictionary17 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- R harfi.docx"
import AnnotatedDictionary18 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- S va SH harflari.docx"
import AnnotatedDictionary19 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- T harfi.docx"
import AnnotatedDictionary20 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- U va V harflari.docx"
import AnnotatedDictionary21 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- X harfi.docx"
import AnnotatedDictionary22 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- Y harfi.docx"
import AnnotatedDictionary23 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- Z harfi.docx"
import AnnotatedDictionary24 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- O' harfi.docx"
import AnnotatedDictionary25 from "../../../assets/docs/Annotated-dictionary/Izohli lug'at- CH harfi.docx"
export const AnnotatedDictionary = () => {
    const data = [
        {
            title: "Izohli lug'at -A harfi",
            link: AnnotatedDictionary1,
        },
        {
            title: "Izohli lug'at- B harfi",
            link: AnnotatedDictionary2,
        },
        {
            title: "Izohli lug'at- D harfi",
            link: AnnotatedDictionary3,
        },
        {
            title: "Izohli lug'at- E harfi",
            link: AnnotatedDictionary4,
        },
        {
            title: "Izohli lug'at- F harfi",
            link: AnnotatedDictionary5,
        },
        {
            title: "Izohli lug'at- G harfi",
            link: AnnotatedDictionary6,
        },
        {
            title: "Izohli lug'at- H harfi",
            link: AnnotatedDictionary7,
        },
        {
            title: "Izohli lug'a- I harfi",
            link: AnnotatedDictionary8,
        },
        {
            title: "Izohli lug'at- J harfi",
            link: AnnotatedDictionary9,
        },
        {
            title: "Izohli lug'at- K harfi",
            link: AnnotatedDictionary10,
        },
        {
            title: "Izohli lug'at- L harfi",
            link: AnnotatedDictionary11,
        },
        {
            title: "Izohli lug'at- M harfi",
            link: AnnotatedDictionary12,
        },
        {
            title: "Izohli lug'at- N harfi",
            link: AnnotatedDictionary13,
        },
        {
            title: "Izohli lug'at- O harfi",
            link: AnnotatedDictionary14,
        },
        {
            title: "Izohli lug'at- P harfi",
            link: AnnotatedDictionary15,
        },
        {
            title: "Izohli lug'at- Q harfi",
            link: AnnotatedDictionary16,
        },
        {
            title: "Izohli lug'at- R harfi",
            link: AnnotatedDictionary17,
        },
        {
            title: "Izohli lug'at- S va SH harflari",
            link: AnnotatedDictionary18,
        },
        {
            title: "Izohli lug'at- T harfi",
            link: AnnotatedDictionary19,
        },
        {
            title: "Izohli lug'at- U va V harflari",
            link: AnnotatedDictionary20,
        },
        {
            title: "Izohli lug'at- X harfi",
            link: AnnotatedDictionary21,
        },
        {
            title: "Izohli lug'at- Y harfi",
            link: AnnotatedDictionary22,
        },
        {
            title: "Izohli lug'at- Z harfi",
            link: AnnotatedDictionary23,
        },
        {
            title: "Izohli lug'at- O' harfi",
            link: AnnotatedDictionary24,
        },
        {
            title: "Izohli lug'at- CH harfi",
            link: AnnotatedDictionary25,
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