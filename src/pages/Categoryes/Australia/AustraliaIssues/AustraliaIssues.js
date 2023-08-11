import { useEffect, useRef } from "react";
import "./AustraliaIssues.scss";
import { CheckButton } from "../../../../utils/Components";

export const AustraliaIssues = () => {
  const in1 = useRef();
  const in2 = useRef();
  const in3 = useRef();
  const in4 = useRef();
  const in5 = useRef();
  const in6 = useRef();
  const in7 = useRef();

  const inputRender = (refNumber) => {
    return (
      <input
        className="australia-issues__input"
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
    if (in2.current.value.toLowerCase() == "orol") {
      in2.current.classList.add("right");
      in2.current.classList.remove("mistake");
    } else {
      in2.current.classList.remove("right");
      in2.current.classList.add("mistake");
    }
    if (in3.current.value.toLowerCase() == "daryo") {
      in3.current.classList.add("right");
      in3.current.classList.remove("mistake");
    } else {
      in3.current.classList.remove("right");
      in3.current.classList.add("mistake");
    }
    if (in4.current.value.toLowerCase() == "ko'l") {
      in4.current.classList.add("right");
      in4.current.classList.remove("mistake");
    } else {
      in4.current.classList.remove("right");
      in4.current.classList.add("mistake");
    }
    if (in5.current.value.toLowerCase() == "tog' sistemasi") {
      in5.current.classList.add("right");
      in5.current.classList.remove("mistake");
    } else {
      in5.current.classList.remove("right");
      in5.current.classList.add("mistake");
    }
    if (in6.current.value.toLowerCase() == "dengiz") {
      in6.current.classList.add("right");
      in6.current.classList.remove("mistake");
    } else {
      in6.current.classList.remove("right");
      in6.current.classList.add("mistake");
    }
    if (in7.current.value.toLowerCase() == "shahar") {
      in7.current.classList.add("right");
      in7.current.classList.remove("mistake");
    } else {
      in7.current.classList.remove("right");
      in7.current.classList.add("mistake");
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
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <form
            className="australia-issues__form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
            <h2 className="australia-issues__title">
              Namuna: Uzbekistan bu Davlat
            </h2>
            <div className="australia-issues__wrapper">
              <div className="australia-issues__box">
                <p className="australia-issues__text">Katta Qumlik</p>
                {inputRender(in1)}
              </div>
              <div className="australia-issues__box">
                <p className="australia-issues__text">Tasmaniya</p>
                {inputRender(in2)}
              </div>
              <div className="australia-issues__box">
                <p className="australia-issues__text">Murrey</p>
                {inputRender(in3)}
              </div>
              <div className="australia-issues__box">
                <p className="australia-issues__text">EYR-Nord</p>
                {inputRender(in4)}
              </div>
              <div className="australia-issues__box">
                <p className="australia-issues__text">
                  Katta suv ayirg'ich tizmasi
                </p>
                {inputRender(in5)}
              </div>
              <div className="australia-issues__box">
                <p className="australia-issues__text">Marjon</p>
                {inputRender(in6)}
              </div>
              <div className="australia-issues__box">
                <p className="australia-issues__text">Kanberra</p>
                {inputRender(in7)}
              </div>
            </div>
            <CheckButton />
          </form>
        </div>
      </section>
    </>
  );
};
