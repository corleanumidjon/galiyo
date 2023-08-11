import { useEffect, useRef } from "react";
import "./AtmosphereIssues.scss";
import { CheckButton } from "../../../../utils/Components";

export const AtmosphereIssues = () => {
  const in1 = useRef();
  const in2 = useRef();
  const in3 = useRef();
  const in4 = useRef();
  const in5 = useRef();
  const in6 = useRef();

  const inputRender = (refNumber) => {
    return (
      <input
        className="atmosphere-issues__input"
        type="text"
        ref={refNumber}
        placeholder="Javobingiz..."
      />
    );
  };

  const handleSubmit = () => {
    if (in1.current.value.toLowerCase() == "radiatsion") {
      in1.current.classList.add("right");
      in1.current.classList.remove("mistake");
    } else {
      in1.current.classList.remove("right");
      in1.current.classList.add("mistake");
    }
    if (in2.current.value.toLowerCase() == "advektiv") {
      in2.current.classList.add("right");
      in2.current.classList.remove("mistake");
    } else {
      in2.current.classList.remove("right");
      in2.current.classList.add("mistake");
    }
    if (in3.current.value.toLowerCase() == "aralash") {
      in3.current.classList.add("right");
      in3.current.classList.remove("mistake");
    } else {
      in3.current.classList.remove("right");
      in3.current.classList.add("mistake");
    }
    if (in4.current.value.toLowerCase() == "koordinat") {
      in4.current.classList.add("right");
      in4.current.classList.remove("mistake");
    } else {
      in4.current.classList.remove("right");
      in4.current.classList.add("mistake");
    }
    if (in5.current.value.toLowerCase() == "yonbag’ir") {
      in5.current.classList.add("right");
      in5.current.classList.remove("mistake");
    } else {
      in5.current.classList.remove("right");
      in5.current.classList.add("mistake");
    }
    if (in6.current.value.toLowerCase() == "tuman") {
      in6.current.classList.add("right");
      in6.current.classList.remove("mistake");
    } else {
      in6.current.classList.remove("right");
      in6.current.classList.add("mistake");
    }
  };

  useEffect(() => {
    in1.current.value = "";
    in2.current.value = "";
    in3.current.value = "";
    in4.current.value = "";
    in5.current.value = "";
    in6.current.value = "";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <form
            className="atmosphere-issues__form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
            <div className="atmosphere-issues__wrapper">
              <div className="atmosphere-issues__box">
                <p className="atmosphere-issues__text">
                  Yilning issiq davrida kechqurunlari va kechasi daryo, ko’l va
                  pastqam yerlar ustida sokin, bulutsiz ob-havo sharoitida
                  tushadigan tumanlar?
                </p>
                {inputRender(in1)}
              </div>
              <div className="atmosphere-issues__box">
                <p className="atmosphere-issues__text">
                  Iliq havo massasi sovuq joyga borganda paydo bo’ladigan
                  tumanlar?
                </p>
                {inputRender(in2)}
              </div>
              <div className="atmosphere-issues__box">
                <p className="atmosphere-issues__text">
                  Harorati va namligi turlicha bo’lgan ikki xil havo massasining
                  aralashishidan hosil bo’ladigan tumanlar?
                </p>
                {inputRender(in3)}
              </div>
              <div className="atmosphere-issues__box">
                <p className="atmosphere-issues__text">
                  Toqqa ko‘tarilayotgan havoning adiabatik sovishi natijasida
                  paydo bo’ladigan tumanlar?
                </p>
                {inputRender(in4)}
              </div>
              <div className="atmosphere-issues__box">
                <p className="atmosphere-issues__text">
                  Havoning yerga yaqin qatlamida juda mayda suv tomchilari, muz
                  kristallari yoki ularning har ikkalasining to‘planishiga nima
                  deb aytiladi?
                </p>
                {inputRender(in5)}
              </div>
              <div className="atmosphere-issues__box">
                <p className="atmosphere-issues__text">
                  Atmosferadan yer yuzasiga qor, yomg’ir va do’l tariqasida
                  tushadigan namlikka nima deyiladi?
                </p>
                {inputRender(in6)}
              </div>
            </div>
            <CheckButton />
          </form>
        </div>
      </section>
    </>
  );
};
