import eBook1 from "../../../assets/docs/e-books/B.Mavlonov_-_Davlatlar_nomlarining_etimologiyasi.pdf";
import eBook2 from "../../../assets/docs/e-books/Ekologiya va tabiatni muhofaza qilish.pdf";
import eBook3 from "../../../assets/docs/e-books/Geografiya o'qitish metodikasi. O'quv qo'llanma.pdf";
import eBook4 from "../../../assets/docs/e-books/Geografiya o'qitish metodikasi.pdf";
import eBook5 from "../../../assets/docs/e-books/Materiklar va okeanlar tabiiy geografiyasi_2021.pdf";
import eBook6 from "../../../assets/docs/e-books/O'zbekiston geografiyasi.pdf";
// import eBook7 from "../../../assets/docs/e-books/O'zbekiston Milliy Atlasi I_TOM. 2020.pdf";
// import eBook8 from "../../../assets/docs/e-books/O'zbekiston Milliy Atlasi II_TOM.2020.pdf";
import eBook9 from "../../../assets/docs/e-books/Tabiiy geografik jarayonlar.pdf";
import eBook10 from "../../../assets/docs/e-books/Topografiya va kartografiya asoslari.pdf";
import eBook11 from "../../../assets/docs/e-books/Toponimika. Hakimov Q.pdf";
import eBook12 from "../../../assets/docs/e-books/Tuproqlar geografiyasi.pdf";
import eBook13 from "../../../assets/docs/e-books/Umumiy yer bilimi H.Vahobov va boshqalar.pdf";
import eBook14 from "../../../assets/docs/e-books/Umumiy Yer bilimi P.Baratov va N.Sultonova.pdf";
import eBook15 from "../../../assets/docs/e-books/Umumiy yer bilimi Q.R.Pardayev.pdf";
import { DepartmentCard } from "../../../components/DepartmentCard/DepartmentCard";

export const EBooks = () => {
    const data = [
        {
            title: "Davlatlar nomlarining etimologiyasi",
            link: eBook1,
        },
        {
            title: "Ekologiya va tabiatni muhofaza qilish",
            link: eBook2,
        },
        {
            title: "Geografiya o'qitish metodikasi. O'quv qo'llanma",
            link: eBook3,
        },
        {
            title: "Geografiya o'qitish metodikasi",
            link: eBook4,
        },
        {
            title: "Materiklar va okeanlar tabiiy geografiyasi",
            link: eBook5,
        },
        {
            title: "O'zbekiston geografiyasi",
            link: eBook6,
        },
        // {
        //     title: "O'zbekiston Milliy Atlasi I_TOM",
        //     link: eBook7,
        // },
        // {
        //     title: "O'zbekiston Milliy Atlasi II_TOM",
        //     link: eBook8,
        // },
        {
            title: "Tabiiy geografik jarayonlar",
            link: eBook9,
        },
        {
            title: "Topografiya va kartografiya asoslari",
            link: eBook10,
        },
        {
            title: "Toponimika. Hakimov Q",
            link: eBook11,
        },
        {
            title: "Tuproqlar geografiyasi",
            link: eBook12,
        },
        {
            title: "Umumiy yer bilimi H.Vahobov va boshqalar",
            link: eBook13,
        },
        {
            title: "Umumiy Yer bilimi P.Baratov va N.Sultonova",
            link: eBook14,
        },
        {
            title: "Umumiy yer bilimi Q.R.Pardayev",
            link: eBook15,
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
