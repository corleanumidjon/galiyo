import { LinkCard } from "../../../../components/LinkCard/LinkCard";
import globe2Img from "../../../../assets/images/globe-2.webp"
import mapAndPhotoImg from "../../../../assets/images/map-photo.jpeg"
import mountainsImg from "../../../../assets/images/africa-mountains.jpeg"
import questionsImg from "../../../../assets/images/questions.jpeg"
import plantsImg from "../../../../assets/images/africa-plants.jpeg"
import D3MapImg from "../../../../assets/images/3d-map.jpg"
import "./Atlantic.scss"
export const Atlantic = () => {
    const AtlanticLinkInfo = [
        {
            text: "Test",
            link: "/atlantic/test",
            img: globe2Img,
        },
        {
            text: "Savollar",
            link: "/atlantic/continue-sentence",
            img: mapAndPhotoImg,
        },
        {
            text: "Moslashtirish",
            link: "/atlantic/adaptation",
            img: mountainsImg,
        },
        {
            text: "Oqimlar",
            link: "/atlantic/currents",
            img: questionsImg,
        },
        {
            text: "Tabiat zonalari",
            link: "/atlantic/nature-zones",
            img: plantsImg,
        },
        {
            text: "Xarita",
            link: "/atlantic/map",
            img: D3MapImg,
        },
    ]
    return <>
        <section className="atlantic-section">
            <div className="container">
                <ul className="site-link-list">
                    {AtlanticLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
