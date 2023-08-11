import { useEffect, useRef } from "react"
import "./SunSystemContinue.scss"
export const SunSystemContinue = () => {
    const inp1 = useRef()
    const inp2 = useRef()
    const inp3 = useRef()
    const inp4 = useRef()
    const inp5 = useRef()


    const inputRender = (refNumber) => {
        return <input className="sun-system-continue-input" type="text" ref={refNumber} placeholder="Javob" />
    }


    const hendelSubmit = () => {
        if(inp1.current.value.toLowerCase() == "oy") {
            inp1.current.classList.remove("mistake")
            inp1.current.classList.add("right")
        }
        else {
            inp1.current.classList.add("mistake")
            inp1.current.classList.remove("right")
        }

        if(inp2.current.value.toLowerCase() == "siderik") {
            inp2.current.classList.remove("mistake")
            inp2.current.classList.add("right")
        }
        else {
            inp2.current.classList.add("mistake")
            inp2.current.classList.remove("right")
        }

        if(inp3.current.value.toLowerCase() == "atmosfera" ) {
            inp3.current.classList.remove("mistake")
            inp3.current.classList.add("right")
        }
        else {
            inp3.current.classList.add("mistake")
            inp3.current.classList.remove("right")
        }

        if(inp4.current.value.toLowerCase() == "mantiya") {
            inp4.current.classList.remove("mistake")
            inp4.current.classList.add("right")
        }
        else {
            inp4.current.classList.add("mistake")
            inp4.current.classList.remove("right")
        }

        if(inp5.current.value.toLowerCase() == "yer") {
            inp5.current.classList.remove("mistake")
            inp5.current.classList.add("right")
        }
        else {
            inp5.current.classList.add("mistake")
            inp5.current.classList.remove("right")
        }
    }

    useEffect(() => {
        inp1.current.value = ""
        inp2.current.value = ""
        inp3.current.value = ""
        inp4.current.value = ""
        inp5.current.value = ""
    }, []);
    return <>
        <section>
            <div className="container">
                <form className="sun-system-continue-from" onSubmit={evt => {
                    evt.preventDefault()
                    hendelSubmit()
                }}>
                    <div className="sun-system-continue-box">
                        <p className="sun-system-continue-text">
                            Yerning tabiiy yo’ldoshi- {inputRender(inp1)} 
                        </p>
                        <p className="sun-system-continue-text">
                            Oyning Yer atrofida aylanish davriga {inputRender(inp2)} oy yoki yulduz oyi deyiladi, u 27,3 sutkaga teng. 
                        </p>
                        <p className="sun-system-continue-text">
                            Oyda {inputRender(inp3)}  ning yo'qligi va kun bilan tunning uzoq vaqt davom etishi natijasida kun bilan tun harorati keskin o'zgaradi va bir-biridan farq qiladi.
                        </p>
                        <p className="sun-system-continue-text">
                            Oy- oy po'sti (55-65 km chuqurlikkacha), {inputRender(inp4)} (1000-1100 km) va yadroga bo'linadi.
                        </p>
                        <p className="sun-system-continue-text">
                            Quyosh, {inputRender(inp5)} va Oy bir chiziqqa tobg‘ri kelganda Oy tutiladi.
                        </p>
                    </div>

                    <button className="sun-system-continue-btn" type="submit">
                        Yuborish
                    </button>
                </form>
            </div>
        </section>
    </>
}
