import { LinkCard } from "../../../../components/LinkCard/LinkCard";
import testPointImg from "../../../../assets/images/test-points.jpg";
import planetImg from "../../../../assets/images/planet.jpg";
import seaStormImg from "../../../../assets/images/storm-sea.jpg" ;
import "./SouthAmerica.scss"

export const SouthAmerica = () => {
    const SouthAmericaLinkInfo = [
        {
            text: "Janubiy Amerika relyefi",
            link: "/south-america/issues",
            img: planetImg,
        },
        {
            text: "Test",
            link: "/south-america/test",
            img: testPointImg,
        },
        {
            text: "Janubiy Amerika nomenklaturasi",
            link: "/south-america/nomenclature",
            img: planetImg,
        },
        {
            text: "Janubiy Amerika gidrografiyasi",
            link: "/south-america/hydrography",
            img: seaStormImg,
        },
    ]
    return <>
        <section className="south-america-section">
            <div className="container">
                <ul className="site-link-list">
                    {SouthAmericaLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
