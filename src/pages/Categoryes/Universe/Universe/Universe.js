import atlasImg from "../../../../assets/images/atlas.jpg";
import globe3Img from "../../../../assets/images/globe-3.jpeg";
import globe5Img from "../../../../assets/images/globe-5.jpg";
import { LinkCard } from "../../../../components/LinkCard/LinkCard";
import "./Universe.scss"
export const Universe = () => {
    const UniverseLinkInfo = [
        {
            text: "Test",
            link: "/universe/test",
            img: atlasImg,
        },
        {
            text: "Krossvord",
            link: "/universe/crossword",
            img: globe3Img,
        },
        {
            text: "Rasmlarni joylashtiring",
            link: "/universe/combine-pictures",
            img: globe5Img,
        },
    ]
    return <>
        <section className="universe-section">
            <div className="container">
                <ul className="site-link-list">
                    {UniverseLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
