import { LinkCard } from "../../../components/LinkCard/LinkCard";
import "./Home.scss";
import mapAndPhoto from "../../../assets/images/map-photo.jpeg";
import questionsImg from "../../../assets/images/questions.jpeg";
import skyImg  from "../../../assets/images/sky-1.jpeg";
import riversImg from "../../../assets/images/rivers.jpg";
import cloudySkyImg from "../../../assets/images/cloudy-sky.jpg";
import stormSkyImg from "../../../assets/images/storm-sky.webp";
import planetImg from "../../../assets/images/planet.jpg";
import { Hero } from "../../../components/Hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
export const Home = () => {
    const homeLinksInfo = [
        {
            text: "Test",
            link: "/test",
            img: mapAndPhoto,
        },
        {
            text: "Savollar",
            link: "/questions",
            img: questionsImg,
        },
        {
            text: "Javoblarni birlashtiring",
            link: "/combine-answers",
            img: skyImg,
        },
        {
            text: "Daryolar",
            link: "/oceans",
            img: riversImg,
        },
        {
            text: "Dengizlar",
            link: "/seas",
            img: mapAndPhoto,
        },
        {
            text: "Azimut masalalar",
            link: "/azimuth-issues",
            img: cloudySkyImg,
        },
        {
            text: "Avstralia iqlimi",
            link: "/australian-climate",
            img: stormSkyImg,
        },
        {
            text: "Hind okeani nomenklaturasi",
            link: "/indian-ocean/map",
            img: planetImg,
        },
    ]

    return (
		<>
			<section className='site-home-tasks'>
				<div className='container'>
					<Hero />
					<ul className='site-home-tasks-list'>
						<Swiper
							slidesPerView={1}
							spaceBetween={50}
							freeMode={true}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                700: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
							modules={[FreeMode, Pagination, Autoplay]}
							className='mySwiper'
						>
							{homeLinksInfo.map((item, index) => (
								<SwiperSlide>
									<li
										className='site-home-tasks-item'
										key={index}
									>
										<LinkCard obj={item} />
									</li>
								</SwiperSlide>
							))}
						</Swiper>
					</ul>
				</div>
			</section>
		</>
	);
}
