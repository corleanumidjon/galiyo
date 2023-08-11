import { LinkCard } from "../../../../components/LinkCard/LinkCard";
import riversImg from "../../../../assets/images/rivers.jpg";
import mountains2Img from "../../../../assets/images/mountains-2.jpg";
import cartoonMapImg from "../../../../assets/images/cartoon-map.jpg";
import "./EuroAsia.scss"
export const EuroAsia = () => {
    const EuroAsiaLinkInfo = [
        {
            text: "Yevrosiyo materigi nomenklaturasi",
            link: "/euro-asia/nomenclature",
            img: cartoonMapImg,
        },
        {
            text: "Yevrosiyo materigi daryolari",
            link: "/euro-asia/rivers",
            img: riversImg,
        },
        {
            text: "Yevrosiyo materigi tog'lari",
            link: "/euro-asia/mountains",
            img: mountains2Img,
        },
    ]
    return <>
        <section className="euro-asia-section">
            <div className="container">
                <ul className="site-link-list">
                    {EuroAsiaLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
