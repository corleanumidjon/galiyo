import azimuthImg from "../../assets/images/Azimuth.jpg";
import africaImg from "../../assets/images/Africa.jpg";
import antarcticaImg from "../../assets/images/Antarctica.jpg";
import atmosphereImg from "../../assets/images/Atmosphere.jpg";
import euroAsiaImg from "../../assets/images/EuroAsia.jpg";
import northAmericaImg from "../../assets/images/NorthAmerica.jpg";
import southAmericaImg from "../../assets/images/SouthAmerica.jpg";
import pacificOceanImg from "../../assets/images/PacificOcean.jpg";
import arcticOceanImg from "../../assets/images/ArcticOcean.jpg";
import indianOceanImg from "../../assets/images/IndianOcean.jpg";
import biosphereImg from "../../assets/images/Biosphere.jpg";
import hydrosphereImg from "../../assets/images/Hydrosphere.jpeg";
import universeImg from "../../assets/images/Universe.jpg";
import oceansImg from "../../assets/images/Oceans.jpg";
import australiaImg from "../../assets/images/Australia.jpg";
import atlanticOceanImg from "../../assets/images/AtlanticOcean.jpg";
import solarSystemImg from "../../assets/images/SolarSystem.jpg";
import { LinkCard } from "../LinkCard/LinkCard";
import "../../pages/Main/Home/Home.scss";

export const Hero = () => {
  const headerLinks = [
    {
      text: "Azimut",
      link: "/azimuth",
      img: azimuthImg,
    },
    {
      text: "Afrika",
      link: "/africa",
      img: africaImg,
    },
    {
      text: "Antarktida",
      link: "/antarctica",
      img: antarcticaImg,
    },
    {
      text: "Atmosfera",
      link: "/atmosphere",
      img: atmosphereImg,
    },
    {
      text: "Yevro Osiyo",
      link: "/euro-asia",
      img: euroAsiaImg,
    },
    {
      text: "Shimoliy Amerika",
      link: "/north-america",
      img: northAmericaImg,
    },
    {
      text: "Janubiy Amerika",
      link: "/south-america",
      img: southAmericaImg,
    },
    {
      text: "Tinch Okeani",
      link: "/pacific-ocean",
      img: pacificOceanImg,
    },
    {
      text: "Shimoliy Muz Okeani",
      link: "/arctic-ocean",
      img: arcticOceanImg,
    },
    {
      text: "Hind Okeani",
      link: "/indian-ocean",
      img: indianOceanImg,
    },
    {
      text: "Biosfera",
      link: "/biosphere",
      img: biosphereImg,
    },
    {
      text: "Gidrosfera",
      link: "/hydrosphere",
      img: hydrosphereImg,
    },
    {
      text: "Koinot",
      link: "/universe",
      img: universeImg,
    },
    {
      text: "Okeanlar",
      link: "/oceans",
      img: oceansImg,
    },
    {
      text: "Avstraliya",
      link: "/australia",
      img: australiaImg,
    },
    {
      text: "Atlantika Okeani",
      link: "/atlantic",
      img: atlanticOceanImg,
    },
    {
      text: "Quyosh sistemasi",
      link: "/sun-system",
      img: solarSystemImg,
    },
  ];

  return (
    <>
      <ul className="site-home-tasks-list">
        {headerLinks.map((item, index) => {
          return (
            <li className="site-home-tasks-item" key={index}>
              <LinkCard obj={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
