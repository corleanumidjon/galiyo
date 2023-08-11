import { useEffect, useRef } from "react";
import "./OceansIssues.scss";
import { CheckButton } from "../../../../utils/Components";

export const OceansIssues = () => {
  const in1 = useRef();
  const in2 = useRef();
  const in3 = useRef();
  const in4 = useRef();
  const in5 = useRef();
  const in6 = useRef();
  const in7 = useRef();
  const in8 = useRef();
  const in9 = useRef();
  const in10 = useRef();

  const inputRender = (refNumber) => {
    return (
      <input
        className="oceans-issues__input"
        type="text"
        ref={refNumber}
        placeholder="Javobingizni kiriting..."
      />
    );
  };

  const handleSubmit = () => {
    if (in1.current.value.toLowerCase() == "tinch") {
      in1.current.classList.add("right");
      in1.current.classList.remove("mistake");
    } else {
      in1.current.classList.remove("right");
      in1.current.classList.add("mistake");
    }
    if (in2.current.value.toLowerCase() == "tinch") {
      in2.current.classList.add("right");
      in2.current.classList.remove("mistake");
    } else {
      in2.current.classList.remove("right");
      in2.current.classList.add("mistake");
    }
    if (in3.current.value.toLowerCase() == "atlantika") {
      in3.current.classList.add("right");
      in3.current.classList.remove("mistake");
    } else {
      in3.current.classList.remove("right");
      in3.current.classList.add("mistake");
    }
    if (in4.current.value.toLowerCase() == "tinch") {
      in4.current.classList.remove("mistake");
      in4.current.classList.add("right");
    } else {
      in4.current.classList.add("mistake");
      in4.current.classList.remove("right");
    }
    if (in5.current.value.toLowerCase() == "shimoliy muz") {
      in5.current.classList.remove("mistake");
      in5.current.classList.add("right");
    } else {
      in5.current.classList.add("mistake");
      in5.current.classList.remove("right");
    }
    if (in6.current.value.toLowerCase() == "tinch") {
      in6.current.classList.remove("mistake");
      in6.current.classList.add("right");
    } else {
      in6.current.classList.add("mistake");
      in6.current.classList.remove("right");
    }
    if (in7.current.value.toLowerCase() == "shimoliy muz") {
      in7.current.classList.remove("mistake");
      in7.current.classList.add("right");
    } else {
      in7.current.classList.add("mistake");
      in7.current.classList.remove("right");
    }
    if (in8.current.value.toLowerCase() == "hind") {
      in8.current.classList.remove("mistake");
      in8.current.classList.add("right");
    } else {
      in8.current.classList.add("mistake");
      in8.current.classList.remove("right");
    }
    if (in9.current.value.toLowerCase() == "tinch") {
      in9.current.classList.remove("mistake");
      in9.current.classList.add("right");
    } else {
      in9.current.classList.add("mistake");
      in9.current.classList.remove("right");
    }
    if (in10.current.value.toLowerCase() == "golfstirim") {
      in10.current.classList.remove("mistake");
      in10.current.classList.add("right");
    } else {
      in10.current.classList.add("mistake");
      in10.current.classList.remove("right");
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
    in9.current.value = "";
    in10.current.value = "";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <form
            className="oceans-issues__form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
            <div className="oceans-issues__wrapper">
              <div className="oceans-issues__box">
                <p className="oceans-issues__text">
                  <span>1.</span> Eng qadimgi okean
                </p>
                {inputRender(in1)}
              </div>
              <div className="oceans-issues__box">
                <p className="oceans-issues__text">
                  <span>2.</span> Eng katta okean
                </p>
                {inputRender(in2)}
              </div>
              <div className="oceans-issues__box">
                <p className="oceans-issues__text">
                  <span>3.</span> Eng uzun okean
                </p>
                {inputRender(in3)}
              </div>
              <div className="oceans-issues__box">
                <p className="oceans-issues__text">
                  <span>4.</span> Eng chuqur okean
                </p>
                {inputRender(in4)}
              </div>
              <div className="oceans-issues__box">
                <p className="oceans-issues__text">
                  <span>5.</span> Eng kichik okean
                </p>
                {inputRender(in5)}
              </div>
              <div className="oceans-issues__box">
                <p className="oceans-issues__text">
                  <span>6.</span> Eng issiq okean
                </p>
                {inputRender(in6)}
              </div>
              <div className="oceans-issues__box">
                <p className="oceans-issues__text">
                  <span>7.</span> Eng sovuq okean
                </p>
                {inputRender(in7)}
              </div>
              <div className="oceans-issues__box">
                <p className="oceans-issues__text">
                  <span>8.</span> Eng sho'r okean
                </p>
                {inputRender(in8)}
              </div>
              <div className="oceans-issues__box">
                <p className="oceans-issues__text">
                  <span>9.</span> Eng ko'p dengizli okean
                </p>
                {inputRender(in9)}
              </div>
              <div className="oceans-issues__box">
                <p className="oceans-issues__text">
                  <span>10.</span> Eng katta okean oqimi
                </p>
                {inputRender(in10)}
              </div>
            </div>
            <CheckButton />
          </form>
        </div>
      </section>
    </>
  );
};
