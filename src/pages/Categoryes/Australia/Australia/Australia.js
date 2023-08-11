import { LinkCard } from "../../../../components/LinkCard/LinkCard";
import globe2Img from "../../../../assets/images/globe-2.webp";
import stormImg from "../../../../assets/images/storm-sky.webp";
import ironMapImg from "../../../../assets/images/iron-map.jpeg";
import globe6Img from "../../../../assets/images/globe-6.jpeg";
import blueSeaImg from "../../../../assets/images/blue-sea.jpeg";
import crosswordImg from "../../../../assets/images/crossword.webp";
import "./Australia.scss"
export const Australia = () => {
    const PacificOceanLinkInfo = [
        {
            text: "Avstraliya Xarita",
            link: "/australia/map",
            img: globe2Img,
        },
        {
            text: "Avstraliya nomeklaturasi",
            link: "/australia/issues",
            img: ironMapImg,
        },
        {
            text: "Avstraliya Test",
            link: "/australia/test",
            img: globe6Img,
        },
        {
            text: "Avstraliya Iqlimi",
            link: "/australia/climate",
            img: stormImg,
        },
        {
            text: "Avstraliya Materigi Ichki Suvlari",
            link: "/australia/continue-sentence",
            img: blueSeaImg,
        },
        {
            text: "Avstraliya Materigining Tabiat Mintaqalari",
            link: "/australia/crossword",
            img: crosswordImg,
        },
    ]
    return <>
        <section  className="australia-section">
            <div className="container">
                <ul className="site-link-list">
                    {PacificOceanLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
