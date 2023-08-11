import { useEffect, useRef } from "react";
import "./AfricaIssues.scss";
import { CheckButton } from "../../../../utils/Components";

export const AfricaIssues = () => {
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
        className="africa-issues__input"
        type="text"
        ref={refNumber}
        placeholder="Bu..."
      />
    );
  };

  const handleSubmit = () => {
    if (in1.current.value.toLowerCase() == "cho'l") {
      in1.current.classList.add("right");
      in1.current.classList.remove("mistake");
    } else {
      in1.current.classList.remove("right");
      in1.current.classList.add("mistake");
    }
    if (in2.current.value.toLowerCase() == "tog'lik") {
      in2.current.classList.add("right");
      in2.current.classList.remove("mistake");
    } else {
      in2.current.classList.remove("right");
      in2.current.classList.add("mistake");
    }
    if (in3.current.value.toLowerCase() == "ko'l") {
      in3.current.classList.add("right");
      in3.current.classList.remove("mistake");
    } else {
      in3.current.classList.remove("right");
      in3.current.classList.add("mistake");
    }
    if (in4.current.value.toLowerCase() == "qo'riqxona") {
      in4.current.classList.add("right");
      in4.current.classList.remove("mistake");
    } else {
      in4.current.classList.remove("right");
      in4.current.classList.add("mistake");
    }
    if (in5.current.value.toLowerCase() == "daryo") {
      in5.current.classList.add("right");
      in5.current.classList.remove("mistake");
    } else {
      in5.current.classList.remove("right");
      in5.current.classList.add("mistake");
    }
    if (in6.current.value.toLowerCase() == "milliy bog'") {
      in6.current.classList.add("right");
      in6.current.classList.remove("mistake");
    } else {
      in6.current.classList.remove("right");
      in6.current.classList.add("mistake");
    }
    if (in7.current.value.toLowerCase() == "botiq") {
      in7.current.classList.add("right");
      in7.current.classList.remove("mistake");
    } else {
      in7.current.classList.remove("right");
      in7.current.classList.add("mistake");
    }
    if (in8.current.value.toLowerCase() == "vulqon") {
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
            className="africa-issues__form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
            <h2 className="africa-issues__title">Afrika materigi relyefi</h2>
            <div className="africa-issues__wrapper">
              <div className="africa-issues__box">
                <p className="africa-issues__text">Nubiya ?</p>
                {inputRender(in1)}
              </div>
              <div className="africa-issues__box">
                <p className="africa-issues__text">Efiopiya ?</p>
                {inputRender(in2)}
              </div>
              <div className="africa-issues__box">
                <p className="africa-issues__text">Chad ?</p>
                {inputRender(in3)}
              </div>
              <div className="africa-issues__box">
                <p className="africa-issues__text">Rungva ?</p>
                {inputRender(in4)}
              </div>
              <div className="africa-issues__box">
                <p className="africa-issues__text">Limpopo ?</p>
                {inputRender(in5)}
              </div>
              <div className="africa-issues__box">
                <p className="africa-issues__text">Kameya ?</p>
                {inputRender(in6)}
              </div>
              <div className="africa-issues__box">
                <p className="africa-issues__text">Kattara ?</p>
                {inputRender(in7)}
              </div>
              <div className="africa-issues__box">
                <p className="africa-issues__text">Karisimbi ?</p>
                {inputRender(in8)}
              </div>
            </div>
            <CheckButton />
          </form>
        </div>
      </section>
    </>
  );
};
