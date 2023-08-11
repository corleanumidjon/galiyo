import { Link } from "react-router-dom";
import "./LinkCard.scss"

export const LinkCard = ({obj}) => {
    return <>
        <Link to={obj.link} className="link-card">
            <span className="link-card-text">
                {obj.text}
            </span>

            <img className="link-card-img" src={obj.img} alt="image" />
        </Link>
    </>
}
