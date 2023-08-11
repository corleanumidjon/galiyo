import { useEffect, useRef } from "react";
import "./HydrosphereIssues.scss";
import { CheckButton } from "../../../../utils/Components";

export const HydrosphereIssues = () => {
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
  const in11 = useRef();
  const in12 = useRef();
  const in13 = useRef();
  const in14 = useRef();
  const in15 = useRef();
  const in16 = useRef();
  const in17 = useRef();
  const in18 = useRef();
  const in19 = useRef();
  const in20 = useRef();

  const inputRender = (refNumber) => {
    return (
      <input
        className="hydrosphere-issues__input"
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
    if (in3.current.value.toLowerCase() == "tinch") {
      in3.current.classList.add("right");
      in3.current.classList.remove("mistake");
    } else {
      in3.current.classList.remove("right");
      in3.current.classList.add("mistake");
    }
    if (in4.current.value.toLowerCase() == "shimoliy muz") {
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
    if (in6.current.value.toLowerCase() == "filippin") {
      in6.current.classList.remove("mistake");
      in6.current.classList.add("right");
    } else {
      in6.current.classList.add("mistake");
      in6.current.classList.remove("right");
    }
    if (in7.current.value.toLowerCase() == "filippin") {
      in7.current.classList.remove("mistake");
      in7.current.classList.add("right");
    } else {
      in7.current.classList.add("mistake");
      in7.current.classList.remove("right");
    }
    if (in8.current.value.toLowerCase() == "boltiq") {
      in8.current.classList.remove("mistake");
      in8.current.classList.add("right");
    } else {
      in8.current.classList.add("mistake");
      in8.current.classList.remove("right");
    }
    if (in9.current.value.toLowerCase() == "qizil") {
      in9.current.classList.remove("mistake");
      in9.current.classList.add("right");
    } else {
      in9.current.classList.add("mistake");
      in9.current.classList.remove("right");
    }
    if (in10.current.value.toLowerCase() == "marmar") {
      in10.current.classList.remove("mistake");
      in10.current.classList.add("right");
    } else {
      in10.current.classList.add("mistake");
      in10.current.classList.remove("right");
    }
    if (in11.current.value.toLowerCase() == "ueddell") {
      in11.current.classList.remove("mistake");
      in11.current.classList.add("right");
    } else {
      in11.current.classList.add("mistake");
      in11.current.classList.remove("right");
    }
    if (in12.current.value.toLowerCase() == "qizil") {
      in12.current.classList.remove("mistake");
      in12.current.classList.add("right");
    } else {
      in12.current.classList.add("mistake");
      in12.current.classList.remove("right");
    }
    if (in13.current.value.toLowerCase() == "nil") {
      in13.current.classList.remove("mistake");
      in13.current.classList.add("right");
    } else {
      in13.current.classList.add("mistake");
      in13.current.classList.remove("right");
    }
    if (in14.current.value.toLowerCase() == "amazonka") {
      in14.current.classList.remove("mistake");
      in14.current.classList.add("right");
    } else {
      in14.current.classList.add("mistake");
      in14.current.classList.remove("right");
    }
    if (in15.current.value.toLowerCase() == "reprua") {
      in15.current.classList.remove("mistake");
      in15.current.classList.add("right");
    } else {
      in15.current.classList.add("mistake");
      in15.current.classList.remove("right");
    }
    if (in16.current.value.toLowerCase() == "kaspiy") {
      in16.current.classList.remove("mistake");
      in16.current.classList.add("right");
    } else {
      in16.current.classList.add("mistake");
      in16.current.classList.remove("right");
    }
    if (in17.current.value.toLowerCase() == "baykal") {
      in17.current.classList.remove("mistake");
      in17.current.classList.add("right");
    } else {
      in17.current.classList.add("mistake");
      in17.current.classList.remove("right");
    }
    if (
      in18.current.value.toLowerCase() == "o'lik" ||
      in18.current.value.toLowerCase() == "o'lik dengizi"
    ) {
      in18.current.classList.remove("mistake");
      in18.current.classList.add("right");
    } else {
      in18.current.classList.add("mistake");
      in18.current.classList.remove("right");
    }
    if (in19.current.value.toLowerCase() == "anxel") {
      in19.current.classList.remove("mistake");
      in19.current.classList.add("right");
    } else {
      in19.current.classList.add("mistake");
      in19.current.classList.remove("right");
    }
    if (in20.current.value.toLowerCase() == "niagara") {
      in20.current.classList.remove("mistake");
      in20.current.classList.add("right");
    } else {
      in20.current.classList.add("mistake");
      in20.current.classList.remove("right");
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
    in11.current.value = "";
    in12.current.value = "";
    in13.current.value = "";
    in14.current.value = "";
    in15.current.value = "";
    in16.current.value = "";
    in17.current.value = "";
    in18.current.value = "";
    in19.current.value = "";
    in20.current.value = "";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <form
            className="hydrosphere-issues__form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
            <div className="hydrosphere-issues__wrapper">
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>1.</span> Eng katta okean
                </p>
                {inputRender(in1)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>2.</span> Eng qadimgi okean
                </p>
                {inputRender(in2)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>3.</span> Eng chuqur okean
                </p>
                {inputRender(in3)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>4.</span> Eng kichik okean
                </p>
                {inputRender(in4)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>5.</span> Eng sovuq okean
                </p>
                {inputRender(in5)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>6.</span> Eng katta dengiz
                </p>
                {inputRender(in6)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>7.</span> Eng chuqur dengiz
                </p>
                {inputRender(in7)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>8.</span> Eng chuchuk dengiz
                </p>
                {inputRender(in8)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>9.</span> Eng sho'r dengiz
                </p>
                {inputRender(in9)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>10.</span> Eng kichik dengiz
                </p>
                {inputRender(in10)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>11.</span> Eng tiniq dengiz
                </p>
                {inputRender(in11)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>12.</span> Eng issiq dengiz
                </p>
                {inputRender(in12)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>13.</span> Eng uzun daryo
                </p>
                {inputRender(in13)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>14.</span> Eng sersuv va katta havzali daryo
                </p>
                {inputRender(in14)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>15.</span> Eng kichik daryo
                </p>
                {inputRender(in15)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>16.</span> Eng katta ko'l
                </p>
                {inputRender(in16)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>17.</span> Eng chuqur ko'l
                </p>
                {inputRender(in17)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>18.</span> Eng sho'r ko'l
                </p>
                {inputRender(in18)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>19.</span> Eng baland sharshara
                </p>
                {inputRender(in19)}
              </div>
              <div className="hydrosphere-issues__box">
                <p className="hydrosphere-issues__text">
                  <span>20.</span> Eng ko'rkam sharshara
                </p>
                {inputRender(in20)}
              </div>
            </div>
            <CheckButton />
          </form>
        </div>
      </section>
    </>
  );
};
