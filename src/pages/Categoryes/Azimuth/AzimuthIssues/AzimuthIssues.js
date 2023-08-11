import { useEffect, useRef } from "react";
import "./AzimuthIssues.scss";
import { CheckButton } from "../../../../utils/Components";

export const AzimuthIssues = () => {
  const in1 = useRef();
  const in2 = useRef();
  const in3 = useRef();
  const in4 = useRef();
  const in5 = useRef();
  const in6 = useRef();
  const in7 = useRef();
  const in8 = useRef();

  const inputRender = (refNumber) => {
    return (
      <input
        className="azimuth-issues__input"
        type="text"
        ref={refNumber}
        placeholder="Javobingizni kiriting..."
      />
    );
  };

  const handleSubmit = () => {
    if (
      in1.current.value.toLowerCase() == "225" ||
      in1.current.value.toLowerCase() == "225°"
    ) {
      in1.current.classList.add("right");
      in1.current.classList.remove("mistake");
    } else {
      in1.current.classList.remove("right");
      in1.current.classList.add("mistake");
    }
    if (
      in2.current.value.toLowerCase() == "900" ||
      in2.current.value.toLowerCase() == "900°"
    ) {
      in2.current.classList.add("right");
      in2.current.classList.remove("mistake");
    } else {
      in2.current.classList.remove("right");
      in2.current.classList.add("mistake");
    }
    if (in3.current.value.toLowerCase() == "shimol") {
      in3.current.classList.add("right");
      in3.current.classList.remove("mistake");
    } else {
      in3.current.classList.remove("right");
      in3.current.classList.add("mistake");
    }
    if (
      in4.current.value.toLowerCase() == "300" ||
      in4.current.value.toLowerCase() == "300°"
    ) {
      in4.current.classList.add("right");
      in4.current.classList.remove("mistake");
    } else {
      in4.current.classList.remove("right");
      in4.current.classList.add("mistake");
    }
    if (in5.current.value.toLowerCase() == "shimoli-g'arb") {
      in5.current.classList.add("right");
      in5.current.classList.remove("mistake");
    } else {
      in5.current.classList.remove("right");
      in5.current.classList.add("mistake");
    }
    if (
      in6.current.value.toLowerCase() == "180" ||
      in6.current.value.toLowerCase() == "180°"
    ) {
      in6.current.classList.add("right");
      in6.current.classList.remove("mistake");
    } else {
      in6.current.classList.remove("right");
      in6.current.classList.add("mistake");
    }
    if (in7.current.value.toLowerCase() == "Janub") {
      in7.current.classList.add("right");
      in7.current.classList.remove("mistake");
    } else {
      in7.current.classList.remove("right");
      in7.current.classList.add("mistake");
    }
    if (
      in8.current.value.toLowerCase() == "135" ||
      in8.current.value.toLowerCase() == "135°"
    ) {
      in8.current.classList.add("right");
      in8.current.classList.remove("mistake");
    } else {
      in8.current.classList.remove("right");
      in8.current.classList.add("mistake");
    }
  };

  useEffect(() => {
    in1.current.value = "";
    in2.current.value = "";
    in3.current.value = "";
    in4.current.value = "";
    in5.current.value = "";
    in6.current.value = "";
    in7.current.value = "";
    in8.current.value = "";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <form
            className="azimuth-issues__form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
            <div className="azimuth-issues__box">
              <p className="azimuth-issues__text">
                1. Agar siz tahsil olayotgan ta’lim dargohingizga 45° azimut
                bilan borgan bo’lsangiz, uyingizga qaysi yo’nalishda qaytasiz?
              </p>
              {inputRender(in1)}
            </div>
            <div className="azimuth-issues__box">
              <p className="azimuth-issues__text">
                2. Sayohatchilar 270° azimut bo’yicha 400 metr yurishdi,
                ularning qaytish yo’nalishi azimutini aniqlang!
              </p>
              {inputRender(in2)}
            </div>
            <div className="azimuth-issues__box">
              <p className="azimuth-issues__text">
                3. Mashina derazasidan qarab ketayotgan yo’lovchi Qutb yulduzini
                dastlab mashinaning chap derazasi tomonda ko’rdi, biroz vaqtdan
                keyin Qutb yulduzi mashinaning old tomonida paydo bo’ldi.
                Mashina qaysi tomonga burilgan?
              </p>
              {inputRender(in3)}
            </div>
            <div className="azimuth-issues__box">
              <p className="azimuth-issues__text">
                4. Poyezd Samarqandga 120° azimut bilan bordi. U qaytayotganda
                qanday azimut bilan harakatlanishi kerak?
              </p>
              {inputRender(in4)}
            </div>
            <div className="azimuth-issues__box">
              <p className="azimuth-issues__text">
                5. Agar siz old tomoningiz bilan janubi-g’arb tomonga qarab
                turgan bo’lsangiz, sizning o’ng qo’lingiz qaysi yo’nalishni
                ko’rsatib turadi?
              </p>
              {inputRender(in5)}
            </div>
            <div className="azimuth-issues__box">
              <p className="azimuth-issues__text">
                6. Shimoliy qutbdan ekvator tomon uchayotgan samolyotga
                janubi-g’arb tomonga uchish haqida buyruq berildi. Buyruq
                berilganiga qadar samolyot qaysi azimut burchagi bo’yicha
                uchgan?
              </p>
              {inputRender(in6)}
            </div>
            <div className="azimuth-issues__box">
              <p className="azimuth-issues__text">
                7. Shimoliy qutb ustida turgan kishining o’ng va chap tomonida
                ufq (gorizont)ning qaysi tomonlari turadi?
              </p>
              {inputRender(in7)}
            </div>
            <div className="azimuth-issues__box">
              <p className="azimuth-issues__text">
                8. Maktab hovlisidan 500 metr shimoli-g’arbdagi do’konga borgan
                o’quvchi maktabga qaytish uchun qanday azimut bo’yicha qaytadi?
              </p>
              {inputRender(in8)}
            </div>
            <CheckButton />
          </form>
        </div>
      </section>
    </>
  );
};
