import { DepartmentCard } from "../../../components/DepartmentCard/DepartmentCard";
import presentation1 from "../../../assets/docs/Presentations/AFRIKA GEOGRAFIK O'RNI.pdf"
import presentation2 from "../../../assets/docs/Presentations/AFRIKA ICHKI SUVLARI.pdf"
import presentation3 from "../../../assets/docs/Presentations/AFRIKA IQLIMI.pdf"
import presentation4 from "../../../assets/docs/Presentations/AFRIKA RELYEFI.pdf"
import presentation5 from "../../../assets/docs/Presentations/AFRIKA TABIAT ZONALARI.pdf"
import presentation6 from "../../../assets/docs/Presentations/ANTARKTIDA GEOGRAFIK O'RNI.pdf"
import presentation7 from "../../../assets/docs/Presentations/ATLANTIKA OKEANI.ppt.pdf"
import presentation8 from "../../../assets/docs/Presentations/AVSTRALIYA GEOGRAFIK O'RNI, TEKTONIKA.ppt.pdf"
import presentation9 from "../../../assets/docs/Presentations/AVSTRALIYA ICHKI SUVLARI.pdf"
import presentation10 from "../../../assets/docs/Presentations/AVSTRALIYA IQLIMI.ppt.pdf"
import presentation11 from "../../../assets/docs/Presentations/AVSTRALIYA REL'EFI.ppt.pdf"
import presentation12 from "../../../assets/docs/Presentations/AVSTRALIYA TABIAT ZONALARI.ppt.pdf"
import presentation13 from "../../../assets/docs/Presentations/HIND OKEANI.ppt.pdf"
import presentation14 from "../../../assets/docs/Presentations/JANUBIY AMERIKA GEOGRAFIK O'RNI.ppt.pdf"
import presentation15 from "../../../assets/docs/Presentations/JANUBIY AMERIKA ICHKI SUVLARI.pdf"
import presentation16 from "../../../assets/docs/Presentations/JANUBIY AMERIKA RELEFI.pdf"
import presentation17 from "../../../assets/docs/Presentations/OKEANIYA.pdf"
import presentation18 from "../../../assets/docs/Presentations/SHIMOLIY AMERIKA ICHKI SUVLARI.ppt.pdf"
import presentation19 from "../../../assets/docs/Presentations/SHIMOLIY AMERIKANING GEOGRAFIK O'RNI.ppt.pdf"
import presentation20 from "../../../assets/docs/Presentations/SHIMOLIY MUZ OKEANI..ppt.pdf"
import presentation21 from "../../../assets/docs/Presentations/TINCH OKEANI.ppt.pdf"
import presentation22 from "../../../assets/docs/Presentations/YEVROSIYO GEOGRAFIK O'RNI.ppt.pdf"
import presentation23 from "../../../assets/docs/Presentations/YEVROSIYO ICHKI SUVLARI.pdf"
import presentation24 from "../../../assets/docs/Presentations/YEVROSIYO IQLIMI.ppt.pdf"

export const Presentations = () => {
    const data = [
		{
			title: "AFRIKA GEOGRAFIK O'RNI",
			link: presentation1,
		},
		{
			title: "AFRIKA ICHKI SUVLARI",
			link: presentation2,
		},
		{
			title: "AFRIKA IQLIMI",
			link: presentation3,
		},
		{
			title: "AFRIKA RELYEFI",
			link: presentation4,
		},
		{
			title: "AFRIKA TABIAT ZONALARI",
			link: presentation5,
		},
		{
			title: "ANTARKTIDA GEOGRAFIK O'RNI",
			link: presentation6,
		},
		{
			title: "ATLANTIKA OKEANI",
			link: presentation7,
		},
		{
			title: "AVSTRALIYA GEOGRAFIK O'RNI, TEKTONIKA",
			link: presentation8,
		},
		{
			title: "AVSTRALIYA ICHKI SUVLARI",
			link: presentation9,
		},
		{
			title: "AVSTRALIYA IQLIMI",
			link: presentation10,
		},
		{
			title: "AVSTRALIYA REL'EFI",
			link: presentation11,
		},
		{
			title: "AVSTRALIYA TABIAT ZONALARI",
			link: presentation12,
		},
		{
			title: "HIND OKEANI",
			link: presentation13,
		},
		{
			title: "JANUBIY AMERIKA GEOGRAFIK O'RNI",
			link: presentation14,
		},
		{
			title: "JANUBIY AMERIKA ICHKI SUVLARI",
			link: presentation15,
		},
		{
			title: "JANUBIY AMERIKA RELEFI",
			link: presentation16,
		},
		{
			title: "OKEANIYA",
			link: presentation17,
		},
		{
			title: "SHIMOLIY AMERIKA ICHKI SUVLARI",
			link: presentation18,
		},
		{
			title: "SHIMOLIY AMERIKANING GEOGRAFIK O'RNI",
			link: presentation19,
		},
		{
			title: "SHIMOLIY MUZ OKEANI",
			link: presentation20,
		},
		{
			title: "TINCH OKEANI",
			link: presentation21,
		},
		{
			title: "YEVROSIYO GEOGRAFIK O'RNI",
			link: presentation22,
		},
		{
			title: "YEVROSIYO ICHKI SUVLARI",
			link: presentation23,
		},
		{
			title: "YEVROSIYO IQLIMI",
			link: presentation24,
		},
	];
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